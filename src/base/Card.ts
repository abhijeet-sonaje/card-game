export class Card {
    private suit: string;
    private value: string;

    constructor(suit: string, value: string) {
        this.suit = suit;
        this.value = value
    }

    public get Suit(): string { return this.suit };

    public get Value(): string { return this.value };
};