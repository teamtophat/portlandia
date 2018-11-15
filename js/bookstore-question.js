import html from './html.js'; 
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
        <form id="bookstore-form">
            <div>
                <label for="answer1">Military industrial whaaaaat??? I just wanted a book on dogs.</label>
                <input type="radio" name="answer" id="answer1" value="1">
            </div>
            <div>
                <label for="answer2">Is this not Powell's??</label>
                <input type="radio" name="answer" id="answer2" value="2">
            </div>
            <div>
                <label for="answer3">Trick question. I don’t need to read a book on that. I’m just gonna act like I know what I’m talking about.</label>
                <input type="radio" name="answer" id="answer3" value="3">
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    `;
}
export default class BookstoreForm {
    constructor(onAdd) {
        this.onAdd = onAdd; 
    }
    render(){
        let dom = makeTemplate();
        const bookstoreForm = dom.querySelector('#bookstore-form');
        const elements = bookstoreForm.elements;
                
        bookstoreForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value); 
            checkGame();
        }); 
        return dom; 
    }
}

const app = new BookstoreForm().render(); 
const root = document.getElementById('root'); 

root.appendChild(app); 