const recordForm = document.getElementById('record-form');

function recordSubmit() {
    recordForm.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

recordSubmit(); 
