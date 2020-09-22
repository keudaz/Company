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

    public function getDisease($id){

        $query =$this->db->query("SELECT * FROM Recommendation r,Disease d where r.id=d.r_id AND r.id=".$id);

        return $query->result();

    }
}

