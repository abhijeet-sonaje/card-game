import { Card } from "./../src/base/Card";
import { data } from "./mock.data";
import { createDeck } from "./../src/helper";
import { expect } from "chai";

describe('Test Suit : ', function () {
    describe('Base Card', function () {
        it('should be instance of card and it should not be null or undefined', function (done) {
            const card: Card = new Card('♣', 'K');
            expect(card).to.be.not.null;
            expect(card).to.be.not.undefined;
            expect(card).to.be.an.instanceof(Card);
            done();
        });
        it('should return suit and value using instance methods', function (done) {
            const card: Card = new Card('♣', 'K');
            expect(card).to.be.not.null;
            expect(card).to.be.not.undefined;
            expect(card).to.be.an.instanceof(Card);
            expect(card.Suit).to.equal('♣');
            expect(card.Value).to.equal('K');
            done();
        });
    });

    describe('Helper File', function () {
        it('should create a card deck and it should not be null or undefined and should have length of 52', function (done) {
            const cardDeck: Card[] = createDeck();
            expect(cardDeck).to.be.not.null;
            expect(cardDeck).to.be.not.undefined;
            expect(cardDeck).to.be.an('array');
            expect(cardDeck).to.have.lengthOf(52);
            expect(cardDeck).to.deep.equal(data.deckData);
            done();
        });
    });
});