import html from './html.js';
import SignIn from './sign-in.js';

function makeTemplate() {
    return html`
    <header>Welcome to Portland, it looks like you just moved here. Let's see how much you know about Portland.<br>Are you a Portlander or a poser?</header>
    <main>
        <section class="sign-in-section">
            <h2>Sign In<h2>
        </section>
    </main>
    `;
}

export default class App {
    constructor() {
    }
    render() {
        const dom = makeTemplate();

        // const headerSection = dom.querySelector('header');
        // const header = new Header();
        // headerSection.appendChild(header.render());

        const signInSection = dom.querySelector('.sign-in-section');
        const signIn = new SignIn(user => {
            console.log('user', user);
        });
        signInSection.appendChild(signIn.render());

        return dom;
    }
}





