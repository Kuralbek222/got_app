
export default class gotServices {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResources(url) {
        const res = await fetch(`${this._apiBase}${url}`)


        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }
    getAllCharacters = async () => {
        const res = await this.getResources('/characters?page=3&pageSize=10')
        return  res.map((item,i)=> this._transFormCharacter(item,i))
    }
    
    getCharacter = async (id) => {
        const character = await this.getResources(`/characters/${id}`)
        return this._transFormCharacter(character)
    }
    getAllHouses = async () => {
        const res = await this.getResources(`/houses/`)
        return res.map(this._transFormHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResources(`/houses/${id}`)
        return this._transFormHouse(house)
    }
    getAllBooks = async (id) => {
        const Books = await  this.getResources(`/books/`)

        return Books.map(this._transFormBooks)
    }

    getBook = async (id) => {
        const Books = await  this.getResources(`/books/${id}`)

        return this._transFormBooks(Books)
    }

    
    _transFormCharacter =  (char,i) => {
     
        let arr = ['name','gender','born','died','culture']

        return  f(char,i,arr)    
    }
    _transFormHouse =  (house,i) => {
    let arr = ['name','region','words','titles','overload','ancestralWeapons']
   
        return f(house,i,arr)
        // return {

        //     name: house.name,
        //     region: house.region,
        //     words: house.words,
        //     titles: house.titles,
        //     overload: house.overload,
        //     ancestralWeapons: house.ancestralWeapons,
        //     id: Math.floor(Math.random()* 10000)
        // }
    }
    _transFormBooks =  (book,i) => {
        let arr = ['name','numberOfPages','publisher','released']
        return  f(book,i,arr)
        
    }
}

const f =(Obj,i,arr)=>{
    let ObjF = {}
    
     arr.forEach((item) => {
        ObjF[item] = (Obj[item]===''||Obj[item]==='undefined')?'no data': Obj[item]
    });   
    return ObjF = Object.assign(ObjF,ObjF.id=i)   
  }