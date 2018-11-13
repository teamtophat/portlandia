import html from './html.js';

function makeTemplate() {
    return html`
        <form class="sign-in">
        <p>
            <label for="name">Name:</label>
            <input name="name" id="user-name" placeholder="Please type name" required> 
        </p>  
        <p> Where did you move here from?</p>
            <label for="city-origin">City/State:</label>
            <input name="origin"  id="user-origin" placeholder="City or state" required>
        </p>
        <button id="submit">Play</button>
        </form>
    `;
}

class SignIn {
    constructor(onSignIn) {
        this.onSignIn = onSignIn;
    }

    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');
        const elements = form.elements;

        form.addEventListener('submit', event => {
            event.preventDefault();
            
            const user = {
                name: elements.name.value,
                origin: elements.origin.value
            };
            this.onSignIn(user);
        
        });
        return dom; 
    }
}

export default SignIn;
