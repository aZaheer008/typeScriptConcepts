import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company {
    comapnyName : string;
    catchPhrase : string;
    location:{
        lat:number;
        lng:number;
    };
    color : string = 'red';

    constructor(){
        this.comapnyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat : parseFloat(faker.address.latitude()),
            lng : parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
        <div>
            <h1>Company Name : ${this.comapnyName}</h1>
            <h3>Catchphrase  : ${this.catchPhrase}</h3>
        </div>`;
    }

}