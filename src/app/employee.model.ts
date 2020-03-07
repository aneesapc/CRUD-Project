export class employeeListModel {
    public firstName:string;
    public lastName:string;
    public email:string;
    public dob:string;

    constructor (first:string, last:string, email:string, dob:string){
        this.firstName = first;
        this.lastName = last;
        this.email = email;
        this.dob = dob;
    }
}
