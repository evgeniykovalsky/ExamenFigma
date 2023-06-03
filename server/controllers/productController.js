const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            const { name, price, vaga, grade, kislinka, gorchinka, nasishenost,
                progarka, discaunt, rating, typeId, brandId,info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + '.png';

            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const product = await Product.create({ name, price, vaga, grade, kislinka, gorchinka, nasishenost, progarka, discaunt, typeId, brandId, img: fileName });
             
               if(info){
                info=JSON.parse(info);
                info.forEach(i => {
                    ProductInfo.create({
                        title:i.title,
                        description:i.description,
                        productId:product.id
                    })
                    
                });
               }


            return res.json(product);
        }
        catch (e) {
            next(ApiError.badRequest(e.message))
        }



    }
    async getAll(req, res) {

        let { brandId, typeId, limit, page } = req.query;//получаем из строки запроса
        page = page || 1;
        limit = limit || 1;
        let offset=page*limit-limit;
        let products;
        if (!brandId && !typeId) {
            products = await Product.findAndCountAll({limit,offset });
        }
        if (brandId && !typeId) {
            products = await Product.findAndCountAll({ where: { brandId },limit,offset });
        }
        if (!brandId && typeId) {
            products = await Product.findAndCountAll({ where: { typeId },limit,offset  });
        }
        if (brandId && typeId) {
            products = await Product.findAndCountAll({ where: { typeId, brandId },limit,offset  });
        }
        return res.json(products)


    }
    async getOne(req, res) {
             const {id}=req.params;
             const product=await Product.findOne({
                where:{id},
                include:[{model:ProductInfo,as:'info'}]
             })
             return res.json(product);
    }

}

module.exports = new ProductController();