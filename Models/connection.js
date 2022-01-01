const {Client}=require('pg');
const config=require('config');  
const conn=new Client({
    host     : 'localhost',
    user     : config.get('Database.usrname'),
    port     :  config.get('Database.port'),
    password : config.get('Database.password'),
    database :  config.get('Database.name')
  });
  conn.connect((err)=> {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected...');
  });
  module.exports=conn;