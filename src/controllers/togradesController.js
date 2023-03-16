function index(req, res) {
  res.render("top grades/index");
}
function searchTopgrades(req, res) {
  const grade = req.body.grado;
  const asignatura = req.body.asignatura;

  req.getConnection((err, conn) => {
    conn.query(
      `select nombre_est, asignatura, calificacion from calificacion${grade} where asignatura ='${asignatura}' and calificacion>=95`,
      async function (err, data, results) {
        if (err) {
          res.json(err);
        }
        if (data.length === 0) {
          res.send("<h1>NO SE HAN PUBLICADO LOS TOP GRADES</h1>");
        } else {
          const arr = await Object.entries(data[0]);
          const filtered = arr.filter(([key, value]) => key === "asignatura");
          const objS = Object.fromEntries(filtered);
          if (objS.asignatura === "Sociales") {
            res.render("top grades/index", { data });
          }
          if (objS.asignatura === "Lenguaje") {
            res.render("top grades/index", { data });
          }
          if (objS.asignatura === "Matematicas") {
            res.render("top grades/index", { data });
          }
          if (objS.asignatura === "Naturales") {
            res.render("top grades/index", { data });
          }
        }
      }
    );
  });
}

module.exports = {
  index: index,
  searchTopgrades: searchTopgrades,
};
