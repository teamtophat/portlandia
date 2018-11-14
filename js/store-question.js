import html from './html.js';
import questionApi from './question-api.js';

// import questionApi from './question-api.js';

function makeTemplate() {
    return html`
        <form id="store-form">
            <div>
                <label for="answer1">I would like an umbrella made of recycled plastic.</label>
                <input type="radio" name="answer" id="answer1" value="1">
            </div>
            <div>
                <label for="answer2">Lightly perforated rain jacket</label>
                <input type="radio" name="answer" id="answer2" value="2">
            </div>
            <div>
                <label for="answer3">Nah, I’m good. I don’t need anything. A little rain never hurt anybody!</label>
                <input type="radio" name="answer" id="answer3" value="3">
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    `;
}      

export default class StoreForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render() {
        let dom = makeTemplate();
        const storeForm = dom.querySelector('#store-form');
        const elements = storeForm.elements;
        
        storeForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value);
            window.location.href = '/main.html';
        });
        return dom;
    }
}

const app = new StoreForm().render();
const root = document.getElementById('root');

root.appendChild(app);