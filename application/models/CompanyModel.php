<?php

class CompanyModel extends CI_Model
{
    /*function of retrieve all data */
    public function getData()
    {

        $this->db->select('*');
        $this->db->from('Recommendation');
        $query = $this->db->get();

        return $query->result();

    }
}

