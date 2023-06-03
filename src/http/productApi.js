import { $authhost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type)=>{
    const {data}= await $authhost.post('api/type', type);
   
    return data
}
export const fetchType = async ()=>{
    const {data} = await $host.get('api/type');
     
    return data;
}
export const createBrand = async (brand)=>{
    const {data}= await $authhost.post('api/brand', brand);
   
    return data
}
export const fetchBrand = async ()=>{
    const {data} = await $host.get('api/brand');
     
    return data;
}
export const createProduct = async (product)=>{
    const {data}= await $authhost.post('api/product', product);
   
    return data
}
export const fetchProduct = async (typeId,BrandId,page,limit=5)=>{
    const {data} = await $host.get('api/product/',{params:{
        typeId,BrandId,page,limit
    }});
     
    return data;
}
export const fetchOneProduct = async (id)=>{
    const {data} = await $host.get('api/product/'+ id);
     
    return data;
}
