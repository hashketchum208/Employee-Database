// request a department
app.get('/api/department', (req, res) => {
  const sql = `SELECT id, department_name AS title FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});