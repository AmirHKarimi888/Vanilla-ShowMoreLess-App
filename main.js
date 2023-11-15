import { state } from './src/model';
import './src/style/style.css';
import './src/views/template';
import View from './src/views/View';

export const getCards = () => {

    state.resCards.map(card => state.cards.push({...card}));

    state.cards.filter(card => {
        if(!card.showMore) {
            card.text = card.text.split(" ").slice(0, 10).join(" ");
            card.text = `${card.text} ...`;
        }
    })
}

export const getCard = (id) => {

    state.cards.find(card => {
        if(card.id == parseInt(id)) {
            if(card.showMore) {

                card.text = card.text.split(" ").slice(0, 10).join(" ");
                card.text = `${card.text} ...`;

                card.showMore = false;

            } else {
                
                state.cards.filter(card => {
                    if(card.showMore) {
                        card.showMore = false;
                        card.text = card.text.split(" ").slice(0, 10).join(" ");
                        card.text = `${card.text} ...`;
                    }
                });

                const foundCard = state.resCards.filter(card => card.id == parseInt(id) ? card : null)[0];
                card.text = foundCard.text;

                card.showMore = true;
            }
        }
    })

    View.renderCards();
}

View.render();