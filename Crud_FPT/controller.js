const connection = require('./ConnectDB')

module.exports = {
    home: (req,res)=>{
        res.render('home')
    },
    view: (req,res)=>{
        let sql = "SELECT * FROM personal_infomation.staff";
        let query = connection.query(sql, (err, results) => {
          if(err) throw err;
          res.render('test',{
            results: results
          })
        //   console.log(results)
        })
    },
    get_add: (req,res)=>{
        res.render('add')
    },
    post_add: (req,res)=>{
        let data = {
            Name: req.body.Name,  
            Age: req.body.Age, 
            Sex: req.body.Sex, 
            Birthday: req.body.Birthday,
            Email: req.body.Email, 
            Address: req.body.Address
        }
        let sql = "INSERT INTO personal_infomation.staff SET ?"
        connection.query(sql,data,(err,results)=>{
            if(err) throw err
            console.log(results)
            res.redirect('/view')
        })
    },
    delete: (req,res)=>{
        let data = req.params.ID
        console.log(data)
        let sql = `DELETE FROM personal_infomation.staff WHERE ID = '${data}'`
        connection.query(sql,(err,results)=>{
          if(err) throw err
          console.log(results)
          res.redirect('/view')
        })
    },
    get_update: (req,res)=>{
        res.render('update')
    },
    post_update: (req,res)=>{
        let sql = `UPDATE personal_infomation.staff SET Name='${ req.body.Name}', Age='${req.body.Age}', Sex='${ req.body.Sex}', Birthday='${req.body.Birthday}', Email='${req.body.Email}', Address='${req.body.Address}' WHERE ID=${req.body.ID}`
        connection.query(sql,(err,result)=>{
          if(err) throw err
          console.log(result)
          res.redirect('/view')
        })
    },
    test: (req,res)=>{
        res.render('test')
    }
}