const jwt=require('jsonwebtoken');
const conn=require('../Models/connection.js');
const bcrypt = require('bcryptjs');

function insertData(){
    return async (req, res) => {
        var data=req.body;
    console.log(data);
    
   var salt = bcrypt.genSaltSync(10);
   var hash = bcrypt.hashSync(data.password, salt);
    
    
    // console.log(hash);
    // console.log(data);
    var queryString = `INSERT INTO "public"."User" ("Name", "EMPID", "Role", "Password", "Created_At", "Updated_At") VALUES ('${data.name}','${data.id}','${data.role}','${hash}','${data.created}','${data.updated}');`
    console.log(queryString);
    conn.query(queryString, function (error, results) {
    
        if(error){
            
            console.log(error);
            res.status(500).send({"success":false,"error":error.detail});
        }else{

            res.status(200).send({"success":true,"results":results});
        }
        //conn.end;
      });
      
}
}
function login(){
    return async (req, res) => {
    var data=req.body;
    console.log(data);
    //var hash = await bcrypt.hash(data.password, saltRounds);
    var queryString=`SELECT "EMPID","Password" FROM "public"."User" WHERE "EMPID"='${data.id}'`;
   
     conn.query(queryString, function (error, results) {
        
        
        if(error){
            
            
            res.status(500).send({"success":false,"error":error.detail});
        }
        else if(results.rows.length==0){
            res.status(404).send({"success":false,"error":"No such entry exist"});
        }
        else{
            var hash=results.rows[0].Password;
        console.log(hash);
        var ans= bcrypt.compareSync(data.password, hash);
        console.log(ans);
        if(ans){
            const token = jwt.sign(                           
                results.rows[0],
                'secret'
            );
            res.status(200).send({success: true,
                token: token,
                data: results.rows[0]
            });
         }
         else{
            res.status(401).send({success:false, error:"Invalid Login.."}); 
         }
           
        }
        
        //conn.end;
      });
    }
}

module.exports={Register:insertData,login:login};