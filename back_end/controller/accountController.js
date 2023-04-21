const db = require('../config/connectDB')
class AccountController {

    index(req,res){
        const sqlSelect = "SELECT * FROM account"
        console.log(db);
        db.query(sqlSelect,(error,result)=>{
            if (error) throw error;
            res.send(result)
        })
    }

    register(req,res){
        const sqlInsert = "INSERT INTO account (PhoneNumber, Password, RoleName) VALUES (?, ?, ?)"
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName
        db.query(sqlInsert,[PhoneNumber, Password, RoleName],(error,result)=>{
            if (error) throw error;  
            res.send(result)
        })
    }

    update(req,res){
        const sqlPut = 'UPDATE Account Set PhoneNumber=?, Password=?, RoleName=?'
        const PhoneNumber = req.body.PhoneNumber;
        const Password = req.body.Password;
        const RoleName = req.body.RoleName;
        db.query(sqlPut,[PhoneNumber, Password, RoleName],(error,result)=>{
            if(error) throw error;
            res.send(result)
        })
    }

    delete(req,res){
        const sqlDelete = 'DELETE FROM Account WHERE PhoneNumber = ?'
        const PhoneNumber = req.params.PhoneNumber;
        db.query(sqlDelete,[PhoneNumber],(error,result)=>{
            if(error) throw error;
            res.send(result)
        })
    }
}
module.exports = new AccountController;