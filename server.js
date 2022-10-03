const express = require ("express");

const app = express ();

app.get("/", function(req, res){
  response.send("<h1>Hello World!</h1>");
});

app.get ("/contact", function(req, res){
  res.send ("Contact me at: tasfiqueshantanu@gmail.com")
});

app.get ("/about", function(req, res){
  res.send ("My name is Tas and I love FOOD, Working out and Coding!!!")
});

app.get ("/hobbies", function(req, res){
  res.send ("<ul><li>Coffee</li><li>Code</li><li>Sweating</li></ul>")
});

app.listen(3000, function(){
  console.log ("Server has started on Port 3000")
});
