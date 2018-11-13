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

// function makeInvite(user) {
//     console.log(user);
//     return html`
//         <p class="invite-section">Welcome to Portland ${user.name}, we're glad you escaped ${user.origin}. Just because you're here, doesn't mean you are a real Portlander. Take this quiz and see how you fare.
//     `;
// }

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

    // showUser() {
    //     const dom = makeInvite();
        // const inviteSection = dom.querySelector('.invite-section');
        // const elements = p.elements;
        // inviteSection.appendChild(signIn.render());

        // const invite = new Invite(function(user) {
        //     userApi.add(user);
        // });

    //     return dom; 
    // }
}

export default SignIn;
