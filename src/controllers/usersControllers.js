const path = require('path');
<<<<<<< HEAD

module.exports = {
    login: (req,res) => res.render(path.resolve('./src/views/users/login')),
    register: (req,res) => res.render(path.resolve('./src/views/users/register'))
=======
const fs = require('fs');

const users = require('../data/users.json');

module.exports = {
    login: (req,res) => res.render('users/login'),
    register: (req,res) => res.render('users/register')
>>>>>>> develop
}