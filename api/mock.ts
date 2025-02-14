export interface IPerson
{
    id : string,
    nome : string,
    sobrenome : string
}

let personData: IPerson[] = [];


    
    
export function add(data : IPerson){
    if(data === null)
        return false
    data.id = '0';
    if(personData.length != 0)
        data.id = (parseInt(personData[personData.length-1].id) + 1).toString();
    personData.push(data)

    return true
}
    
export function getById(id : string){
    return personData.filter(a => a.id == id)[0];
}
    
export function deleteById(id : string){
    personData = personData.filter( a => a.id != id)
}
    
export function put(id : string, person : IPerson){
    for(let i=0; i<personData.length; i++)
        if(i.toString() === id)
        {
            personData[i] = person
            return true;   
        }
    return false;
}

