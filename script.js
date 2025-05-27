
window.addEventListener("load", () => {
    document.getElementById("loading-screen").style.display = "none";

    const data = [
        {
            name: "Delta Android",
            status: "Detected",
            updated: false,
            version: "2.673.713",
            roblox: "10.52",
            website: "https://deltaexploits.gg/delta-executor-mobile",
            download: "https://www.mediafire.com/file_premium/x8kaova1oq5eo2q/Delta-2.673.713.apk/file",
            discord: "https://discord.gg/deltax"
        },
        {
            name: "Ronix Android",
            status: "Undetected",
            updated: true,
            version: "671",
            roblox: "10.52",
            website: "None",
            download: "https://www.mediafire.com/file/no47w2pmyh71yzg/ronix671+(1).apk/file",
            discord: "https://discord.gg/ronix"
        }
    ];

    const container = document.getElementById("cards-container");
    const search = document.getElementById("searchBar");

    function renderCards(filter = "") {
        container.innerHTML = "";
        data.filter(d => d.name.toLowerCase().includes(filter.toLowerCase())).forEach(d => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = \`
                <h2>\${d.name}</h2>
                <span class="\${d.updated ? 'updated' : 'not-updated'}">\${d.updated ? 'Updated' : 'Not Updated'}</span>
                <p>Version: \${d.version}</p>
                <div class="extra">
                    <p>Roblox Version: \${d.roblox}</p>
                    <p>Status: \${d.status}</p>
                    <p><a href="\${d.website}" target="_blank">Website</a></p>
                    <p><a href="\${d.download}" target="_blank">Download</a></p>
                    <p><a href="\${d.discord}" target="_blank">Discord</a></p>
                </div>
            \`;
            card.onclick = () => card.classList.toggle("expanded");
            container.appendChild(card);
        });
    }

    search.addEventListener("input", e => {
        renderCards(e.target.value);
    });

    renderCards();
});
