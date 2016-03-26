/**
 * Created by Administrator on 2016/3/26.
 */
//用于维持视图状态的模型类
module.exports = {
    loginModel: {//登录状态
        ur_username: '',
        ur_loginname: '',
        ur_error: ''
    },
    registerModel: {//注册
        ur_username: '',
        ur_userpwd: '',
        ur_error: ''
    },
    newsModel: {//新闻
        new_Title: '',
        new_Author: '',
        new_Description: '',
        new_Content: '',
        new_Is_Active: '',
        new_Create_id: '',
        new_Create_Date: '',
        new_Error: null
    }
};