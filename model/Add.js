const {model}=require('mongoose');

module.exports=model('course',{
      // 课程编号
    course_id: {
        type: String,
        required: true
    },
    // 课程名称
    course_name: {
        type: String,
        required: true
    },
    // 校区
    school: {
        type: Array,
        required: true,
    },
    // 年级
    grade: {
        type: String,
        required: true,
    },
    // 学期
    semester: {
        type: String,
        required: true,
    },
    // 价格
    price: {
        type: String,
        required: true,
    },
    // 名额
    quota: {
        type: String,
        required: true,
    },
     // 学科
     subject: {
        type: String,
        required: true,
    },
    // 是否上架
    isSale: {
        type: Boolean,
        default: false
    },
     // 是否立即开课
     isOpen: {
        type: Boolean,
        default: false
    },
    // 课程日期
    course_date: {
        type: Object,
        required: true,
    },
    // 课时
    class_hour: {
        type: String,
        required: true,
    },
    //课程介绍
    course_intro: {
        type: String,
        required: true,
    },
})