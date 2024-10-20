export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    url: string;
    foto: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, descripcion: string, url: string, foto: string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.descripcion = descripcion;
      this.url= url;
      this.foto = foto;
    }
  }