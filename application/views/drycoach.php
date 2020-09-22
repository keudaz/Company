<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

/* Center website */
.main {
  max-width: 1000px;
  margin: auto;
}

h1 {
  font-size: 50px;
  word-break: break-all;
}

.row {
  margin: 10px -16px;
  algin-item: "center";
}

/* Add padding BETWEEN each column */
.row,
.row > .column {
  padding: 8px;
}

/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
  display: none; /* Hide all elements by default */
}

/* Clear floats after rows */ 
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Content */
.content {
  background-color: white;
  padding: 10px;
  height: 500px;

}
.content2 {  
  background-color: white;
  justify-content: center;
  padding: 10px;
  height: 500px;
  align-items: center;
  text-align: center;
}

.test{
    float: left;
    height: 80%;
    width: 32%;
    margin: 8px;  
}
.test2{
    float: left;
    width: 25%;
    margin: 10px;  
}
/* The "show" class is added to the filtered elements */
.show {
  display: block;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
form.example input[type=text] {
  padding: 8px;
  font-size: 15px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

form.example button {
  float: left;
  width: 20%;
  padding: 8px;
  background: #2196F3;
  color: white;
  font-size: 15px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

form.example::after {
  content: "";
  clear: both;
  display: table;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.box {
  display: flex;
  justify-content: space-between;
}
.card{
    width: 60%;
    height: 40px;
    margin-left: 20%;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    text-align: center;
    background-color: white;
    box-shadow: 1px 1px 1px 1px grey;
}
.cinside{   
    vertical-align: middle;
    text-align: middle;
    margin-top: -5px;
}

</style>
</head>
<body>

<!-- MAIN (Center website) -->
<div class="">
<div class="box">
<div id="myBtnContainer" class="test2">
  <button class="btn active" > &nbsp;&nbsp; &nbsp;&nbsp; DRY COACH &nbsp;&nbsp; &nbsp;&nbsp;   </button>
</div>
<div>

</div>
</div>
<!-- Portfolio Gallery Grid -->
<div class="row">
  <div class="test">
    <div class="content">
      <img src="<?php echo base_url(); ?>assets/images/1.jpg" alt="Mountains" style="width:100%; height: 400px;">
      <h4>Dry couch</h4>
      <p>this is the text..</p>
    </div>
  </div>
  <div class="test">
    <div class="content2">
        <br>
        <br>
      <h2>PLANT NAME</h2>
      <div class="card">  
            <div class="cinside" >
            <h4 >කතුරුමුරුංගා</h4> 
            </div>    
      </div>
      <h2>SCIENTIFIC NAME</h2>
      <div class="card">  
            <div class="cinside" >
            <h4 >sesbaniya grandiflora</h4> 
            </div>    
      </div>
      <h2>SCENTIMENT SCORE</h2>
      <div class="card">  

            <h4 >8.6</h4> 
 
      </div>
    </div>
  </div>
  <div class="test">
    <div class="content">
    <img src="<?php echo base_url(); ?>assets/images/3.jpg" alt="Nature" style="width:100%; height: 400px;">
      <h4>Gastritis</h4>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
  

<!-- END GRID -->
</div>

<!-- END MAIN -->
</div>

</body>
</html>
