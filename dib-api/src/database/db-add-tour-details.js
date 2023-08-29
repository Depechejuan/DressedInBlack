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
            `01. Pimpf
            02. Behind The Wheel
            03. Dream On (as presentation)
            04. A Question Of Time
            05. Stripped
            06. Waiting For The Night
            07. Walking In My Shoes (Acoustic)
            08. Fly On The Windscreen
            09. Dangerous (Acoustic)
            10. Personal Jesus
            11. Never Let Me Down Again`,
        ]
    );
}

module.exports = addTourData;
