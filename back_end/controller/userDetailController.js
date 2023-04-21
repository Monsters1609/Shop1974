const db = require('../config/connectDB')
class UserDetailController {

    index(req,res){
        const sqlSelect = "SELECT * FROM userdetail"
        console.log(db);
        db.query(sqlSelect,(error,result)=>{
            if (error) throw error;
            res.send(result)
        })
    }

    addUser(req,res){
        const sqlInsert = "INSERT INTO userdetail (Username, YearOfBirth, Gender, Email, PhoneNumber, Address, Img_User) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const Username = req.body.Username;
        const YearOfBirth = req.body.YearOfBirth;
        const Gender = req.body.Gender;
        const Email = req.body.Email;
        const PhoneNumber = req.body.PhoneNumber;
        const Address = req.body.Address;
        const Img_User = req.body.Img_User;
        db.query(sqlInsert,[Username, YearOfBirth, Gender, Email, PhoneNumber, Address, Img_User],(error,result)=>{
            if (error) throw error;  
            res.send(result)
        })
    }

    // update(req,res){
    //     const sqlPut = 'UPDATE Account Set PhoneNumber=?, Password=?, RoleName=?'
    //     const PhoneNumber = req.body.PhoneNumber;
    //     const Password = req.body.Password;
    //     const RoleName = req.body.RoleName;
    //     db.query(sqlPut,[PhoneNumber, Password, RoleName],(error,result)=>{
    //         if(error) throw error;
    //         res.send(result)
    //     })
    // }

    // delete(req,res){
    //     const sqlDelete = 'DELETE FROM Account WHERE PhoneNumber = ?'
    //     const PhoneNumber = req.params.PhoneNumber;
    //     db.query(sqlDelete,[PhoneNumber],(error,result)=>{
    //         if(error) throw error;
    //         res.send(result)
    //     })
    // }
}
module.exports = new UserDetailController;