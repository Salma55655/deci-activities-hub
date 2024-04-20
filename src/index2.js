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

// Example usage:
const userData = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/Terry.png?set=set4",
    "bloodGroup": "A-",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
        "color": "Black",
        "type": "Strands"
    },
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
    },
    "company": {
        "address": {
            "address": "629 Debbie Drive",
            "city": "Nashville",
            "coordinates": {
                "lat": 36.208114,
                "lng": -86.58621199999999
            },
            "postalCode": "37076",
            "state": "TN"
        },
        "department": "Marketing",
        "name": "Blanda-O'Keefe",
        "title": "Help Desk Operator"
    },
    "macAddress": "13:69:BA:56:A3:74",
    "university": "Capitol University",
    "bank": {
        "cardExpire": "06/22",
        "cardNumber": "50380955204220685",
        "cardType": "maestro",
        "currency": "Peso",
        "iban": "NO17 0695 2754 967"
    },
    "ein": "20-9487066",
    "ssn": "661-64-2976",
    "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
    }
};

const user = new User(userData);
user.displayInfo(); 