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

    public function getComment(){

        $query =$this->db->query("SELECT *, c.date as 'c_date' , c.id as 'c_id' FROM comment c , users u where  u.email=c.user");

        return $query->result();

    }

    function register($fname,$lname,$mail,$password){

        $this->db->select('*');
        $this->db->from('users');
        $this->db->where(array('email'=> $mail));
        $query = $this->db->get();

        if(!$query->result()){

            $data = array(

                'email'=>$mail,
                'password'=>md5($password),//encrypted password
                'fname'=>$fname,
                'lname'=>$lname,
                'date'=>date('Y-m-d')

            );

            $this->db->insert('users',$data);

            return "success";

        }else{
            return "error";
        }
    }

    function login($email,$password){

        $this->db->select('*');
        $this->db->from('users');
        $this->db->where(array('email'=> $email));
        $query = $this->db->get();

        if($query->result()){

            $user= $query->row();

                if ($user->password==md5($password)){
                    $_SESSION['email'] = $user->email;
                    return "success";
                }else{
                    return "error2";
                }

        }else{
            return "error";
        }
    }

    function comment_1($comment,$user){

        $data = array(

            'comment'=>$comment,
            'type'=>1,
            'user'=>$user,
            'date'=>date('Y-m-d')

        );

        $this->db->insert('comment',$data);

        return "success";

    }

    function comment_2($comment,$user){

        $data = array(

            'comment'=>$comment,
            'type'=>2,
            'user'=>$user,
            'date'=>date('Y-m-d')

        );

        $this->db->insert('comment',$data);

        return "success";

    }

    public function delete_comment($id){

        $this->db->where('id',$id);

        return $this->db->delete('comment');

    }

}

