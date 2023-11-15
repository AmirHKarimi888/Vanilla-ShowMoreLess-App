import { state } from "../model";
import { getCard, getCards } from "../../main";

class View {
    main = document.querySelector("main");

    render() {
        getCards();
        this.generateMarkup();
        this.eventHandler();
    }

    eventHandler() {
        document.querySelectorAll(".cardBtn").forEach(el => {
            el.addEventListener("click", () => getCard(el.id));
        })
    }


    
    clearCards() {
        this.main.querySelector(".cards").innerHTML = "";
    }

    renderCards() {
        const markup = /*html*/`
        ${
            state.cards.map(card => {
                return(/*html*/`
                    <li class="">
                      ${ card?.text } <button id="${card?.id}" class="cardBtn text-zinc-400 ml-2">${ card.showMore ? 'Show Less' : 'Show More' }<button>
                    </li>
                    `
                )
            })
            .join("")
        }
        `

        this.clearCards();
        this.main.querySelector(".cards").insertAdjacentHTML("afterbegin", markup);
        this.eventHandler();
    }

    clear() {
        this.main.innerHTML = "";
    }

    generateMarkup() {
        const markup = /*html*/`
        <ul class="cards my-20 bg-zinc-100 lg:w-[50%] md:w-[60%] sm:w-[70%] max-sm:w-[80%] grid grid-cols-1 gap-8 p-8 mx-auto border border-zinc-300 shadow-lg shadow-zinc-400">
        ${
            state.cards.map(card => {
                return(/*html*/`
                    <li class="">
                      ${ card?.text } <button id="${card?.id}" class="cardBtn text-zinc-400 ml-2">Show More<button>
                    </li>
                    `
                )
            })
            .join("")
        }
        </ul>
        `

        this.clear();
        this.main.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new View();