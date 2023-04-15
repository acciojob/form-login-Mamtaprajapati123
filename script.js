function getFormvalue() {
  // Get the input element for first name
  var firstNameInput = document.getElementById("fname");
  // Get the input element for last name
  var lastNameInput = document.getElementById("lname");
  
  // Retrieve the values of first and last name
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  
  // Display the values using alert
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
