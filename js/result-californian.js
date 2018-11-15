import html from './html.js';

function makeTemplate() {
    return html`
        <div>
            <h1>Californian</h1>
        </div>
    `;
}

export default class Californian {
    render() {
        let dom = makeTemplate();

        return dom;
    }
}