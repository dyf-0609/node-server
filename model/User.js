const {model}=require('mongoose');

module.exports=model('user',{
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});