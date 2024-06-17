const personajesFemeninos = [
    {
        nombre: "Rem",
        anime: "Re:Zero kara Hajimeru Isekai Seikatsu",
        imagen: "media/img/1.webp",
        video: "https://v.animethemes.moe/ReZero-OP2.webm",
        url: "https://rezero.fandom.com/wiki/Rem",
        descripcion: "Una maid demoníaca con habilidades increíbles y un corazón de oro. ¡Cuidado con su Morning Star!"
    },
    {
        nombre: "Megumin",
        anime: "Kono Subarashii Sekai ni Shukufuku wo!",
        imagen: "media/img/2.jpg",
        video: "https://v.animethemes.moe/KonosubaS2-OP1.webm",
        url: "https://konosuba.fandom.com/wiki/Megumin",
        descripcion: "Una hechicera obsesionada con la magia de explosiones. ¿Qué puede salir mal con una explosión diaria?"
    },
    {
        nombre: "Karyl",
        anime: "Princess Connect! Re:Dive",
        imagen: "media/img/3.jpg",
        video: "https://v.animethemes.moe/PrincessConnectReDiveS2-OP1-NCBD1080.webm",
        url: "https://princess-connect.fandom.com/wiki/Karyl",
        descripcion: "Una gata mágica con un toque tsundere. Puede ser gruñona, pero en el fondo es un amor."
    },
    {
        nombre: "Aqua",
        anime: "Kono Subarashii Sekai ni Shukufuku wo!",
        imagen: "media/img/4.jpg",
        video: "https://v.animethemes.moe/Konosuba-OP1.webm",
        url: "https://konosuba.fandom.com/wiki/Aqua",
        descripcion: "La diosa de la desgracia y el drama. Sus habilidades son tan útiles como una pantalla de loading."
    },
    {
        nombre: "Mai Sakurajima",
        anime: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        imagen: "media/img/5.jpg",
        video: "https://v.animethemes.moe/Aobuta-OP1-NCBD1080.webm",
        url: "https://aobuta.fandom.com/wiki/Mai_Sakurajima",
        descripcion: "Una actriz famosa que a veces desaparece de la vista. No, no es un truco de magia."
    },
    {
        nombre: "Roxy Migurdia",
        anime: "Mushoku Tensei: Isekai Ittara Honki Dasu",
        imagen: "media/img/6.webp",
        video: "https://v.animethemes.moe/MushokuTenseiS2-OP1-NCBD1080.webm",
        url: "https://mushokutensei.fandom.com/wiki/Roxy_Migurdia",
        descripcion: "Una poderosa maga que también es una excelente profesora. ¡Prepárate para aprender magia con estilo!"
    },
    {
        nombre: "Sayu Ogiwara",
        anime: "Hige wo Soru. Soshite Joshikousei wo Hirou.",
        imagen: "media/img/7.png",
        video: "https://v.animethemes.moe/Higehiro-OP1-NCBD1080.webm",
        url: "https://higehiro.fandom.com/wiki/Sayu_Ogiwara",
        descripcion: "Una chica de secundaria con una historia complicada, pero siempre encuentra la forma de sonreír."
    },
    {
        nombre: "Kaguya Shinomiya",
        anime: "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        imagen: "media/img/8.jpg",
        video: "https://v.animethemes.moe/KaguyaSamaWaKokurasetaiMovie-OP1.webm",
        url: "https://kaguyasama-wa-kokurasetai.fandom.com/wiki/Kaguya_Shinomiya",
        descripcion: "Una genio con un corazón de piedra... hasta que se trata de amor. ¡Las estrategias románticas nunca fueron tan divertidas!"
    },
    {
        nombre: "Chika Fujiwara",
        anime: "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        imagen: "media/img/9.png",
        video: "https://v.animethemes.moe/KaguyaSamaWaKokurasetai-ED2-NCBD1080.webm",
        url: "https://kaguyasama-wa-kokurasetai.fandom.com/wiki/Chika_Fujiwara",
        descripcion: "La secretaria del consejo estudiantil y maestra del caos. ¡Nunca un entrenamiento fue tan peculiar!"
    },
    {
        nombre: "Albedo",
        anime: "Overlord",
        imagen: "media/img/10.webp",
        video: "https://v.animethemes.moe/OverlordS3-OP1-NCBD1080.webm",
        url: "https://overlordmaruyama.fandom.com/wiki/Albedo",
        descripcion: "La guardiana de la Gran Tumba de Nazarick, tan leal como letal. ¡Cuidado con sus sentimientos por su maestro!"
    },
    {
        nombre: "Ai Ohto",
        anime: "Wonder Egg Priority",
        imagen: "media/img/11.jpg",
        video: "https://v.animethemes.moe/WonderEggPriority-OP1-NCBD1080.webm",
        url: "https://wonder-egg-priority.fandom.com/wiki/Ai_Ohto",
        descripcion: "Una joven aventurera en un mundo de sueños. Sus misterios son tan profundos como sus amigos."
    },
    {
        nombre: "Megumi Kato",
        anime: "Saenai Heroine no Sodatekata",
        imagen: "media/img/12.jpg",
        video: "https://v.animethemes.moe/Saekano-OP1.webm",
        url: "https://saekano.fandom.com/wiki/Megumi_Kato",
        descripcion: "La heroína más normal del mundo, hasta que empieza a brillar. ¡A veces, menos es más!"
    },
    {
        nombre: "Yotsuba Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/13.webp",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeSpecials-OP1.webm",
        url: "https://5hanayome.fandom.com/wiki/Yotsuba_Nakano",
        descripcion: "Energía pura y optimismo en persona. Siempre lista para ayudar, aunque a veces se meta en líos."
    },
    {
        nombre: "Nino Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/15.png",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeSpecials-ED1.webm",
        url: "https://5hanayome.fandom.com/wiki/Nino_Nakano",
        descripcion: "Fuerte, independiente y con un toque tsundere. No te dejes engañar por su actitud dura."
    },
    {
        nombre: "Ichika Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/16.webp",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeS2-OP1-NCBD1080.webm",
        url: "https://5hanayome.fandom.com/wiki/Ichika_Nakano",
        descripcion: "La mayor de las quintillizas y aspirante a actriz. Su madurez y travesuras son un combo ganador."
    },
    {
        nombre: "Miku Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/14.jpg",
        video: "https://v.animethemes.moe/EigaGotoubunNoHanayome-OP1.webm",
        url: "https://5hanayome.fandom.com/wiki/Miku_Nakano",
        descripcion: "La más reservada de las hermanas, pero con una pasión secreta. ¡Cuidado, puede derretir tu corazón!"
    },
    {
        nombre: "Itsuki Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/17.jpg",
        video: "https://v.animethemes.moe/GotoubunNoHanayome-OP1-NCBD1080.webm",
        url: "https://5hanayome.fandom.com/wiki/Itsuki_Nakano",
        descripcion: "La dedicada estudiante y amante de la comida. Siempre tiene un snack a mano."
    },
    {
        nombre: "Sumi Sakurasawa",
        anime: "Kanojo, Okarishimasu",
        imagen: "media/img/18.jpg",
        video: "https://v.animethemes.moe/Kanokari-OP1-NCBD1080.webm",
        url: "https://kanojo-okarishimasu.fandom.com/wiki/Sumi_Sakurasawa",
        descripcion: "La tímida y adorable chica que te hará sonreír. ¡Su ternura es contagiosa!"
    },
    {
        nombre: "Frieren",
        anime: "Sousou no Frieren",
        imagen: "media/img/19.jpg",
        video: "https://v.animethemes.moe/SousouNoFrieren-OP1-NCBD1080.webm",
        url: "https://frieren.fandom.com/wiki/Frieren",
        descripcion: "Una elfa maga con un pasado heroico. Su calma y sabiduría son tan profundas como su longevidad."
    },
    {
        nombre: "Yukino Yukinoshita",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/20.jpg",
        video: "https://v.animethemes.moe/OreGairu-OP1.webm",
        url: "https://oregairu.fandom.com/wiki/Yukino_Yukinoshita",
        descripcion: "La brillante y fría presidenta del club de voluntarios. Bajo su exterior helado, hay un corazón cálido."
    },
    {
        nombre: "Yui Yuigahama",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/21.jpeg",
        video: "https://v.animethemes.moe/OreGairuS2-OP1v2.webm",
        url: "https://oregairu.fandom.com/wiki/Yui_Yuigahama",
        descripcion: "La chispeante y alegre chica que siempre está ahí para sus amigos. ¡Su optimismo es inquebrantable!"
    },
    {
        nombre: "Iroha Isshiki",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/22.jpg",
        video: "https://v.animethemes.moe/OreGairuS3-OP1v4-NCBD1080.webm",
        url: "https://oregairu.fandom.com/wiki/Iroha_Isshiki",
        descripcion: "La astuta y encantadora presidenta del consejo estudiantil. No subestimes su habilidad para salir de problemas."
    },
    {
        nombre: "Nezuko Kamado",
        anime: "Kimetsu no Yaiba",
        imagen: "media/img/23.jpg",
        video: "https://v.animethemes.moe/KimetsuNoYaiba-OP1-NCBD1080.webm",
        url: "https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado",
        descripcion: "La hermana menor más feroz del anime. ¡Su dulzura es tan grande como su fuerza!"
    },
    {
        nombre: "Nanachi",
        anime: "Made in Abyss",
        imagen: "media/img/24.jpg",
        video: "https://v.animethemes.moe/MadeInAbyssS2-OP2-NCBD1080.webm",
        url: "https://madeinabyss.fandom.com/wiki/Nanachi",
        descripcion: "Una criatura peluda con un corazón de oro y un pasado misterioso. ¡Sus orejas son irresistibles!"
    },
    {
        nombre: "Shinobu Oshino",
        anime: "Bakemonogatari",
        imagen: "media/img/25.jpg",
        video: "https://v.animethemes.moe/Bakemonogatari-OP1.webm",
        url: "https://bakemonogatari.fandom.com/wiki/Shinobu_Oshino",
        descripcion: "Una vampira con un gusto por las donas. Su apariencia es tan engañosa como su edad."
    },
    {
        nombre: "Mayuri Shiina",
        anime: "Steins;Gate",
        imagen: "media/img/26.jpg",
        video: "https://v.animethemes.moe/SteinsGate-OP1v2.webm",
        url: "https://steins-gate.fandom.com/wiki/Mayuri_Shiina",
        descripcion: "Una chica dulce y alegre con una colección de 'tuturu~'. ¡Su inocencia es su mayor encanto!"
    },
    {
        nombre: "Kurisu Makise",
        anime: "Steins;Gate",
        imagen: "media/img/27.png",
        video: "https://v.animethemes.moe/SteinsGateZero-OP1-NCBD1080Lyrics.webm",
        url: "https://steins-gate.fandom.com/wiki/Kurisu_Makise",
        descripcion: "Una científica brillante con un sarcasmo agudo. ¡La ciencia nunca fue tan emocionante!"
    },
    {
        nombre: "Airi Katagiri",
        anime: "Boku dake ga Inai Machi",
        imagen: "media/img/28.jpg",
        video: "https://v.animethemes.moe/BokuDakeGaInaiMachi-OP1.webm",
        url: "https://bokudakegainaimachi.fandom.com/wiki/Airi_Katagiri",
        descripcion: "Una chica trabajadora con un fuerte sentido de justicia. Su sonrisa es tan cálida como su corazón."
    },
    {
        nombre: "Kagari",
        anime: "Rewrite",
        imagen: "media/img/29.jpg",
        video: "https://v.animethemes.moe/Rewrite-OP1.webm",
        url: "https://rewrite.fandom.com/wiki/Kagari",
        descripcion: "Una misteriosa chica con un vínculo con la naturaleza. Su presencia es tan enigmática como su identidad."
    },
    {
        nombre: "Rinne Ohara",
        anime: "ISLAND",
        imagen: "media/img/30.jpg",
        video: "https://v.animethemes.moe/Island-OP1-NCBD1080.webm",
        url: "https://frontwing-island.fandom.com/wiki/Rinne_Ohara",
        descripcion: "Una joven aislada en una isla misteriosa. ¡Su curiosidad y dulzura te atraparán!"
    },
    {
        nombre: "Chisato Nishikigi",
        anime: "Lycoris Recoil",
        imagen: "media/img/31.jpg",
        video: "https://v.animethemes.moe/LycorisRecoil-OP1-NCBD1080.webm",
        url: "https://lycoris-recoil.fandom.com/wiki/Chisato_Nishikigi",
        descripcion: "Una agente de élite con una sonrisa encantadora. ¡Sus habilidades son tan letales como su carisma!"
    },
    {
        nombre: "Takina Inoue",
        anime: "Lycoris Recoil",
        imagen: "media/img/32.png",
        video: "https://v.animethemes.moe/LycorisRecoil-ED1-NCBD1080.webm",
        url: "https://lycoris-recoil.fandom.com/wiki/Takina_Inoue",
        descripcion: "Una agente seria y dedicada con un lado suave. ¡Su determinación es tan fuerte como su amistad!"
    },
    {
        nombre: "Takagi",
        anime: "Karakai Jouzu no Takagi-san",
        imagen: "media/img/33.webp",
        video: "https://v.animethemes.moe/Takagi3S3-OP1-NCBD1080.webm",
        url: "https://karakai-jouzu-no-takagi-san.fandom.com/wiki/Takagi",
        descripcion: "Una maestra del arte de las bromas. ¡Su habilidad para hacerte sonrojar es legendaria!"
    },
    {
        nombre: "Vladilena Milizé",
        anime: "86: Eighty Six",
        imagen: "media/img/34.jpg",
        video: "https://v.animethemes.moe/86-OP1-NCBD1080.webm",
        url: "https://86-eighty-six.fandom.com/wiki/Vladilena_Miliz%C3%A9",
        descripcion: "Una oficial militar con un corazón de oro. Su valentía y compasión la hacen única."
    },
    {
        nombre: "Lum",
        anime: "Urusei Yatsura",
        imagen: "media/img/35.jpg",
        video: "https://v.animethemes.moe/UruseiYatsura2022-OP2.webm",
        url: "https://uruseiyatsura.fandom.com/wiki/Lum",
        descripcion: "Una alienígena electrificante con un amor apasionado. ¡Su energía es tan alta como su voltaje!"
    },
    {
        nombre: "Yuuko Yoshida",
        anime: "Machikado Mazoku",
        imagen: "media/img/37.jpg",
        video: "https://v.animethemes.moe/MachikadoMazoku-OP1-NCBD1080.webm",
        url: "https://machikado-mazoku.fandom.com/wiki/Yuko_Yoshida",
        descripcion: "Una demonio aprendiz con un toque de torpeza. ¡Sus intentos de maldad son adorablemente fallidos!"
    },
    {
        nombre: "Kei Karuizawa",
        anime: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
        imagen: "media/img/38.jpg",
        video: "https://v.animethemes.moe/YoukosoZitsuS3-OP1v2.webm",
        url: "https://you-zitsu.fandom.com/wiki/Kei_Karuizawa",
        descripcion: "Una chica inteligente y calculadora con un lado vulnerable. ¡Su crecimiento personal es inspirador!"
    },
    {
        nombre: "Emilico",
        anime: "Shadows House",
        imagen: "media/img/39.jpg",
        video: "https://v.animethemes.moe/ShadowsHouseS2-OP1.webm",
        url: "https://shadows-house.fandom.com/wiki/Emilico",
        descripcion: "Una muñeca viviente con un espíritu luminoso. Su curiosidad y amabilidad son contagiosas."
    },
    {
        nombre: "Ai Hoshino",
        anime: "[Oshi no Ko]",
        imagen: "media/img/40.jpg",
        video: "https://v.animethemes.moe/OshiNoKo-OP1-NCBD1080.webm",
        tituloVideo: "Opening - Idol",
        episodio: "https://monoschinos2.com/reproductor?url=aHR0cHM6Ly9maWxlbW9vbi5zeC9lLzQ3NG9zNjNjd3Yybg==",
        trailer: "https://www.youtube.com/embed/gKWEUJ4r5do?si=zqAPIQ55SnRCLbWT",
        url: "https://oshinoko.fandom.com/wiki/Ai_Hoshino",
        db: "https://anidb.net/anime/17449",
        descripcion: "Una idol cuya sonrisa puede derretir icebergs y cuyo carisma brilla como una supernova. Con un estilo inigualable, es una estrella que ilumina todo a su alrededor."
    }
];

const personajesMasculinos = [
    {
        nombre: "Senkuu Ishigami",
        anime: "Dr. STONE",
        imagen: "media/img/41.jpg",
        video: "https://v.animethemes.moe/DrStone-OP1-NCBD1080.webm",
        url: "https://dr-stone.fandom.com/wiki/Senku_Ishigami",
        descripcion: "Un científico brillante con un peinado peculiar. ¡Sus inventos son tan alucinantes como su cerebro!"
    },
    {
        nombre: "Rintarou Okabe",
        anime: "Steins;Gate",
        imagen: "media/img/42.jpg",
        video: "https://v.animethemes.moe/SteinsGate-ED1.webm",
        url: "https://steins-gate.fandom.com/wiki/Rintaro_Okabe",
        descripcion: "El autoproclamado 'científico loco' con un amor por los gadgets. ¡Su risa maníaca es inconfundible!"
    }
];

export { personajesFemeninos, personajesMasculinos };
