const postService = require('../services/post.service');

// const createPost = async (req, res) => {
//    try {
//     const { title, content, categoryIds } = req.body;
//     const {  } = await postService.createPost(title, content, categoryIds);
//     return res.status(201).json();
//   } catch (error) {
//     return res.status(error.status).json({ message: error.message });
//   }
// };

// module.exports = {
//   createPost,
// };

const getAll = async (req, res) => {
    const posts = await postService.getAll();
    return res.status(200).json(posts);
};

module.exports = {
  getAll,
};
