const Users = require('./../models/users')


module.exports = {
    index : async (req,res)=>{
        try{
            const data = await Users.find({})

            return res.status(200).json({"state":true,"data":data})            
        }catch(err){
            return res.status(503).json({"state":false, "error":err.err})
        }
    },

    findById : async( req,res)=>{
        const {id} = req.params   
        try {
            const users = await Users.findById(id)
            
            return res.status(200).json({"state":true,"data":users})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }     
    },

    save : async(req,res)=>{
        const users = new Users(req.body)

        try {
            const data = await users.save()

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
        
        return res.status(200).json({"state":true,"data":users})
    },

    update : async(req,res)=>{
        const {id} = req.params

        const users = req.body

        try {
         const data = await Users.findByIdAndUpdate(id,users)   

         return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"status":500,"error":error})
        }
    },
    erase : async (req,res)=>{
        const {id} = req.params       

        try {
            const data = await Users.findByIdAndDelete(id)
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}