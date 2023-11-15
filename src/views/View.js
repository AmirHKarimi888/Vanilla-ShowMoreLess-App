class View {
    main = document.querySelector("main");

    render() {
        this.generateMarkup();
    }

    clear() {
        this.main.innerHTML = "";
    }

    generateMarkup() {
        const markup = /*html*/`
        <div class="my-20 w-[72%] h-screen mx-auto border border-zinc-300 shadow-lg shadow-zinc-400">
          
        </div>
        `

        this.clear();
        this.main.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new View();