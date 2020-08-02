import {v4 as uuid} from 'uuid';
export class DestinoViaje{

    private selected: boolean;
    public servicios: string[];
    id = uuid();

    constructor(public nombre: string, public imagenUrl: string, public votes: number = 0 ){
        this.servicios = ['pileta', 'desayuno'];
    }
    isSelected(): boolean{
        //console.log(this.selected);
        return this.selected;
    }

    setSelected(s: boolean){
        this.selected = s;
    }
// incrementa o baja los votos
voteUp(): any {
    this.votes++;
}
voteDown(): any {
    this.votes--;
}

}