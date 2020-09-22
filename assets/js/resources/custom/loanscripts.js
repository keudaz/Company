//base_url = 'http://localhost/reppia/';
base_url = base_url();
site_url = base_url;// + 'index.php';

var dateToday = new Date();

$(document).ready(function () {

    $('#preloader').hide();
    $('#preloader').ajaxStart(function(){
        $(this).show();
    }).ajaxStop(function(){
        $(this).hide();
    });

///// Loan Forms /////

// Add Bank //
    $("#add-mapd-bank-info-form").validate({
        rules: {
            dependant: "required",
            bank_name:"required",
            branch_name:"required",
            account_number:"required"
        },
        messages: {
            dependant: "Dependant required",
            bank_name:"Bank Name required",
            branch_name:"Branch Name required",
            account_number:  "Account Number required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'compensation/addBanksMapCompensation', $("#add-mapd-bank-info-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var mapid = msg.split('####')[2];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    document.location.href = site_url + 'compensation/loadBanksMapCompensation/'+mapid;
                }
                    
            });
        }
    });
    
// Delete Bank//    
    $('.delete-mapd-account').click(function() {
        if (confirm('Are you sure you want to Delete This Account ?')) {
            $.post(site_url + 'compensation/deleteBanksMapCompensation', {bankid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                //alert(messageType);return;
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_' + ID).fadeOut();
                $("#message").show('slow');
                document.location.href = site_url + 'compensation/loadBanksMapCompensation/'+$('#map_id').val();
            });
        } else {
            return false;
        }
    });
    
    $("#add-loanshortcoming-form").validate({
        rules: {
            category: "required",
            shortcoming:"required"
        },
        messages: {
            category: "Category Required",
            shortcoming:"ShortComing Required"
        },
        submitHandler: function (form) {

            $.post(site_url + 'settings/addloanShortComings', $("#add-loanshortcoming-form").serialize(), function (msg) {
                //alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

               if(messageType == 'msgsuccess'){
                  document.location.href = site_url + 'settings/ListAllloanShortComings';
                }

            });
        }
    });	

    $("#edit-loanshortcoming-form").validate({
        rules: {
            category: "required",
            shortcoming:"required"
        },
        messages: {
            category: "Category Required",
            shortcoming:"ShortComing Required"
        },
        submitHandler: function (form) {

            $.post(site_url + 'settings/EditloanShortComings', $("#edit-loanshortcoming-form").serialize(), function (msg) {
                //alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

               if(messageType == 'msgsuccess'){
                  document.location.href = site_url + 'settings/ListAllloanShortComings';
                }

            });
        }
    });
    
    
