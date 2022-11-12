import Blog from '../schema/user-schema.js';

export const addBlog=async(req,res)=>{
    const data=req.body;
    const newBlog=new Blog(data);
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}

export const getBlogs=async(req,res)=>{
    try {
        const data=await Blog.find({});
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}

export const editBlog=async(req,res)=>{
    try {
        const data=await Blog.find({_id:req.params.id});
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}

export const updateBlog=async(req,res)=>{
    const validData=new Blog(req.body);
    try {
        await Blog.updateOne({_id:req.params.id},validData);
        res.status(201).json(validData);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}

export const deleteBlog=async(req,res)=>{
    try {
        const deleteBlog=await Blog.deleteOne({_id:req.params.id});
        res.status(201).json(deleteBlog);
    } catch (err) {
        res.status(400).json({message:err.message});
    }
}