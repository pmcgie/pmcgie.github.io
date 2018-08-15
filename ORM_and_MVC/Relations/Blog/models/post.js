module.exports = function(sequelize, DataTypes) {
  var blog_post = sequelize.define("blog_post", {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    body: DataTypes.STRING,
    Date: DataTypes.DATE
});
return blog_post;
};
