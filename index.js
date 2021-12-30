
const route=require('./Routes/Routes.js');
const conn=require('./Models/connection.js');

route.listen(8000,e=>{
    console.log("Server started on port 8000!");
});