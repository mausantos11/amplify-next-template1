import React from "react"
import "../pages.css"

function Pedidos(){

    const datosPedidos = [
        {id:"A-230-1020", producto:"Desechable A-230", mercado:"Nacional", pedidoAnterior:"60 cajas", costo:"$600", aliados:15, beneficio:"10% Descuento", proximaEntrega:"20-Julio-2024"},
        {id:"Br-240-1020", producto:"Desechable Br-240", mercado:"Nacional", pedidoAnterior:"50 cajas", costo:"$700", aliados:15, beneficio:"10% Descuento", proximaEntrega:"20-Julio-2024"},
        {id:"Rd-160-1020", producto:"Desechable Rd-160", mercado:"Nacional", pedidoAnterior:"100 cajas", costo:"$1000", aliados:20, beneficio:"15% Descuento", proximaEntrega:"20-Julio-2024"},
        {id:"La-600-1020", producto:"Desechable La-600", mercado:"Nacional", pedidoAnterior:"64 cajas", costo:"$400", aliados:20, beneficio:"15% Descuento", proximaEntrega:"20-Julio-2024"},
    ]

return(
    <>
    <div className="body-pedidos">
        <h1>Pedidos Actuales</h1>
        <table className="tabla-productos">
        <tr>
            <th>ID </th>
            <th>Producto </th>
            <th>Mercado </th>
            <th>Pedido Anterior </th>
            <th>Costo </th>
            <th>Aliados </th>
            <th>Beneficio </th>
            <th>Proxima Entrega </th>
        </tr>
        {datosPedidos.map((val,key) => {return(<tr key= {key}>
            <td>{val.id}</td>
            <td>{val.producto}</td>
            <td>{val.mercado}</td>
            <td>{val.pedidoAnterior}</td>
            <td>{val.costo}</td>
            <td>{val.aliados}</td>
            <td>{val.beneficio}</td>
            <td>{val.proximaEntrega}</td>
             </tr>)})}
        </table>


        <h1>Historial de Pedidos</h1>
        <table className="tabla-productos">
        <tr>
            <th>ID </th>
            <th>Producto </th>
            <th>Mercado </th>
            <th>Pedido Anterior </th>
            <th>Costo </th>
            <th>Aliados </th>
            <th>Beneficio </th>
            <th>Proxima Entrega </th>
        </tr>
        {datosPedidos.map((val,key) => {return(<tr key= {key}>
            <td>{val.id}</td>
            <td>{val.producto}</td>
            <td>{val.mercado}</td>
            <td>{val.pedidoAnterior}</td>
            <td>{val.costo}</td>
            <td>{val.aliados}</td>
            <td>{val.beneficio}</td>
            <td>{val.proximaEntrega}</td>
             </tr>)})}
        </table>
    </div>
    </>
)
};
export default Pedidos