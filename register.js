document.querySelectorAll('.submit-btn').forEach(button => {  
    button.addEventListener('click', function (event) {  
        event.preventDefault();  
        const inputs = this.closest('.form').querySelectorAll('.input-field');  
        let valid = true;  
        inputs.forEach(input => {  
            if (!input.checkValidity()) {  
                valid = false;  
                input.classList.add('error');  
                input.reportValidity(); // Show validation message  
            } else {  
                input.classList.remove('error');  
            }  
        });  

        if (valid) {  
            alert('Registration successful!');  
            // Here, you can handle form data submission to server here  
        }  
    });  
});  

// Adding some cool animations on form load  
window.onload = function () {  
    const form = document.querySelector('.form');  
    form.style.opacity = 0;  
    form.style.transform = 'translateY(20px)';  
    setTimeout(() => {  
        form.style.transition = 'opacity 0.5s, transform 0.5s';  
        form.style.opacity = 1;  
        form.style.transform = 'translateY(0)';  
    }, 100);  
};