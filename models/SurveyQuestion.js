"use strict";

module.exports = (sequelize, DataTypes) => {
    const SurveyQuestion = sequelize.define('survey_question', {
        left_text: DataTypes.STRING,
        right_text: DataTypes.STRING,
        negative_scale: DataTypes.BOOLEAN
    });
    
    SurveyQuestion.associate = (models) => {
        SurveyQuestion.belongsToMany(models.group_user, { through: models.group_user_answer});
        SurveyQuestion.belongsTo(models.survey_axis);
        SurveyQuestion.hasMany(models.group_user_answer);
    }    

    return SurveyQuestion;
};