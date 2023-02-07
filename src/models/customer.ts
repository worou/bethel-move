export default class Customer {
    // 1. Typage des propiétés d'une annonce.
    active: boolean;
    address: string;
    birthdate?: string;
    birthplace?: string;
    code: string;
    countryCode: string;
    drivingLicenceNumber: string;
    drivingLicenceValidFrom: string;
    drivingLicenceValidTo: string;
    email: string;
    firstname: string;
    homePhoneNumber: string;
    id: number;
    lastname: string;
    mobilePhoneNumber: string;
    otherTown: string;
    postalCode: string;
    townCode: string;
  
     
    // 2. Définition des valeurs par défaut des propriétés d'une annonce.
    constructor(
        active: boolean,
        address: string,
        birthdate: string,
        birthplace: string,
        code: string,
        countryCode: string,
        drivingLicenceNumber: string,
        drivingLicenceValidFrom: string,
        drivingLicenceValidTo: string,
        email: string,
        firstname: string,
        homePhoneNumber: string,
        id: number,
        lastname: string,
        mobilePhoneNumber: string,
        otherTown: string,
        postalCode: string,
        townCode: string
    ) {
     // 3. Initialisation des propiétés d'un .
        this.active = active;
        this.address = address;
        this.birthdate = birthdate;
        this.birthplace = birthplace;
        this.code = code;
        this.countryCode = countryCode;
        this.drivingLicenceNumber = drivingLicenceNumber;
        this.drivingLicenceValidFrom = drivingLicenceValidFrom;
        this.drivingLicenceValidTo = drivingLicenceValidTo;
        this.email = email;
        this.firstname = firstname;
        this.homePhoneNumber = homePhoneNumber;
        this.id = id;
        this.lastname = lastname;
        this.mobilePhoneNumber = mobilePhoneNumber;
        this.otherTown = otherTown;
        this.postalCode = postalCode;
        this.townCode = townCode;
    
    }
   }