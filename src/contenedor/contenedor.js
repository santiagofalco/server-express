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

}
                   
export default Contenedor