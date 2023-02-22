class Animal {
    private a: number;
    private b: string;

    public constructor() {
        this.a = 4;
        this.b= '5';
    }
}

class Dog extends Animal {
    private a: unknown;
    private b: string;

    public constructor(){
        super();
        this.a = 'sf';
        this.b = 'df'
    }
}