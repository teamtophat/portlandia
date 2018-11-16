import html from './html.js'; 
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <section class ="content">
        <img class="question-image" src="../assets/womennwomen.jpg" alt="bookstore"/>
        <div class="question">
            I see you need a book for your course in neoliberal ideology that intersects with the military industrial complex. 
            Instead of pointing, can you demonstrate with your eyes what you're looking for?
        </div>
        <div id="answer-bullets">
            <form id="bookstore-form" class="answers-form">
                <div class="answer">
                    <input type="radio" name="answer" id="answer2" value="2">
                    <label for="answer2">Is this not Powell's??</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer1" value="1">
                    <label for="answer1">Military industrial whaaaaat??? I just wanted a book on dogs.</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer3" value="3">
                    <label for="answer3">Trick question. I don’t need to read a book on that. I’m just gonna act like I know what I’m talking about.</label>
                </div>
                <div>
                    <button class="question-button">Submit</button>
                </div>
            </form>
        </div>
    </section>
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