import html from './html.js';
import questionApi from './question-api.js';
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <img class="question-image" src="../assets/mount-tabor.jpg" alt="mount-tabor"/>
    <div class="question">Hiking is a very taxing activity! Portlanders tend to be very fit. What form of exercise do you prefer?</div>
    <form id="hiking-form" class="answers-form">
        <div class="answer">
            <input type="radio" name="answer" id="answer1" value="1">
            <label for="answer1">I'm a member of a climbing gym.</label>
        </div>
        <div class="answer">
            <input type="radio" name="answer" id="answer2" value="2">
            <label for="answer2">I do CrossFit and I’m vegan, yaaaa so I'm pretty fit!</label>
        </div>
        <div class="answer">
            <input type="radio" name="answer" id="answer3" value="3">
            <label for="answer3">Yaaaa, I do Vinyasa power yoga to align my chakras.</label>
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