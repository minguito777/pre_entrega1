class ProductManager {
 
    constructor () {
        this.products = [];
        this.ultID = 0;
    }

    getProducts() {
        const misProductos = this.products.map((product) => {return product;});
        return misProductos;
    }

    addProducts = (title, description, price,thumbnail,code,stock) => {
        const codigoUsado = this.products.some((product)=> product.code === code);
        if(codigoUsado){
            
            console.log(`El codigo de ${title} ya usado, ingrese otro codigo`)
        }
        else{
            const productID = this.createID();
            const product = { id:productID, title, description, price,thumbnail,code,stock }
            this.products.push(product)  
        }
        
    }

    createID () {
        this.ultID++;
        return this.ultID;
    }

    getProductsByID(id) {
        for(const productID of this.products ){
            if(productID.id == id){return productID}
            else{return console.log("no Id registrado")}
        }

    }

}


const productos = new ProductManager()
productos.addProducts("prod 1","producto ... de ...",200,"img","asdada",25) 
productos.addProducts("prod 2","producto ... de ...",300,"img","asdada",30) 
productos.addProducts("prod 3","producto ... de ...",400,"img","asdasd",40)

console.log("array de productos", productos.getProducts()) 
console.log("Id de productos", productos.getProductsByID())