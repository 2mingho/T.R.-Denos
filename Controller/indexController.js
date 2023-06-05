exports.GetIndex = (req,res,next) =>{
    res.render("index", {tittle: "Excursiones"})
}