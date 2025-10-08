import db from "../configs/db.js";

export const getAllLessons = async ({
  pageNumber = 1,
  pageSize = 10,
  keyword,
}) => {
  let query = `
    SELECT * 
    FROM lessons
  `;
  let countQuery = `
    SELECT COUNT(*) AS total
    FROM lessons
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
    lessonData: dataResult.rows,
    totalCount,
    totalPages: Math.ceil(totalCount / pageSize),
  };
};

export const lessonById = async (id) => {
  const result = await db.query("SELECT * FROM lessons WHERE id = $1", [id]);
  return result.rows[0];
};

export const createLesson = async ({
  content,
  short_description,
  thumbnail_url,
  video_url,
  pdf_url,
  file_url,
  updated_at,
}) => {
  const result = await db.query(
    "INSERT INTO lessons (content,short_description,thumbnail_url,video_url,pdf_url,file_url,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
    [
      content,
      short_description,
      thumbnail_url,
      video_url,
      pdf_url,
      file_url,
      updated_at,
    ]
  );
  return result.rows[0];
};

export const editLesson = async (
  id,
  { content, short_description, thumbnail_url, video_url, pdf_url, file_url }
) => {
  const result = await db.query(
    "UPDATE lessons SET content = $1, short_description = $2,thumbnail_url = $3, video_url = $4, pdf_url = $5, file_url = $6, updated_at = NOW() WHERE id = $7 RETURNING *",
    [
      content,
      short_description,
      thumbnail_url,
      video_url,
      pdf_url,
      file_url,
      id,
    ]
  );
  return result.rows[0];
};

export const removeLesson = async (id) => {
  const result = await db.query(
    "DELETE FROM lessons WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
