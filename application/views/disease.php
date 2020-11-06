<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/css/style_new.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.0/jquery.validate.js"></script>
    <style type="text/css">
        .my-error-class {
            color:red;
        }
        .my-valid-class {
            color:green;
        }
    </style>
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

<!-- MAIN (Center website) -->
<div style="padding: 20px">
<?php foreach ($disease as $row) {
    echo '
            <div class="">
                <div class="box">
                    <div id="myBtnContainer" class="test2">
                      <button class="btn active" >                   ' . $row->name . '                   </button>
                    </div>
                
                </div>
                <!-- Portfolio Gallery Grid -->
                <div class="row">
                  <div class="test">
                    <div class="content2">
                      <img src="' . base_url() . 'assets/images/' . $row->image_1 . '" alt="Mountains" style="width:100%;max-height: 400px;min-height: 400px">
                        <br>
                        <br>
                      <div class="w3-light-grey w3-round-xlarge">
                        <div class="w3-container w3-blue w3-round-xlarge" style="width:' . $row->pro_1 . '%">' . $row->pro_1 . '%</div>
                      </div>
                      <h2>' . $row->name . '</h2>
                      <div class="card">  
                            <div class="cinside" >
                            <h4 >' . $row->plant . '</h4> 
                            </div>    
                      </div>
                      <h2>SCIENTIFIC NAME</h2>
                      <div class="card">  
                            <div class="cinside" >
                            <h4 >' . $row->scientific . '</h4> 
                            </div>    
                      </div>
                      <h2>SCENTIMENT SCORE</h2>
                      <div class="card">  
                
                            <h4 >' . $row->scentiment . '</h4> 
                 
                      </div>
                  <br>
                    <form id="form1">
                      <div class="form-group row">
                        <input type="text" name="comment" class="form-control" style="width: 85%" placeholder="Enter Comment">
                        <button type="submit" style="margin-left: 10px" class="btn btn-primary">Submit</button>
                      </div>
                    </form>';
} ?>

<?php foreach ($comment as $row) {
    if ($row->type==1) {
        echo '<div class="row">
        <div class="panel panel-default widget col-12">
            <div class="panel-heading">
                <span class="glyphicon glyphicon-comment"></span>
                <h3 class="panel-title">
                    Recent Comments</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-xs-2 col-md-1">
                                <img src="'.base_url().'/image/user.png" style="width: 100px" class="img-circle img-responsive" alt="" /></div>
                            <div class="col-xs-1 col-md-11">
                                <div>
                                    <div class="mic-info">
                                        By: <a href="#">'.$row->fname.' '.$row->lname.'</a> on '.$row->c_date.'
                                    </div>
                                </div>
                                <div class="comment-text">
                                    '.$row->comment.'
                                </div>';
        if($row->email==$_SESSION['email']){
            echo '<div class="action">
                                    <button type="button" class="btn btn-danger btn-xs" title="Delete" onclick="delete_comment('.$row->c_id.')">
                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </div>';
        } echo '
                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>';
    }
} ?>
                      <br>
                        <br>
                    </div>
                </div>

<?php foreach ($disease as $row) {
    echo '<div class="test">
                <div class="content2">
                <img src="' . base_url() . 'assets/images/' . $row->image_2 . '" alt="Nature" style="width:100%; height: 400px;">
                    <br>
                    <br>
                  <div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-container w3-blue w3-round-xlarge" style="width:' . $row->pro_2 . '%">' . $row->pro_2 . '%</div>
                  </div>
                  <h2>' . $row->name . '</h2>
                  <div class="card">  
                        <div class="cinside" >
                        <h4 >' . $row->plant_1 . '</h4> 
                        </div>    
                  </div>
                  <h2>SCIENTIFIC NAME</h2>
                  <div class="card">  
                        <div class="cinside" >
                        <h4 >' . $row->scientific_1 . '</h4> 
                        </div>    
                  </div>
                  <h2>SCENTIMENT SCORE</h2>
                  <div class="card">  
            
                        <h4 >' . $row->scentiment_1 . '</h4> 
             
                  </div>
                  <br>
                    <form id="form2">
                      <div class="form-group row">
                        <input type="text" name="comment" class="form-control" style="width: 85%" placeholder="Enter Comment">
                        <button type="submit" style="margin-left: 10px" class="btn btn-primary">Submit</button>
                      </div>
                    </form>';
} ?>

