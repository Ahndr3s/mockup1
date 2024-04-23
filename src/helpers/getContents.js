import  {contents} from '../../assets/data/content'

export const getContentsByType = (contentType) => {
    const types = ['1','2','3']
    if(!types.includes(contentType)) {
        throw new Error(`${contentType} is not a valid Content Type`)
    }

    return contents.filter(content => content.type === contentType)
}