const coffeeForm = document.getElementById('coffee-form');


function coffeeSubmit() {
    coffeeForm.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/main.html';
    });

}      

coffeeSubmit();


// const storeForm = document.getElementById('store-form');
// function storeSubmit() {
//     storeForm.addEventListener('click', event => {
//         console.log('hello'); 
        
//         event.preventDefault();
//         window.location.href = '/main.html';
//     });

// }      

// storeSubmit(); 



