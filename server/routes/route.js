import express from 'express';
import { addBlog, getBlogs, editBlog, updateBlog, deleteBlog } from '../controller/user-controller.js';

const router=express.Router();

router.post('/add',addBlog);

router.get('/all',getBlogs);

router.post('/edit/:id',editBlog);

router.post('/update/:id',updateBlog);

router.post('/delete/:id',deleteBlog);

export default router;