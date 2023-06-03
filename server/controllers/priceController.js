const {Price}=require('../models/models');
const {ApiError}=require('../error/ApiError');



class PriceController{
    async create(req,res){

        const {name}=req.body;
        const price=await Price.create({name});
        return res.json(price);

    }
    async getAll(req,res){
        const price=await Price.findAll();
        return res.json(price);
    }
   

}

module.exports=new PriceController();