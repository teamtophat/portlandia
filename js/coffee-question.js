import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js'; 

function makeTemplate() {
    return html`
        <form id="coffee-form">
            <div>
                <label for="answer1">Grande Frappuccino.</label>
                <input type="radio" name="answer" id="answer1" value="1">
            </div>
            <div>
                <label for="answer2">Flat White.</label>
                <input type="radio" name="answer" id="answer2" value="2">
            </div>
            <div>
                <label for="answer3">Single origin 12-ounce Ecuadorian roast with pine nut milk.</label>
                <input type="radio" name="answer" id="answer3" value="3">
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
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