import mongoose from 'mongoose';

const Connection=async(URL)=>{
    try {
        await mongoose.connect(URL,{useNewUrlParser:true,useMongoClient:true})
        console.log('DB Connected');
    } catch (err) {
        console.log(err);
    }
}

export default Connection;