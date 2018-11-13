let users = [];

function saveUser() {
    localStorage.setItem('user', JSON.stringify(users));
}

const userApi = {
    add(user) {
        users.push({
            name: user.name,
            origin: user.origin
        });
        saveUser();
    }
};

export default userApi;