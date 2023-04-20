module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      published: {
        type: DataTypes.DATE,
      },
      updated: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return BlogPost;
};
