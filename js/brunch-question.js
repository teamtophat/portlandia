import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <section class="content">
        <img class="question-image" src="../assets/brunchline.jpg" alt="brunch-line"/>
         <div class="question">
            Currently the wait for brunch is 45 mins to one and a half hours. Would you like to put your name on the list?
        </div>
        <form id="brunch-form" class="answers-form">
            <div class="answer">
                <input type="radio" name="answer" id="answer1" value="1">
                <label for="answer1">No! That wait is ridiculous! I’ll just make brunch at home.</label>
            </div>
            <div class="answer">
                <input type="radio" name="answer" id="answer2" value="2">
                <label for="answer2">I’m gonna go find another brunch place.</label>
            </div>
            <div class="answer">
                <input type="radio" name="answer" id="answer3" value="3">
                <label for="answer3">Of course! Brunch is the highlight of my weekend! How else am I gonna post it on my IG???</label>
            </div>
            <div class="question-button">
                <button id="brunch-question">Submit</button>
            </div>
        </form>
    </section>
    `;
}

export default class BrunchForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render() {
        let dom = makeTemplate();
        const brunchForm = dom.querySelector('#brunch-form');
        const elements = brunchForm.elements;

        brunchForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value);
            checkGame();
        });
        return dom;
    }
}

const app = new BrunchForm().render();
const root = document.getElementById('root');
root.appendChild(app);