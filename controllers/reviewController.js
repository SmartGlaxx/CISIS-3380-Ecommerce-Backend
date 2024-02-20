const Review = require("../models/reviewModel")
const Product = require("../models/ProductModel")

const createReview = async(req, res)=>{
    try{
        const {productId, userId} = req.body
        const productExists = Product.findOne({_id: productId})
        
        if(!productId || !userId){
            return res.status(400).json({response: "Fail", message: "Review cannot be created"})
        }
        if(!productExists){
            return res.status(404).json({response: "Fail", message: "Product not found"})
        }
        const review  = new Review(req.body)
        const createdReview = await review.save()
        res.status(200).json({response:"Success", message: createdReview})
    }catch(error){
        res.status(400).json({response:"Fail", message: error.message})
    }
    
}

const getReviews = async(req, res)=>{
    try{
        const reviews = await Review.find({})
        .populate({
            path: 'productId',
            select: 'productName price manufacturer'
        })
        .populate({
            path: "userId",
            select: "firstname lastname"
        })
        res.status(200).json({response:"Success", reviews})
    }catch(error){
        res.status(400).json({response:"Fail", message: error.message})
    }
}

const getReview = async(req, res)=>{
    try{
        const {id} = req.params
        const review = await Review.findOne({_id: id})
        .populate({
            path: 'productId',
            select: 'productName price manufacturer'
        })
        .populate({
            path: "userId",
            select: "firstname lastname"
        })
        if(review){
            return res.status(200).json({response: "Success", message: review})
        }else{
            return res.status(404).json({response: "Fail", message: "Review not found"})
        }
    }catch(error){
        res.status(400).json({response: "Fail", message: "Error fetching review"})
    }
}


const getProductReview = async(req, res)=>{
    try{
        const {productId} = req.params
        const productReview = await Review.find({ productId : productId})
        if(productReview){
            res.status(200).json({response: "Success", productReview})
        }else{
            res.status(404).json({response: "Fail", message: "Product reviews not found"})
        }
    }catch(error){
        res.status(400).json({response: "Fail", message: "Error fetching product reviews"})
    }
}

const updateReview = async(req, res)=>{
    try{
        const {id} = req.params
        const review = await Review.findOne({_id: id})
        if(!review){
            return res.status(404).json({response:"Fail", message: "Review not found"})
        }
        const {productRating, ratingTitle, ratingComment} = req.body
        review.productRating = productRating
        review.ratingTitle = ratingTitle
        review.ratingComment = ratingComment

        const newReview = await review.save()
        if(newReview){
            res.status(200).json({response: "Success", newReview})
        }else{
            res.status(404).json({response: "Fail", message:"Erorr updating review"})
        }
    }catch(error){
        res.status(400).json({response: "Fail", message: error.message})
    }

}

const deleteReview = async(req, res)=>{
    try{
        const {userId, productId} = req.body
        const {id} = req.params
        const reviewDeleted = await Review.findOneAndDelete({_id: id, userId: userId, productId: productId})
        if(reviewDeleted){
            res.status(200).json({response: "Success", message: "Review deleted"})
        }else{
            res.status(400).json({response: "Fail", message: "Error deleting review"})
        }
    }catch(error){
        res.status(400).json({response: "Fail", message: "Error deleting review"})
    }
}



module.exports = {createReview, getReview, getReviews, getProductReview, updateReview, deleteReview}