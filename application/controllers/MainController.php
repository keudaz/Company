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

        $this->load->view('disease',$data);
    }

}