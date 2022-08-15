import faker from 'faker';
import { Mappable } from './CustomMap';
/*
USER is randomly generated
*/
//By convention when we have a file class its starts with Uppercase Name
export class User implements Mappable{
    name: string;
    location: {
        //Physical location in the world, used to map an user in to map interface
        lat: number;
        lng: number;
    };
    color: string = 'red'
    
    constructor(){
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }

    markerContent(): string{
        return `
        <h5>
        User name: ${this.name}
        </h5>
        `;

    }
}


