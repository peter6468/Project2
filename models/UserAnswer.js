"use strict";

module.exports = (sequelize, DataTypes) => {
    const UserAnswer  = sequelize.define('user_answer', {
        value: DataTypes.INTEGER
    });

    UserAnswer.associate = (models) => {
        UserAnswer.belongsTo(models.user);
        UserAnswer.belongsTo(models.survey_question);
    }
        
    return UserAnswer;
};