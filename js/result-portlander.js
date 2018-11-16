import html from './html.js'; 

function makeTemplate() {
    return html`
        <div class="result-statement">
            <h1>True Portlander</h1>
        </div>
        <p class="result-description">
            We are elated to meet a fellow Portlander. 
            We see you are wise in the ways of Kombucha, non-GMO, locally sourced, farmed tempeh. 
            You have a keen understanding of how to be passively nice, yet aggressive. 
            You are a Portlander. Live it up!
        </p>
    `;
}

export default class Portlander { 
    render() {
        let dom = makeTemplate(); 
        
        return dom;  
    }
}
