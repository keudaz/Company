<!DOCTYPE html>
<html lang="en">
<head>
    <title>EmployeeList</title>

    <link rel="stylesheet" href="<?php echo base_url(); ?>/public/css/bootstrap.css">
    <!-- <link rel="stylesheet" href="<?php /*echo base_url(); */?>/public/css/styles.css">-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="<?php echo base_url(); ?>/public/js/sweetalert.min.js"></script>
    <script src="<?php echo base_url(); ?>/public/js/validation.js"></script>

</head>
<body>

<div class="container">
    <!-- navigation bar -->
    <nav style="color: gainsboro" class="navbar navbar-expand-sm bg-light navbar-light" >

        <i class="fa fa-book" style="font-size:48px;color:green; margin-right: 10px"></i>

        <a class="navbar-brand .text-success" href="Register">Telexar</a>



        <!-- Navigation Links -->
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="Register">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<i class="fa fa-sign-in" style="color: green"></i> Register</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href=""><i class="fa fa-folder-open" style="color: green"></i> Employee</a>
            </li>
        </ul>
    </nav>

    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Address</th>
                <th>HTML</th>
                <th>CSS</th>
                <th>Javascript</th>
                <th>PHP</th>
                <th>Phone</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
            </thead>
            <tbody>
            <?php foreach($emp as $row){
                echo '
                            <tr>
                                <th scope="row">'.$row->id.'</th>
                                <td>'.$row->name.'</td>
                                <td>'.$row->gender.'</td>
                                <td>'.$row->relationship.'</td>
                                <td>'.$row->address.'</td>';

                if ($row->css==1){
                    echo '<td>&#10003;</td>';
                }else{
                    echo '<td>&#10007;</td>';
                }

                if ($row->html==1){
                    echo '<td>&#10003;</td>';
                }else{
                    echo '<td>&#10007;</td>';
                }

                if ($row->javascript==1){
                    echo '<td>&#10003;</td>';
                }else{
                    echo '<td>&#10007;</td>';
                }
                if ($row->php==1){
                    echo '<td>&#10003;</td>';
                }else{
                    echo '<td>&#10007;</td>';
                }

                echo '<td>'.$row->phone.'</td>

                            <td><input type="button" class="btn btn-outline-success" id="'.$row->id.'" value="Edit" onclick="changeRow(this)"></td>
                            <td><input type="button" class="btn btn-outline-danger" id="'.$row->id.'" value="Delete" onclick="deleteRow(this)"></td>';
            }?>

            </tbody>
        </table>
    </div>

</div>

<div style="display: none;">
    <form action="" method="post" id="change_form">
        <input type="text" name="change_id" id="change_id">
    </form>
</div>

<div style="display: none;">
    <form action="EmployeeList" method="post" id="delete_form">
        <input type="text" name="delete_id" id="delete_id">
    </form>
</div>

</body>
</html>
<script>
    function deleteRow(id) {
        var id = id.id;

        document.getElementById("delete_id").value = id;

        return changeConfirm();
    }

    function changeRow(id) {
        var id = id.id;

        document.getElementById("change_id").value = id;

        document.getElementById("change_form").submit();
    }

    function changeConfirm() {
        swal({
            title: "Are You Sure?",
            text: "If You Want Delete This!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    document.getElementById("delete_form").submit();
                }
            });
        return false;
    }

</script>
<script>

    window.onload = function(e){
        var x="<?php if(isset($_SESSION['success'])){ echo $_SESSION['success'];}?>";
        if("1"==x){
            swal("Successful!", "Edit Successful!", "success");
            <?php $this->session->set_flashdata("success",null); ?>
        }else if("2"==x){
            swal("Successful!", "Delete Successful!", "success");
            <?php $this->session->set_flashdata("success",null); ?>
        }

        var y="<?php if(isset($_SESSION['error'])){ echo $_SESSION['error'];}?>";

        if("1"==y){
            showErrorMsg("This NIC Number Already Exists !");
            <?php $this->session->set_flashdata("error",null); ?>
        }
    }

</script>