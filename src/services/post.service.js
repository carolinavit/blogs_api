const { User, BlogPost, Category } = require('../models');

// const { BlogPost } = require('../models');

// const createPost = async () => {
//   const newPost = await BlogPost.create();
//   return newPost;
// };

// module.exports = {
//   createPost,
// };

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

module.exports = {
  getAll,
};
