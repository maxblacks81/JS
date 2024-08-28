// const id = setInterval(() => {}, 1);
// console.log(id);
// clearInterval(id);
// console.log(id);

import sqlite from 'sqlite';

const sqlite = require('sqlite');
const db = new sqlite.Database('exams.sqlite', 
    (err) => {if (err) throw err; });

    const sql = "SELECT * from users";
    db.all(sql, (err,rows) => {
        if (err)
            throw err;
        console.log(rows);
        rows.array.forEach(r => {
            console.log(r.name);
        });
    });
    db.get(sql,);
    db.each(sql,);

    const userId = 3;
    db.get("SELECT * FROM users WHERE id=?", [userId], (err, row) => {
        console.log("USER IS ", row);
    });
    
db.close();