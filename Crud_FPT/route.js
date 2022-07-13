const express = require('express')
// const router = express()
const Controller = require('./controller')
// const connection = require('./ConnectDB')
// connection.connect(function(err){
//     if(err) throw err
//     console.log('Database connected')
// })
function Route(router){
  router.get('/',Controller.home)
  router.get('/view',Controller.view)
  // router.get('/add',Controller.get_add)
  router.post('/add',Controller.post_add)
  router.get('/delete/:ID',Controller.delete)
  router.get('/update',Controller.get_update)
  router.post('/update',Controller.post_update)
  router.get('/test',Controller.test)
}

 
module.exports = Route









// const connection = require('./ConnectDB')
// connection.connect(function(err){
//     if(err) throw err
//     console.log('Database connected')
// })
    
// function Route(app){
//   app.get('/',(req,res)=>{
//     res.render('home')
//   })
//     app.get('/view',(req, res) => {
//         let sql = "SELECT * FROM personal_infomation.staff";
//         let query = connection.query(sql, (err, results) => {
//           if(err) throw err;
//           res.render('view',{
//             results: results
//           })
//           // console.log(results)
//         })
//       })
//       app.get('/add',(req,res)=>{
//         res.render('add')
//       })
//       app.post('/add',(req,res)=>{
//         let data = {
//           Name: req.body.Name,  
//           Age: req.body.Age, 
//           Sex: req.body.Sex, 
//           Birthday: req.body.Birthday,
//           Email: req.body.Email, 
//           Address: req.body.Address
//         }
//         let sql = "INSERT INTO personal_infomation.staff SET ?"
//         connection.query(sql,data,(err,results)=>{
//             if(err) throw err
//             console.log(results)
//             res.redirect('/add')
//         })
//       })
//       // app.get('/delete',(req,res)=>{
//       //   res.render('delete')
//       // })
//       app.get('/delete/:ID',(req,res)=>{
//         let data = req.params.ID
//         console.log(data)
//         let sql = `DELETE FROM personal_infomation.staff WHERE ID = '${data}'`
//         connection.query(sql,(err,results)=>{
//           if(err) throw err
//           console.log(results)
//           res.redirect('/view')
//         })
//       })
//       app.get('/update',(req,res)=>{
//         res.render('update')
//       })
//       app.post('/update',(req,res)=>{
//         let sql = `UPDATE personal_infomation.staff SET Name='${ req.body.Name}', Age='${req.body.Age}', Sex='${ req.body.Sex}', Birthday='${req.body.Birthday}', Email='${req.body.Email}', Address='${req.body.Address}' WHERE ID=${req.body.ID}`
//         connection.query(sql,(err,result)=>{
//           if(err) throw err
//           console.log(result)
//           res.redirect('/update')
//         })
//       })
// }
// module.exports = Route