import html from './html.js'; 
import questionApi from './question-api.js'; 
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <section class="content">
        <img class="question-image" src="../assets/record-store.jpg" alt="everyday-music"/>
        <div class="question">What genre of music do you listen to?</div>
        <div id="answer-bullets">
            <form id="record-form" class="answers-form">
                <div class="answer">
                    <input type="radio" name="answer" id="answer1" value="1">
                    <label for="answer1">I'm just here to look. I buy all of my music on iTunes.</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer2" value="2">
                    <label for="answer2">I'm looking for an indie chillwave band that's not mainstream yet.</label>
                </div>
                <div class="answer">
                    <input type="radio" name="answer" id="answer3" value="3">
                    <label for="answer3">I actually make my own music. My band practices out of my friend’s garage.</label>
                </div>
                <div>
                    <button class="question-button">Submit</button>
                </div>
            </form>
        </div>
    </section>
    `; 
}
export default class RecordForm {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }
    render(){
        let dom = makeTemplate(); 
        const recordForm = dom.querySelector('#record-form'); 
        const elements = recordForm.elements;  

        recordForm.addEventListener('submit', event => {
            event.preventDefault();
            questionApi.add(elements.answer.value); 
            checkGame(); 
        });

        return dom; 
    }
}

const app = new RecordForm().render();
const root = document.getElementById('root');
root.appendChild(app);