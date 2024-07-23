const conn = require('./dbconfig');

exports.find = async () => {
    const sql = `SELECT * FROM board`;

    const [rows] = await conn.query(sql);

    return rows;
};

exports.findById = async (id) => {
    const sql = `SELECT * FROM board WHERE id = ?`;

    const [rows] = await conn.query(sql, [id]);

    return rows;
};

exports.save = async(data) => {
    const sql = `INSERT INTO board (title, content) VALUES (?,?)`;
    
    const [rows] = await conn.query(sql, [data.title, data.content]) ;

    return rows;
}

exports.update = async(data, id) => {
    const sql = `UPDATE board SET title = ?, content = ? WHERE id = ?`;
    
    const [rows] = await conn.query(sql, [data.title, data.content, id]) ;

    return rows;
}

exports.delete = async(id) => {
    const sql = `DELETE FROM board WHERE id = ?`;
    
    const [rows] = await conn.query(sql, [id]) ;

    return rows;
}