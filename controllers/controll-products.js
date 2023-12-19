const Products = require('../models/products')


module.exports = {
    index : async (req,res)=>{
        try{
            const data = await Products.find({})

            return res.status(200).json({"state":true,"data":data})            
        }catch(err){
            return res.status(503).json({"state":false, "error":err.err})
        }
    },

    findById : async( req,res)=>{
        const {id} = req.params   
        try {
            const products = await Products.findById(id)
            
            return res.status(200).json({"state":true,"data":products})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }     
    },

    save : async(req,res)=>{
        const products = new Products(req.body)

        try {
            const data = await products.save()

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
        
        return res.status(200).json({"state":true,"data":products})
    },

    update : async(req,res)=>{
        const {id} = req.params

        const products = req.body

        try {
         const data = await Products.findByIdAndUpdate(id,products)   

         return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"status":500,"error":error})
        }
    },
    erase : async (req,res)=>{
        const {id} = req.params       

        try {
            const data = await Products.findByIdAndDelete(id)
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}