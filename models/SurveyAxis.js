'use strict';

module.exports = (sequelize, DataTypes) => {
    const SurveyAxis  = sequelize.define('survey_axis', {
        name: DataTypes.STRING
    });
    
    SurveyAxis.associate = (models) => {
        SurveyAxis.hasMany(models.survey_question);
        SurveyAxis.belongsTo(models.survey);
    }
    
    return SurveyAxis;
  };