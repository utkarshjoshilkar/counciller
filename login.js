function logout() {  
    // For demonstration purposes, we'll just alert the user and reload the page.  
    alert("You have logged out!");  
    // Optionally, you might redirect to a different page  
    // window.location.href = 'index.html';  
    location.reload(); // Reloads the current page  
}  

document.addEventListener('DOMContentLoaded', function() {  
    const emailInput = document.querySelector('.email');  
    const passwordInput = document.querySelector('.password');  
    const loginButton = document.querySelector('.submit-btn');  

    // Add input focus animations  
    const inputs = [emailInput, passwordInput];  
    
    inputs.forEach(input => {  
        input.addEventListener('focus', () => {  
            input.classList.add('input-focus');  
        });  

        input.addEventListener('blur', () => {  
            if (input.value.trim() === "") {  
                input.classList.remove('input-focus');  
            }  
        });  
    });  

    // Add a click event listener with animation for the login button  
    loginButton.addEventListener('click', () => {  
        // Typically you would send a login request here  
        showAlert("Logging in...");  // Show an alert (you can customize this)  
    });  
});  

// Function to display alerts with an animation  
function showAlert(message) {  
    const alertBox = document.querySelector('.alert');  
    alertBox.textContent = message;  
    const alertContainer = document.querySelector('.alert-box');  
    alertContainer.style.display = 'block';  

    // Remove alert after some time  
    setTimeout(() => {  
        alertContainer.style.display = 'none';  
    }, 3000); // Adjust the duration as needed  
}