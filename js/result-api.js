import html from './html.js'; 

let template = function(result) {
    let name = user.name; 
    let title = resultData.name;
    let description = resultData.description; 
    
    return html`
    <section id="result-section"></section>
        <h1> Hope you enjoyed our tour of Portland ${user.name}, we have displayed your results down below</h1>
        <h2>${title}</h2>
        <h3> ${description}</h3>
    `;
}; 

export default class ResultReport {
    constructor(result) {
        this.result = result; 
    }
    render() {
        let dom = template(this.result); 
        return dom;
    }
}

