const {request, response, json} = require("express")

const usuariosGet = (req = request, res= response) =>{
    res.json({
        message: "GET usuarios",
    });
};

const usuariosPost = (req = request, res= response)=>{
    res.json({
        message: "POST usuarios",  
    });
};

const usuariosPut = (req=request, res=response)=>{
    res,json({
        message: "PUT usuarios"
    });
};

const usuarioDelete = (req=request, res=response)=>{
    res.json({
        message: "Delete usuario"
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuarioDelete,
};