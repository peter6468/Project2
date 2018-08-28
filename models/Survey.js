'use strict';

module.exports = (sequelize, DataTypes) => {
    const Survey = sequelize.define('survey', {
        name: DataTypes.STRING
    });
    
    Survey.associate = (models) => {
        Survey.hasMany(models.survey_axis);
    };
    
    return Survey;
  };