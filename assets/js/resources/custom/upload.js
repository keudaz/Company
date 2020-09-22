base_url = 'http://sliit.lk/betaonlinepayment/admin/';
site_url = base_url + 'index.php';

$(document).ready(function (){

//Upload Image
    var btnUpload = $('#upload-image');
    var status = $('#status-image');
    new AjaxUpload(btnUpload, {
 

        action:site_url + '/category/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage").html("<img src='loader.gif' />");
            
        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImage()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename").val(filename);
                $("#imagethumbname").val(thumbname);
                $("#upload-image").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-image').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-two');
    var status = $('#status-image-two');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-two").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-two').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageTwo()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-two").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-two").val(filename);
                $("#imagethumbname-two").val(thumbname);
                $("#upload-image-two").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-image').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-three');
    var status = $('#status-image-three');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-three").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-three').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageThree()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-three").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-three").val(filename);
                $("#imagethumbname-three").val(thumbname);
                $("#upload-image-three").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-image').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-four');
    var status = $('#status-image-four');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-three").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-four').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageFour()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-four").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-four").val(filename);
                $("#imagethumbname-four").val(thumbname);
                $("#upload-image-four").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-four').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-five');
    var status = $('#status-image-five');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-five").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-five').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageFive()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-five").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-five").val(filename);
                $("#imagethumbname-five").val(thumbname);
                $("#upload-image-five").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-five').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });


    var btnUpload = $('#upload-image-six');
    var status = $('#status-image-six');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-six").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-six').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageSix()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-six").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-six").val(filename);
                $("#imagethumbname-six").val(thumbname);
                $("#upload-image-six").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-six').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-seven');
    var status = $('#status-image-seven');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-seven").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-seven').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageSeven()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-seven").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-seven").val(filename);
                $("#imagethumbname-seven").val(thumbname);
                $("#upload-image-seven").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-seven').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });

    var btnUpload = $('#upload-image-eight');
    var status = $('#status-image-eight');
    new AjaxUpload(btnUpload, {


        action:site_url + '/adtype/uploadImage',
        name:'uploadfile',
        onSubmit:function (file, ext) {
            if (!(ext && /^(jpg|png|jpeg|gif)$/.test(ext))) {
                // extension is not allowed
                status.text('Only JPG, PNG or GIF files are allowed');
                return false;
            }
            //status.text('Uploading...Please wait');
            $("#uimage-eight").html("<img src='loader.gif' />");

        },
        onComplete:function (file, response) {
            //On completion clear the status
            //status.text('');

            //Add uploaded file to list
            if (response != "error") {
                $('<li></li>').appendTo('#files-image-eight').html(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUploadImageEight()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('imageUploadSuccess');
                //alert(response);

                var thumbname = response.split('####')[0];
                var filename = response.split('####')[1];

                $("#image_thumb-eight").html('<img src="' + base_url + 'template/uploads/thumbs/' + thumbname +'"/>');
                $("#imagename-eight").val(filename);
                $("#imagethumbname-eight").val(thumbname);
                $("#upload-image-eight").fadeOut();


            } else {
                $('<li></li>').appendTo('#files-eight').text(file + '&nbsp;&nbsp;&nbsp;<img onclick = "removeUpload()" src="' + base_url + 'template/resources/images/icons/cross_grey_small.png"/>').addClass('error');
            }
        }
    });




});

function removeUploadImage(){

    var thumbName = $("#imagethumbname").val();
	//alert(thumbName);
    var imageName = $("#imagename").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;
//alert(dataURL);
    $.ajax({
        type:"post",
        url: site_url + '/category/deletefile',
        data:dataURL,
        success:function(msg) {
		
            if(msg=='1'){
                $("#image_thumb").html('');
                $("#files-image").html('');
                $("#upload-image").fadeIn();
            }
        }
    });
}
function removeUploadImageTwo(){

    var thumbName = $("#imagethumbname-two").val();
    var imageName = $("#imagename-two").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-two").html('');
                $("#files-image-two").html('');
                $("#upload-image-two").fadeIn();
            }
        }
    });

}
function removeUploadImageThree(){

    var thumbName = $("#imagethumbname-three").val();
    var imageName = $("#imagename-three").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-three").html('');
                $("#files-image-three").html('');
                $("#upload-image-three").fadeIn();
            }
        }
    });

}
function removeUploadImageFour(){

    var thumbName = $("#imagethumbname-four").val();
    var imageName = $("#imagename-four").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-four").html('');
                $("#files-image-four").html('');
                $("#upload-image-four").fadeIn();
            }
        }
    });

}
function removeUploadImageFive(){

    var thumbName = $("#imagethumbname-five").val();
    var imageName = $("#imagename-five").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-five").html('');
                $("#files-image-five").html('');
                $("#upload-image-five").fadeIn();
            }
        }
    });

}
function removeUploadImageSix(){

    var thumbName = $("#imagethumbname-six").val();
    var imageName = $("#imagename-six").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-six").html('');
                $("#files-image-six").html('');
                $("#upload-image-six").fadeIn();
            }
        }
    });

}
function removeUploadImageSeven(){

    var thumbName = $("#imagethumbname-seven").val();
    var imageName = $("#imagename-seven").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-seven").html('');
                $("#files-image-seven").html('');
                $("#upload-image-seven").fadeIn();
            }
        }
    });

}
function removeUploadImageEight(){

    var thumbName = $("#imagethumbname-eight").val();
    var imageName = $("#imagename-eight").val();

    var dataURL = "thumbName=" + thumbName + "&imageName=" + imageName;

    $.ajax({
        type:"post",
        url: site_url + '/adtype/deleteImageThumb',
        data:dataURL,
        success:function(msg) {
            if(msg=='1'){
                $("#image_thumb-eight").html('');
                $("#files-image-eight").html('');
                $("#upload-image-eight").fadeIn();
            }
        }
    });

}