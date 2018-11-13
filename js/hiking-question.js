const hikingForm = document.getElementById('hiking-form');

function hikingSubmit() {
    hikingForm.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

hikingSubmit(); 