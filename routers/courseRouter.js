const {Router, query}=require('express');
const router=new Router();
const Course=require('../model/Add');

router.post('/addCourse',async(req,res)=>{
    const courseList=await new Course(req.body).save();
    res.status(200).json({code:0,message:'ok'});
    
    
})

router.get('/course_info',async(req,res)=>{
    const result=await Course.find();
    res.status(200).json(result);
})

router.post('/remove',async(req,res)=>{
    const {_id}=req.body;
    const result=await Course.findByIdAndDelete({_id});
    res.status(200).json(result);
})

router.post('/remove',async(req,res)=>{
    const {_id}=req.body;
    const result=await Course.deleteMany({_id});
    res.status(200).json(result);
})
router.get('/select',async(req,res)=>{
    // const {school,grade,semester,subject}=req.body;
    console.log(req.query);
    // const queryArr=req.query.filter(item=>item);
    // const queryArr=Object.entries(req.query).filter(item=>item[1])
    // console.log(queryArr);
    const result=await Course.find(req.query);
    console.log(result);
    res.status(200).json(result);
})

module.exports=router;