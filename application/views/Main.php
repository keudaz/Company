<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/siteStyle.css">
</head>
<body>

<!-- MAIN (Center website) -->
<div class="">
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
<div class="row">
    <?php foreach($Recommendation as $row){
        echo '<a href="'.base_url().'disease?id='.$row->id.'">
                  <div class="column people">
                    <div class="content">
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
