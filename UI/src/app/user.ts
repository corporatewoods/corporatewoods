export class User {
    id: number;
    legalName: string;
    preferredName: string;
    roles: string[];
    dateOfBirth: Date;

    constructor(id: number, legalName: string, preferredName: string, roles: string[], dateOfBirth: Date){
        this.id = id;
        this.legalName = legalName;
        this.preferredName = preferredName;
        roles.forEach(role => {
            this.roles.push(role);
        });
        this.dateOfBirth = dateOfBirth;
    }
}
