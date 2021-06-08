const express = require('express');
const mysql = require('mysql');
const alert = require('alert');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'architg27'
});

con.connect(function(err) {
  con.query("CREATE DATABASE IF NOT EXISTS khanakhazana", function (err, result) {
  });
  con.query("USE khanakhazana", function (err, result) {
  });
 var sql = "CREATE TABLE IF NOT EXISTS user(name VARCHAR(50),no varchar(15),addr varchar(60),restaurant varchar(20))";
  con.query(sql, function (err, result) {});
 var sql1 = "CREATE TABLE IF NOT EXISTS food(no varchar(15),manch varchar(20),fried varchar(20),corn varchar(15),cheese varchar(15),pav varchar(10),masala varchar(15),paneer varchar(15),makh varchar(15), mugh varchar(15),kadai varchar(15), shahi varchar(15),malai varchar(15),aloo varchar(15),roti varchar(15),naan varchar(25))";
  con.query(sql1, function (err, result) {});
});

var random=Math.floor(
  Math.random() * (2345134 - 8979682) + 8979682 
)

var no="0";
app.get('/', function(req, res)  {
    res.render('index.ejs');
});
app.get('/userdetail', function(req, res)  {
    res.render('userdetails.ejs');
});
app.get('/food-items', function(req, res)  {
    res.render('food_items.ejs');
});
app.post('/create',function(req, res)  {
  var name=req.body.name;
  no=req.body.monu;
  var addre=req.body.addr;
  var i=0;
  console.log(name);
  console.log(no);
  console.log(addre); 
  con.query('INSERT INTO user(name ,no,addr,restaurant) VALUES (?,?,?,?)',
  [name,no,addre,i], function(error, results) {
    con.query('INSERT INTO food(no,manch,fried,corn,cheese,pav,masala,paneer,makh,mugh,kadai,shahi,malai,aloo,roti,naan) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [no,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i], function(error, results) {
      res.redirect('/food-items');
    });
  });
});
app.post('/index',function(req, res)  {
  var rest=req.body.restaurant;
  var man=req.body.man;
  var fried=req.body.fried;
  var corn=req.body.corn;
  var cheese=req.body.cheese;
  var bhaji=req.body.bhaji;
  var masala=req.body.masala;
  var paneer=req.body.paneer;
  var makhani=req.body.makhani;
  var mughlai=req.body.mughlai;
  var kadai=req.body.kadai;
  var shahi=req.body.shahi;
  var malai=req.body.malai;
  var gobhi=req.body.gobhi;
  var tanroti=req.body.tanroti;
  var tannaan=req.body.tannaan;
  console.log(rest);
  console.log(man);
  console.log(fried);
  console.log(corn);
  console.log(cheese);
  console.log(bhaji);
  console.log(masala);
  console.log(paneer);
  console.log(makhani);
  console.log(mughlai);
  console.log(kadai);
  console.log(shahi);
  console.log(malai);
  console.log(gobhi);
  console.log(tanroti);
  console.log(tannaan);
  con.query('UPDATE user SET restaurant=? WHERE no=?',
  [rest,no] ,function(error, results) {
    con.query('UPDATE food SET manch=?,fried=?,corn=?,cheese=?,pav=?,masala=?,paneer=?,makh=?,mugh=?,kadai=?,shahi=?,malai=?,aloo=?,roti=?,naan=? WHERE no=?',
    [man,fried,corn,cheese,bhaji,masala,paneer,makhani,mughlai,kadai,shahi,malai,gobhi,tanroti,tannaan,no] ,function(error, results) {
      console.log( random);
      alert("Thanking You! Your order has been placed. \r\n Your order number = " + random);
      res.redirect('/');
    });
  });
});
app.listen(8080);
   