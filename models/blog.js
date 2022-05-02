const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema is what holds the data structures
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
}, {timestamps:true})
// CREATING THE MODEL- Model surrouds the schema and provide with interface to communicate with a database connection

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;
