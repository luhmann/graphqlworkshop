const Sequalize = require('sequelize');

const db = new Sequalize('sqlite://local.sqlite', {
    // dialectOptions: {
    //     ssl: true,
    // },
    dialect: 'sqlite',
    pool: {
        max: 1,
        min: 0,
        idle: 10000
    }
});

const UserModel = db.define('User', {
    githubUsername: { type: Sequalize.STRING, fieldName: 'github_username' },
    firstName: { type: Sequalize.STRING, fieldName: 'first_name' },
    lastName: { type: Sequalize.STRING, fieldName: 'last_name' }
}, {
    timestamps: false
})

const User = db.models.User

db.sync();

exports.user = User;
