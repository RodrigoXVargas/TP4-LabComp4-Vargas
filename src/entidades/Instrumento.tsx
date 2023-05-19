export class Instrumento {
  id: number;
  instrumento: string;
  marca: string;
  modelo: string;
  imagen: string;
  precio: string;
  costo_envio: string;
  cantidad_vendida: string;
  descripcion: string;

  constructor(
    id: number = 0,
    instrumento: string = "",
    marca: string = "",
    modelo: string = "",
    imagen: string = "",
    precio: string = "",
    costo_envio: string = "",
    cantidad_vendida: string = "",
    descripcion: string = ""
  ) {
    this.id = id;
    this.instrumento = instrumento;
    this.marca = marca;
    this.modelo = modelo;
    this.imagen = imagen;
    this.precio = precio;
    this.costo_envio = costo_envio;
    this.cantidad_vendida = cantidad_vendida;
    this.descripcion = descripcion;
  }
}
