import html from './html.js'; 

function makeTemplate() {
    return html`
        <header>
            <h2>Explore Portlandia!</h2>
            <h6>Please click one of the icons on the map and click the 
            image to reveal a either aquestion or a surprise</h6>
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