//// SE ////
    // Insert SE //
    var validatorSEAdd = $("#add-se-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#se_wizard').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEAdd.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEAdd.form()){
                $.post(site_url + 'loan/AddSE_Loan', $("#add-se-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingseloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    
    // Edit SE //
    var validatorSEEdit = $("#edit-se-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#se_wizard_edit').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEEdit.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEEdit.form()){
                $.post(site_url + 'loan/editSE_Loan', $("#edit-se-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingseloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit SE Completed//
    var validatorSEEditCompleted = $("#edit-se-form-completed").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#se_wizard_edit_completed').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEEditCompleted.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEEditCompleted.form()){
                $.post(site_url + 'loan/editSE_Loan', $("#edit-se-form-completed").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/CompletedSELoan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit SE Admin//
    var validatorSEEditAdmin = $("#edit-se-form-admin").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#se_wizard_edit_admin').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEEditAdmin.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEEditAdmin.form()){
                $.post(site_url + 'loan/editSE_Loan', $("#edit-se-form-admin").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingSELoanAdmin';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
//// !SE ////   
    
    
//// SEP ////
    // Insert SEP //
    var validatorSEPAdd = $("#add-sep-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            sep_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"     
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            sep_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "sep_file_no"){
                error.insertAfter($("#msg_sep_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#sep_wizard').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEPAdd.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEPAdd.form()){
                $.post(site_url + 'loan/AddSEP_Loan', $("#add-sep-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingseploan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    
    // Edit SEP //
    var validatorSEPEdit = $("#edit-sep-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            sep_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            sep_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "sep_file_no"){
                error.insertAfter($("#msg_sep_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#sep_wizard_edit').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEPEdit.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEPEdit.form()){
                $.post(site_url + 'loan/editSEP_Loan', $("#edit-sep-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingseploan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit SEP Completed//
    var validatorSEPEditCompleted = $("#edit-sep-form-completed").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#sep_wizard_edit_completed').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEPEditCompleted.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEPEditCompleted.form()){
                $.post(site_url + 'loan/editSEP_Loan', $("#edit-sep-form-completed").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/CompletedSEPLoan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit SEP Admin//
    var validatorSEPEditAdmin = $("#edit-sep-form-admin").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#sep_wizard_edit_admin').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorSEPEditAdmin.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorSEPEditAdmin.form()){
                $.post(site_url + 'loan/editSEP_Loan', $("#edit-sep-form-admin").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingSEPLoanAdmin';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
//// !SEP ////


//// HL ////
    // Insert HL //
    var validatorHLAdd = $("#add-hl-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            hl_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"       
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            hl_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "hl_file_no"){
                error.insertAfter($("#msg_hl_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#hl_wizard').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorHLAdd.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorHLAdd.form()){
                $.post(site_url + 'loan/AddHL_Loan', $("#add-hl-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressinghlloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    
    // Edit HL //
    var validatorHLEdit = $("#edit-hl-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            hl_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            hl_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "hl_file_no"){
                error.insertAfter($("#msg_hl_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#hl_wizard_edit').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorHLEdit.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorHLEdit.form()){
                $.post(site_url + 'loan/editHL_Loan', $("#edit-hl-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressinghlloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit HL Completed//
    var validatorHLEditCompleted = $("#edit-hl-form-completed").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#hl_wizard_edit_completed').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorHLEditCompleted.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorHLEditCompleted.form()){
                $.post(site_url + 'loan/editHL_Loan', $("#edit-hl-form-completed").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/CompletedHLLoan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit HL Admin//
    var validatorHLEditAdmin = $("#edit-hl-form-admin").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#hl_wizard_edit_admin').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorHLEditAdmin.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorHLEditAdmin.form()){
                $.post(site_url + 'loan/editHL_Loan', $("#edit-hl-form-admin").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingHLLoanAdmin';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
//// !HL ////


//// ExLTTE ////
    // Insert ExLTTE //
    var validatorExLTTEAdd = $("#add-exltte-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            exltte_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"       
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            exltte_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "exltte_file_no"){
                error.insertAfter($("#msg_exltte_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#exltte_wizard').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorExLTTEAdd.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorExLTTEAdd.form()){
                $.post(site_url + 'loan/AddExLTTE_Loan', $("#add-exltte-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingexltteloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    
    // Edit ExLTTE //
    var validatorExLTTEEdit = $("#edit-exltte-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            exltte_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            exltte_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "exltte_file_no"){
                error.insertAfter($("#msg_exltte_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#exltte_wizard_edit').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorExLTTEEdit.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorExLTTEEdit.form()){
                $.post(site_url + 'loan/editExLTTE_Loan', $("#edit-exltte-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingexltteloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit ExLTTE Completed//
    var validatorExLTTEEditCompleted = $("#edit-exltte-form-completed").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#exltte_wizard_edit_completed').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorExLTTEEditCompleted.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorExLTTEEditCompleted.form()){
                $.post(site_url + 'loan/editExLTTE_Loan', $("#edit-exltte-form-completed").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/CompletedExLTTELoan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit ExLTTE Admin//
    var validatorExLTTEEditAdmin = $("#edit-exltte-form-admin").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#exltte_wizard_edit_admin').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorExLTTEEditAdmin.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorExLTTEEditAdmin.form()){
                $.post(site_url + 'loan/editExLTTE_Loan', $("#edit-exltte-form-admin").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingExLTTELoanAdmin';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
//// !ExLTTE ////


//// IL ////
    // Insert IL //
    var validatorILAdd = $("#add-il-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            il_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"       
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            il_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "il_file_no"){
                error.insertAfter($("#msg_il_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#il_wizard').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorILAdd.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorILAdd.form()){
                $.post(site_url + 'loan/AddIL_Loan', $("#add-il-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingilloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    
    // Edit IL //
    var validatorILEdit = $("#edit-il-form").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            il_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            il_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "il_file_no"){
                error.insertAfter($("#msg_il_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#il_wizard_edit').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorILEdit.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorILEdit.form()){
                $.post(site_url + 'loan/editIL_Loan', $("#edit-il-form").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingilloan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit IL Completed//
    var validatorILEditCompleted = $("#edit-il-form-completed").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#il_wizard_edit_completed').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorILEditCompleted.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorILEditCompleted.form()){
                $.post(site_url + 'loan/editIL_Loan', $("#edit-il-form-completed").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/CompletedILLoan';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
    
    // Edit IL Admin//
    var validatorILEditAdmin = $("#edit-il-form-admin").validate({
        errorElement: "div",
        rules: {
            applicant_name: "required",
            applicant_nic:"required",
            applicant_gender:"required",
            se_file_no:"required",
            joint_partner_nic:"required",
            jont_partner_name:"required",
            district:"required",
            division:"required",
            file_status:"required"
        },
        messages: {
            applicant_name: "Applicant Name Required",
            applicant_nic:"Applicant NIC Required",
            applicant_gender:"Please Select Gender",
            se_file_no:"File Number Required",
            joint_partner_nic:"Partner NIC Required",
            jont_partner_name:"Partner Name Required",
            district:"Applicant District Required",
            division:"Applicant Division Required",
            file_status:"File Status Required"
        },
        errorPlacement: function(error, element) {

            if(element.attr("name") == "applicant_nic"){
                error.insertAfter($("#msg_applicant_nic"));

            }else if(element.attr("name") == "se_file_no"){
                error.insertAfter($("#msg_se_file_no"));

            }else if(element.attr("name") == "joint_partner_nic"){
                error.insertAfter($("#msg_partner_nic"));
            }else{
                error.insertAfter(element);
            }
        }
    });
	
    // Initialize Smart Wizard      
    $('#il_wizard_edit_admin').smartWizard({
        transitionEffect:'slide',
        hideButtonsOnDisabled:true,
        transitionEffect: 'fade',
        onLeaveStep: function(){
            if(validatorILEditAdmin.form()){
                //$myform.trigger('submit');
                return true;
            }else{
                return false;
            }           
        },
        onFinish: function(){
            if(validatorILEditAdmin.form()){
                $.post(site_url + 'loan/editIL_Loan', $("#edit-il-form-admin").serialize(), function (msg) {

                    var messageType = msg.split('####')[0];
                    var message = msg.split('####')[1];

                    $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
//                    alert(msg);
                    if(messageType == 'msgsuccess'){
                        document.location.href = site_url + 'loan/InProgressingILLoanAdmin';
                    }
                });
                return true;
            } else {
                return false;
            }           
        }
    });
//// !IL ////


//// Other ////
// Add GR
    $("#add-loan-gr-form").validate({
        rules: {
            guarantor_name: "required",
            guarantor_nic:"required",
            guarantor_address:"required",
            guarantor_phone:"required"
        },
        messages: {
            guarantor_name: "Name required",
            guarantor_nic:"NIC required",
            guarantor_address:"Address required",
            guarantor_phone:  "Phone Number required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'loan/addLoanGR', $("#add-loan-gr-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var catid = msg.split('####')[2];
                var loanid = msg.split('####')[3];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    if(catid == '1'){
                        document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/GR';
                    } else if(catid == '2'){
                        document.location.href = site_url + 'loan/loadAttrSEPLoan/'+loanid+'/GR';
                    } else if(catid == '3'){
                        document.location.href = site_url + 'loan/loadAttrHLLoan/'+loanid+'/GR';
                    } else if(catid == '4'){
                        document.location.href = site_url + 'loan/loadAttrExLTTELoan/'+loanid+'/GR';
                    } else if(catid == '5'){
                        document.location.href = site_url + 'loan/loadAttrILLoan/'+loanid+'/GR';
                    }
                }
                    
            });
        }
    });
    
// Delete GR//    
    $('.delete-loan-gr').click(function() {
        if (confirm('Are you sure you want to Delete This Record ?')) {
            $.post(site_url + 'loan/deleteLoanGR/'+document.getElementById('loan_id').value, {grid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                var loanid = msg.split('####')[3];
//                alert(messageType);
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_gr_' + ID).fadeOut();
                $("#message").show('slow');
                setTimeout(function(){
                    $('#message').html('');
                }, 3000);
//                document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/GR';
            });
        } else {
            return false;
        }
    });
    
    // Add DSB
    $("#add-loan-dsb-form").validate({
        rules: {
            disbursement_amount: "required",
            disbursement_date:"required",
            disbursement_bank:"required",
            disbursement_branch:"required"
        },
        messages: {
            disbursement_amount: "Amount required",
            disbursement_date:"Date required",
            disbursement_bank:"Bank required",
            disbursement_branch:  "Branch required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'loan/addLoanDSB', $("#add-loan-dsb-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var catid = msg.split('####')[2];
                var loanid = msg.split('####')[3];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    if(catid == '1'){
                        document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/DSB';
                    } else if(catid == '2'){
                        document.location.href = site_url + 'loan/loadAttrSEPLoan/'+loanid+'/DSB';
                    } else if(catid == '3'){
                        document.location.href = site_url + 'loan/loadAttrHLLoan/'+loanid+'/DSB';
                    } else if(catid == '4'){
                        document.location.href = site_url + 'loan/loadAttrExLTTELoan/'+loanid+'/DSB';
                    } else if(catid == '5'){
                        document.location.href = site_url + 'loan/loadAttrILLoan/'+loanid+'/DSB';
                    }
                }  
            });
        }
    });
    
// Delete DSB//    
    $('.delete-loan-dsb').click(function() {
        if (confirm('Are you sure you want to Delete This Record ?')) {
            $.post(site_url + 'loan/deleteLoanDSB/'+document.getElementById('loan_id').value, {dsbid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                var loanid = msg.split('####')[3];
//                alert(messageType);
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_dsb_' + ID).fadeOut();
                $("#message").show('slow');
                setTimeout(function(){
                    $('#message').html('');
                }, 3000);
//                document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/DSB';
            });
        } else {
            return false;
        }
    });
    
    // Add NPA
    $("#add-loan-npa-form").validate({
        rules: {
            outstanding_amount: "required",
            npa_amount:"required",
            npa_number:"required",
            npa_remark:"required"
        },
        messages: {
            outstanding_amount: "Outstanding Amount required",
            npa_amount:"NPA Amount required",
            npa_number:"Address required",
            npa_remark:  "Phone Number required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'loan/addLoanNPA', $("#add-loan-npa-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var catid = msg.split('####')[2];
                var loanid = msg.split('####')[3];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    if(catid == '1'){
                        document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/NPA';
                    } else if(catid == '2'){
                        document.location.href = site_url + 'loan/loadAttrSEPLoan/'+loanid+'/NPA';
                    } else if(catid == '3'){
                        document.location.href = site_url + 'loan/loadAttrHLLoan/'+loanid+'/NPA';
                    } else if(catid == '4'){
                        document.location.href = site_url + 'loan/loadAttrExLTTELoan/'+loanid+'/NPA';
                    } else if(catid == '5'){
                        document.location.href = site_url + 'loan/loadAttrILLoan/'+loanid+'/NPA';
                    }
                }
                    
            });
        }
    });
    
// Delete NPA//    
    $('.delete-loan-npa').click(function() {
        if (confirm('Are you sure you want to Delete This Record ?')) {
            $.post(site_url + 'loan/deleteLoanNPA/'+document.getElementById('loan_id').value, {npaid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                var loanid = msg.split('####')[3];
//                alert(messageType);
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_npa_' + ID).fadeOut();
                $("#message").show('slow');
                setTimeout(function(){
                    $('#message').html('');
                }, 3000);
//                document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/NPA';
            });
        } else {
            return false;
        }
    });
    
    // Add RSD
    $("#add-loan-rsd-form").validate({
        rules: {
            reschedule_period: "required",
            reschedule_amount:"required",
            reschedule_date:"required",
            installemnt_amount:"required",
            legal_action:"required"
        },
        messages: {
            reschedule_period: "Reschedule Period required",
            reschedule_amount:"Amount required",
            reschedule_date:"Date required",
            installemnt_amount:  "Installment required",
            legal_action:  "Legal Action required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'loan/addLoanRSD', $("#add-loan-rsd-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var catid = msg.split('####')[2];
                var loanid = msg.split('####')[3];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    if(catid == '1'){
                        document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/RSD';
                    } else if(catid == '2'){
                        document.location.href = site_url + 'loan/loadAttrSEPLoan/'+loanid+'/RSD';
                    } else if(catid == '3'){
                        document.location.href = site_url + 'loan/loadAttrHLLoan/'+loanid+'/RSD';
                    } else if(catid == '4'){
                        document.location.href = site_url + 'loan/loadAttrExLTTELoan/'+loanid+'/RSD';
                    } else if(catid == '5'){
                        document.location.href = site_url + 'loan/loadAttrILLoan/'+loanid+'/RSD';
                    }
                }
            });
        }
    });
    
// Delete RSD//    
    $('.delete-loan-rsd').click(function() {
        if (confirm('Are you sure you want to Delete This Record ?')) {
            $.post(site_url + 'loan/deleteLoanRSD/'+document.getElementById('loan_id').value, {rsdid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                var loanid = msg.split('####')[3];
//                alert(messageType);
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_rsd_' + ID).fadeOut();
                $("#message").show('slow');
                setTimeout(function(){
                    $('#message').html('');
                }, 3000);
//                document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/RSD';
            });
        } else {
            return false;
        }
    });
    
    // Add RA
    $("#add-loan-ra-form").validate({
        rules: {
            ra_name: "required",
            ra_date:"required",
            ra_type:"required"
        },
        messages: {
            ra_name: "Name required",
            ra_date:"NIC required",
            ra_type:"Address required"
        },
        submitHandler: function (form) {
            $.post(site_url + 'loan/addLoanRA', $("#add-loan-ra-form").serialize(), function (msg) {
//                alert(msg);

                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var catid = msg.split('####')[2];
                var loanid = msg.split('####')[3];

                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');

                if(messageType == 'msgsuccess'){
                    if(catid == '1'){
                        document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/RA';
                    } else if(catid == '2'){
                        document.location.href = site_url + 'loan/loadAttrSEPLoan/'+loanid+'/RA';
                    } else if(catid == '3'){
                        document.location.href = site_url + 'loan/loadAttrHLLoan/'+loanid+'/RA';
                    } else if(catid == '4'){
                        document.location.href = site_url + 'loan/loadAttrExLTTELoan/'+loanid+'/RA';
                    } else if(catid == '5'){
                        document.location.href = site_url + 'loan/loadAttrILLoan/'+loanid+'/RA';
                    }
                }
                    
            });
        }
    });
    
// Delete RA//    
    $('.delete-loan-ra').click(function() {
        if (confirm('Are you sure you want to Delete This Record ?')) {
            $.post(site_url + 'loan/deleteLoanRA/'+document.getElementById('loan_id').value, {raid: $(this).attr('id')}, function(msg) {
//                alert(msg);
                var messageType = msg.split('####')[0];
                var message = msg.split('####')[1];
                var ID = msg.split('####')[2];
                var loanid = msg.split('####')[3];
//                alert(messageType);
                $('#message').html('<div class="notibar ' + messageType + '"><a class="close"></a><p>' + message + '</p></div>');
                $('#row_ra_' + ID).fadeOut();
                $("#message").show('slow');
                setTimeout(function(){
                    $('#message').html('');
                }, 3000);
//                document.location.href = site_url + 'loan/loadAttrSELoan/'+loanid+'/RA';
            });
        } else {
            return false;
        }
    });
//// !Other ////

 });


//// SE ////
function checkseNIC(app_id){
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSENIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testSENIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checksepartnerNIC(app_id){
    $('#msg_partner_nic').html('').hide();
    var nic = $('#joint_partner_nic').val();
    if(!nic){
        $('#msg_partner_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_partner_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSENIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_partner_nic').css('color', 'green');
                    $('#msg_partner_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_partner_nic').html('').hide();
                        $('#msg_partner_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkseFileNo(se_id){
    $('#msg_se_file_no').html('').hide();
    var fileNo = $('#se_file_no').val();
    if(!fileNo){
        $('#msg_se_file_no').html('File Number Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                alert(xmlhttp.responseText);
                if(xmlhttp.responseText == 1){
                    $('#msg_se_file_no').html('File Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSEFileNo/'+fileNo+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_se_file_no').css('color', 'green');
                    $('#msg_se_file_no').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_se_file_no').html('').hide();
                        $('#msg_se_file_no').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testseFileNo/"+fileNo+"/"+se_id,true);
        xmlhttp.send();
    }
}
//// !SE ////


//// SEP ////
function checksepNIC(app_id){
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSEPNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testSEPNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkseppartnerNIC(app_id){
    $('#msg_partner_nic').html('').hide();
    var nic = $('#joint_partner_nic').val();
    if(!nic){
        $('#msg_partner_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_partner_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSEPNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_partner_nic').css('color', 'green');
                    $('#msg_partner_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_partner_nic').html('').hide();
                        $('#msg_partner_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checksepFileNo(sep_id){
    $('#msg_sep_file_no').html('').hide();
    var fileNo = $('#sep_file_no').val();
    if(!fileNo){
        $('#msg_sep_file_no').html('File Number Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_sep_file_no').html('File Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listSEPFileNo/'+fileNo+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_sep_file_no').css('color', 'green');
                    $('#msg_sep_file_no').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_sep_file_no').html('').hide();
                        $('#msg_sep_file_no').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testsepFileNo/"+fileNo+"/"+sep_id,true);
        xmlhttp.send();
    }
}
//// !SEP ////


//// HL ////
function checkhlNIC(app_id){
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listHLNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testHLNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkhlpartnerNIC(app_id){
    $('#msg_partner_nic').html('').hide();
    var nic = $('#joint_partner_nic').val();
    if(!nic){
        $('#msg_partner_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_partner_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listHLNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_partner_nic').css('color', 'green');
                    $('#msg_partner_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_partner_nic').html('').hide();
                        $('#msg_partner_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkhlFileNo(hl_id){
    $('#msg_hl_file_no').html('').hide();
    var fileNo = $('#hl_file_no').val();
    if(!fileNo){
        $('#msg_hl_file_no').html('File Number Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_hl_file_no').html('File Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listHLFileNo/'+fileNo+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_hl_file_no').css('color', 'green');
                    $('#msg_hl_file_no').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_hl_file_no').html('').hide();
                        $('#msg_hl_file_no').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testhlFileNo/"+fileNo+"/"+hl_id,true);
        xmlhttp.send();
    }
}
//// !HL ////


//// ExLTTE ////
function checkexltteNIC(app_id){
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listExLTTENIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testExLTTENIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkexlttepartnerNIC(app_id){
    $('#msg_partner_nic').html('').hide();
    var nic = $('#joint_partner_nic').val();
    if(!nic){
        $('#msg_partner_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_partner_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listExLTTENIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_partner_nic').css('color', 'green');
                    $('#msg_partner_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_partner_nic').html('').hide();
                        $('#msg_partner_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkexltteFileNo(exltte_id){
    $('#msg_exltte_file_no').html('').hide();
    var fileNo = $('#exltte_file_no').val();
    if(!fileNo){
        $('#msg_exltte_file_no').html('File Number Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_exltte_file_no').html('File Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listExLTTEFileNo/'+fileNo+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_exltte_file_no').css('color', 'green');
                    $('#msg_exltte_file_no').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_exltte_file_no').html('').hide();
                        $('#msg_exltte_file_no').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testexltteFileNo/"+fileNo+"/"+exltte_id,true);
        xmlhttp.send();
    }
}
//// !ExLTTE ////

//// IL ////
function checkilNIC(app_id){
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listILNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testILNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkilpartnerNIC(app_id){
    $('#msg_partner_nic').html('').hide();
    var nic = $('#joint_partner_nic').val();
    if(!nic){
        $('#msg_partner_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_partner_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listILNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_partner_nic').css('color', 'green');
                    $('#msg_partner_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_partner_nic').html('').hide();
                        $('#msg_partner_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function checkilFileNo(il_id){
    $('#msg_il_file_no').html('').hide();
    var fileNo = $('#il_file_no').val();
    if(!fileNo){
        $('#msg_il_file_no').html('File Number Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_il_file_no').html('File Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/listILFileNo/'+fileNo+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_il_file_no').css('color', 'green');
                    $('#msg_il_file_no').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_il_file_no').html('').hide();
                        $('#msg_il_file_no').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testilFileNo/"+fileNo+"/"+il_id,true);
        xmlhttp.send();
    }
}
//// !IL ////


//// Other ////
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

function checkloanNIC(app_id){
//    alert('Here');
    $('#msg_applicant_nic').html('').hide();
    var nic = $('#applicant_nic').val();
    if(!nic){
        $('#msg_applicant_nic').html('NIC Required').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert(xmlhttp.responseText);
                if(xmlhttp.responseText == 1){
                    $('#msg_applicant_nic').html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/viewMapNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_applicant_nic').css('color', 'green');
                    $('#msg_applicant_nic').html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_applicant_nic').html('').hide();
                        $('#msg_applicant_nic').css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}

function loadDivisions(district_id, city_id){
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("division").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET",site_url+"loan/getDivisions/"+district_id+"/"+city_id,true);
    xmlhttp.send();
}


function loadsuboccupation(occupation_id){
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            document.getElementById("occupationsub").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET",site_url+"loan/getsuboccupation/"+occupation_id,true);
    xmlhttp.send();
}
//// !Other ////
// Email Validation














function testNICDependant(count, app_id){
    $('#msg_dependants_nic_'+count).html('').hide();
    var nic = document.getElementById('dependants['+count+'][nic]').value;
    if(!nic){
        $('#msg_dependants_nic_'+count).html('NIC Required').show();
    } else if(nic.length != 10) {
        $('#msg_dependants_nic_'+count).html('Must be 10 characters long').show();
    } else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        } else {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        } xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
//                alert();
                if(xmlhttp.responseText == 1){
                    $('#msg_dependants_nic_'+count).html('NIC Number Already Exists' + '<br/><a class="links" style="color:orange; font-size:15px;" href="'+site_url+'loan/viewMapNIC/'+nic+'" target="_blank">Show Record</a>').show();
                } else {
                    $('#msg_dependants_nic_'+count).css('color', 'green');
                    $('#msg_dependants_nic_'+count).html('You are good to go').show();
                    setTimeout(function(){
                        $('#msg_dependants_nic_'+count).html('').hide();
                        $('#msg_dependants_nic_'+count).css('color', 'red');
                    }, 3000);
                }
            }
        }
        xmlhttp.open("GET",site_url+"loan/testNIC/"+nic+"/"+app_id,true);
        xmlhttp.send();
    }
}