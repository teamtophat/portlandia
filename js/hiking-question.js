import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <form id="hiking-form">
        <div>
            <label for="answer1">I'm a member of a climbing gym.</label>
            <input type="radio" name="answer" id="answer1" value="1">
        </div>
        <div>
            <label for="answer2">I do CrossFit and I’m vegan, yaaaa so I'm pretty fit!</label>
            <input type="radio" name="answer" id="answer2" value="2">
        </div>
        <div>
            <label for="answer3">Yaaaa, I do Vinyasa power yoga to align my chakras.</label>
            <input type="radio" name="answer" id="answer3" value="3">
        </div>
        <div>
            <button>Submit</button>
        </div>
    </form>
    `;
}
export default class HikingForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render() {
        let dom = makeTemplate();
        const hikingForm = dom.querySelector('#hiking-form');
        const elements = hikingForm.elements;

        hikingForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value);
            checkGame();
        });
        return dom;
    }
}

const app = new HikingForm().render();
const root = document.getElementById('root');

root.appendChild(app);