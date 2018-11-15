import html from './html.js';
import SignIn from './sign-in.js';
import userApi from './user-api.js';

function makeTemplate() {
    return html`
        <header>
            Welcome to Portland, the 90's dream where young people come to retire. Let's see how well you fit in!<br>
        </header>
        <main>
            <section class="sign-in-section"></section>
        </main>
    `;
}
export default class App {
    constructor() {
        this.userData = userApi.get();
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