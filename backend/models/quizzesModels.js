import db from "../configs/db.js";

export const getAllQuizzes = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM quizzes
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM quizzes
  `;

  let countValues = [];
  let values = [];
  let conditions = [];

  if (keyword) {
    values.push(`%${keyword}%`);
    countValues.push(`%${keyword}%`);
    conditions.push(`(title ILIKE $1)`);
  }

  if (conditions.length > 0) {
    const whereClause = " WHERE " + conditions.join(" AND ");
    query += whereClause;
    countQuery += whereClause;
  }

  const countResult = await db.query(countQuery, countValues);
  const totalCount = parseInt(countResult.rows[0].total, 10);

  const offset = (pageNumber - 1) * pageSize;
  values.push(pageSize, offset);

  query += ` ORDER BY id DESC LIMIT $${values.length - 1} OFFSET $${
    values.length
  }`;
  const dataResult = await db.query(query, values);

  return {
    quizData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const quizById = async (id) => {
  const result = await db.query("SELECT * FROM quizzes WHERE id = $1", [id]);
  return result.rows[0];
};

export const createQuiz = async ({
  lesson_id,
  title,
  description,
  time_limit,
  thumbnail_url,
  question_count,
}) => {
  const result = await db.query(
    "INSERT INTO quizzes (lesson_id,  title,  description,  time_limit,  thumbnail_url,question_count) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [lesson_id, title, description, time_limit, thumbnail_url, question_count]
  );
  return result.rows[0];
};

export const editQuiz = async (
  id,
  { lesson_id, title, description, time_limit, thumbnail_url, question_count }
) => {
  const result = await db.query(
    "UPDATE quizzes SET lesson_id = $1, title = $2, description = $3, time_limit = $4, thumbnail_url = $5, question_count = $6 WHERE id = $6 RETURNING *",
    [
      lesson_id,
      title,
      description,
      time_limit,
      thumbnail_url,
      question_count,

      id,
    ]
  );
  return result.rows[0];
};

export const removeQuiz = async (id) => {
  const result = await db.query(
    "DELETE FROM quizzes WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
