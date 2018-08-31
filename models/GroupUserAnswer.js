"use strict";

module.exports = (sequelize, DataTypes) => {
    const GroupUserAnswer  = sequelize.define('group_user_answer', {
        value: DataTypes.INTEGER
    });

    GroupUserAnswer.associate = (models) => {
        GroupUserAnswer.belongsTo(models.group_user);
        GroupUserAnswer.belongsTo(models.survey_question);
    }
        
    return GroupUserAnswer;
};