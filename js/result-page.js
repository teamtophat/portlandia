import html from './html.js'; 
import questionApi from './question-api.js'; 
// organize like-imports together
import Portlander from './result-portlander.js'; 
import Poser from './result-poser.js';
import Californian from './result-californian.js';

function makeTemplate() {
    return html`
        <div>
            <section></section>
        </div>
        <button>Play Again!</button>
        <a href="profiles.html">About Us </a>
    `;
}

export default class ResultPage {
    constructor() {
        this.scores = questionApi.getResults();
    }
    render() {
        let dom = makeTemplate(); 
        // camelCase
        let totalScore = this.scores;
        
        // you just need one section!
        const section = dom.querySelector('section');

        // only make what varies conditional:
        let result = null;
        if(totalScore <= 10) {
            result = new Californian();
        } else if(totalScore >= 11 && totalScore <= 16) {
            result = new Poser();
        } else {
            result = new Portlander();
        }

        section.appendChild(result.render());

        // button, not form
        const button = dom.querySelector('button');

        button.addEventListener('click', () => {
            questionApi.reset(); 
            window.location = './index.html'; 
        });

        return dom;  
    }
}

const resultPage = new ResultPage();
const root = document.getElementById('root');  
root.appendChild(resultPage.render()); 