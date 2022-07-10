import fs from 'fs';

class Contenedor {

    constructor(fileName) {
        this.fileName = fileName
    }

    getAll = async () => {
        try {
            if (fs.existsSync(this.fileName)) {
                let fileData = await fs.promises.readFile(this.fileName, 'utf-8')
                let productos = JSON.parse(fileData)
                return productos
            } else {
                console.log('entro aca')
                return [] //No hay productos, devuelvo array vacio
            }

        } catch (err) {
            console.error('Error' + err)
            return null
        }
    }

    // save = async (producto) => {
    //     try {
    //         let productos = await this.getAll()
    //         if (productos.length === 0) { //No existe o vacio
    //             producto.id = 1
    //             productos.push(producto)
    //             await fs.promises.writeFile(this.fileName, JSON.stringify(productos, null, '\t'))
    //         } else { // mas de un producto
    //             producto.id = productos[productos.length - 1].id + 1
    //             productos.push(producto)
    //             await fs.promises.writeFile(this.fileName, JSON.stringify(productos, null, '\t'))
    //         }
    //         return producto.id
    //     } catch (err) {
    //         console.error('Error' + err)
    //         return null
    //     }
    // }

    // getById = async (id) => {
    //     try {
    //         if (fs.existsSync(this.fileName)) {
    //             let fileData = await fs.promises.readFile(this.fileName, 'utf-8')
    //             let producto = JSON.parse(fileData)
    //             return producto[id - 1]
    //         } else {
    //             console.log('No existe')
    //             return null //No hay productos, devuelvo array vacio
    //         }
    //     } catch (err) {
    //         console.error('Error' + err)
    //     }
    // }

    // deleteById = async (id) => {
    //     try {
    //         let productos = await this.getAll()
    //         if (productos.length != 0) { //Si no esta vacio
    //             productos.splice(id - 1, 1)
    //             await fs.promises.writeFile(this.fileName, JSON.stringify(productos, null, '\t'))
    //         } else { // está vacio 
    //             console.log('el array esta vacio')
    //         }

    //     } catch (err) {
    //         console.error('Error' + err)
    //     }

    // }

    // deleteAll = async () => {
    //     try {
    //         await fs.promises.writeFile(this.fileName, JSON.stringify([], null, '\t'))
    //     } catch (err) {
    //         console.error('Error' + err)
    //     }

    // }


}

// module.exports = Contenedor                        



export default Contenedor