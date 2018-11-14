import html from './html.js'; 
import resultData from './result-dataset.js'; 
import questionApi from './question-api.js'; 

function makeTemplate() {
    return html`
        <div>
            <p id="result-name"></p>
        </div>
        
        <section>
            <p id="result-description"></p>
        </section>
    `;
}

export default class ResultPage {
    render() {
        let dom = makeTemplate(); 
        const resultName = dom.querySelector('#result-name'); 
        // const resultDescription = dom.querySelector('#result-description'); 

        const totalscore = questionApi.getResults(); 
        if(totalscore <= 10) {
            resultName.textContent = resultData[0].name; 
        }
        else if(totalscore >= 11 && totalscore <= 16) {
            resultName.textContent = resultData[1].name;
        }
        else {
            resultName.textContent = resultData[2].name;
        }
        return dom;  
    }
}