import html from './html.js';

function makeTemplate() {
    return html`
        <div class="result-statement">
            <h1>Poser</h1>
        </div>
        <p class="result-statement"> 
            Unfortunately, you are not Portland enough. 
            You are paleo but don’t do yoga. You take Uber rather than bike 
            and you probably buy from Whole Foods rather than the Farmers Markets. 
            In order to fulfill your prophecy in this city, we suggest you go to hip 
            coffee shops on the East Side, drink out of Mason jars, and invest the best 
            90\'s fixie bike. Good Luck!
        </p>
    `;
}

export default class Poser {
    render() {
        let dom = makeTemplate();

        return dom;
    }
}