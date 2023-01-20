module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },

      username: {
        type: Sequelize.STRING
      },

      role: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING
      },

      password: {
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users')
  }
}
