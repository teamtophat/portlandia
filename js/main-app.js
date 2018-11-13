import html from './html.js';
import SignIn from './sign-in.js';
import userApi from './user-api.js';

// const user = userApi.get();

function makeTemplate() {
    return html`
        <header>
            Welcome to Portland, it looks like you just moved here. Let's see how much you know about Portland.<br>
            Are you a Portlander or a poser?</header>
        <main>
            <section class="sign-in-section">
                <h2>Sign In<h2>
            </section>
        </main>
    `;
}


export default class App {
    constructor() {
        this.banana = {
            color: 'yellow',
            size: 'medium'
        };
    }
    render() {
        const dom = makeTemplate();

        const signInSection = dom.querySelector('.sign-in-section');
        const signIn = new SignIn(function(user) {
            userApi.add(user);
        });

        signInSection.appendChild(signIn.render());

        return dom;
    }
}





