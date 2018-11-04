export class Patient {
    public condition: string;
    public state: string;
    public frequency: string;

    constructor(condition: string, state: string, frequency: string) {
        this.condition = condition;
        this.state = state;
        this.frequency = frequency;
    }
}