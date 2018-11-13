const storeForm = document.getElementById('store-form');
function storeSubmit() {
    storeForm.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

storeSubmit(); 