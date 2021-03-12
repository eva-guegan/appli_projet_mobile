const users = [
    {
        email: "jim@example.com",
        password: "j1m"
    },
    {
        email: "toto@gmail.com",
        password: "toto"
    }
];

/**
 * @param {String} email
 * @param {String} password
 *
 * @return {?Object}
 */
function login(email, password) {
    return users.find(user => user.email === email && user.password === password) || null;
}

export { login };