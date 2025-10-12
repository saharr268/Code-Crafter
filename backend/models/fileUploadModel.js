// models/fileModel.js
import db from "../configs/db.js";

export const saveFileUpload = async (fileData) => {
  const { path, original_name, mime_type, size, folder_name } = fileData;
  const result = await db.query(
    `INSERT INTO uploads (path, original_name, mime_type, size, folder_name)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *;`,
    [path, original_name, mime_type, size, folder_name]
  );
  return result.rows[0];
};
