<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

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
<br>
<!-- MAIN (Center website) -->

<div class="container">

    <br>
    <p></p>
    <main class="login-form">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form id="register">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">First Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="fname" class="form-control" name="fname">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">Last Name</label>
                                <div class="col-md-6">
                                    <input type="text" id="lname" class="form-control" name="lname">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input type="text" id="email" class="form-control" name="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6">
                                    <input type="password" id="cpassword" class="form-control" name="cpassword">
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-dark">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>

</body>
</html>
<script>

    $(document).ready(function () {

        $("#register").validate({
            errorClass: "my-error-class",
            validClass: "my-valid-class",
            rules: {
                fname: "required",
                lname: "required",
                email: {
                    email: true,
                    required: true
                },
                password: "required",
                cpassword: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                fname: "First Name Required!",
                lname: "Last Name Required!",
                email: {
                    email: "Invalid email!",
                    required: "Email Required!"
                },
                password: "Password Required!",
                cpassword: {
                    required: "Confirm Password Required!",
                    equalTo: "Password & Confirm Password not equal!"
                }
            },
            submitHandler: function () {
                var form_data = new FormData($('#register')[0]);

                $.ajax({
                    type: "POST",
                    url: '<?php echo base_url("register_data"); ?>',
                    data: form_data,
                    processData: false,
                    contentType: false,
                    success: function(data){
                        if(data=="success"){
                            swal("Success!", "Your Account Has Been Registered. You Can Login Now!", "success");
                            $('#fname').val("");
                            $('#lname').val("");
                            $('#email').val("");
                            $('#password').val("");
                            $('#cpassword').val("");
                        }else if(data=="error"){
                            swal({
                                title: "Error",
                                text: "This Email is Already Exists!",
                                icon: "warning",
                                dangerMode: true,
                            });
                            $('#email').val("");
                        }
                    },
                    failure: function(errMsg) {
                        swal({
                            title: "Error",
                            text: "Connection Error!",
                            icon: "warning",
                            dangerMode: true,
                        });
                    }
                });
            }
        });

        $("#register").submit(function(e) {
            e.preventDefault();
        });

    });

</script>
