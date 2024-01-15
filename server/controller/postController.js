import Post from "../models/post.js"
export const createPost=async(req,res)=>{

    const {title,body,pic}=req.body
    if(!title||!body||!pic){
        return res.status(422).json({error:"Please add all the fields"})
    }
    req.user.password=undefined
    const post=new Post({
        title,
        body,
        pic,
        postedBy:req.user
    })

    try {
        const result = await post.save();
        res.json({ post: result });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
    
}

export const getPosts=async(req,res)=>{

    try {
        const posts= await Post.find().populate("postedBy","_id name");
        res.json({ post: posts });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
}

export const myPosts= async (req, res) => {
    try {
        const mypost = await Post.find({ postedBy: req.user._id })
            .populate("postedBy", "_id name")
           

        res.json({ mypost });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};
