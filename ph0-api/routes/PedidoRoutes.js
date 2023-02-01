import PedidoModel from "../models/PedidoModels.js";
import {Router} from "express";
import regeX from "../helpers/regeX.js"

const PedidoRoutes = Router();


PedidoRoutes.post("/checkout", async(req, res)=>{
    const {
        pedido, preciofinal, direccion, payment, nombre,
    } = req.body;
    const numpedidos = regeX();
     //Definir pasarela de pago
     //Definir Factura (B)
     //
     const newpedido = await PedidoModel.create(
        {
            "pedido":pedido,
            "preciofinal":preciofinal,
            "direccion":direccion,
            "payment":payment,
            "nombre":nombre,
            "numpedido":numpedidos
        }
     );
    return res.status(200).send.json(...newpedido, msg= "Pedido exitoso, su numero es blablabla")
    //poner bien la sintaxis esa pq discord es muy putita
})

PedidoRoutes.get("/parafernalia", async(req, res) =>{


});

//PedidoRoutes.delete()


//PedidoRoutes.put()


export default PedidoRoutes;