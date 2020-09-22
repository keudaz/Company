base_url = base_url(); //'http://192.168.0.212/MOHE/';
site_url = base_url + 'index.php';

$(document).ready(function () {

    $("#login-form").validate({
        rules: {
            username: {
                required: true
            }
        },
        messages: {
            username: {
                required: "Name Required"
            }
        },
        submitHandler: function (form) {
            $('#message').html('<div class="content-box-content"><div>Please Wait...</div></div>');

            $.post(site_url + '/login/authenticateUser', $("#login-form").serialize(), function (msg) {
			//alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');

                if (messageType == 'success') {
                    window.location = site_url + '/login';
                }
            });
        }
    });

});



    $("#add-category-form").validate({
        rules: {
			
			catno: {
                required: true
            },
            categoryname: {
                required: true
            },
            categoryslug:{
                required: true
            }
        },
        messages: {
            categoryname: {
                required: "Category name required"
            },
            categoryslug: {
                required: "Category slug required"
            }
        },
        submitHandler: function (form) {

            $.post(site_url + '/category/addCategory', $("#add-category-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');

            });
        }
    });
    $("#edit-user-form").validate({
        rules: {
            name: "required",
            email:"required",
            usergroup:"required"
        },
        messages: {
            name: "Please select a category",
            email: "Please select an add type",
            usergroup:"Ad title required"
        },
        submitHandler: function (form) {

            $.post(site_url + '/user/editUser', $("#edit-user-form").serialize(), function (msg) {
                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');

            });
        }
    });


