"use strict";

module.exports = (sequelize, DataTypes) => {
    const UserGroup  = sequelize.define('user_group', {
        name: DataTypes.STRING,
        admin_email: DataTypes.STRING,
        anonymous: DataTypes.BOOLEAN
    });
    
    UserGroup.associate = (models) => {
        UserGroup.hasMany(models.user);
    }

    return UserGroup;
  };