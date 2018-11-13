const form = document.getElementById('coffee-form');

// export default class Submit{
//     constructor(onSubmit){
//         this.onSubmit = onSubmit;
//     }

//     render(){
function submit() {
    form.addEventListener('submit', event => {
        console.log('hello'); 
        
        event.preventDefault();
        window.location.href = '/welcome.html';
    });

}      

submit();

        // this.onSubmit();

//     }

// }  