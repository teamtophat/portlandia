import html from './html.js';

function makeTemplate() {
    return html`
        <div>
            <h1>Poser</h1>
        </div>
    `;
}

export default class Poser {
    render() {
        let dom = makeTemplate();

        return dom;
    }
}