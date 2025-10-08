import db from "../configs/db.js";

export const getAllQuestionOptions = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM question_options
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM question_options
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
    question_optionData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const question_optionById = async (id) => {
  const result = await db.query(
    "SELECT * FROM question_options WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

export const createQuestionOption = async ({
  question_id,
  option_text,
  is_correct,
}) => {
  const result = await db.query(
    "INSERT INTO question_options (question_id,option_text,is_correct) VALUES ($1, $2, $3) RETURNING *",
    [question_id, option_text, is_correct]
  );
  return result.rows[0];
};

export const editQuestionOption = async (
  id,
  { question_id, option_text, is_correct }
) => {
  const result = await db.query(
    "UPDATE question_options SET question_id = $1, option_text = $2, is_correct = $3 WHERE id = $4 RETURNING *",
    [question_id, option_text, is_correct, id]
  );
  return result.rows[0];
};

export const removeQuestionOption = async (id) => {
  const result = await db.query(
    "DELETE FROM question_options WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
