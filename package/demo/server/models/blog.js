const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
	title: String,
	author: String
})

blogSchema.index({ id: 1 })

const Blog = mongoose.model('Blog', blogSchema)

exports = module.exports = Blog
