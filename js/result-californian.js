import html from './html.js';

function makeTemplate() {
    return html`
        <div class="result-statement">
            <h1>Californian</h1>
        </div>
        <p class="result-description">
            You are a Californian. Even if you’re not, you probably belong there. 
            Nonetheless we hope you enjoyed your tour of Portland. 
            You’re just too mainstream to be a considered a full fledged Portlander. 
            Maybe come back in a few years when Portland rent prices have caused everyone 
            to move out but Californians. Please don’t comeback anytime soon.
        </p>
    `;
}

export default class Californian {
    render() {
        let dom = makeTemplate();

        return dom;
    }
}