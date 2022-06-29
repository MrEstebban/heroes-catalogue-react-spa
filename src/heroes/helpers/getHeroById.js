import { heroes } from "../data/heroes"

export const getHeroById = (id)=>{

    return heroes.find(heroDta => heroDta.id === id);

}