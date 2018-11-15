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
            <button id="submit">Sign In</button>
        </form>

        <section id="greeting">
        </section>
    `;
}

function makeInvite(name, origin) {
    return html`
        <p>Welcome to Portland, ${name}, we're glad you escaped ${origin}. In order to become a true Portlander, there are some things that you need to know.</p>
        <button id="start-game"> Let's take a tour </button>
    `;
}

class SignIn {
    constructor(onSignIn) {
        this.onSignIn = onSignIn;
    }

    render() {
        const dom = makeTemplate();
        const form = dom.querySelector('form');
        const greetingSection = dom.getElementById('greeting');
        const elements = form.elements;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const inviteDom = makeInvite(elements.name.value, elements.origin.value);
            
            greetingSection.appendChild(inviteDom);
            const submitButton = greetingSection.querySelector('#start-game'); 
            submitButton.addEventListener('click', event => {
                console.log('got here'); 
                event.preventDefault();
                window.location.href = '/main.html';
            }); 
        });

        return dom;
    }

}

export default SignIn;
