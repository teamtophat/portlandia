import html from './html.js'; 

function makeTemplate() {
    return html`
        <header>
            <h2>Explore Portlandia!</h2>
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