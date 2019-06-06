export class Customer {
    constructor(
        public customerType : string,
        public customerFirstName: string,
        public customerLastName : string,
        public customerMobileNo : number,
        public customerEmail: string,
        public customerGender: string,
        public customerOccupation: string,
        public customerMiddleName?: string,
    ) { }
}
