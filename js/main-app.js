import html from './html.js';
import SignIn from './sign-in.js';
import userApi from './user-api.js';
import questionApi from './question-api.js'; 
import ResultPage from './result-page.js'; 

// const user = userApi.get();

function makeTemplate() {
    return html`
        <header>
            Welcome to Portland. The 90's dream, where young people come to retire, let's see how well you fit in!<br>
        </header>
        <main>
            <section class="sign-in-section">
            </section>
            <section class="invite-section"></section>
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

        // const inviteSection = dom.querySelector('.invite-section');
        // const invite = new SignIn(this.userData);
        // inviteSection.appendChild(invite.showUser());

        return dom;
    }
}

function checkGame() {
    const check = questionApi.getAll(); 
    console.log('hello', check); 

    if(check.length === 6) {
        console.log('hi', check);
        window.location.href = '../result.html';
        const resultPage = new ResultPage().render();
        const root = document.getElementById('root');      
        root.appendChild(resultPage); 
    }
    else { 
        return; 
    } 
}   

checkGame(); 



