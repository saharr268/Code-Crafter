import db from "../configs/db.js";

export const getAllQuestions = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM questions
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM questions
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
    questionData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const questionById = async (id) => {
  const result = await db.query("SELECT * FROM questions WHERE id = $1", [id]);
  return result.rows[0];
};

export const createQuestion = async ({
  quiz_id,
  question_text,
  question_type,
  correct_answer,
}) => {
  const result = await db.query(
    "INSERT INTO questions (quiz_id,question_text,question_type, correct_answer) VALUES ($1, $2, $3, $4) RETURNING *",
    [quiz_id, question_text, question_type, correct_answer]
  );
  return result.rows[0];
};

export const editQuestion = async (
  id,
  { quiz_id, question_text, question_type, correct_answer }
) => {
  const result = await db.query(
    "UPDATE questions SET quiz_id = $1, question_text = $2, question_type = $3, correct_answer = $4  WHERE id = $5 RETURNING *",
    [quiz_id, question_text, question_type, correct_answer, id]
  );
  return result.rows[0];
};

export const removeQuestion = async (id) => {
  const result = await db.query(
    "DELETE FROM questions WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
