import  {consultors} from '../../assets/data/consultors'

export const getContentByName = (name = '') => {
    name = name.toLocaleLowerCase().trim()
    if (name.length === 0) return []
    return consultors.filter(
        consultor => consultor.name.toLocaleLowerCase().includes(name)
    )
}