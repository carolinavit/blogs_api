module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'categories',
      underscored: true,
    },
  );

  Category.associate = (models) => {
    Category.hasMany(models.PostCategory, {
      foreignKey: 'category_id',
      as: 'posts_categories',
    });
  };

  return Category;
};
