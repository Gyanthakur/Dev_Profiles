<?php
$conn = mysqli_connect('localhost', 'root', '', 'contact_ab') or die('connection Failed');

if(isset($_POST['send'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $number= mysqli_real_escape_string($conn, $_POST['number']);
    $msg = mysqli_real_escape_string($conn, $_POST['message']);
    $select_message = mysqli_query($conn, "SELECT * FORM 'contact_form' WHERE name = '$name' AND email ='$email' AND number = '$number' AND message = '$msg'") or die('query failed');
    if(mysqli_num_rows($select_message) > 0){
        $message[] = 'message sent already';
    }
    else{
         mysqli_query($conn, "INSERT INTO 'contact_form'(name, email, number, message ) VALUES('$name', '$email', '$number', '$msg')") or die('query failed');
         $message[] = 'message sent successfully';
    }    
}
?>













