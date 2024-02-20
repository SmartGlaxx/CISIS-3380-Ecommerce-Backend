const Order = require("../models/orderModel")
const Product = require("../models/ProductModel")

const createOrder = async(req, res)=>{
    try{
        let subTotal = 0
        let {products, shipping, userId} = req.body
        if(!products){
            res.status(404).json({response: "Fail", message:"No products"})
        }
        for(const product of products){
            const {productId, productName, productPrice, productAmount, productImage} = product
            // const productOrder = {
            //     productName : productName,
            //     productImage : productImage,
            //     productPrice : productPrice,
            //     productAmount : productAmount,
            //     productId : productId
            // }
            // products = [...products, productOrder]
            subTotal += productAmount * productPrice
        }
        // console.log(orders)
        // console.log(subTotal)
        const total = subTotal + shipping
        // const payProcessor = await paymentRequestMethod({
        //     productAmount: total
        // })
        const orderCreated = await Order.create({
            products, total, subTotal, shipping, userId
        })
        if(orderCreated){
            res.status(200).json({response: "Success", orderCreated})
        }else{
            res.status(200).json({response: "Success", message:"Order not set"})
        }
    }catch(error){
        res.status(404).json({response: "Fail", message:error.message})
    }
}

const getUserOrders = async(req, res)=>{
    try{
        const {userId} = req.body
        const userOrders = await Order.find({userId: userId})
        if(userOrders){
            res.status(200).json({response: "Success", userOrders})
        }else{
            res.status(400).json({response: "Success", message: "Orders not fetched"})
        }
    }catch(error){
        res.status(400).json({response: "Success", message: "Error fetching orders"})
    }
}

const getOrders = async(req, res)=>{
    try{
        const orders = await Order.find({})
        if(orders){
            res.status(200).json({response: "Success", orders})
        }else{
            res.status(400).json({response: "Success", message: "Orders not fetched"})
        }
    }catch(error){
        res.status(400).json({response: "Success", message: "Error fetching orders"})
    }
}

const getOrder = async(req, res)=>{
    try{
        const {id} = req.params
        const order = await Order.findOne({_id: id})
        if(order){
            res.status(200).json({response: "Success", order})
        }else{
            res.status(400).json({response: "Success", message: "Order not fetched"})
        }
    }catch(error){
        res.status(400).json({response: "Success", message: "Error fetching order"})
    }
}

// const updateOrder = async(req, res)=>{
//     try{
//         const {id} = req.params
//         const order = await Order.findOne({_id: id})
//         if(order){
//             res.status(200).json({response: "Success", order})
//         }else{
//             res.status(400).json({response: "Success", message: "Order not fetched"})
//         }
//     }catch(error){
//         res.status(400).json({response: "Success", message: "Error fetching order"})
//     }
// }

module.exports = {createOrder, getUserOrders, getOrder, getOrders}