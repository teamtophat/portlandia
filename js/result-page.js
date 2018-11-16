import html from './html.js'; 
import Portlander from './result-portlander.js'; 
import questionApi from './question-api.js'; 
import Poser from './result-poser.js';
import Californian from './result-californian.js';

function makeTemplate() {
    return html`
        <div>
            <section id="californian"></section>
            <section id="poser"></section>
            <section id="portlander"></section>
        </div>
        <button id="play-again">Play Again!</button>
        <a href="profile.html">About Us </a>
    `;
}

export default class ResultPage {
    constructor() {
        this.scores = questionApi.getResults();
    }
    render() {
        let dom = makeTemplate(); 
        let totalscore = this.scores;
        
        if(totalscore <= 10) {
            const californianSection = dom.getElementById('californian');
            const californian = new Californian();
            californianSection.appendChild(californian.render());
        } else if(totalscore >= 11 && totalscore <= 16) {
            const poserSection = dom.getElementById('poser');
            const poser = new Poser();
            poserSection.appendChild(poser.render());
        } else {
            const portlanderSection = dom.getElementById('portlander'); 
            const portlander = new Portlander();
            portlanderSection.appendChild(portlander.render());
        }
        const form = dom.getElementById('play-again');

        form.addEventListener('click', () => {
            window.location.href = ('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); 
        });
        return dom;  
    }
}

const resultPage = new ResultPage();
const root = document.getElementById('root');  
root.appendChild(resultPage.render()); 