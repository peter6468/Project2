"use strict";

module.exports = (sequelize, DataTypes) => {
    const UserAnswer  = sequelize.define('user_answer', {
        value: DataTypes.INTEGER
    });
        
    return UserAnswer;
};