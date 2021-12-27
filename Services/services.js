export const boiler = "https://adjara-express-api.herokuapp.com"




export const fetchData = async (url) =>{
    try {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)            
    }
}
export const fetchMovieFiles = async (movieId,sesNum) =>{
    const url = `${boiler}movie-files/${movieId}/${sesNum}`;
    try {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)            
    }
}
export const fetchMovieDetails = async (movieId) =>{
    const url = `${boiler}/movie/${movieId}`;
    try {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)            
    }
}
export const fetchMovieImages = async (url) =>{
    try {
        const res = await fetch(url)
        const json = await res.json()
        const images = []
        json.map(child=>images.push(child.covers.data[1920]))
        return images
    } catch (error) {
        console.log(error)            
    }
}