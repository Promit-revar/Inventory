const {Client}=require('pg');
const config=require('config');  
const conn=new Client({
    host     : 'localhost',
    user     : config.get('Database.username'),
    port     :  config.get('Database.port'),
    password : config.get('Database.password'),
    database :  config.get('Database.name')
  });
  conn.connect((error)=> {
    if (error) {
      console.error('error connecting: ' + error.stack);
      return;
    }
   
    console.log('connected...');
  });
  module.exports=conn;