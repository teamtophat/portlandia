import html from './html.js'; 

function makeTemplate() {
    return html`
        <div>
            <h1>Portlander</h1>
        </div>
        
    `;
}

export default class Portlander {
      
    render() {
        let dom = makeTemplate(); 
        
        return dom;  
    }
}
