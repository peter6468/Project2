"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: DataTypes.STRING,
        email: { type: DataTypes.STRING ,
                 unique: true
        }
    });
    
    User.associate = (models) => {
        User.hasMany(models.group_user);
        // User.belongsToMany(models.group, { through: models.group_user });
    }
    
    return User;
  };