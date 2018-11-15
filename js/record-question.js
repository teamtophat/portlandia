import html from './html.js'; 
import questionApi from './question-api.js'; 
import checkGame from './helpers.js';

function makeTemplate() {
    return html`
    <form id="record-form">
                <div>
                <label for="answer1">I'm just here to look. I buy all of my music on iTunes.</label>
                <input type="radio" name="answer" id="answer1" value="1">
                </div>
                <div>
                <label for="answer2">I'm looking for an indie chillwave band that's not mainstream yet.</label>
                <input type="radio" name="answer" id="answer2" value="2">
                </div>
                <div>
                <label for="answer3">I actually make my own music. My band practices out of my friend’s garage.</label>
                <input type="radio" name="answer" id="answer3" value="3">
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
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
            // window.location.href = '/main.html';
        });

        return dom; 

    }
}

const app = new RecordForm().render();
const root = document.getElementById('root');

root.appendChild(app); 


