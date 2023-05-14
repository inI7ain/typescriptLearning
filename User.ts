import { faker } from "@faker-js/faker";

export class User {

	name: string;
	location: {
		lng: number,
		lat: number
	}
	faction: string;

	constructor () {
		this.name = faker.person.fullName();
		this.location = { 
			lng: faker.location.longitude(),
			lat: faker.location.latitude()
		}
	}
}