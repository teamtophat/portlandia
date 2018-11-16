import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <section class="content">
        <img class="question-image" src="../assets/columbia.jpg" alt="columbia-store"/>
        <div class="question">It looks like it’ll start raining soon. What gear are you looking for?</div>
        <div id="answer-bullets">
            <form id="store-form" class="answers-form">
                <div class="answer">
                    <input type="radio" name="answer" id="answer2" value="2">
                    <label for="answer2">Lightly perforated rain jacket.</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer1" value="1">
                    <label for="answer1">I would like an umbrella made of recycled plastic.</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer3" value="3">
                    <label for="answer3">Nah, I’m good. I don’t need anything. A little rain never hurt anybody!</label>
                </div>
                <div id="center-button">
                    <button class="question-button">Submit</button>
                </div>
            </form>
        </div>
    </section>
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
            checkGame(); 
        });

        return dom;
    }
}

const app = new StoreForm().render();
const root = document.getElementById('root');
root.appendChild(app);