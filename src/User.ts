import faker from 'faker';

/*
USER is randomly generated
*/
//By convention when we have a file class its starts with Uppercase Name
export class User{
    name: string;
    location: {
        //Physical location in the world, used to map an user in to map interface
        lat: number;
        lng: number;
    };

    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
}


