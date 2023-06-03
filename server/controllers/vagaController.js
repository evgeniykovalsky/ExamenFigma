const {Vaga}=require('../models/models');
const {ApiError}=require('../error/ApiError');



class VagaController{
    async create(req,res){

        const {name}=req.body;
        const vaga=await Vaga.create({name});
        return res.json(vaga);

    }
    async getAll(req,res){
        const vaga=await Vaga.findAll();
        return res.json(vaga);
    }
   

}

module.exports=new VagaController();