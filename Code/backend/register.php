<?php
session_start();
require_once "connection.php";
    if($_SERVER['REQUEST_METHOD']=='POST'){

        
      $name = $_POST['name'];     
      $email = $_POST['email'];
      $role = $_POST['role'];
      $password = $_POST['password'];
      $cpassword = $_POST['cpassword'];
      if(isset($name,$email,$role,$password,$cpassword) && $password == $cpassword){
          $insert = $connection->prepare('INSERT INTO users (name,email,role,password) VALUES (?,?,?,?)');
          $insert->execute([$name,$email,$role,$password]);
        //   echo "connection done!";

          header("Location: ../login.html");
        
      }else{
        header("location: ../index.html");
      } 
    }
else
{
    echo "NOT VALIED !!" ;
}
?>
