export interface CustomTableProps {
    selectionType: 'checkbox' | 'radio';
}


export interface CoordinatesType {
    lat: number;
    lng: number;
}

export interface AddressType {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: CoordinatesType;
    country: string;
}

export interface BankType {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

export interface CompanyType {
    department: string;
    name: string;
    title: string;
    address: AddressType;
}

export interface CryptoType {
    coin: string;
    wallet: string;
    network: string;
}

export interface DataType {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: AddressType;
    macAddress: string;
    university: string;
    bank: BankType;
    company: CompanyType;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: CryptoType;
    role: string;
}
