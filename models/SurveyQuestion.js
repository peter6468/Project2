"use strict";

module.exports = (sequelize, DataTypes) => {
    const SurveyQuestion = sequelize.define('survey_question', {
        left_text: DataTypes.STRING,
        right_text: DataTypes.STRING,
        negative_scale: DataTypes.BOOLEAN
    });
    
    SurveyQuestion.associate = (models) => {
        SurveyQuestion.belongsToMany(models.user, { through: models.user_answer});
        SurveyQuestion.belongsTo(models.survey_axis);
        SurveyQuestion.hasMany(models.user_answer);
    }    

    return SurveyQuestion;
};