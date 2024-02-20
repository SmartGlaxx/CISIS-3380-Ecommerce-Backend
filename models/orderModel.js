const mongoose = require("mongoose")

const CartItem = mongoose.Schema({
    productName: {
        type: String, 
        required : true
    },
    productImage: {
        type: String, 
        required : true
    },
    productPrice: {
        type: Number, 
        required : true
    },
    productAmount: {
        type: Number, 
        required : true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true
    }
})

const OrderSchema = mongoose.Schema({
    shipping: {
        type: Number,
        required: true
    },
    subTotal: {
        type: Number,
        required: true
    },
    total:{
        type: Number,
        required: true
    },
    products: [CartItem],
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    // secret:{
    //     type: String,
    //     required : true,
    // },
    paymentId:{
        type: String
    }
},{timestamps: true})

module.exports = mongoose.model("Order", OrderSchema)