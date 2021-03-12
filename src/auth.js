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
    let utilisateur = null
    if (users.find(user => user.email === email && user.password === password)){
        utilisateur = {
            "id":"1",
            "nom":"toto",
            "prenom":"tototo",
            "email":"toto@gmail.com",
            "password":"toto",
            "isAdmin":"1"
        }
    }
    return utilisateur;
}

export { login };