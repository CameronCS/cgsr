class DevEnv {
    static logoUrl = '/Logo.jpeg'
    
    static galleryUrl(type, id, ext) {
        return `/static/${type}/${id}.${ext}`
    }
}

class ProdEnv {
    static logoUrl = '/build/Logo.jpeg'
    static galleryUrl(type, id, ext) {
        return `/build/static/${type}/${id}.${ext}`
    }
}


let indev = false


const Environment = indev ? DevEnv : ProdEnv
export default Environment