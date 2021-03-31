const users = [
    {
        email: "jim@example.com",
        password: "a"
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
    let user = null
    if (users.find(user => user.email === email && user.password === password)){
        user = {
            "idT":"1",
            "nomT":"toto",
            "prenomT":"tototo",
            "emailT": email,
            "passwordT":"toto",
            "isAdminT":"1"
        }
    }
    return user;
}

export { login };