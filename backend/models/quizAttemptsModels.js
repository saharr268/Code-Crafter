import db from "../configs/db.js";

export const getAllQuizAttempts = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM quiz_attempts
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM quiz_attempts
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
    quiz_attemptData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const quizAttemptById = async (id) => {
  const result = await db.query("SELECT * FROM quiz_attempts WHERE id = $1", [
    id,
  ]);
  return result.rows[0];
};

export const createQuizAttempt = async ({
  quiz_id,
  score,
  duration_seconds,
  started_at,
  ended_at,
}) => {
  const result = await db.query(
    "INSERT INTO quiz_attempts (quiz_id, score, duration_seconds, started_at, ended_at) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [quiz_id, score, duration_seconds, started_at, ended_at]
  );
  return result.rows[0];
};

export const editQuizAttempt = async (
  id,
  { quiz_id, score, duration_seconds, started_at, ended_at }
) => {
  const result = await db.query(
    "UPDATE quiz_attempts SET quiz_id = $1, score = $2, duration_seconds = $3, started_at = $4, ended_at = $5  WHERE id = $6 RETURNING *",
    [quiz_id, score, duration_seconds, started_at, ended_at, id]
  );
  return result.rows[0];
};

export const removeQuizAttempt = async (id) => {
  const result = await db.query(
    "DELETE FROM quiz_attempts WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
