import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const blogSchema=mongoose.Schema({
    blog:{
        type:String,
        required:true
    },
    bloggerName:{
        type:String,
        required:true
    },
    bloggerEmail:{
        type:String,
        required:true
    }
})

autoIncrement.initialize(mongoose.connection);
blogSchema.plugin(autoIncrement.plugin,'blog');

const blog=mongoose.model('blog',blogSchema);

export default blog;