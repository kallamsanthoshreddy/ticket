<?php
// Database connection parameters
$servername = "localhost"; // Change this if your database is hosted elsewhere
$username = "root"; // Your MySQL username
$password = "rrr"; // Your MySQL password
$database = "database"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Extract data from form
$name = $_POST['name'];
$age = $_POST['age'];
$gender = $_POST['gender'];

// SQL query to insert data into the table
$sql = "INSERT INTO details ( name, age, gender) VALUES ('$name', '$age', '$gender')";

// Check if the query executed successfully
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close connection
$conn->close();
?>