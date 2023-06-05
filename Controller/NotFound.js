exports.notFounded = (req,res,next) =>{
    res.render("notFound/pageNotFound", {tittle:"Page not found"})
}