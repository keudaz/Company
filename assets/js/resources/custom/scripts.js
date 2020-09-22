base_url = base_url();
site_url = base_url;// + 'index.php';

var dateToday = new Date();
$(document).ready(function () {

    $('#preloader').hide();
    $('#preloader')
        .ajaxStart(function(){
            $(this).show();
        }).ajaxStop(function(){
        $(this).hide();
    });


    $("#insert-newspaper-form").validate({
        rules: {
            cid: "required",
            newspaper_type: "required",
            newspaper_name: "required",
            newspaper_shname:"required",
            language: "required",
            frequency: "required"
        },
        messages: {
            cid: "Category Name required",
            newspaper_type:"Type required",
            newspaper_name:"Newspaper Name required",
            newspaper_shname:"Newspaper short name required",
            language: "language required",
            frequency: "Frequency required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'newspaper/submitAddNewsPaperForm', $("#insert-newspaper-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'newspaper/listNewsPaper';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });



    // $("#insert-rate-form").validate({


    //        rules: {
    //            cid: "required",
    //            rate_period: "required",
    //            rate_discount: "required",
    //            rate_value:"required",
    //            issues: "required",

    //        },
    //        messages: {




    //            cid: "Newspaper Name required",
    //            rate_period:"Period required",
    //            rate_discount:"Discount required",
    //            rate_value:"Value required",
    //            issues: "Issues required",

    //        },
    //        submitHandler: function (form) {
    //            $('#message').html(''
    //                + '<div class="progress progress-striped active">'
    //                    + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
    //                + '</div>');

    //            $.post(site_url + 'rate/submitAddRateForm', $("#insert-rate-form").serialize(), function (msg) {


    //                var messageType = msg.split('####')[0].trim();
    //                var message = msg.split('####')[1];

    //                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

    //                if(messageType == 'success'){
    //                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
    //                    document.location.href = site_url + 'rate/listRates';
    //                } else {
    //                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
    //                }

    //            });
    //        }
    //    });



    //Newspaper Rate

    // Add Newspaper Rate

    $("#insert-rate-form").validate({

        rules: {
            zoneID: "required"
            // newspaperID: "required",
            // rate_value: "required"

        },
        messages: {
            zoneID: "Zone Name required"
            // newspaperID: "Newspaper Name required",
            // rate_value: "Rate value required"

        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'rate/submitRateForm', $("#insert-rate-form").serialize(), function (msg) {


                var messageType = msg.split('####')[0].trim();
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'rate/listRates';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });




//Newspaper Category//

// Add Newspaper Category //
    $("#insert-newspaper-category-form").validate({
        rules: {
            category: "required",
            status: "required"
        },
        messages: {
            category: "Category required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Newspapercategory/submitNewspapercategory', $("#insert-newspaper-category-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Newspapercategory/listNewspapercategory';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Newspaper Category //
    $("#edit-newspaper-category-form").validate({
        rules: {
            category: "required",
            status: "required"
        },
        messages: {
            category: "Name required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Newspapercategory/submitEditNewspapercategory', $("#edit-newspaper-category-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Newspapercategory/listNewspapercategory';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Newspaper Issue Form//    

//Add Newspaper Issue//
    $("#insert-newspaper-issue-form").validate({
        rules: {
            //nwname: "required",
            publishdatefrom: "required",
            irate: "required",
            status: "required"
        },
        messages: {
            //category: "Category required",
            publishdatefrom: "Date required",
            irate: "Rate required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Newspaperissue/submitNewspaperIssue', $("#insert-newspaper-issue-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Newspaperissue/listNewspaperissue';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Newspaper Issue //
    $("#edit-newspaper-issue-form").validate({
        rules: {
            publishdatefrom: "required",
            irate: "required",
            status: "required"
        },
        messages: {
            publishdatefrom: "Date required",
            irate: "Rate required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Newspaperissue/submitEditNewspaperissue', $("#edit-newspaper-issue-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Newspaperissue/listNewspaperissue';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Customer//
// Add Customer //
    $("#insert-customer-form").validate({
        rules: {
            fname: "required",
            email: "required",
            password: "required",
            confpassword:{
                equalTo: "#password"
            },
            phone: "required",
            address: "required",
            country: "required",
            city: "required",
            status: "required"
        },
        messages: {
            fname: "Name required",
            email:"Email required",
            password:"Password required",
            confpassword: {
                equalTo: "Passwords does not match"
            },
            phone: "Phone Number required",
            address:"Address required",
            country:"Country required",
            city:"City required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Customer/submitCustomerForm', $("#insert-customer-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Customer/listCustomer';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Customer //
    $("#edit-customer-form").validate({
        rules: {
            fname: "required",
            email: "required",
            phone: "required",
            address:"required",
            country:"required",
            city:"required"
        },
        messages: {
            fname: "First Name required",
            email: "Email required",
            phone: "Phone Number required",
            address:"Address required",
            country:"Country required",
            city:"City required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Customer/submitEditCustomerForm', $("#edit-customer-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Customer/listCustomer';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Period//

// Add Period //
    $("#insert-period-form").validate({
        rules: {
            ptype: "required",
            pValue: "required",
            status: "required"
        },
        messages: {
            ptype: "Period Type required",
            pValue: "Period Value required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'period/submitPeriod', $("#insert-period-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'period/listPeriod';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Period //
    $("#edit-period-form").validate({
        rules: {
            ptype: "required",
            pValue: "required",
        },
        messages: {
            ptype: "Period Type required",
            pValue: "Period Value required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'period/submitEditPeriod', $("#edit-period-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'period/listPeriod';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Couple Paper Promotion//

// Add Couple Paper Promotion //
    $("#insert-couple-paper-promotion-form").validate({
        rules: {
            newspaperid: "required",
            paperdiscount: "required",
            discountname: "required",
            freenewspaperid: "required",
            publishdatefrom1: "required",
            publishdatefrom2: "required",
            status: "required"
        },
        messages: {
            newspaperid: "Newspaper Name required",
            paperdiscount: "Discount Required, if not insert 0",
            discountname: "Discount Name required",
            freenewspaperid: "Free Newspaper Name required",
            publishdatefrom1: "Start Date required",
            publishdatefrom2: "End Date required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'couplepaperpromotion/submitCouplepaperpromotion', $("#insert-couple-paper-promotion-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'couplepaperpromotion/listCouplepaperpromotion';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Couple Paper Promotion //
    $("#edit-couple-paper-promotion-form").validate({
        rules: {
            newspaperid: "required",
            paperdiscount: "required",
            discountname: "required",
            freenewspaperid: "required",
            publishdatefrom1: "required",
            publishdatefrom2: "required"
        },
        messages: {
            newspaperid: "Newspaper Name required",
            paperdiscount: "Discount Required, if not insert 0",
            discountname: "Discount Name required",
            freenewspaperid: "Free Newspaper Name required",
            publishdatefrom1: "Start Date required",
            publishdatefrom2: "End Date required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'couplepaperpromotion/submitEditCouplepaperpromotion', $("#edit-couple-paper-promotion-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'couplepaperpromotion/listCouplepaperpromotion';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Coupon//

// Add Coupon //
    $("#insert-coupon-form").validate({
        rules: {
            ccode: "required",
            maxCount: "required",
            publishdatefrom: "required",
            publishdate: "required",
            status: "required"
        },
        messages: {
            ccode: "Coupon Code required",
            maxCount: "Max Count required",
            publishdatefrom: "Start Date required",
            publishdate: "End Date required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'coupon/submitCoupon', $("#insert-coupon-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'coupon/listCoupon';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Coupon //
    $("#edit-coupon-form").validate({
        rules: {
            ccode: "required",
            maxCount: "required",
            publishdatefrom: "required",
            publishdate: "required"
        },
        messages: {
            ccode: "Coupon Code required",
            maxCount: "Max Count required",
            publishdatefrom: "Start Date required",
            publishdate: "End Date required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'coupon/submitEditCoupon', $("#edit-coupon-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'coupon/listCoupon';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//Zone//

// Add Zone //
    $("#insert-zone-form").validate({
        rules: {
            zname: "required",
            znote: "required",
            status: "required"
        },
        messages: {
            zname: "Zone Name required",
            znote: "Zone Note required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'zone/submitZone', $("#insert-zone-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'zone/listZone';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Zone //
    $("#edit-zone-form").validate({
        rules: {
            zname: "required",
            znote: "required"
        },
        messages: {
            zname: "Zone Name required",
            znote: "Zone Note required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'zone/submitEditZone', $("#edit-zone-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'zone/listZone';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });


//Add Country//
    $("#insert-country-form").validate({
        rules: {
            cname: "required",
            // addmore: "required",
            status: "required"
        },
        messages: {
            cname: "Country Name required",
            // addmore: "Province required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'country/submitCountry', $("#insert-country-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'country/listCountry';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Country //
    $("#edit-country-form").validate({
        rules: {
            cname: "required"
        },
        messages: {
            cname: "Country Name required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'country/submitEditCountry', $("#edit-country-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'country/listCountry';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// // Edit Province //
//     $("#edit-province-form").validate({
//         rules: {
//             cname: "required"
//         },
//         messages: {
//             cname: "Country Name required"
//         },
//         submitHandler: function (form) {
//             $('#message').html(''
//                 + '<div class="progress progress-striped active">'
//                     + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
//                 + '</div>');

//             $.post(site_url + 'Country/submitEditCountry', $("#edit-country-form").serialize(), function (msg) {

//                 var messageType = msg.split('####')[0];
//                 var message = msg.split('####')[1];

//                 if(messageType == 'success'){
//                     $('#message').html('<div class="alert alert-success">' + message + '</div>');
//                     document.location.href = site_url + 'Country/listCountry';
//                 } else {
//                     $('#message').html('<div class="alert alert-danger">' + message + '</div>');
//                 }    
//             });
//         }
//     });

// Country Mapping //

// Add Country Mapping //
    // $("#insert-country-mapping-form").validate({
    //     rules: {
    //         zoneID: "required",
    //         // sortable2: "required",
    //         status: "required"
    //     },
    //     messages: {
    //         zoneID: "Zone Name required",
    //         // sortable2: "Country selection required",
    //         status: "Status required"
    //     },
    //     submitHandler: function (form) {
    //         $('#message').html(''
    //             + '<div class="progress progress-striped active">'
    //                 + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
    //             + '</div>');

    //         $.post(site_url + 'Country/submitCountryMapping', $("#insert-country-mapping-form").serialize(), function (msg) {
    //            // alert(msg);

    //             var messageType = msg.split('####')[0];
    //             var message = msg.split('####')[1];

    //             $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

    //             if(messageType == 'success'){
    //                 $('#message').html('<div class="alert alert-success">' + message + '</div>');
    //                 document.location.href = site_url + 'Country/listCountryMapping';
    //             } else {
    //                 $('#message').html('<div class="alert alert-danger">' + message + '</div>');
    //             }

    //         });
    //     }
    // });
///// Users Forms /////
    $("#insert-event-form").validate({
        rules: {

            eventName: "required",
            venue: "required",
            date: "required",
            time: "required"
        },
        messages: {

            eventName: "Event Name is required",
            venue: "Venue is required",
            date: "date is required",
            time: "time is required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'event/insertEvent', $("#insert-event-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'event/listEvent';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

    $("#insert-dept-form").validate({
        rules: {

            d_name: "required"
        },
        messages: {

            d_name: "department required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'Departments/insertDepartment', $("#insert-dept-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'Departments/insertDepartment';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

    $("#insert-position-form").validate({
        rules: {

            position: "required"
        },
        messages: {

            position: "Position required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'position/insertPosition', $("#insert-position-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'position/listPosition';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Add User //
    $("#insert-user-form").validate({
        rules: {
            epfNumber:"required",
            fname1: "required",
            lname2: "required",
            email: {
                email: true,
                required: true
            },
            phone_num: {
                accept:"[0-9]+",
                minlength:10,
                maxlength:10,
                required:true
            },
            position: "required",
            departments: "required",
            status: "required"
        },
        messages: {
            epfNumber:"EPf Number required",
            fname1: "First Name required",
            lname2: "Last Name required",
            email:{
                email: "Email is not valid",
                required: "Email required"
            },
            phone_num: {
                accept: "Phone Number not valid",
                required: "Phone Number required"
            },
            position: "User type required",
            departments: "User type required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'users/submitUserForm', $("#insert-user-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var pass = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    bootbox.alert(message+", User Password : "+pass, function(){
                        document.location.href = site_url + 'users/listUsers';
                    });
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

            });
        }
    });

// Edit User //
    $("#edit-user-form").validate({
        rules: {
            name: "required",
            email: "required",
            user_type: "required",
            status: "required"
        },
        messages: {
            name: "Name required",
            email:"Email required",
            user_type: "User type required",
            status: "Status required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'users/editUsersForm', $("#edit-user-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'users/listUsers';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Edit User Password //
    $("#edit-password-form").validate({
        rules: {
            password:"required",
            confpassword:{
                equalTo: "#password"
            }
        },
        messages: {
            password:"Password required",
            confpassword: "Passwords does not match"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'users/editPasswordForm', $("#edit-password-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'users/listUsers';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Edit User Permissions //
    $("#edit-user-permissions-form").validate({
        rules: {
            category: "required"
        },
        messages: {
            category: "Please select at least one category"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'users/editUserPermissionsForm', $("#edit-user-permissions-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var pass = msg.split('####')[2];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    bootbox.alert(message+", User Password : "+pass, function(){
                        document.location.href = site_url + 'users/listUsers';
                    });
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Delete User //    
    $('.delete-user').click(function() {
        if (confirm('Are you sure you want to Delete This User ?')) {
            $.post(site_url + 'users/deleteUser', {id: $(this).attr('id')}, function(msg) {
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var id = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');
                $('#row_' + id).fadeOut();
                $("#message").show('slow');
            });
        } else {
            return false;
        }
    });

///// !Users Forms /////

//// !Workshop Forms ////
// Add User //
    $("#insert-workshop-form").validate({
        rules: {
            workshop_title: "required",
            workshop_date: "required",
            workshop_start_time: "required",
            workshop_fee: "required",
            workshop_seats: "required",
            workshop_desc: "required",
            workshop_status: "required",

        },
        messages: {
            workshop_title: " Title required",
            workshop_date: "Date required",
            workshop_start_time: "Start time required",
            workshop_fee: " Charge fee required",
            workshop_seats: "No of Seats required",
            workshop_desc: "Description required",
            workshop_status: "Status required",
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'workshops/submitWorkshopForm', $("#insert-workshop-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var pass = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    bootbox.alert(message+", User Password : "+pass, function(){
                        document.location.href = site_url + 'users/listUsers';
                    });
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });


///// Articles Forms /////

// Add Article //
    $("#insert-article-form").validate({
        rules: {
            title: "required",
            publishdate:"required",
            publishtime:"required",
            author:"required",
//            introtext:"required",
            content:"required"
        },
        messages: {
            title: "Title required",
            publishdate:"Publish date required",
            publishtime:"Publish time required",
            author:"Author required",
//            introtext: "Introtext required",
            content: "Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'articles/submitAddArticleForm', $("#insert-article-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var article_id = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    if($('#redirect-value').val() == 'List'){
                        document.location.href = site_url + 'articles/listLatestArticles';
                    } else if($('#redirect-value').val() == 'Add'){
                        document.location.href = site_url + 'articles/addArticle/1';
                    } else {
                        document.location.href = site_url + 'articles/loadEditArticle/'+article_id;
                    }
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Article //
    $("#edit-article-form").validate({
        rules: {
            title: "required",
            publishdate:"required",
            publishtime:"required",
            author:"required",
//            introtext:"required",
            content:"required"
        },
        messages: {
            title: "Title required",
            publishdate:"Publish date required",
            publishtime:"Publish time required",
            author:"Author required",
//            introtext: "Introtext required",
            content: "Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'articles/submitEditArticleForm', $("#edit-article-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    if($('#redirect-value').val() == 'List'){
                        document.location.href = site_url + 'articles/listLatestArticles';
                    } else if($('#redirect-value').val() == 'Add'){
                        document.location.href = site_url + 'articles/addArticle';
                    }
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Add Article Token //
    $("#insert-article-token-form").validate({
        rules: {
            title: "required"
        },
        messages: {
            title: "Title required"
        },
        submitHandler: function (form) {
            $('#form-message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'tokens/submitAddArticleTokenForm', $("#insert-article-token-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#form-message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#form-message').html('<div class="alert alert-success">' + message + '</div>');
                    location.reload(true);
                } else {
                    $('#form-message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Article Token //
    $("#edit-article-token-form").validate({
        rules: {
            title_e: "required"
        },
        messages: {
            title_e: "Title required"
        },
        submitHandler: function (form) {
            $('#form-message-e').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'tokens/submitEditArticleTokenForm', $("#edit-article-token-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#form-message-e').html('<div class="alert alert-success">' + message + '</div>');
                    location.reload(true);
                } else {
                    $('#form-message-e').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Search Articles
    $("#search-articles-form").validate({
        rules: {
            search_txt: "required"
        },
        messages: {
            search_txt: "Search keywords required"
        },
//        submitHandler: function (form) {
//            $.post(site_url + 'articles/submitSearchArticlesForm', $("#search-articles-form").serialize(), function (msg) {
//
//                var messageType = msg.split('####')[0];
//                var message = msg.split('####')[1];
//
//                if(messageType == 'success'){
//                    $('#message').html('<div class="alert alert-success">' + message + '</div>')
//                        document.location.href = site_url + 'articles/listLatestArticles';
//                } else {
//                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
//                }    
//            });
//        }
    });

///// !Articles Forms /////


///// Special Articles Forms /////

// Add Article //
    $("#insert-special-article-form").validate({
        rules: {
            title: "required",
            publishdate:"required",
            publishtime:"required",
//            author:"required",
//            introtext:"required",
            content:"required"
        },
        messages: {
            title: "Title required",
            publishdate:"Publish date required",
            publishtime:"Publish time required",
//            author:"Author required",
//            introtext: "Introtext required",
            content: "Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'specialarticles/submitAddArticleForm', $("#insert-special-article-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var article_id = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    if($('#redirect-value').val() == 'List'){
                        document.location.href = site_url + 'specialarticles/listArticles';
                    } else if($('#redirect-value').val() == 'Add'){
                        document.location.href = site_url + 'specialarticles/addArticle/1';
                    } else {
                        document.location.href = site_url + 'specialarticles/loadEditArticle/'+article_id;
                    }
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Article //
    $("#edit-special-article-form").validate({
        rules: {
            title: "required",
            publishdate:"required",
            publishtime:"required",
//            author:"required",
//            introtext:"required",
            content:"required"
        },
        messages: {
            title: "Title required",
            publishdate:"Publish date required",
            publishtime:"Publish time required",
//            author:"Author required",
//            introtext: "Introtext required",
            content: "Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'specialarticles/submitEditArticleForm', $("#edit-special-article-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    if($('#redirect-value').val() == 'List'){
                        document.location.href = site_url + 'specialarticles/listArticles';
                    } else if($('#redirect-value').val() == 'Add'){
                        document.location.href = site_url + 'specialarticles/addArticle';
                    }
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Search Articles
    $("#search-special-articles-form").validate({
        rules: {
            search_txt: "required"
        },
        messages: {
            search_txt: "Search keywords required"
        },
//        submitHandler: function (form) {
//            $.post(site_url + 'articles/submitSearchArticlesForm', $("#search-articles-form").serialize(), function (msg) {
//
//                var messageType = msg.split('####')[0];
//                var message = msg.split('####')[1];
//
//                if(messageType == 'success'){
//                    $('#message').html('<div class="alert alert-success">' + message + '</div>')
//                        document.location.href = site_url + 'articles/listLatestArticles';
//                } else {
//                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
//                }    
//            });
//        }
    });

///// !Special Articles Forms /////


///// Authors Forms /////

// Add Author //
    $("#insert-author-form").validate({
        rules: {
            author_name: "required"
        },
        messages: {
            author_name: "Name required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'authors/submitAddAuthorForm', $("#insert-author-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var article_id = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'authors/listAuthors';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Author //
    $("#edit-author-form").validate({
        rules: {
            author_name: "required"
        },
        messages: {
            author_name: "Name required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'authors/submitEditAuthorForm', $("#edit-author-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'authors/listAuthors';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

///// !Authors Forms /////


///// Advertisements Forms /////

// Add Advertisement //
    $("#insert-advertisement-form").validate({
        rules: {
            slot: "required",
//            company_name: "required"
        },
        messages: {
            slot: "Name required",
//            company_name: "Company required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'advertisements/submitAddAdvertisementForm', $("#insert-advertisement-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var article_id = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'advertisements/listAdvertisements';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Advertisement //
    $("#edit-advertisement-form").validate({
        rules: {
            slot: "required",
//            company_name: "required"
        },
        messages: {
            slot: "Name required",
//            company_name: "Company required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'advertisements/submitEditAdvertisementForm', $("#edit-advertisement-form").serialize(), function (msg) {

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'advertisements/listAdvertisements';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

///// !Advertisements Forms /////


///// Blog Forms /////

// Add Blog //
    $("#insert-blog-form").validate({
        rules: {
            post_title: "required",
            post_content:"required"
        },
        messages: {
            post_title: "Title required",
            post_content:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'blogs/submitAddBlogForm', $("#insert-blog-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'blogs/listAllBlogs';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Blog //
    $("#edit-blog-form").validate({
        rules: {
            post_title: "required",
            post_content:"required"
        },
        messages: {
            post_title: "Title required",
            post_content:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'blogs/submitEditBlogForm', $("#edit-blog-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'blogs/listAllBlogs';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Delete Blog //    
    $('.delete-blog').click(function() {
        if (confirm('Are you sure you want to Delete This Blog ?')) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'blogs/deleteBlog', {ID: $(this).attr('id')}, function(msg) {
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var blog_ID = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');
                $('#row_' + blog_ID).fadeOut();
                $("#message").show('slow');
            });
        } else {
            return false;
        }
    });

///// !Blog Forms /////


///// Blog Update Forms /////

// Add Update //
    $("#insert-blog-update-form").validate({
        rules: {
            post_id: "required",
            post_text:"required"
        },
        messages: {
            post_id: "Blog required",
            post_content:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'updates/submitAddUpdateForm', $("#insert-blog-update-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'updates/listAllUpdates';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Update //
    $("#edit-blog-update-form").validate({
        rules: {
            post_id: "required",
            post_text:"required"
        },
        messages: {
            post_id: "Blog required",
            post_text:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'updates/submitEditUpdateForm', $("#edit-blog-update-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'updates/listAllUpdates';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Delete Update //    
    $('.delete-update').click(function() {
        if (confirm('Are you sure you want to Delete This Update ?')) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'updates/deleteUpdate', {blog_update_id: $(this).attr('id')}, function(msg) {
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var blog_update_ID = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');
                $('#row_' + blog_update_ID).fadeOut();
                $("#message").show('slow');
            });
        } else {
            return false;
        }
    });

///// !Blog Forms /////


///// Blog Poll Forms /////

// Add Poll //
    $("#insert-poll-form").validate({
        rules: {
            post_id: "required",
            blog_poll_q: "required"
        },
        messages: {
            post_id: "Blog required",
            blog_poll_q: "Question required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'polls/submitAddPollForm', $("#insert-poll-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'polls/listAllPolls';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Poll //
    $("#edit-poll-form").validate({
        rules: {
            post_id: "required",
            blog_poll_q: "required"
        },
        messages: {
            post_id: "Blog required",
            blog_poll_q: "Question required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'polls/submitEditPollForm', $("#edit-poll-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'polls/listAllPolls';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Delete Poll //    
    $('.delete-poll').click(function() {
        if (confirm('Are you sure you want to Delete This Poll ?')) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'polls/deletePoll', {ID: $(this).attr('id')}, function(msg) {
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var poll_ID = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');
                $('#row_' + poll_ID).fadeOut();
                $("#message").show('slow');
            });
        } else {
            return false;
        }
    });

// Insert Poll Answer //
    $("#insert-blog-poll-answer-form").validate({
        rules: {
            blog_poll_id: "required",
            blog_poll_a: "required"
        },
        messages: {
            blog_poll_id: "Blog required",
            blog_poll_a: "Question required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'polls/submitAddPollAnswerForm', $("#insert-blog-poll-answer-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'polls/listAllPollAnswers/'+$('#blog_poll_id').val();
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

///// !Poll Forms /////


///// Emergency News Forms /////

// Add Emergency //
    $("#insert-emergency-form").validate({
        rules: {
            post_title: "required",
            post_intro:"required",
            post_content:"required"
        },
        messages: {
            post_title: "Title required",
            post_intro:"Intro text required",
            post_content:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'emergency/submitAddArticleForm', $("#insert-emergency-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'emergency/listAllArticles';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Emergency //
    $("#edit-emergency-form").validate({
        rules: {
            post_title: "required",
            post_intro:"required",
            post_content:"required"
        },
        messages: {
            post_title: "Title required",
            post_intro:"Intro text required",
            post_content:"Content required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'emergency/submitEditArticleForm', $("#edit-emergency-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'emergency/listAllArticles';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

// Delete Emergency //    
    $('.delete-emergency-article').click(function() {
        if (confirm('Are you sure you want to Delete This News ?')) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'emergency/deleteArticle', {ID: $(this).attr('id')}, function(msg) {
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var id = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notification ' + messageType + ' png_bg"><div>' + message + '</div></div>');
                $('#row_' + id).fadeOut();
                $("#message").show('slow');
            });
        } else {
            return false;
        }
    });

///// !Emergency News Forms /////


//// Comments Forms ////

// Edit Comments //
    $("#edit-comment-form").validate({
        rules: {
            published_comment:"required"
        },
        messages: {
            published_comment:"Comment required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'comments/submitEditCommentForm', $("#edit-comment-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'comments/listComments';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

//// !Comments Forms ////


///// Categories Forms /////

// Add Category //
    $("#insert-category-form").validate({
        rules: {
            title: "required"
        },
        messages: {
            title: "Title required"
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'categories/submitAddCategoryForm', $("#insert-category-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'categories/listCategories';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }

            });
        }
    });

// Edit Category //
    $("#edit-category-form").validate({
        rules: {
            title: "required"
        },
        messages: {
            title: "Title required",
        },
        submitHandler: function (form) {
            $('#message').html(''
                + '<div class="progress progress-striped active">'
                + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
                + '</div>');

            $.post(site_url + 'categories/submitEditCategoryForm', $("#edit-category-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                if(messageType == 'success'){
                    $('#message').html('<div class="alert alert-success">' + message + '</div>');
                    document.location.href = site_url + 'categories/listCategories';
                } else {
                    $('#message').html('<div class="alert alert-danger">' + message + '</div>');
                }
            });
        }
    });

///// !Emergency News Forms /////

});


//// Status Managers ////

// Blogs //
function activateBlog(ID) {
    var dataURL = "ID=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'blogs/activateBlog',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'blogs/listAllBlogs/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateBlog(ID) {
    var dataURL = "ID=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'blogs/deactivateBlog',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'blogs/listAllBlogs/';
            } else {
                alert('Error');
            }
        }
    });
}

// Updates //
function activateUpdate(blog_update_id) {
    var dataURL = "blog_update_id=" + blog_update_id;
    $.ajax({
        type: "post",
        url: site_url + 'updates/activateUpdate',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'updates/listAllUpdates/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateUpdate(blog_update_id) {
    var dataURL = "blog_update_id=" + blog_update_id;
    $.ajax({
        type: "post",
        url: site_url + 'updates/deactivateUpdate',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'updates/listAllUpdates/';
            } else {
                alert('Error');
            }
        }
    });
}

// Polls //
function activatePoll(blog_poll_id) {
    var dataURL = "blog_poll_id=" + blog_poll_id;
    $.ajax({
        type: "post",
        url: site_url + 'polls/activatePoll',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'polls/listAllPolls/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivatePoll(blog_poll_id) {
    var dataURL = "blog_poll_id=" + blog_poll_id;
    $.ajax({
        type: "post",
        url: site_url + 'polls/deactivatePoll',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'polls/listAllPolls/';
            } else {
                alert('Error');
            }
        }
    });
}

function activatePollAnswer(blog_poll_ans_id, blog_poll_id) {
    var dataURL = "blog_poll_ans_id=" + blog_poll_ans_id;
    $.ajax({
        type: "post",
        url: site_url + 'polls/activatePollAnswer',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'polls/listAllPollAnswers/'+blog_poll_id;
            } else {
                alert('Error');
            }
        }
    });
}

function deactivatePollAnswer(blog_poll_ans_id, blog_poll_id) {
    var dataURL = "blog_poll_ans_id=" + blog_poll_ans_id;
    $.ajax({
        type: "post",
        url: site_url + 'polls/deactivatePollAnswer',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'polls/listAllPollAnswers/'+blog_poll_id;
            } else {
                alert('Error');
            }
        }
    });
}

// Emergency //
function activateEmergency(ID) {
    var dataURL = "ID=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'emergency/activateArticle',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'emergency/listAllArticles/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateEmergency(ID) {
    var dataURL = "ID=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'emergency/deactivateArticle',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                window.location = base_url + 'emergency/listAllArticles/';
            } else {
                alert('Error');
            }
        }
    });
}

//Articles
function publishArticle(ID, article_id) {
    var dataURL = "article_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'articles/publishArticle',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Published');
                $('#publish_btn_'+article_id).html('<button class="btn btn-default btn-sm" title="Unpublish" onclick="unpublishArticle(\''+ID+'\', '+article_id+');"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'updates/listAllArticles/';
            } else {
                alert('Error');
            }
        }
    });
}

function unpublishArticle(ID, article_id) {
    var dataURL = "article_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'articles/unpublishArticle',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Unpublished');
                $('#publish_btn_'+article_id).html('<button class="btn btn-default btn-sm" title="Publish" onclick="publishArticle(\''+ID+'\', '+article_id+');"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'updates/listAllUpdates/';
            } else {
                alert('Error');
            }
        }
    });
}

// Comments
function publishComment(ID, comment_id) {
    var dataURL = "comment_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'comments/publishComment',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                $('#publish_btn_'+comment_id).html('<button class="btn btn-default btn-sm" title="Unpublish" onclick="unpublishComment(\''+ID+'\', '+comment_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
            } else {
                alert('Error');
            }
        }
    });
}

function unpublishComment(ID, comment_id) {
    var dataURL = "comment_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'comments/unpublishComment',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                $('#publish_btn_'+comment_id).html('<button class="btn btn-default btn-sm" title="Publish" onclick="publishComment(\''+ID+'\', '+comment_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
            } else {
                alert('Error');
            }
        }
    });
}

//Authors
function activateAuthor(ID, author_id) {
    var dataURL = "author_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'authors/activateAuthor',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Published');
                $('#status_btn_'+author_id).html('<button class="btn btn-default btn-sm" title="Deactivate" onclick="deactivateAuthor(\''+ID+'\', '+author_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'updates/listAllArticles/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateAuthor(ID, author_id) {
    var dataURL = "author_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'authors/deactivateAuthor',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Unpublished');
                $('#status_btn_'+author_id).html('<button class="btn btn-default btn-sm" title="Publish" onclick="activateAuthor(\''+ID+'\', '+author_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'updates/listAllUpdates/';
            } else {
                alert('Error');
            }
        }
    });
}

//Advertisements
function activateAdvertisement(ID, ad_id) {
    var dataURL = "ad_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'advertisements/activateAdvertisement',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Published');
                $('#status_btn_'+ad_id).html('<button class="btn btn-default btn-sm" title="Deactivate" onclick="deactivateAdvertisement(\''+ID+'\', '+ad_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'advertisement/listAllAdvertisements/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateAdvertisement(ID, ad_id) {
    var dataURL = "ad_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'advertisements/deactivateAdvertisement',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
                // alert('Unpublished');
                $('#status_btn_'+ad_id).html('<button class="btn btn-default btn-sm" title="Publish" onclick="activateAdvertisement(\''+ID+'\', '+ad_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'advertisement/listAllAdvertisements/';
            } else {
                alert('Error');
            }
        }
    });
}

//Categories
function activateCategory(ID, category_id) {
    var dataURL = "category_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'categories/activateCategory',
        data: dataURL,
        success: function(m) {
            var categorymsgarr = m.split('####');
            var i = 1;
            for (i = 1; i < (categorymsgarr.length); i++) {
                var msg = categorymsgarr[i].split('@@@@')[0];
                var cat_code = categorymsgarr[i].split('@@@@')[1];
                var cat_id = categorymsgarr[i].split('@@@@')[2];
                if (msg == '1') {
                    // alert('Activated');
                    $('#status_btn_'+cat_id).html('<button class="btn btn-default btn-sm" title="Deactivate" onclick="deactivateCategory(\''+cat_code+'\', '+cat_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                    // window.location = base_url + 'categories/listCategories/';
                } else {
                    alert('Error');
                }
            }
        }
    });
}

function deactivateCategory(ID, category_id) {
    var dataURL = "category_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'categories/deactivateCategory',
        data: dataURL,
        success: function(m) {
            var categorymsgarr = m.split('####');
            var i = 1;
            for (i = 1; i < (categorymsgarr.length); i++) {
                var msg = categorymsgarr[i].split('@@@@')[0];
                var cat_code = categorymsgarr[i].split('@@@@')[1];
                var cat_id = categorymsgarr[i].split('@@@@')[2];
                if (msg == '1') {
                    // alert('Deactivated');
                    $('#status_btn_'+cat_id).html('<button class="btn btn-default btn-sm" title="Activate" onclick="activateCategory(\''+cat_code+'\', '+cat_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                    // window.location = base_url + 'categories/listCategories/';
                } else {
                    alert('Error');
                }
            }
        }
    });
}

//Site Editions
function activateEdition(ID, edition_id) {
    var dataURL = "edition_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/activateEdition',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Activated');
                $('#status_btn_'+edition_id).html('<button class="btn btn-default btn-sm" title="Activated" onclick="deactivateEdition(\''+ID+'\', '+edition_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateEdition(ID, edition_id) {
    var dataURL = "edition_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/deactivateEdition',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Deactivated');
                $('#status_btn_'+edition_id).html('<button class="btn btn-default btn-sm" title="Deactivated" onclick="activateEdition(\''+ID+'\', '+edition_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}




//Site Currencies
function activateCurrency(ID, cid) {
    var dataURL = "cid=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/activateCurrency',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Activated');
                $('#status_btn_'+cid).html('<button class="btn btn-default btn-sm" title="Activated" onclick="deactivateCurrency(\''+ID+'\', '+cid+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateCurrency(ID, cid) {
    var dataURL = "cid=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/deactivateCurrency',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Deactivated');
                $('#status_btn_'+cid).html('<button class="btn btn-default btn-sm" title="Deactivated" onclick="activateCurrency(\''+ID+'\', '+cid+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

//Site Currency values
function activateCurrencyValue(ID, dateid) {
    var dataURL = "dateid=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'currencies/activateCurrencyValue',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Activated');
                $('#status_btn_'+dateid).html('<button class="btn btn-default btn-sm" title="Activated" onclick="deactivateCurrencyValue(\''+ID+'\', '+dateid+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateCurrencyValue(ID, dateid) {
    var dataURL = "dateid=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'currencies/deactivateCurrencyValue',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Deactivated');
                $('#status_btn_'+dateid).html('<button class="btn btn-default btn-sm" title="Deactivated" onclick="activateCurrencyValue(\''+ID+'\', '+dateid+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}



//Article Field
function activateArticleField(ID, field_id) {
    var dataURL = "field_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/activateArticleField',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Activated');
                $('#status_btn_'+field_id).html('<button class="btn btn-default btn-sm" title="Activated" onclick="deactivateArticleField(\''+ID+'\', '+field_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateArticleField(ID, field_id) {
    var dataURL = "field_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'settings/deactivateArticleField',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Deactivated');
                $('#status_btn_'+field_id).html('<button class="btn btn-default btn-sm" title="Deactivated" onclick="activateArticleField(\''+ID+'\', '+field_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

//Article Token
function activateArticleToken(ID, token_id) {
    var dataURL = "token_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'tokens/activateArticleToken',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Activated');
                $('#status_btn_'+token_id).html('<button class="btn btn-default btn-sm" title="Activated" onclick="deactivateArticleToken(\''+ID+'\', '+token_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
                // window.location = base_url + 'tokens/listArticles/';
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateArticleToken(ID, token_id) {
    var dataURL = "token_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'tokens/deactivateArticleToken',
        data: dataURL,
        success: function(m) {
            if (m == '1') {
                // alert('Deactivated');
                $('#status_btn_'+token_id).html('<button class="btn btn-default btn-sm" title="Deactivated" onclick="activateArticleToken(\''+ID+'\', '+token_id+');" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>')
                // window.location = base_url + 'settings/listFields/';
            } else {
                alert('Error');
            }
        }
    });
}

// Users //
function activateUser(ID, user_id) {
    var dataURL = "user_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'users/activateUser',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
//                $('#status_span_'+ID).html('<label style="color: green;">Activated</label>');
                $('#status_btn_'+user_id).html('<button class="btn btn-default btn-sm" title="Delete" onclick="deactivateUser(\''+ID+'\', '+user_id+')" style="padding: 0px; border-color: #fff;"><i class="fa fa-check-square-o fa-2x" style="color: green;"></i></button>');
            } else {
                alert('Error');
            }
        }
    });
}

function deactivateUser(ID, user_id) {
    var dataURL = "user_id=" + ID;
    $.ajax({
        type: "post",
        url: site_url + 'users/deactivateUser',
        data: dataURL,
        success: function(msg) {
            if (msg == '1') {
//                $('#status_span_'+ID).html('<label style="color: red;">Deactivated</label>');
                $('#status_btn_'+user_id).html('<button class="btn btn-default btn-sm" title="Delete" onclick="activateUser(\''+ID+'\', '+user_id+')" style="padding: 0px; border-color: #fff;"><i class="fa fa-square-o fa-2x" style="color: red;"></i></button>');
            } else {
                alert('Error');
            }
        }
    });
}


//// Deletes ////

//Articles
function deleteArticle(ID, article_id) {
    if (confirm('Are you sure you want to delete this article ?')) {
        var dataURL = "article_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'articles/deleteArticle',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Article successfully deleted</div>');
                    $('#row_' + article_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Article cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}


//Currencies
function deleteCurrency(ID, cid) {
    if (confirm('Are you sure you want to delete this Currency ?')) {
        var dataURL = "cid=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'settings/deleteCurrency',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Currency successfully deleted</div>');
                    $('#row_' + cid).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Currency cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

function restoreArticle(ID, article_id, status) {
    if (confirm('Are you sure you want to restore this article ?')) {
        var dataURL = "article_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'articles/restoreArticle',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Article successfully restored</div>');
                    $('#row_' + article_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Article cannot be restored</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

// Article Tokens
function deleteArticleToken(ID, token_id) {
    if (confirm('Are you sure you want to delete this token ?')) {
        var dataURL = "token_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'tokens/deleteArticleToken',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Token successfully deleted</div>');
                    $('#row_' + token_id).css('color', '#cccccc');
                    $("#message").show('slow');
                    location.reload(true);
//                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Token cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

function restoreArticleToken(ID, token_id, status) {
    if (confirm('Are you sure you want to restore this token ?')) {
        var dataURL = "token_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'tokens/restoreArticleToken',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Token successfully restored</div>');
                    $('#row_' + token_id).css('color', '#000000');
                    $("#message").show('slow');
                    location.reload(true);
//                    setTimeout(function(){ $('#message').html('');}, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Token cannot be restored</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

//Authors
function deleteAuthor(ID, author_id) {
    if (confirm('Are you sure you want to delete this author ?')) {
        var dataURL = "author_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'authors/deleteAuthor',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Author successfully deleted</div>');
                    $('#row_' + author_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Author cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

function restoreAuthor(ID, author_id, status) {
    if (confirm('Are you sure you want to restore this author ?')) {
        var dataURL = "author_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'authors/restoreAuthor',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Author successfully restored</div>');
                    $('#row_' + author_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Author cannot be restored</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

//Advertisements
function deleteAdvertisement(ID, ad_id) {
    if (confirm('Are you sure you want to delete this advertisement ?')) {
        var dataURL = "ad_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'advertisements/deleteAdvertisement',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Advertisement successfully deleted</div>');
                    $('#row_' + ad_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Advertisement cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

function restoreAdvertisement(ID, ad_id, status) {
    if (confirm('Are you sure you want to restore this advertisement ?')) {
        var dataURL = "ad_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'advertisements/restoreAdvertisement',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Advertisement successfully restored</div>');
                    $('#row_' + ad_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Advertisement cannot be restored</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}

//Categories
function deleteCategory(ID, category_id) {
    if (confirm('Are you sure you want to delete this category ?')) {
        var dataURL = "category_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'categories/deleteCategory',
            data: dataURL,
            success: function(m) {
                var categorymsgarr = m.split('####');
                var i = 1;
                for (i = 1; i < (categorymsgarr.length); i++) {
                    var msg = categorymsgarr[i].split('@@@@')[0];
                    var cat_id = categorymsgarr[i].split('@@@@')[1];
                    if (msg == '1') {
                        $('#message').html('<div class="alert alert-success">Category successfully deleted</div>');
                        $('#row_' + cat_id).fadeOut();
                        $("#message").show('slow');
                        setTimeout(function(){ $('#message').html(''); }, 5000);
                    } else {
                        alert('Error');
                    }
                }
            }
        });
    } else {
        return false;
    }
}

function restoreCategory(ID, category_id, status) {
    if (confirm('Are you sure you want to restore this category ?')) {
        var dataURL = "category_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'categories/restoreCategory',
            data: dataURL,
            success: function(m) {
                var categorymsgarr = m.split('####');
                var i = 1;
                for (i = 1; i < (categorymsgarr.length); i++) {
                    var msg = categorymsgarr[i].split('@@@@')[0];
                    var cat_id = categorymsgarr[i].split('@@@@')[2];
                    if (msg == '1') {
                        $('#message').html('<div class="alert alert-success">Category successfully restored</div>');
                        $('#row_' + cat_id).css('color', '#D7D7D7');
                        $('#restore_td_' + cat_id).html('');
                        $("#message").show('slow');
                        setTimeout(function(){ $('#message').html(''); }, 5000);
                    } else {
                        $('#message').html('<div class="alert alert-danger">Category cannot be restored</div>');
                        setTimeout(function(){ $('#message').html(''); }, 30000);
                    }
                }
            }
        });
    } else {
        return false;
    }
}

//Site Editions
function deleteEdition(ID, edition_id) {
    if (confirm('Are you sure you want to delete this edition ?')) {
        var dataURL = "edition_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'settings/deleteEdition',
            data: dataURL,
            success: function(m) {
                if (m == '1') {
                    $('#message').html('<div class="alert alert-success">Edition successfully deleted</div>');
                    $('#row_' + edition_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    alert('Error');
                }
            }
        });
    } else {
        return false;
    }
}

function restoreEdition(ID, edition_id, status) {
    if (confirm('Are you sure you want to restore this edition ?')) {
        var dataURL = "edition_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'settings/restoreEdition',
            data: dataURL,
            success: function(m) {
                if (m == '1') {
                    $('#message').html('<div class="alert alert-success">Edition successfully restored</div>');
                    $('#row_' + edition_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    alert('Error');
                }
            }
        });
    } else {
        return false;
    }
}

//Article Field
function deleteField(ID, field_id, type) {
    if (confirm('Are you sure you want to delete this field ?')) {
        var dataURL = "field_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'settings/deleteArticleField',
            data: dataURL,
            success: function(m) {
                if (m == '1') {
                    $('#message_'+type).html('<div class="alert alert-success">Field successfully deleted</div>');
                    $('#row_' + field_id).fadeOut();
                    $("#message_"+type).show('slow');
                    setTimeout(function(){ $('#message_'+type).html(''); }, 5000);
                } else {
                    alert('Error');
                }
            }
        });
    } else {
        return false;
    }
}

function restoreField(ID, field_id, type, status) {
    if (confirm('Are you sure you want to restore this field ?')) {
        var dataURL = "field_id=" + ID + "&status=" + status;
        $.ajax({
            type: "post",
            url: site_url + 'settings/restoreArticleField',
            data: dataURL,
            success: function(m) {
                if (m == '1') {
                    $('#message_'+type).html('<div class="alert alert-success">Field successfully restored</div>');
                    $('#row_' + field_id).fadeOut();
                    $("#message_"+type).show('slow');
                    setTimeout(function(){ $('#message_'+type).html(''); }, 5000);
                } else {
                    alert('Error');
                }
            }
        });
    } else {
        return false;
    }
}

// Users
function deleteUser(ID, user_id) {
    if (confirm('Are you sure you want to Delete This User ?')) {
        var dataURL = "user_id=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'users/deleteUser',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">User successfully deleted</div>');
                    $('#row_' + user_id).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">User cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}


//// Other ////

// Email Validation
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

// Article Fields
function submitArticleField(type, field_id){
    if(type == 'thumb' ){
        var htmlstr = '';
        if($('#edit-'+type+'-'+field_id+'-form :input[name="field_title"]').val() == ''){
            $('#message_'+field_id).html('<div class="alert alert-danger">'
                + '<strong>Invalid field title</strong>'
                + '</div>');
            return false;
        } else if($('#edit-'+type+'-'+field_id+'-form :input[name="width"]').val() == '' || parseInt($('#edit-'+type+'-'+field_id+'-form :input[name="width"]').val()) < 0){
            $('#message_'+field_id).html('<div class="alert alert-danger">'
                + '<strong>Invalid width</strong>'
                + '</div>');
            return false;
        } else if($('#edit-'+type+'-'+field_id+'-form :input[name="height"]').val() == '' || parseInt($('#edit-'+type+'-'+field_id+'-form :input[name="height"]').val()) < 0){
            $('#message_'+field_id).html('<div class="alert alert-danger">'
                + '<strong>Invalid hight</strong>'
                + '</div>');
            return false;
        }
    }
    $('#message_'+field_id).html(''
        + '<div class="progress progress-striped active">'
        + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
        + '</div>');
    var formurl = site_url + "settings/submitArticleField";
    $.post( formurl, $( "#edit-"+type+"-"+field_id+"-form" ).serialize() ).done(function( data ) {
        var messageType = data.split('####')[0];
        var message = data.split('####')[1];
        var htmlstr = '';
        if(messageType == 'success') {
            htmlstr = '<div class="alert alert-success">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        } else {
            htmlstr = '<div class="alert alert-danger">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        }

        $('#message_'+field_id).html(htmlstr);
        setTimeout(function(){
            $('#edit_field_'+field_id).modal('hide');
            location.reload(true)
        }, 1000);
    });
    return false;
}

// Edition Fields
function submitEdition(edition_id){
    var htmlstr = '';
    if($('#edit-edition-'+edition_id+'-form :input[name="title"]').val() == ''){
        $('#message_'+edition_id).html('<div class="alert alert-danger">'
            + '<strong>Title required</strong>'
            + '</div>');
        return false;
    }
    $('#message_'+edition_id).html(''
        + '<div class="progress progress-striped active">'
        + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
        + '</div>');
    var formurl = site_url + "settings/submitEdition";
    $.post( formurl, $( "#edit-edition-"+edition_id+"-form" ).serialize() ).done(function( data ) {
        var messageType = data.split('####')[0];
        var message = data.split('####')[1];
        var htmlstr = '';
        if(messageType == 'success') {
            htmlstr = '<div class="alert alert-success">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        } else {
            htmlstr = '<div class="alert alert-danger">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        }

        $('#message_'+edition_id).html(htmlstr);
        setTimeout(function(){
            $('#edit_edition_'+edition_id).modal('hide');
            location.reload(true)
        }, 1000);
    });
    return false;
}


// Currency Fields
function submitCurrency(cid){
    var htmlstr = '';
    if($('#edit-currency-'+cid+'-form :input[name="cname"]').val() == ''){
        $('#message_'+cid).html('<div class="alert alert-danger">'
            + '<strong>Currency Name required</strong>'
            + '</div>');
        return false;
    }
    if($('#edit-currency-'+cid+'-form :input[name="cshortname"]').val() == ''){
        $('#message_'+cid).html('<div class="alert alert-danger">'
            + '<strong>Short Name required</strong>'
            + '</div>');
        return false;
    }
    $('#message_'+cid).html(''
        + '<div class="progress progress-striped active">'
        + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
        + '</div>');
    var formurl = site_url + "settings/submitCurrency";
    $.post( formurl, $( "#edit-currency-"+cid+"-form" ).serialize() ).done(function( data ) {
        var messageType = data.split('####')[0];
        var message = data.split('####')[1];
        var htmlstr = '';
        if(messageType == 'success') {
            htmlstr = '<div class="alert alert-success">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        } else {
            htmlstr = '<div class="alert alert-danger">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        }

        $('#message_'+cid).html(htmlstr);
        setTimeout(function(){
            $('#edit_currency_'+cid).modal('hide');
            location.reload(true)
        }, 1000);
    });
    return false;
}




//submit curreny values

function submitCurrencyValue(check_re){
    var htmlstr = '';
    if($('#insert-currency_values-form :input[name="cid"]').val() === '0'){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Currency Type required</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-currency_values-form :input[name="publishdate"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Date is required</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-currency_values-form :input[name="cvalue"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Value is required</strong>'
            + '</div>');
        return false;
    }

//!$.isNumeric(value)
    if(!$.isNumeric($('#insert-currency_values-form :input[name="cvalue"]').val())){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Value should be number</strong>'
            + '</div>');
        return false;
    }


    $('#message').html(''
        + '<div class="progress progress-striped active">'
        + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
        + '</div>');
    var formurl = site_url + "currencies/submitCurrencyValue";
    var redirect = site_url + "currencies/listCurrencyValues";
    var redirectSame = site_url + "currencies/addCurrencyValues";

    $.post( formurl, $( "#insert-currency_values-form" ).serialize() ).done(function( data ) {
        var messageType = data.split('####')[0];
        var message = data.split('####')[1];
        var htmlstr = '';
        if(messageType == 'success') {
            htmlstr = '<div class="alert alert-success">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        } else {
            htmlstr = '<div class="alert alert-danger">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        }

        $('#message').html(htmlstr);
        if(check_re != 0){
            setTimeout(function(){
                window.location.href = redirect
            }, 1000);
        }
        else{
            setTimeout(function(){
                window.location.href = redirectSame
            }, 1000);
        }
    }).fail(function() {

        htmlstr = '<div class="alert alert-danger">'
            + '<strong> Error: The Currency value for the given date is already inserted!</strong>'
            + '</div>';

        $('#message').html(htmlstr);
        setTimeout(function(){
            window.location.href = redirectSame
        }, 5000);
    })

    return false;
}
//submit trainer values

function submitAddTrainerForm(check_re){
    var htmlstr = '';
    if($('#insert-trainer-form :input[name="trainer_name"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Trainer Name required</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-trainer-form :input[name="display_name_en"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Dispaly name is required</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-trainer-form :input[name="trainer_age"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Age required</strong>'
            + '</div>');
        return false;
    }

//!$.isNumeric(value)
    if(!$.isNumeric($('#insert-trainer-form :input[name="trainer_age"]').val())){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Value should be number</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-trainer-form :input[name="trainer_phone"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Phone number required</strong>'
            + '</div>');
        return false;
    }
    if(!$.isNumeric($('#insert-trainer-form :input[name="trainer_phone"]').val())){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Value should be number</strong>'
            + '</div>');
        return false;
    }
    if($('#insert-trainer-form :input[name="about"]').val() == ''){
        $('#message').html('<div class="alert alert-danger">'
            + '<strong>Description required</strong>'
            + '</div>');
        return false;
    }


    $('#message').html(''
        + '<div class="progress progress-striped active">'
        + '<div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>'
        + '</div>');
    var formurl = site_url + "trainers/submitAddTrainerForm";
    var redirect = site_url + "trainers/addTrainer";
    var redirectSame = site_url + "trainers/addTrainer";

    $.post( formurl, $( "#insert-trainer-form" ).serialize() ).done(function( data ) {
        var messageType = data.split('####')[0];
        var message = data.split('####')[1];
        var htmlstr = '';
        if(messageType == 'success') {
            htmlstr = '<div class="alert alert-success">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        } else {
            htmlstr = '<div class="alert alert-danger">'
                + '<strong>'+message+'</strong>'
                + '</div>';
        }

        $('#message').html(htmlstr);
        if(check_re != 0){
            setTimeout(function(){
                window.location.href = redirect
            }, 1000);
        }
        else{
            setTimeout(function(){
                window.location.href = redirectSame
            }, 1000);
        }
    }).fail(function() {

        htmlstr = '<div class="alert alert-danger">'
            + '<strong> Error: The Currency value for the given date is already inserted!</strong>'
            + '</div>';

        $('#message').html(htmlstr);
        setTimeout(function(){
            window.location.href = redirectSame
        }, 5000);
    })

    return false;
}

//Currency values
function deleteCurrencyValue(ID, dateid) {
    if (confirm('Are you sure you want to delete this curreny value ?')) {
        var dataURL = "dateid=" + ID;
        $.ajax({
            type: "post",
            url: site_url + 'currencies/deleteCurrencyValue',
            data: dataURL,
            success: function(msg) {
                if (msg == '1') {
                    $('#message').html('<div class="alert alert-success">Currency value successfully deleted</div>');
                    $('#row_' + dateid).fadeOut();
                    $("#message").show('slow');
                    setTimeout(function(){ $('#message').html(''); }, 5000);
                } else {
                    $('#message').html('<div class="alert alert-danger">Currency value cannot be deleted</div>');
                    setTimeout(function(){ $('#message').html(''); }, 30000);
                }
            }
        });
    } else {
        return false;
    }
}