module.exports = function(app)
{
     app.get('/', (req,res)=>{
        res.render('index.ejs')
     });

     app.get('/csatdday', (req,res)=>{
        res.render('csatdday/csat.ejs')
     });
}
