export interface Referral {
    id?: string;
    name: string;
    lastName: string;
    address: {
        street: string;
        apt?: string;
        city: string;
        zipcode: string;
    };
    phone: string;
    email?: string;
    mon?: string;
    orderDate: string;
    due: string;
    package: string;
    moveIn: string;
    status: string;
    note: string;
    referredBy?: string;

}
