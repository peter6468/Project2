"use strict";

module.exports = (sequelize, DataTypes) => {
    const GroupUser = sequelize.define('group_user');
    
    GroupUser.associate = (models) => {
        GroupUser.belongsToMany(models.survey_question, { through: models.group_user_answer});
        GroupUser.belongsTo(models.user);
        GroupUser.belongsTo(models.group);
        GroupUser.hasMany(models.group_user_answer);
    }

    return GroupUser;
  };