<?php
$servername = "localhost";
$username = "root";
$password ="";
$dbname = "Portfolio";

$conn = mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}

$sql = "CREATE TABLE data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT
)";

if(mysqli_query($conn,$sql)){
    echo "Table students created successfully";
}else{
    echo "Error! creating table: ".mysqli_error($conn);
}
mysqli_close($conn);
?>