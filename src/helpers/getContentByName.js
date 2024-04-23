// import  {consultors} from '../../assets/data/consultors'
import  {contents} from '../../assets/data/content'

export const getContentByName = (name = '') => {
    name = name.toLocaleLowerCase().trim()
    if (name.length === 0) return []
    return contents.filter(
        content => content.name.toLocaleLowerCase().includes(name)
    )
}