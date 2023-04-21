const db = require('../config/connectDB')
class RoleController {

    index(req,res){
        const sqlSelect = "SELECT * FROM role"
        console.log(db);
        db.query(sqlSelect,(error,result)=>{
            if (error) throw error;
            res.send(result)
        })
    }
}
module.exports = new RoleController;