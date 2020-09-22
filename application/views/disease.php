<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/style_new.css">
</head>
<body>

<!-- MAIN (Center website) -->
<?php foreach($disease as $row){
    echo '
            <div class="">
            <div class="box">
            <div id="myBtnContainer" class="test2">
              <button class="btn active" >                   '.$row->name.'                   </button>
            </div>
            <div>
            
            </div>
            </div>
            <!-- Portfolio Gallery Grid -->
            <div class="row">
              <div class="test">
                <div class="content">
                  <img src="'.base_url().'assets/images/'.$row->image_1.'" alt="Mountains" style="width:100%; height: 400px;">
                </div>
              </div>
              <div class="test">
                <div class="content2">
                    <br>
                    <br>
                  <h2>'.$row->name.'</h2>
                  <div class="card">  
                        <div class="cinside" >
                        <h4 >'.$row->plant.'</h4> 
                        </div>    
                  </div>
                  <h2>SCIENTIFIC NAME</h2>
                  <div class="card">  
                        <div class="cinside" >
                        <h4 >'.$row->scientific.'</h4> 
                        </div>    
                  </div>
                  <h2>SCENTIMENT SCORE</h2>
                  <div class="card">  
            
                        <h4 >'.$row->scentiment.'</h4> 
             
                  </div>
                </div>
              </div>
              <div class="test">
                <div class="content">
                <img src="'.base_url().'assets/images/'.$row->image_1.'" alt="Nature" style="width:100%; height: 400px;">
                </div>
              </div>
              
            
            <!-- END GRID -->
            </div>
            
            <!-- END MAIN -->
            </div>';
}?>

</body>
</html>
