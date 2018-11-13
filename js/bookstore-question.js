const bookstoreForm = document.getElementById('bookstore-form');

function bookstoreSubmit() {
    bookstoreForm.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

bookstoreSubmit(); 