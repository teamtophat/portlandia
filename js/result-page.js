import html from './html.js'; 
import Portlander from './result-portlander.js'; 
import questionApi from './question-api.js'; 
import Poser from './result-poser.js';
import Californian from './result-californian.js';

function makeTemplate() {
    return html`
        <div>
        <p>This is the results component</p>
        <section id="californian"></section>
        <section id="poser"></section>
        <section id="portlander"></section>
        </div>
        
    `;
}

export default class ResultPage {
    constructor() {
        this.scores = questionApi.getResults();
    }
    render() {
        console.log('got here', this.scores);
        let dom = makeTemplate(); 
        let totalscore = this.scores[0];
        console.log('total score', totalscore);
        if(totalscore <= 10) {
            const californianSection = dom.getElementById('californian');
            const californian = new Californian();
            californianSection.appendChild(californian.render());
            console.log('total is', totalscore);
        }

        
        else if(totalscore >= 11 && totalscore <= 16) {
            // const totalscore = parseInt(this.scores[1]);
            const poserSection = dom.getElementById('poser');
            const poser = new Poser();
            poserSection.appendChild(poser.render());
            console.log('11 to 16');
        }
        else {
            // const totalscore = parseInt(this.scores[2]);
            const portlanderSection = dom.getElementById('portlander'); 
            const portlander = new Portlander();
            portlanderSection.appendChild(portlander.render());
        }
        return dom;  
    }
}
const resultPage = new ResultPage();
const root = document.getElementById('root');  
console.log('root', document.getElementById('root'));    
root.appendChild(resultPage.render()); 