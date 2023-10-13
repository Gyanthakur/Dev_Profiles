<?php

$servername="127.0.0.1";
$username="root";
$password="";
$database="portfolio";

$conn=mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
    echo "connection error";
}else{
    echo "successfully connect";
}
if($_SERVER[REQUEST_METHOD]=='POST')
{
   $name= $_POST['name'];
   $email= $_POST['email'];
   $number= $_POST['number'];
   $address= $_POST['add'];
   $msg= $_POST['message'];

   echo $name;
}
?>