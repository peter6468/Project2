"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING
    });
    
    User.associate = (models) => {
        User.belongsToMany(models.survey_question, { through: models.user_answer});
        
    }
    
    return User;
  };