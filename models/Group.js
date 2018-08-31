"use strict";

module.exports = (sequelize, DataTypes) => {
    const Group  = sequelize.define('group', {
        name: DataTypes.STRING,
        anonymous: DataTypes.BOOLEAN
    });
    
    Group.associate = (models) => {
        Group.hasMany(models.group_user);
        // Group.belongsToMany(models.user, { through: models.group_user });
    }

    return Group;
  };