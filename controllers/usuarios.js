const {request, response, json} = require("express")

const usuariosGet = (req = request, res= response) =>{
    const query = req.query
    res.json({
        message: "GET usuarios",
        query,
    });
};

const usuariosPost = (req = request, res= response)=>{
    // const body = req.body;
    const {nombre, correo} = req.body;
    res.json({
        message: "POST usuarios",
        nombre,
        correo,
    });
};

const usuariosPut = (req=request, res=response)=>{
    // const params = req.params
    const {id} = req.params;

    res,json({
        message: "PUT usuarios",
        id,
        // params
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