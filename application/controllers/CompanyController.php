<?php

class CompanyController extends CI_Controller{

    public function __construct() {
        parent::__construct();
        $this->load->model('CompanyModel');
    }

    public function Register(){

        if (isset($_POST['name'])){

            $name = $_POST['name'];
            $address = $_POST['address'];
            $gender = $_POST['gender'];
            $relationship = $_POST['relationship'];
            $phone = $_POST['phone'];

            if (isset($_POST['css'])){
                $css = 1;
            }else{
                $css = 0;
            }

            if (isset($_POST['html'])){
                $html = 1;
            }else{
                $html = 0;
            }

            if (isset($_POST['javascript'])){
                $javascript = 1;
            }else{
                $javascript = 0;
            }

            if (isset($_POST['php'])){
                $php = 1;
            }else{
                $php = 0;
            }
            $this->CompanyModel->register_employee($name,$gender,$relationship,$address,$html,$css,$javascript,$php,$phone);

        }

        $this->load->view('Register');
    }
}