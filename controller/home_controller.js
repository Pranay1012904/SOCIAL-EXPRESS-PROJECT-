module.exports.home=(req,res)=>{
        res.cookie("name","RANJAN");
        return res.render('home');
}