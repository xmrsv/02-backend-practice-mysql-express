import { pool } from "../database.js"

export const ping = async (req, res) => {
    const [ result ] = await pool.query('SELECCT "Pong" AS result')
    res.json(result[0])
}