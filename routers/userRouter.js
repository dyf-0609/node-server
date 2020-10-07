const {Router}=require('express');
const router=new Router();
const User=require('../model/User');

//注册
router.post('/register',async(req,res)=>{
    //取得请求参数
    const {username,password}=req.body;
    //判断用户是否存在
    const result=await User.findOne({username});
    if(result){
        res.status(200).json({code:-1,message:'该用户已存在!'});
        return;
    }
    //执行注册
    await new User({username,password}).save();
    res.status(200).json({code:0,message:'注册成功'});
});


//登录
router.post('/login',async(req,res)=>{
    //取得请求参数
    const {username,password}=req.body;
    //查询用户名密码是否正确
    const result=await User.findOne({username,password},{password:false});
    if(!result){
        res.status(200).json({code:-1,message:'用户名或者密码错误！'});
        return;
    }
    //正确，登录成功，设置登录态
    req.session.user=result;
    res.status(200).json({code:0,message:'登录成功!'});
});

//凡是需要执行其他用户相关的操作 ，都需要登录过的
router.use((req,res,next)=>{
    if(req.session.user){
        next();
    }else{
        res.status(200).json({code:-1,message:'请先登录!'})
    }
})

//检查登录是否过期
router.use('/check_login',(req,res)=>{
    res.status(200).json({code:0,message:'登录成功!'});
})

//退出登录
router.get('/logout',(req,res)=>{
    //删除session中的用户数据
    delete req.session.user;
    //响应客户端
    res.status(200).json({code:0,message:'退出成功'});
})

//获取用户信息
router.get('/user_info',async(req,res)=>{
    //获取用户id
    const userID=req.session.user._id;
    //查询用户数据
    const result=await User.findById(userID,{password:false});
    //响应客户端
    res.status(200).json(result);
})

module.exports=router;