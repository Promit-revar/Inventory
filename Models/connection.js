const {Client}=require('pg');

const conn=new Client({
    host     : 'localhost',
    user     : 'postgres',
    port     :  5433,
    password : 'CaptainZaltan',
    database :  'Inventory'
  });
  conn.connect((err)=> {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected...');
  });
  module.exports=conn;