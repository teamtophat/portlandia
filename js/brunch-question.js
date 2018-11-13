const brunchForm = document.getElementById('brunch-form');

function brunchSubmit() {
    brunchForm.addEventListener('submit', event => {
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

brunchSubmit();