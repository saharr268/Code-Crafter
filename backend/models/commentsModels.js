import db from "../configs/db.js";

export const getAllComments = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM comments
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM comments
  `;

  let countValues = [];
  let values = [];
  let conditions = [];

  if (keyword) {
    values.push(`%${keyword}%`);
    countValues.push(`%${keyword}%`);
    conditions.push(`(comment_text ILIKE $1)`);
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
    commentData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const commentById = async (id) => {
  const result = await db.query("SELECT * FROM comments WHERE id = $1", [id]);
  return result.rows[0];
};

export const createComment = async ({
  rate,
  lesson_id,
  created_at,
  is_accepted,
  comment_text,
}) => {
  const result = await db.query(
    "INSERT INTO comments (comment_text, rate, lesson_id, is_accepted) VALUES ($1, $2, $3, $4) RETURNING *",
    [comment_text, rate, lesson_id, is_accepted]
  );
  return result.rows[0];
};

export const editComment = async (
  id,
  { comment_text, rate, lesson_id, is_accepted }
) => {
  const result = await db.query(
    "UPDATE comments SET comment_text = $1, rate = $2, lesson_id = $3, is_accepted = $4 WHERE id = $5 RETURNING *",
    [comment_text, rate, lesson_id, is_accepted, id]
  );
  return result.rows[0];
};

export const removeComment = async (id) => {
  const result = await db.query(
    "DELETE FROM comments WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
