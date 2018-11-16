import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js'; 

function makeTemplate() {
    return html`
    <section class="content">
        <img class="question-image" src="../assets/stumptown.jpg" alt="stumptown-coffee"/>  
        <div class="question">What would you like to drink?</div>
        <form id="coffee-form" class="answers-form">
            <div class="answer">
                <input type="radio" name="answer" id="answer1" value="1">
                <label for="answer1">Grande Frappuccino.</label>
            </div>
            <div class="answer">
                <input type="radio" name="answer" id="answer2" value="2">
                <label for="answer2">Flat White.</label>
            </div>
            <div class="answer">
                <input type="radio" name="answer" id="answer3" value="3">
                <label for="answer3">Single origin 12-ounce Ecuadorian roast with pine nut milk.</label>
            </div>
            <div class="question-button">
                <button>Submit</button>
            </div>
        </form>
    </section>
    `;
}

export default class CoffeeForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render(){
        let dom = makeTemplate();
        const coffeeForm = dom.querySelector('#coffee-form');
        const elements = coffeeForm.elements;

        coffeeForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value);
            checkGame();
        });
        return dom;
    }
}

const app = new CoffeeForm().render();
const root = document.getElementById('root');
root.appendChild(app);