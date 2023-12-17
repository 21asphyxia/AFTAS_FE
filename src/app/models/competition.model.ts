export class Competition {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    constructor(
        id: number,
        name: string,
        description: string,
        startDate: Date,
        endDate: Date,
        status: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }
}
