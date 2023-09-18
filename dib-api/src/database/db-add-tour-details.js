const { generateUUID } = require("../services/crypto-services");

async function addTourData(pool) {
    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "New Life Tour",
            "2011-06-06",
            "Valencia",
            "Spain",
            "El Volander",
            true,
            `01. Pimpf \n
            02. Behind The Wheel \n
            03. Dream On (as presentation) \n
            04. A Question Of Time \n
            05. Stripped \n
            06. Waiting For The Night \n
            07. Walking In My Shoes (Acoustic) \n
            08. Fly On The Windscreen \n
            09. Dangerous (Acoustic) \n
            10. Personal Jesus \n
            11. Never Let Me Down Again`,
        ]
    );
}

module.exports = addTourData;
