<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "Portfolio";

// Create DB connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST values
    $name = $conn->real_escape_string($_POST["name"]);
    $email = $conn->real_escape_string($_POST["email"]);
    $phone = $conn->real_escape_string($_POST["phone"]);
    $subject = $conn->real_escape_string($_POST["subject"]);
    $message = $conn->real_escape_string($_POST["message"]);

    // Insert into DB
    $sql = "INSERT INTO data (name, email, phone, subject, message)
            VALUES ('$name', '$email', '$phone', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Redirect back to index with success message
        header("Location: index.php?submitted=true#contact");
        exit();
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
}
?>
