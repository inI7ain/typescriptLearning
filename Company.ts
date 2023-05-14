import { faker } from "@faker-js/faker"

export class Company {
	name: string;
	motto: string;
	hqLocation: {
		lat: number,
		lng: number
	}

	constructor () {
		this.name = faker.company.name();
		this.motto = faker.company.catchPhrase();
		this.hqLocation = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude()
		}
	}
}