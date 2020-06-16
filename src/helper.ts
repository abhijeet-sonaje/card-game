import { Card } from "./base/Card";

const suits: string[] = ["♦", "♣", "♥", "♠"];
const cards: string[] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const createDeck = () => {
    const deck: Card[] = new Array();

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cards.length; j++) {
            const card: Card = new Card(suits[i], cards[j]);
            deck.push(card);
        }
    }

    return deck;
}

export { createDeck }