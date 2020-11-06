<?php

class MainController extends CI_Controller
{

    /*constructor function */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('CompanyModel');
    }


    public function Main()
    {
        $data['Recommendation'] = $this->CompanyModel->getData();

        $this->load->view('Main',$data);
    }

    public function Disease()
    {

        $data['disease'] = $this->CompanyModel->getDisease($_GET['id']);

        $data['comment'] = $this->CompanyModel->getComment();

        $this->load->view('disease',$data);
    }

    public function login()
    {

        $this->load->view('login');
    }

    public function register()
    {

        $this->load->view('register');
    }

    public function register_data()
    {

        $res = $this->CompanyModel->register($this->input->post('fname'),$this->input->post('lname'),$this->input->post('email'),$this->input->post('password'));

        if($res){
            echo $res;
        }
    }

    public function login_data(){
        $res = $this->CompanyModel->login($this->input->post('email'),$this->input->post('password'));

        if($res){
            echo $res;
        }
    }

    public function logout()
    {

        session_destroy();

        unset($_SESSION);

        $this->login();

    }

    public function comment_1(){
        if (isset($_SESSION['email'])){
            $res = $this->CompanyModel->comment_1($this->input->post('comment'),$_SESSION['email']);

            if($res){
                echo $res;
            }
        }else {
            echo "login";
        }
    }

    public function comment_2(){
        if (isset($_SESSION['email'])){
            $res = $this->CompanyModel->comment_2($this->input->post('comment'),$_SESSION['email']);

            if($res){
                echo $res;
            }
        }else {
            echo "login";
        }
    }

}