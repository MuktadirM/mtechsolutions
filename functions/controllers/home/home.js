exports.getHomeIndex = (req,res,next)=>{
    res.render('index',{
        pageTitle:'Home'
    });
};

