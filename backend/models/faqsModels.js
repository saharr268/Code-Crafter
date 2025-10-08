import db from "../configs/db.js";

export const getAllFaqs = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM faqs
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM faqs
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
    faqData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const faqById = async (id) => {
  const result = await db.query("SELECT * FROM faqs WHERE id = $1", [id]);
  return result.rows[0];
};

export const createFaq = async ({ title, descriptoin }) => {
  const result = await db.query(
    "INSERT INTO faqs (title, descriptoin) VALUES ($1, $2) RETURNING *",
    [title, descriptoin]
  );
  return result.rows[0];
};

export const editFaq = async (id, { title, descriptoin }) => {
  const result = await db.query(
    "UPDATE faqs SET title = $1, descriptoin = $2 WHERE id = $3 RETURNING *",
    [title, descriptoin, id]
  );
  return result.rows[0];
};

export const removeFaq = async (id) => {
  const result = await db.query("DELETE FROM faqs WHERE id = $1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
};
