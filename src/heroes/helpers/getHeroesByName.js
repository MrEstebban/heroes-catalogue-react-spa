import { heroes } from "../data/heroes"


export const getHeroesByName = (name = '')=> {

    name = name.toLowerCase().trim()

    if (name.length === 0){
        return [];
    }

    return heroes.filter(heroDta => heroDta.superhero.toLowerCase().includes(name) );
    
}