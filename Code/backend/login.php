<?php
session_start();
require_once "connection.php";
require_once "../User.php";
if($_SERVER['REQUEST_METHOD']=='POST'){

        
    $email = $_POST['email'];
    $password = $_POST['password'];
    if(isset($email,$password)){
        $select = $connection->prepare('SELECT * FROM users');
        $select->execute();
        $users = $select->fetchAll(PDO::FETCH_CLASS, 'User');
        foreach($users as $user){ 
            if ($user->email ==$email && $user->password == $password) {
                if($user->role == "doctor")
                    header("Location: ../Doctor.html");
                if($user->role == "receptionist")
                    header("Location: ../Respation.html");
                if($user->role == "ptient")
                    header("Location: ../Patient.html");      
            }
        }    
    }else{
      header("location: ../index.html");
    } 
  }
else
{
  echo "NOT VALIED !!" ;
}
         
?>
