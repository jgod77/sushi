const Sequelize = require('sequelize');
const db = new Sequelize('sushi', 'root', '');

module.exports = {
  Tech: db.define('Tech', {
    name: Sequelize.STRING,
    count: Sequelize.INTEGER
  }),

  ProfileTech: db.define('ProfileTech', {}),

  ProjectTech: db.define('ProjectTech', {}),
}