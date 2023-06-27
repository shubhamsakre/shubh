<?php
    $name=$_POST['name'];
    $email=$_POST['email'];
    $Subject=$_POST['Subject'];
    $messages=$_POST['messages'];

    //connection
    $conn= new mysqli('localhost','root','','contactform');
    if($conn->connect_error){
        die('connection failed :'.$conn->connect_error);
    }else
    {
        $stmt=$conn->prepare('insert into registeration (name,email,Subject,messages) values(?,?,?,?)');
        $stmt->bind_param("ssss",$name,$email,$Subject,$messages);
        $stmt->execute();
        echo"registeration succesfull";
        $stmt->close();
        $conn->close();
    }

?>