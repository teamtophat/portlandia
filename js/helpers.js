import questionApi from './question-api.js';

export default function checkGame() {
    const check = questionApi.getAll(); 
            
    if(check.length === 6) window.location.href = '../result.html';  
    else window.location.href = '../main.html';
}   
