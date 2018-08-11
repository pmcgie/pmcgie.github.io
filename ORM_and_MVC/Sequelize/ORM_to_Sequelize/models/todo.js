module.exports = function(sequelize, DataTypes) {
    var todo = sequelize.define("todo", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
});
return todo;
};
