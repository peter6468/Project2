'use strict';

module.exports = (sequelize, DataTypes) => {
    const SurveyAxis  = sequelize.define('survey_axis', {
        shortName: DataTypes.STRING,
        longName: DataTypes.STRING
    });
    
    SurveyAxis.associate = (models) => {
        SurveyAxis.hasMany(models.survey_question);
        SurveyAxis.belongsTo(models.survey);
    }
    
    return SurveyAxis;
  };