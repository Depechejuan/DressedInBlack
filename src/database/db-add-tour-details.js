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
            "España",
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

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "New Life Tour",
            "2011-07-19",
            "Valencia",
            "España",
            "Encuentros Karaoke",
            true,
            `01. Pimpf \n
            02. Black Celebration \n
            03.	Behind The Wheel \n
            04.	Dream On (as presentation) \n
            05.	A Question Of Time \n
            06.	Walking In My Shoes (Acoustic) \n
            07.	Stripped \n
            08.	Just Can't Get Enough \n
            09.	Photographic \n
            10.	Personal Jesus \n
            11.	Fly On The Windscreen \n
            12.	Never Let Me Down Again \n
            13.	Sister Of Night (Acoustic)`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "New Life Tour",
            "2012-03-10",
            "Murcia",
            "España",
            "Pub New Tropic",
            true,
            `01. Higher Love \n
            02.	World In My Eyes \n
            03.	Behind The Wheel \n
            04.	Black Celebration \n
            05.	Stripped \n
            06.	It Doesnt' Matter Two (Acoustic) \n
            07.	Waiting For The Night \n
            08.	Only When I Lose Myself \n
            09.	A Question Of Time \n
            10.	Personal Jesus \n
            11.	Enjoy The Silence \n
            12.	The Things You Said	(Acoustic) \n
            13.	Photographic \n
            14.	Never Let Me Down Again`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "New Life Tour",
            "2012-04-21",
            "Torrevieja",
            "España",
            "El Nido",
            true,
            `01. Higher Love	 \n
            02.	World In My Eyes	 \n
            03.	Behind The Wheel	 \n
            04.	Black Celebration	 \n
            05.	Stripped	 \n
            06.	It Doesnt' Matter Two (Acoustic) \n
            07.	A Question Of Time	 \n
            08.	Personal Jesus	 \n
            09.	Enjoy The Silence	 \n
            10.	Dressed In Black (Acoustic) \n
            11.	Photographic	 \n
            12.	Just Can't Get Enough	 \n
            13.	Never Let Me Down Again	`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "New Life Tour",
            "2012-05-05",
            "Valencia",
            "España",
            "P'aberse Matao",
            true,
            `01. Higher Love	 \n
            02.	World In My Eyes	 \n
            03.	Behind The Wheel	 \n
            04.	Dangerous	 \n
            05.	Wrong	 \n
            06.	The Things You Said	(Acoustic) \n
            07.	Stripped	 \n
            08.	A Question Of Time	 \n
            09.	Personal Jesus	 \n
            10.	Enjoy The Silence (Acoustic) \n
            11.	Dressed In Black	 \n
            12.	Photographic	 \n
            13.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2012-05-25",
            "Granada",
            "España",
            "Planta Baja",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Black Celebration	 \n
            05.	Two Minute Warning	 \n
            06.	Stripped	 \n
            07.	It Doesnt' Matter Two (Acoustic)
            08.	The Things You Said	(Acoustic)
            09.	When The Body Speaks	 \n
            10.	Dangerous	 \n
            11.	Fly On The Windscreen	 \n
            12.	Personal Jesus	 \n
            13.	Enjoy The Silence	 \n
            14.	Dressed In Black (Acoustic)
            15.	Photographic	 \n
            16.	Just Can't Get Enough	 \n
            17.	Never Let Me Down Again	`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2012-08-01",
            "Torrevieja",
            "España",
            "Paseo Marítimo",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	Black Celebration	 \n
            04.	Two Minute Warning	 \n
            05.	Stripped	 \n
            06.	The Things You Said	(Acoustic)
            07.	When The Body Speaks	 \n
            08.	Fly On The Windscreen	 \n
            09.	Personal Jesus	 \n
            10.	Enjoy The Silence	 \n
            11.	Photographic	 \n
            12.	Just Can't Get Enough	 \n
            13.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2012-09-08",
            "Alicante",
            "España",
            "Plaza Juan Pablo II",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	Wrong	 \n
            04.	Black Celebration	 \n
            05.	Fly On The Windscreen	 (Acoustic)
            07.	The Things You Said	(Acoustic)
            08.	Stripped	 \n
            09.	Personal Jesus \n	
            10.	Enjoy The Silence \n	
            11.	Shake The Disease (Acoustic)
            12.	Photographic	 \n
            13.	Just Can't Get Enough	 \n
            14.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2012-09-27",
            "Alicante",
            "España",
            "Sala Stereo",
            true,
            `01. Pimpf	 \n
            02.	World In My Eyes	 \n
            03.	Wrong	 \n
            04.	Fly On The Windscreen	 \n
            05.	Stripped	 \n
            06.	It Doesnt' Matter Two (Acoustic)
            07.	Waiting For The Night	 \n
            08.	Pleasure, Little Treasure	 \n
            09.	Personal Jesus	 \n
            10.	Enjoy The Silence	 \n
            11.	Black Celebration	 \n
            12.	Photographic	 \n
            13.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2012-11-23",
            "Torres De Cotillas",
            "España",
            "Shoko",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Wrong	 \n
            05.	Fly On The Windscreen	 \n
            06.	Stripped	 \n
            07.	Dressed In Black (Acoustic)
            08.	Waiting For The Night	 \n
            09.	Black Celebration	 \n
            10.	Photographic	 \n
            11.	Two Minute Warning \n	
            12.	Just Can't Get Enough \n	
            13.	Shake The Disease (Acoustic)
            14.	Enjoy The Silence	 \n
            15.	When The Body Speaks	 \n
            16.	Personal Jesus	 \n
            17.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2013-03-01",
            "Valencia",
            "España",
            "Matisse",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Wrong	 \n
            05.	Pleasure, Little Treasure	 \n
            06.	Photographic	 \n
            07.	Two Minute Warning	 \n
            08.	Black Celebration	 \n
            09.	Fly On The Windscreen	 \n
            10.	Enjoy The Silence	 \n
            11.	Personal Jesus	 \n
            12.	Never Let Me Down Again	 \n
            13.	Heaven (Acoustic) \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2013-04-27",
            "Valencia",
            "España",
            "DiscoPub Infinity",
            true,
            `01. Black Celebration	 \n
            02.	World In My Eyes	 \n
            03.	Two Minute Warning	 \n
            04.	Pleasure, Little Treasure	 \n
            05.	Wrong	 \n
            06.	Heaven	Acoustic \n
            07.	When The Body Speaks	 \n
            08.	Fly On The Windscreen	 \n
            09.	Photographic	 \n
            10.	Just Can't Get Enough	 \n
            11.	Personal Jesus	 \n
            12.	Enjoy The Silence	 \n
            13.	Waiting For The Night	 \n
            14.	Stripped	 \n
            15.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2013-07-19",
            "Ciudad Real",
            "España",
            "Jaleo & Jarana",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Black Celebration	 \n
            05.	Fly On The Windscreen	 \n
            06.	Two Minute Warning	 \n
            07.	Photographic	 \n
            08.	Pleasure, Little Treasure	 \n
            09.	Heaven (Acoustic) \n
            10.	Halo (Goldfrapp Remix) \n
            11.	Stripped \n
            12.	Dangerous	 \n
            13.	Personal Jesus	 \n
            14.	Enjoy The Silence	 \n
            15.	Just Can't Get Enough	 \n
            16.	Never Let Me Down Again	 \n
            17.	A Question Of Lust (Acoustic) \n
            18.	Everything Counts	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2013-08-30",
            "Torrevieja",
            "España",
            "Jaima Del Puerto",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Black Celebration	 \n
            05.	Two Minute Warning	 \n
            06.	Pleasure, Little Treasure	 \n
            07.	Fly On The Windscreen	 \n
            08.	Stripped	 \n
            09.	Dangerous	 \n
            10.	Personal Jesus	 \n
            11.	Enjoy The Silence	 \n
            12.	Just Can't Get Enough	 \n
            13.	Never Let Me Down Again	 \n
            14.	Photographic	 \n
            15.	Everything Counts	 \n
            16.	Alone (Acoustic) \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2013-09-28",
            "Xirivella",
            "España",
            "Falla Mont De Pietat",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Black Celebration	 \n
            05.	Fly On The Windscreen	 \n
            06.	Pleasure, Little Treasure	 \n
            07.	When The Body Speaks	 \n
            08.	World Full Of Nothing (Acoustic) \n
            09.	Stripped	 \n
            10.	Dangerous	 \n
            11.	Photographic	 \n
            12.	Enjoy The Silence	 \n
            13.	Never Let Me Down Again	 \n
            14.	Personal Jesus	 \n
            15.	Everything Counts	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2014-03-08",
            "Torrevieja",
            "España",
            "El Nido",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	Halo	 \n
            05.	Fly On The Windscreen	 \n
            06.	Dangerous	 \n
            07.	Stripped	 \n
            08.	Wrong	 \n
            09.	Pleasure, Little Treasure	 \n
            10.	Two Minute Warning	 \n
            11.	Black Celebration	 \n
            12.	Ice Machine	(Acoustic) \n
            13.	Enjoy The Silence	 \n
            14.	Personal Jesus	 \n
            15.	Never Let Me Down Again	 \n
            16.	Just Can't Get Enough	 \n
            17.	Everything Counts	 \n
            18.	Precious (Acoustic) \n
            19.	Broken (Acoustic) \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "The Landscape Is Changing Tour",
            "2014-06-28",
            "Valencia",
            "España",
            "Sala WahWah",
            true,
            `01. World In My Eyes \n
            02.	Dangerous \n
            03.	Halo \n
            04.	Should Be Higher \n
            05.	Wrong \n
            06.	Fly On The Windscreen \n
            07.	Just Can't Get Enough \n
            08.	Personal Jesus \n
            09.	Enjoy The Silence \n
            10.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Clean Tour",
            "2016-02-20",
            "Alicante",
            "España",
            "Sala Babel",
            true,
            `01. Christmas Island	 \n
            02.	Puppets	 \n
            03.	Get The Balance Right	 \n
            04.	If You Want	 \n
            05.	A Question Of Time	 \n
            06.	Angel	 \n
            07.	Should Be Higher	 \n
            08.	The Things You Said	 \n
            09.	Enjoy The Silence (Acoustic) \n
            10.	It Doesnt' Matter Two (Acoustic) \n
            11.	Black Celebration	 \n
            12.	Pleasure, Little Treasure	 \n
            13.	Monument	 \n
            14.	Photographic	 \n
            15.	Stripped	 \n
            16.	Nothing's Impossible (Acoustic) \n
            18.	Everything Counts	 \n
            19.	Personal Jesus	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Clean Tour",
            "2016-06-25",
            "Barcelona",
            "España",
            "Sala Upload",
            true,
            `01. Christmas Island	 \n
            02.	World In My Eyes	 \n
            03.	A Question Of Time	 \n
            04.	Puppets	 \n
            05.	Monument	 \n
            06.	If You Want	 \n
            07.	Master And Servant	 \n
            08.	Should Be Higher	 \n
            09.	Waiting For The Night	 \n
            10.	Black Celebration	 \n
            11.	Halo	 \n
            12.	Fly On The Windscreen	 \n
            13.	Pleasure, Little Treasure	 \n
            14.	Stripped	 \n
            15.	Clean	 \n
            16.	Enjoy The Silence (Acoustic) \n
            17.	Never Let Me Down Again	 \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Wrong For Too Long Tour",
            "2016-12-03",
            "Albacete",
            "España",
            "Post Mortem",
            true,
            `01. Pimpf	 \n
            02.	Behind The Wheel	 \n
            03.	World In My Eyes	 \n
            04.	A Question Of Time	 \n
            05.	If You Want	 \n
            06.	Master And Servant	 \n
            07.	Fly On The Windscreen	 \n
            08.	A Pain That I'm Used To	 \n
            09.	Should Be Higher	 \n
            10.	The Things You Said	 \n
            11.	Little 15 (Acoustic) \n
            12.	Black Celebration	 \n
            13.	Halo	 \n
            14.	Wrong	 \n
            15.	Dangerous	 \n
            16.	Strangelove	 \n
            17.	Enjoy The Silence	 \n
            18.	Personal Jesus	 \n
            19.	Photographic	 \n
            20.	Alone (Acoustic) \n
            21.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Wrong For Too Long Tour",
            "2017-04-07",
            "Valencia",
            "España",
            "La Caverna",
            true,
            `01. Black Celebration	 \n
            02.	A Question Of Time	 \n
            03.	World In My Eyes	 \n
            04.	Master And Servant	 \n
            05.	Policy Of Truth	 \n
            06.	People Are People	 \n
            07.	Enjoy The Silence (Acoustic) \n
            08.	Personal Jesus	 \n
            09.	Photographic	 \n
            10.	Stripped	 \n
            11.	Never Let Me Down Again	 \n
            12.	More Than A Party	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Wrong For Too Long Tour",
            "2017-04-21",
            "Murcia",
            "España",
            "La Clave",
            true,
            `01. Black Celebration	 \n
            02.	A Question Of Time	 \n
            03.	World In My Eyes	 \n
            04.	Policy Of Truth	 \n
            05.	People Are People	 \n
            06.	Master And Servant	 \n
            07.	Pleasure, Little Treasure	 \n
            08.	Personal Jesus	 \n
            09.	Photographic	 \n
            10.	Enjoy The Silence	 \n
            11.	Never Let Me Down Again	 \n
            12.	Where's The Revolution (Acoustic) \n
            13.	More Than A Party	 \n
            14.	Dangerous	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Wrong For Too Long Tour",
            "2017-09-16",
            "Cartagena",
            "España",
            "Parking Estadio Cartagonova",
            true,
            `01.	Christmas Island \n
            02.	World in My Eyes \n
            03.	A Question of Time \n
            04.	Wrong \n
            05.	Walking in My Shoes \n
            06.	Black Celebration \n
            07.	Enjoy the Silence \n
            08.	Personal Jesus \n
            09.	Photographic \n
            10.	Never Let Me Down Again \n
            11.	Just Can't Get Enough \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Wrong For Too Long Tour",
            "2017-10-21",
            "Alicante",
            "España",
            "Sala Babel",
            true,
            `01. Christmas Island \n
            02.	World In My Eyes \n
            03.	A Question Of Time \n
            04.	Wrong \n
            05.	Walking In My Shoes \n
            06.	If You Want \n
            07.	Master And Servant \n
            08.	People Are People \n
            09.	Policy Of Truth \n
            10.	John The Revelator \n
            11.	Black Celebration \n
            12.	Enjoy The Silence \n
            13.	Personal Jesus \n
            14.	Just Can't Get Enough \n
            15.	Photographic \n
            16.	Never Let Me Down Again \n
            17.	Everything Counts \n
            18.	Stripped \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2019-05-25",
            "Valencia",
            "España",
            "P'aberse Matao",
            true,
            `01. I Want It All (Intro)	 \n
            02.	A Pain That I'm Used To	 \n
            03.	Behind The Wheel	 \n
            04.	A Question Of Time	 \n
            05.	Wrong	 \n
            06.	Useless	 \n
            07.	Walking In My Shoes	 \n
            08.	World In My Eyes	 \n
            09.	Black Celebration	 \n
            10.	Angel	 \n
            11.	Barrel Of A Gun	 \n
            12.	Enjoy The Silence	 \n
            13.	Personal Jesus	 \n
            14.	Waiting For The Night (Feat. Laura Saint-Claire) \n
            15.	Photographic	 \n
            16.	Never Let Me Down Again	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2019-07-13",
            "Alicante",
            "España",
            "Nave Iguana",
            true,
            `01. I Want It All (Intro)		\n
            02.	A Pain That I'm Used To		\n
            03.	Behind The Wheel		\n
            04.	A Question Of Time		\n
            05.	Wrong		\n
            06.	Useless		\n
            07.	Walking In My Shoes		\n
            08.	World In My Eyes		\n
            09.	Black Celebration		\n
            10.	Angel		\n
            11.	Barrel Of A Gun		\n
            12.	Enjoy The Silence		\n
            13.	Personal Jesus		\n
            14.	Everything Counts		\n
            15.	Condemnation (Acoustic)	\n
            16.	I Feel You		\n
            17. Never Let Me Down Again	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2020-02-29",
            "Madrid",
            "España",
            "Maravillas Club",
            true,
            `01. I Want It All (Intro)	\n
            02.	A Pain That I'm Used To	\n
            03.	Wrong	\n
            04.	Behind The Wheel	\n
            05.	Strangelove	\n
            06.	Corrupt	\n
            07.	Walking In My Shoes	\n
            08.	A Question Of Time	\n
            09.	Useless	\n
            10.	Barrel Of A Gun	\n
            11.	Personal Jesus	\n
            12.	Enjoy The Silence	\n
            13.	Just Can't Get Enough	\n
            14.	Everything Counts	\n
            15.	Rush	\n
            16.	I Feel You	\n
            17. Never Let Me Down Again	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2021-11-13",
            "Alicante",
            "España",
            "Sala Babel",
            true,
            `01. Rush		\n
            02.	Wrong		\n
            03.	Behind The Wheel		\n
            04.	A Question Of Time		\n
            05.	A Pain That I'm Used To		\n
            06.	Walking In My Shoes		\n
            07.	Useless		\n
            08.	Angel		\n
            09.	Barrel Of A Gun		\n
            10.	In Your Room (Feat. Laura Saint-Claire)	\n
            11.	Just Can't Get Enough		\n
            12.	Everything Counts		\n
            13.	Personal Jesus		\n
            14.	Enjoy The Silence		\n
            15.	Corrupt		\n
            16.	I Feel You		\n
            17. Never Let Me Down Again	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-02-26",
            "Murcia",
            "España",
            "Sala Spectrum",
            true,
            `01. I Want It All (Intro)		\n
            02.	A Pain That I'm Used To		\n
            03.	Wrong		\n
            04.	Behind The Wheel		\n
            05.	A Question Of Time		\n
            06.	Corrupt		\n
            07.	Walking In My Shoes		\n
            08.	Useless		\n
            09.	Angel		\n
            10.	Barrel Of A Gun		\n
            11.	I Want You Now (Feat. Antonio Carbonell)	\n
            12.	Just Can't Get Enough		\n
            13.	Everything Counts		\n
            14.	Personal Jesus		\n
            15.	Enjoy The Silence		\n
            16.	Rush		\n
            17. In Your Room (Feat Laura Saint-Claire)	\n
            18.	I Feel You		\n
            19.	Photographic		\n
            20.	Never Let Me Down Again	\n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-03-12",
            "Santa Pola",
            "España",
            "Club Camelot",
            true,
            `01. I Want It All (Intro)	\n
            02.	A Pain That I'm Used To	\n
            03.	Wrong	\n
            04.	Behind The Wheel	\n
            05.	A Question Of Time	\n
            06.	Corrupt	\n
            07.	Walking In My Shoes	\n
            08.	Useless	\n
            09.	Angel	\n
            10.	Barrel Of A Gun	\n
            11.	Just Can't Get Enough	\n
            12.	Everything Counts	\n
            13.	Personal Jesus	\n
            14.	Enjoy The Silence	\n
            15.	Rush	\n
            16.	I Feel You	\n
            17. Photographic	\n
            18.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-06-25",
            "Benidorm",
            "España",
            "Sala Rockstar",
            true,
            `01. Pimpf	\n
            02.	Behind The Wheel	\n
            03.	A Question Of Time	\n
            04.	A Pain That I'm Used To	\n
            05.	Walking In My Shoes	\n
            06.	Corrupt	\n
            07.	Barrel Of A Gun	\n
            08.	Policy Of Truth	\n
            09.	Rush	\n
            10.	I Feel You	\n
            11.	Personal Jesus	\n
            12.	Enjoy The Silence	\n
            13.	Just Can't Get Enough	\n
            14.	Everything Counts	\n
            15.	Photographic	\n
            16.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-08-25",
            "Alicante",
            "España",
            "Summer Village PM2, Centro Comercial Plaza Mar",
            true,
            `01. Pimpf	\n
            02.	Behind The Wheel	\n
            03.	A Question Of Time	\n
            04.	A Pain That I'm Used To	\n
            05.	Photographic	\n
            06.	Corrupt	\n
            07.	Walking In My Shoes	\n
            08.	Barrel Of A Gun	\n
            09.	Policy Of Truth	\n
            10.	Rush	\n
            11.	I Feel You	\n
            12.	Just Can't Get Enough	\n
            13.	Everything Counts	\n
            14.	Personal Jesus	\n
            15.	Enjoy The Silence	\n
            16.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-09-17",
            "Castellón",
            "España",
            "Sala Zeppelin",
            true,
            `01. Christmas Island	\n
            02.	A Pain That I'm Used To	\n
            03.	Wrong	\n
            04.	A Question of Time	\n
            05.	Policy Of Truth	\n
            06.	Strangelove	\n
            07.	Behind the Wheel	\n
            08.	Walking in My Shoes	\n
            09.	Corrupt	\n
            10.	Barrel of a Gun	\n
            11.	I Feel You	\n
            12.	Personal Jesus	\n
            13.	Enjoy the Silence
            14.	Just Can't Get Enough	\n
            15.	Everything Counts	\n
            16.	Photographic	\n
            17.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2022-11-25",
            "Valencia",
            "España",
            "Black Note Club",
            true,
            `01. I Want It All (Intro)	\n
            02.	A Pain That I'm Used To	\n
            03.	Wrong	\n
            04.	Behind the Wheel	\n
            05.	A Question of Time	\n
            06.	Policy Of Truth	\n
            07.	Dream On	\n
            08.	Corrupt	\n
            09.	Walking in My Shoes	\n
            10.	Barrel of a Gun	\n
            11.	I Feel You	\n
            12.	Rush	\n
            13.	Personal Jesus	\n
            14.	Enjoy the Silence	\n
            15.	Just Can't Get Enough	\n
            16.	Everything Counts	\n
            17.	Photographic	\n
            18.	Strangelove	\n
            19.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2023-02-04",
            "Elda",
            "España",
            "Sala Zirkus",
            true,
            `01. I Want It All (Intro)	\n
            02.	A Pain That I'm Used To	\n
            03.	Wrong	\n
            04.	Behind the Wheel	\n
            05.	A Question of Time	\n
            06.	Policy Of Truth	\n
            07.	Dream On	\n
            08.	Corrupt	\n
            09.	Walking in My Shoes	\n
            10.	Barrel of a Gun	\n
            11.	I Feel You	\n
            12.	Rush	\n
            13.	Personal Jesus	\n
            14.	Enjoy the Silence	\n
            15.	Just Can't Get Enough	\n
            16.	Everything Counts	\n
            17.	Photographic	\n
            18.	Strangelove	\n
            19.	Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2023-04-15",
            "Benidorm",
            "España",
            "Sala Rockstar",
            true,
            `01. Painkiller (Intro) \n
            02. A Question Of Time \n
            03. Behind The Wheel \n
            04. Wrong \n
            05. Dream On \n
            06. Strangelove \n
            07. World In My Eyes \n
            08. Speak To Me \n
            09. Useless \n
            10. Walking In My Shoes \n
            11. Corrupt \n
            12. Barrel Of A Gun \n
            13. I Feel You \n
            14. Policy Of Truth \n
            15. Personal Jesus \n
            16. Enjoy The Silence \n
            17. Just Can't Get Enough \n
            18. Everything Counts \n
            19. Ghosts Again \n
            20. Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2023-10-13",
            "Valencia",
            "España",
            "Black Note Club",
            true,
            `01. Pimpf \n
            02. Behind The Wheel \n
            03. A Question Of Time \n
            04. Strangelove \n
            05. Walking In My Shoes \n
            06. The Sinner In Me \n
            07. I Feel You \n
            08. Policy Of Truth \n
            09. Ghosts Again \n
            10. Rush \n
            11. My Favourite Stranger \n
            12. Corrupt \n
            13. Barrel Of A Gun \n
            14. Just Can't Get Enough \n
            15. Everything Counts \n
            16. Never Let Me Down Again \n
            17. Blasphemous Rumours \n
            18. Enjoy The Silence \n
            19. Personal Jesus \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2024-01-13",
            "Valencia",
            "España",
            "Casino CIRSA",
            true,
            `01. Pimpf \n
            02. Behind The Wheel \n
            03. Strangelove \n
            04. World In My Eyes \n
            05. Walking In My Shoes \n
            06. Ghosts Again \n
            07. I Feel You \n
            08. Policy Of Truth \n
            09. Barrel Of A Gun \n
            10. Just Can’t Get Enough \n
            11. Everything Counts \n
            12. Enjoy The Silence \n
            13. Personal Jesus \n
            14. Never Let Me Down Again \n`,
        ]
    );

    await pool.query(
        `
    INSERT INTO tour (id, tourName, tourDate, city, country, venue, soldOut, setlist)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            generateUUID(),
            "Sweetest Devotion Tour",
            "2024-02-03",
            "Elda",
            "España",
            "Sala Zirkus",
            true,
            `01. Intro (Christmas Island) \n
            02. Black Celebration \n
            03. World In My Eyes \n
            04. Behind The Wheel \n
            05. Walking In My Shoes \n
            06. The Sinner In Me \n
            07. Ghosts Again \n
            08. Rush \n
            09. I Feel You \n
            10. Barrel Of A Gun \n
            11. Policy Of Truth \n
            12. Corrupt \n
            13. Blpashemous Rumours \n
            14. Strangelove \n
            15. Just Can’t Get Enough \n
            16. Everything Counts \n
            17. Enjoy The Silence \n
            18. Personal Jesus \n
            19. Never Let Me Down Again \n`,
        ]
    );
}

module.exports = addTourData;
