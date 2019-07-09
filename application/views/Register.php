<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="<?php echo base_url(); ?>/public/css/bootstrap.css">
   <!-- <link rel="stylesheet" href="<?php /*echo base_url(); */?>/public/css/styles.css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>Register</title>
</head>
<body>
<div class="container">
    <!-- navigation bar -->
    <nav class="navbar navbar-expand-sm bg-light navbar-light" style="color: #eeeeee">

        <i class="fa fa-book" style="font-size:48px;color:green; margin-right: 10px"></i>

        <a class="navbar-brand .text-success" href="#">Telexar</a>



        <!-- Navigation Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fa fa-sign-in" style="color: green"></i> Register</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-folder-open" style="color: green"></i> Employee</a>
            </li>
        </ul>
    </nav>

    <div class="bg-white" style="margin: 3%; margin-right: 5%; margin-top: 1%">
        <h3>Employee Register Form</h3>
        <form action="register" method="post" class="was-validated" >
            <div class="form-group">
                <label for="name">Employee Name :</label>
                <input type="text" class="form-control" name="name" required>
            </div>
            <div class="form-group">
                <label for="address">Address :</label>
                <textarea class="form-control" name="address" required></textarea>
            </div>
            <div class="form-group">
                <label for="gender">Gender :</label>
                <div class="checkbox">
                    <label><input type="radio" class="form-control" name="gender" value="Male" required>Male</label>
                    <label><input type="radio" class="form-control" name="gender" value="Female" required>Female</label>
                </div>
            </div>
            <div class="form-group">
                <label for="relationship">Relationship Status :</label>
                <select name="relationship" class="browser-default custom-select" required>
                    <option value="">Select Relationship State</option>
                    <option value="Single" >Single</option>
                    <option value="Married" >Married</option>
                </select>
            </div>
            <div class="form-group">
                <label for="skills">Skills</label>
                <div class="checkbox">
                    <label><input type="checkbox" name="css" id="css">CSS</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="html" id="html">HTML</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="javascript" id="javascript">Javascript</label>
                </div>
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" pattern="[0-9]{10}" class="form-control" name="phone" id="phone" required>
            </div>
            <input type="submit" class="btn btn-success">
    </div>
    </form>
</div>

</body>
</html>
