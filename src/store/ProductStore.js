import { makeAutoObservable } from "mobx";

export default class ProductStore {
    constructor() {

        this._types = []
        this._brands = []
        //this._products=[]
        this._products = [{
            id: 1,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 1000],
            price: [250, 350, 500, 750],
            countVidgukiv: 32,
            grade: 4,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 2,
            projarka: 5,
            discaunt: true

        },
        {
            id:2,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo1',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 3000],
            price: [250, 350, 500, 2000],
            countVidgukiv: 32,
            grade: 2,
            kislinka: 9,
            gorchinka: 10,
            nasishenost: 10,
            projarka:3,
            discaunt: true
        }, 
        {
            id:3,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo2',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 2000],
            price: [250, 350, 500, 1000],
            countVidgukiv: 32,
            grade: 5,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 4,
            geografia:"Уганда",
            projarka:4,
            processing:"Мытая",
            spesial:"Популярное",
            vid_coffee:"Робуста",
            pribor:"Moka",
            discaunt: true
        },
        {id:4,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 1000],
            price: [250, 350, 500, 750],
            countVidgukiv: 32,
            grade: 4,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 2,
            geografia:"Африка",
            processing:"Cухая",
            spesial:"Популярное",
            vid_coffee:"Арабика",
            pribor:"Press",
            projarka:5,
            pribor:"Moka",
            discaunt: true
    
    
        },
         {
            id:5,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo1',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 3000],
            price: [250, 350, 500, 2000],
            countVidgukiv: 32,
            grade: 2,
            kislinka: 9,
            gorchinka: 10,
            nasishenost: 10,
            geografia:"Эфиопия",
            processing:"Cухая",
            spesial:"Популярное",
            vid_coffee:"Арабика",
            projarka:5,
            discaunt: false
        }, 
        {
            id:6,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo2',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 2000],
            price: [250, 350, 500, 1000],
            countVidgukiv: 40,
            grade: 5,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 4,
            geografia:"Уганда",
            processing:"Мытая",
            spesial:"Популярное",
            vid_coffee:"Робуста",
            projarka:3,
            discaunt:  false
        },{
            id:7,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 1000],
            price: [250, 350, 500, 750],
            countVidgukiv: 32,
            grade: 4,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 2,
            geografia:"Африка",
            processing:"Cухая",
            spesial:"Популярное",
            vid_coffee:"Арабика",
            projarka:3,
            discaunt:  false
    
    
        },
         {  id:8,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo1',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 3000],
            price: [250, 350, 500, 2000],
            countVidgukiv: 32,
            grade: 2,
            kislinka: 9,
            gorchinka: 10,
            nasishenost: 10,
            geografia:"Африка",
            processing:"Cухая",
            spesial:"Популярное",
            vid_coffee:"Арабика",
            projarka:3,
            discaunt:  false
        }, 
        {
            id:9,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo2',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 2000],
            price: [250, 350, 500, 1000],
            countVidgukiv: 32,
            grade: 5,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 4,
            geografia:"Уганда",
            processing:"Мытая",
            spesial:"Ваш выбор",
            vid_coffee:"Робуста",
            projarka:3,
            discaunt:  false
        },{
            id:10,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 1000],
            price: [250, 350, 500, 750],
            countVidgukiv: 32,
            grade: 4,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 2,
            geografia:"Африка",
            processing:"Cухая",
            spesial:"Ваш выбор",
            vid_coffee:"Арабика",
            projarka:3,
            discaunt:  false
    
    
        },
         {
            id:11,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo1',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 3000],
            price: [250, 350, 500, 2000],
            countVidgukiv: 32,
            grade: 2,
            kislinka: 9,
            gorchinka: 10,
            nasishenost: 10,
            geografia:"Африка",
            processing:"Cухая",
            spesial:"Новый урожай",
            vid_coffee:"Арабика",
            projarka:3,
            discaunt:  false
        }, 
        {
            id:12,
            photo: '../images/tovarFoto.png',
            title: 'Colombia Supremo2',
            description: 'Свежеобжаренный кофе - описание товара, вкус, аромат',
            vaga: [150, 250, 500, 2000],
            price: [250, 350, 500, 1000],
            countVidgukiv: 32,
            grade: 5,
            kislinka: 8,
            gorchinka: 7,
            nasishenost: 4,
            geografia:"Уганда",
            processing:"Мытая",
            spesial:"Новый урожай",
            vid_coffee:"Робуста",
            projarka:3,
            pribor:"Avtomat",
            discaunt:  false
        }
                ]
        this._selectedType = {};
        this._selectedBrand = {};
        this._page=1
        this._totalCount=12
        this._limit=3

        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }
    setProduct(products) {
        this._products = products;
    }
    setSelectedType(type) {
        this._selectedType = type;

    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;

    }
    setPage(page){
        this._page=page;
    }
    setTotalCount(count){
        this._totalCount=count;
    }
    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }
    get products() {
        return this._products;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    get totalCount(){
        return this._totalCount;
    }
    get limit(){
        return this._limit;
    }
    get page(){
        return this._page;
    }

}