export interface Address{
    street:string;
    city:string;
    number:string;
    zipCode:string;
}

export interface PhoneNumber {
    number :string;
    type:string;
}

export interface Customer {
    givenname:string;
    surName:string;
    email:string;
    afm:string;
    phonenumber:PhoneNumber[];
    address:Address;
}