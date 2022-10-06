class Middleware{
    static SendRequest = async (data, method, page) => {
        let response = await fetch("http://localhost:4000/" + page, {method:method, body:data, credentials:"include"})
        return response.json()
    }
}

export default Middleware