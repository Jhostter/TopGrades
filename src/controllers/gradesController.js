function index(req, res) {
      res.render("grades/index");
}

function searchGrades(req, res) {
  const grade = req.body.filterGrade;
  const area = req.body.filterArea;
  const matricula =  req.body.matricula

  req.getConnection((err, conn) => {
    conn.query(
      `select * from calificacion${grade} where matricula = '${matricula}' and area='${area}' and grado='${grade}'`,
      (err, grades) => {
        if (err) {
          res.json(err);
        }

        const nombre = grades[0].nombre_est

        res.render("grades/index", { grades, nombre });
      }
    );
  });
}


module.exports = {
  index: index,
  searchGrades: searchGrades,
};
