const successHandler = require('../service/successHandler');
const appError = require('../service/appError');

const Post = require('../models/postsModel');

const posts = {
  async getPosts(req, res) {
    const { keyword, sortby } = req.query;
    const search =
      keyword !== undefined ? { content: new RegExp(`${keyword}`) } : {};
    const sort = sortby === 'asc' ? 'createdAt' : '-createdAt';
    const posts = await Post.find(search)
      .populate({
        path: 'user',
        select: 'name photo ',
      })
      .sort(sort);
    successHandler(res, posts);
  },
  async createPost(req, res, next) {
    const { user, content, image, createdAt } = req.body;
    if (content !== undefined) {
      const newPost = await Post.create({
        user,
        content,
        image,
        createdAt,
      });
      successHandler(res, newPost);
    } else {
      return appError(400, 'content 必填', next);
    }
  },
};

module.exports = posts;
