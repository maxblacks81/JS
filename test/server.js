// const id = setInterval(() => {}, 1);
// console.log(id);
// clearInterval(id);
// console.log(id);

const sqlite = require('sqlite');
const db = new sqlite.Database('exams.sqlite', 
    (err) => {if (err) throw err; });

    const sql = "SELECT ...";
    db.all(sql,);
    db.get(sql,);
    db.each(sql,)
db.close();