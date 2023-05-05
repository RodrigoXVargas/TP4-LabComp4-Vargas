import { Instrumento } from "../entidades/Instrumento";


export async function getAllInstrumentos() {
    let urlServer = "http://localhost:8080/api/instrumentos";
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json();
}

export async function getInstrumentoById(id:number) {
    let urlServer = "http://localhost:8080/api/instrumentos/"+id;
    let response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    console.log(response);
    return await response.json() as Instrumento;
}