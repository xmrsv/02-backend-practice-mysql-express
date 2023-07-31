// HTTP Status codes: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
import { pool } from "../database.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees");
    
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500);
  }
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO employees (name, salary) VALUES (?, ?)",
      [name, salary]
    );

    res.send({
      id: rows.insertId,
      name,
      salary,
    });

  } catch (error) {
    return res.status(500);
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employees WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      res.status(404).json({ messaage: "Employee not found" });
    }

    // 204: No content
    res.sendStatus(204);
  } catch (error) {
    return res.send(500);
  }
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );

    if (result.affectedRows == 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    const [rows] = await pool.query("SELECT * FROM employees WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.send(500);
  }
};
