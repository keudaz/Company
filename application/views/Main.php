<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/siteStyle.css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="<?php echo base_url() ?>">Health Care System</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="register">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="logout">Logout</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
<br>
<!-- MAIN (Center website) -->
<div style="padding: 20px">
<div class="box">
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn " onclick="filterSelection('nature')"> Image Identification</button>
  <button class="btn " onclick="filterSelection('cars')"> Information Classification</button>
  <button class="btn " onclick="filterSelection('people')"> Recommendation</button>
</div>

<div >
<form class="example" action="/action_page.php" style="margin:auto;max-width:300px">
  <input type="text" placeholder="Search.." name="search2">
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
</div>
</div>
<!-- Portfolio Gallery Grid -->
<div class="rowz">
    <?php foreach($Recommendation as $row){
        echo '<a href="'.base_url().'disease?id='.$row->id.'">
                  <div class="column people">
                    <div class="content" >
                    <img src="'.base_url().'assets/images/'.$row->image.'" alt="Car" style="width:100%; height: 300px;">
                      <h4>'.$row->name.'</h4>
                      <p>'.$row->description.'</p>
                    </div>
                  </div>
              </a>';
    }?>
<!--  <div class="column nature">-->
<!--    <div class="content">-->
<!--      <img src="--><?php //echo base_url(); ?><!--assets/images/1.jpg" alt="Mountains" style="width:100%; height: 300px;">-->
<!--      <h4>Dry couch</h4>-->
<!--      <p>this is the text..</p>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="column cars">-->
<!--    <div class="content">-->
<!--      <img src="--><?php //echo base_url(); ?><!--assets/images/4.jpg" alt="Car" style="width:100%; height: 300px;">-->
<!--      <h4>Retro</h4>-->
<!--      <p>Lorem ipsum dolor..</p>-->
<!--    </div>-->
<!--  </div>-->
</div>

<!-- END MAIN -->
</div>

<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

</body>
</html>
