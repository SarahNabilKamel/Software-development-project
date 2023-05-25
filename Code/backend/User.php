<?php
class User
{
    public $name;
    public $email;
    public $role;
    public $password;
    
    public function notFound () {
        $this->status = false;
    }
}
?>