<?php foreach ($comment as $row) {
    if ($row->type==2) {
        echo '<div class="row">
        <div class="panel panel-default widget col-12">
            <div class="panel-heading">
                <span class="glyphicon glyphicon-comment"></span>
                <h3 class="panel-title">
                    Recent Comments</h3>
            </div>
            <div class="panel-body">
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="row">
                            <div class="col-xs-2 col-md-1">
                                <img src="'.base_url().'/image/user.png" style="width: 100px" class="img-circle img-responsive" alt="" /></div>
                            <div class="col-xs-1 col-md-11">
                                <div>
                                    <div class="mic-info">
                                        By: <a href="#">'.$row->fname.' '.$row->lname.'</a> on '.$row->c_date.'
                                    </div>
                                </div>
                                <div class="comment-text">
                                    '.$row->comment.'
                                </div>';
        if($row->email==$_SESSION['email']){
            echo '<div class="action">
                                    <button type="button" class="btn btn-danger btn-xs" title="Delete" onclick="delete_comment('.$row->c_id.')">
                                        <i class="fa fa-trash-o" aria-hidden="true"></i>
                                    </button>
                                </div>';
        } echo '
                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>';
    }
} ?>
                  <br>
                    <br>
                </div>
              </div>
              
            
            <!-- END GRID -->
            </div>
            
            <!-- END MAIN -->
            </div>

</div>
</body>
</html>
<script>

    function delete_comment(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: "POST",
                    url: "<?php echo base_url('delete_comment') ?>",
                    data: {'id': id},
                    dataType: "json",
                    success: function (data) {
                        Swal.fire(
                            'Deleted!',
                            'Your comment has been deleted.',
                            'success'
                        );
                        location.reload();
                    },
                    failure: function (errMsg) {
                        alert('Error');
                    }
                });
            }
        });
    }

    $(document).ready(function () {

        $("#form1").validate({
            errorClass: "my-error-class",
            validClass: "my-valid-class",
            rules: {
                comment: {
                    required: true
                }
            },
            messages: {
                comment: {
                    required: "Comment Required!"
                }
            },
            submitHandler: function () {
                var form_data = new FormData($('#form1')[0]);

                $.ajax({
                    type: "POST",
                    url: "<?php echo base_url('comment_1');?>",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        if (data == "success") {
                            $("#form1")[0].reset();
                            Swal.fire({
                                icon: 'success',
                                title: 'Successful!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Please Login!'
                            });
                        }
                    },
                    failure: function (errMsg) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Connection Error!'
                        });
                    }
                });
            }
        });

        $("#form1").submit(function (e) {
            e.preventDefault();
        });

        $("#form2").validate({
            errorClass: "my-error-class",
            validClass: "my-valid-class",
            rules: {
                comment: {
                    required: true
                }
            },
            messages: {
                comment: {
                    required: "Comment Required!"
                }
            },
            submitHandler: function () {
                var form_data = new FormData($('#form2')[0]);

                $.ajax({
                    type: "POST",
                    url: "<?php echo base_url('comment_2');?>",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        if (data == "success") {
                            $("#form2")[0].reset();
                            Swal.fire({
                                icon: 'success',
                                title: 'Successful!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Please Login!'
                            });
                        }
                    },
                    failure: function (errMsg) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Connection Error!'
                        });
                    }
                });
            }
        });

        $("#form2").submit(function (e) {
            e.preventDefault();
        });
    });
</script>
