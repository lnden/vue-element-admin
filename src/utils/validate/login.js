
import { validateUser } from  './index'

export let checkUsername = (rule,value,callback) => {
    console.log(rule,11111)
    if(!value){
        return callback(new Error('请输入用户名'));
    }else if(!validateUser(value) && value!='admin'){
        return callback(new Error('用户名为字母+7位数字组成'));
    }else{
        callback();
    }
};

export let checkPassword = (rule,value,callback) => {
    if(!value){
        return callback(new Error('请输入密码'));
    }else{
        callback();
    }
};