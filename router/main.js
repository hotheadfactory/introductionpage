var mysql = require('mysql');
var dbconfig = require('../config/dbconfig');
var pool = mysql.createPool(dbconfig.connection);

module.exports = function(app)
{
     app.get('/', (req,res)=>{
        res.render('index.ejs')
     });

     app.get('/csatdday', (req,res)=>{
        res.render('csatdday/csat.ejs')
     });

     app.get('/html-story', (req,res)=>{
        pool.getConnection(function (err, connection) {
           var sql = "SELECT * FROM "+dbconfig.html_story_table;
           connection.query(sql, function(err, data) {
            if (err) { console.error("err : " + err);
           } else {
            res.render('html-story/index.ejs', {data:data});
           }
           })
        })

   });
}
