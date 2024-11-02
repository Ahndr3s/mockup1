export const getConsultorById = (contentType, collection, id) => {

    if(contentType === 2){
        return collection.find(course => course.id === id)    
    } else if(contentType === 4){
        return collection.find(video => video.id === id)    
    } else {
        return collection.find(consultor => consultor.id === id)
    }

} 