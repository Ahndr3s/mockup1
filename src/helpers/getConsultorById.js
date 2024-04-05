import { consultors } from "../../assets/data/consultors"

export const getConsultorById = (id) => {
    return consultors.find(consultor => consultor.id === id)
} 