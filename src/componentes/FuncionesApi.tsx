import { Instrumento } from "../entidades/Instrumento";
import 'bootstrap/dist/css/bootstrap.min.css';


export async function getAllInstrumentos() {
    let urlServer = "http://localhost:8080/api/instrumentos/getAll";
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
    let urlServer = "http://localhost:8080/api/instrumentos/get/"+id;
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

export async function saveInstrument(instrumento?: Instrumento) {
	let urlServer = 'http://localhost:8080/api/instrumentos/save';
	let methodM:string = "POST";
	if(instrumento && instrumento.id && (instrumento.id) > 0){
		urlServer = 'http://localhost:8080/api/instrumentos/update/'+instrumento.id;
		methodM = "PUT";
	}
    console.log(JSON.stringify(instrumento));
	await fetch(urlServer, {
	  method: methodM,
	  headers: {
		'Content-Type': 'application/json',
	  },
      body: JSON.stringify(instrumento),
	  
	});
}


export async function deleteInstrumentoById(id:number) {
    let urlServer = "http://localhost:8080/api/instrumentos/delete/"+id;
    await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    
}
