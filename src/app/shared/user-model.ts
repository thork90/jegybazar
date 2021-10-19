export class UserModel {
    id: number;
    name: string;
    email: string;
    address: string;
    dateOfBirth: string;
    gender: string;

    constructor(param?: UserModel) {
        if (param) {
            Object.assign(this, param);

        }
    }



    static get exampleUser(): UserModel {
        return {
            id: 0,
            name: 'usermodel name',
            email: 'usermodel email',
            address: 'usermodel adress',
            dateOfBirth: '1990.08.26',
            gender: 'male'




        };
    }
}


