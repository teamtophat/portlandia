import html from './html.js'; 

function makeTemplate() {
    return html`
        <div>
            <h1>True Portlander</h1>
        </div>
        <p>We are elated to meet a fellow Portlander. 
           We see you are wise in the ways of Kombucha,non GMo-locally sourced-farmed tempeh, 
           and you have a keen understanding of how to be passively nice yet, aggressive. 
           You are a Portlander, live it up.
        
    `;
}

export default class Portlander {
      
    render() {
        let dom = makeTemplate(); 
        
        return dom;  
    }
}
