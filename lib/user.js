import db from "./db";

export function createUser(email, password) {
    const result = db.prepare(`INSERT INTO users (email, password) VALUES (?,?)`).run(email, password);
    return result.lastInsertRowid;
}

export function getUserByEmail(email) {
    return db.prepare(`SELECT * from users WHERE email=?`).get(email)
}