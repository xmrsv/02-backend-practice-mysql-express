import { Router } from "express";
import {
  getEmployees,
  getEmployee,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

// GET
router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployee);

// POST
router.post("/employees", createEmployees);

// PATCH
router.patch("/employees/:id", updateEmployees);

// DELETE
router.delete("/employees/:id", deleteEmployees);

export default router;
