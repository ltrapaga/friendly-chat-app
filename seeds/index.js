const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedMessages = require('./message-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedMessages();

  process.exit(0);
};

seedAll();
