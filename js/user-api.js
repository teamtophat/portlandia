let users = [];

function saveUser() {
    localStorage.setItem('user', JSON.stringify(users));
}

const userApi = {
    get() {
        const json = localStorage.getItem('users');
        if(json) {
            users = JSON.parse(json);
        }
        return users;
    },
    add(user) {
        users.push(user);
        saveUser();
    }
};

export default userApi;