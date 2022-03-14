const User=require('../models/users');
module.exports.signup=(req,res)=>{
        return res.render('signup');
}

module.exports.signin=(req,res)=>{
    return res.render('signin');
}

module.exports.profile=(req,res)=>{
    return res.render('profile');
}

module.exports.create=(req,res)=>{
        console.log(req.body);
        if(req.body.password!==req.body.cpassword)
        {
           return res.redirect('back');  
        }
        User.findOne({email:req.body.email},(err,user)=>{
            if(err){
                console.log("Error seraching the DB!");
                return;
            }else if(!user){
                User.create(req.body,(err,user)=>{
                    if(err){
                        console.log("User could not be created!");
                        return;
                    }
                    console.log(user);
                    return res.redirect('/user/signin');
                })
            }else{
                console.log("USER PRESENT!");
                return res.redirect('/');
            }
        });
}