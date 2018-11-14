import html from './html.js'; 
import Portlander from './result-portlander.js'; 
import questionApi from './question-api.js'; 

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
        this.scores = questionApi.getAll();
    }
    render() {
        let dom = makeTemplate(); 
        const totalscore = parseInt(this.scores[0]);
        if(totalscore <= 10) {
            console.log('10 or less');
        }
        else if(totalscore >= 11 && totalscore <= 16) {
            console.log('11 to 16');
        }
        else {
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