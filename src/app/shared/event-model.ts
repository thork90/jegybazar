export class EventModel {
    id: number;
    name: string;
    date: string; //na ezt azert prodban szebben
    pictureURL: string;
    description: string;


    constructor(param?: EventModel) {
        if (param) {
            Object.assign(this, param);
        }
    }

    

}
