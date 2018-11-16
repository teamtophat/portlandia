import html from './html.js'; 

function makeTemplate() {
    return html`
        <header>
            <h2>Explore Portlandia!</h2>
            <h6>Please click one of the icons on the map then click the 
            image to reveal either a question or a surprise</h6>
        </header>
    `;
}
export default class MapApp {
    render() {
        let dom = makeTemplate(); 
        return dom;  
    }
}

const mapApp = new MapApp();
const root = document.getElementById('map-root');  
root.appendChild(mapApp.render()); 