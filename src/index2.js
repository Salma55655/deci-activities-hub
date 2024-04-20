class User {
    constructor(userData) {
        this.id = userData.id;
        this.firstName = userData.firstName;
        this.lastName = userData.lastName;
        this.maidenName = userData.maidenName;
        this.age = userData.age;
        this.gender = userData.gender;
        this.email = userData.email;
        this.phone = userData.phone;
        this.username = userData.username;
        this.password = userData.password;
        this.birthDate = userData.birthDate;
        this.image = userData.image;
        this.bloodGroup = userData.bloodGroup;
        this.height = userData.height;
        this.weight = userData.weight;
        this.eyeColor = userData.eyeColor;
        this.hairColor = userData.hair.color; // Access nested object
        this.hairType = userData.hair.type; // Access nested object
        this.domain = userData.domain;
        this.ip = userData.ip;
        this.address = {
            address: userData.address.address,
            city: userData.address.city,
            coordinates: {
                lat: userData.address.coordinates.lat,
                lng: userData.address.coordinates.lng
            },
            postalCode: userData.address.postalCode,
            state: userData.address.state
        };
        this.macAddress = userData.macAddress;
        this.university = userData.university;
        this.bank = {
            cardExpire: userData.bank.cardExpire,
            cardNumber: userData.bank.cardNumber,
            cardType: userData.bank.cardType,
            currency: userData.bank.currency,
            iban: userData.bank.iban
        };
        this.company = {
            address: {
                address: userData.company.address.address,
                city: userData.company.address.city,
                coordinates: {
                    lat: userData.company.address.coordinates.lat,
                    lng: userData.company.address.coordinates.lng
                },
                postalCode: userData.company.address.postalCode,
                state: userData.company.address.state
            },
            department: userData.company.department,
            name: userData.company.name,
            title: userData.company.title
        };
        this.ein = userData.ein;
        this.ssn = userData.ssn;
        this.userAgent = userData.userAgent;
        this.crypto = {
            coin: userData.crypto.coin,
            wallet: userData.crypto.wallet,
            network: userData.crypto.network
        };
    }

    displayInfo() {
        console.log(`User Information:
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}
            Gender: ${this.gender}
            Email: ${this.email}
            Phone: ${this.phone}
            Address: ${this.address.address}, ${this.address.city}, ${this.address.state} ${this.address.postalCode}
            Company: ${this.company.name}, ${this.company.department}, ${this.company.title}
        `);
    }
}
