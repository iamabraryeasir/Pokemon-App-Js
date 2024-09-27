document.addEventListener("DOMContentLoaded", () => {
    // graving all the elements from HTML
    const pockemonImage = document.getElementById("pockemon-image");
    const pockemonName = document.getElementById("pockemon-name");
    const pockemonType = document.getElementById("pockemon-type");
    const attack = document.getElementById("attack");
    const defense = document.getElementById("defense");
    const speed = document.getElementById("speed");
    const generateNewBtn = document.getElementById("generate-new-btn");

    function randomId() {
        return Math.floor(Math.random() * 500) + 1;
    }

    generateNewBtn.addEventListener("click", async () => {
        const data = await getPockemonData();
        displayData(data);
    });

    async function getPockemonData() {
        try {
            // url
            const url = `https://pokeapi.co/api/v2/pokemon/${randomId()}`;

            const response = await fetch(url);

            const data = await response.json();

            return data;
        } catch (error) {
            throw new Error("Couldn't Get the Data From API.");
        }
    }

    function displayData(data) {
        
        pockemonImage.setAttribute("src", data.sprites.front_default);

        let pockemonNameData = data.species.name;
        pockemonName.textContent =
            pockemonNameData.charAt(0).toUpperCase() + pockemonNameData.slice(1);

        pockemonType.textContent = data.types[0].type.name;

        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        speed.textContent = data.stats[5].base_stat;
    }
});
