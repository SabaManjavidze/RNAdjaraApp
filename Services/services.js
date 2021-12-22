const boiler = "http://10.0.2.2:4000/"




export const fetchData = async (url,setData) =>{
    try {
        const res = await fetch(url)
        const json = await res.json()
        setData(json)
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
    const url = `${boiler}movie/${movieId}`;
    try {
        const res = await fetch(url)
        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)            
    }
}
export const fetchMovieImages = async (url,setImages) =>{
    try {
        const res = await fetch(url)
        const json = await res.json()
        const images = []
        json.map(child=>images.push(child.covers.data[1920]))
        setImages(images)
    } catch (error) {
        console.log(error)            
    }
}