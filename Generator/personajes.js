const personajes = [
    {
        nombre: "Rem",
        anime: "Re:Zero kara Hajimeru Isekai Seikatsu",
        imagen: "media/img/1.webp",
        video: "https://v.animethemes.moe/ReZero-OP2.webm",
        url: "https://rezero.fandom.com/wiki/Rem"
    },
    {
        nombre: "Megumin",
        anime: "Kono Subarashii Sekai ni Shukufuku wo!",
        imagen: "media/img/2.jpg",
        video: "https://v.animethemes.moe/KonosubaS2-OP1.webm",
        url: "https://konosuba.fandom.com/wiki/Megumin"
    },
    {
        nombre: "Karyl",
        anime: "Princess Connect! Re:Dive",
        imagen: "media/img/3.jpg",
        video: "https://v.animethemes.moe/PrincessConnectReDiveS2-OP1-NCBD1080.webm",
        url: "https://princess-connect.fandom.com/wiki/Karyl"
    },
    {
        nombre: "Aqua",
        anime: "Kono Subarashii Sekai ni Shukufuku wo!",
        imagen: "media/img/4.jpg",
        video: "https://v.animethemes.moe/Konosuba-OP1.webm",
        url: "https://konosuba.fandom.com/wiki/Aqua"
    },
    {
        nombre: "Mai Sakurajima",
        anime: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        imagen: "media/img/5.jpg",
        video: "https://v.animethemes.moe/Aobuta-OP1-NCBD1080.webm",
        url: "https://aobuta.fandom.com/wiki/Mai_Sakurajima"
    },
    {
        nombre: "Roxy Migurdia",
        anime: "Mushoku Tensei: Isekai Ittara Honki Dasu",
        imagen: "media/img/6.webp",
        video: "https://v.animethemes.moe/MushokuTenseiS2-OP1-NCBD1080.webm",
        url: "https://mushokutensei.fandom.com/wiki/Roxy_Migurdia"
    },
    {
        nombre: "Sayu Ogiwara",
        anime: "Hige wo Soru. Soshite Joshikousei wo Hirou.",
        imagen: "media/img/7.png",
        video: "https://v.animethemes.moe/Higehiro-OP1-NCBD1080.webm",
        url: "https://higehiro.fandom.com/wiki/Sayu_Ogiwara"
    },
    {
        nombre: "Kaguya Shinomiya",
        anime: "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        imagen: "media/img/8.jpg",
        video: "https://v.animethemes.moe/KaguyaSamaWaKokurasetaiMovie-OP1.webm",
        url: "https://kaguyasama-wa-kokurasetai.fandom.com/wiki/Kaguya_Shinomiya"
    },
    {
        nombre: "Chika Fujiwara",
        anime: "Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen",
        imagen: "media/img/9.png",
        video: "https://v.animethemes.moe/KaguyaSamaWaKokurasetai-ED2-NCBD1080.webm",
        url: "https://kaguyasama-wa-kokurasetai.fandom.com/wiki/Chika_Fujiwara"
    },
    {
        nombre: "Albedo",
        anime: "Overlord",
        imagen: "media/img/10.webp",
        video: "https://v.animethemes.moe/OverlordS3-OP1-NCBD1080.webm",
        url: "https://overlordmaruyama.fandom.com/wiki/Albedo"
    },
    {
        nombre: "Ai Ohto",
        anime: "Wonder Egg Priority",
        imagen: "media/img/11.jpg",
        video: "https://v.animethemes.moe/WonderEggPriority-OP1-NCBD1080.webm",
        url: "https://wonder-egg-priority.fandom.com/wiki/Ai_Ohto"
    },
    {
        nombre: "Megumi Kato",
        anime: "Saenai Heroine no Sodatekata",
        imagen: "media/img/12.jpg",
        video: "https://v.animethemes.moe/Saekano-OP1.webm",
        url: "https://saekano.fandom.com/wiki/Megumi_Kato"
    },
    {
        nombre: "Yotsuba Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/13.webp",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeSpecials-OP1.webm",
        url: "https://5hanayome.fandom.com/wiki/Yotsuba_Nakano"
    },
    {
        nombre: "Nino Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/15.png",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeSpecials-ED1.webm",
        url: "https://5hanayome.fandom.com/wiki/Nino_Nakano"
    },
    {
        nombre: "Ichika Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/16.webp",
        video: "https://v.animethemes.moe/GotoubunNoHanayomeS2-OP1-NCBD1080.webm",
        url: "https://5hanayome.fandom.com/wiki/Ichika_Nakano"
    },
    {
        nombre: "Miku Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/14.jpg",
        video: "https://v.animethemes.moe/EigaGotoubunNoHanayome-OP1.webm",
        url: "https://5hanayome.fandom.com/wiki/Miku_Nakano"
    },
    {
        nombre: "Itsuki Nakano",
        anime: "Go-toubun no Hanayome",
        imagen: "media/img/17.jpg",
        video: "https://v.animethemes.moe/GotoubunNoHanayome-OP1-NCBD1080.webm",
        url: "https://5hanayome.fandom.com/wiki/Itsuki_Nakano"
    },
    {
        nombre: "Sumi Sakurasawa",
        anime: "Kanojo, Okarishimasu",
        imagen: "media/img/18.jpg",
        video: "https://v.animethemes.moe/Kanokari-OP1-NCBD1080.webm",
        url: "https://kanojo-okarishimasu.fandom.com/wiki/Sumi_Sakurasawa"
    },
    {
        nombre: "Frieren",
        anime: "Sousou no Frieren",
        imagen: "media/img/19.jpg",
        video: "https://v.animethemes.moe/SousouNoFrieren-OP1-NCBD1080.webm",
        url: "https://frieren.fandom.com/wiki/Frieren"
    },
    {
        nombre: "Yukino Yukinoshita",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/20.jpg",
        video: "https://v.animethemes.moe/OreGairu-OP1.webm",
        url: "https://oregairu.fandom.com/wiki/Yukino_Yukinoshita"
    },
    {
        nombre: "Yui Yuigahama",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/21.jpeg",
        video: "https://v.animethemes.moe/OreGairuS2-OP1v2.webm",
        url: "https://oregairu.fandom.com/wiki/Yui_Yuigahama"
    },
    {
        nombre: "Iroha Isshiki",
        anime: "Yahari Ore no Seishun Love Come wa Machigatteiru.",
        imagen: "media/img/22.jpg",
        video: "https://v.animethemes.moe/OreGairuS3-OP1v4-NCBD1080.webm",
        url: "https://oregairu.fandom.com/wiki/Iroha_Isshiki"
    },
    {
        nombre: "Nezuko Kamado",
        anime: "Kimetsu no Yaiba",
        imagen: "media/img/23.jpg",
        video: "https://v.animethemes.moe/KimetsuNoYaiba-OP1-NCBD1080.webm",
        url: "https://kimetsu-no-yaiba.fandom.com/wiki/Nezuko_Kamado"
    },
    {
        nombre: "Nanachi",
        anime: "Made in Abyss",
        imagen: "media/img/24.jpg",
        video: "https://v.animethemes.moe/MadeInAbyssS2-OP2-NCBD1080.webm",
        url: "https://madeinabyss.fandom.com/wiki/Nanachi"
    },
    {
        nombre: "Shinobu Oshino",
        anime: "Bakemonogatari",
        imagen: "media/img/25.jpg",
        video: "https://v.animethemes.moe/Bakemonogatari-OP1.webm",
        url: "https://bakemonogatari.fandom.com/wiki/Shinobu_Oshino"
    },
    {
        nombre: "Mayuri Shiina",
        anime: "Steins;Gate",
        imagen: "media/img/26.jpg",
        video: "https://v.animethemes.moe/SteinsGate-OP1v2.webm",
        url: "https://steins-gate.fandom.com/wiki/Mayuri_Shiina"
    },
    {
        nombre: "Kurisu Makise",
        anime: "Steins;Gate",
        imagen: "media/img/27.png",
        video: "https://v.animethemes.moe/SteinsGateZero-OP1-NCBD1080Lyrics.webm",
        url: "https://steins-gate.fandom.com/wiki/Kurisu_Makise"
    },
    {
        nombre: "Airi Katagiri",
        anime: "Boku dake ga Inai Machi",
        imagen: "media/img/28.jpg",
        video: "https://v.animethemes.moe/BokuDakeGaInaiMachi-OP1.webm",
        url: "https://bokudakegainaimachi.fandom.com/wiki/Airi_Katagiri"
    },
    {
        nombre: "Kagari",
        anime: "Rewrite",
        imagen: "media/img/29.jpg",
        video: "https://v.animethemes.moe/Rewrite-OP1.webm",
        url: "https://rewrite.fandom.com/wiki/Kagari"
    },
    {
        nombre: "Rinne Ohara",
        anime: "ISLAND",
        imagen: "media/img/30.jpg",
        video: "https://v.animethemes.moe/Island-OP1-NCBD1080.webm",
        url: "https://frontwing-island.fandom.com/wiki/Rinne_Ohara"
    },
    {
        nombre: "Chisato Nishikigi",
        anime: "Lycoris Recoil",
        imagen: "media/img/31.jpg",
        video: "https://v.animethemes.moe/LycorisRecoil-OP1-NCBD1080.webm",
        url: "https://lycoris-recoil.fandom.com/wiki/Chisato_Nishikigi"
    },
    {
        nombre: "Takina Inoue",
        anime: "Lycoris Recoil",
        imagen: "media/img/32.png",
        video: "https://v.animethemes.moe/LycorisRecoil-ED1-NCBD1080.webm",
        url: "https://lycoris-recoil.fandom.com/wiki/Takina_Inoue"
    },
    {
        nombre: "Takagi",
        anime: "Karakai Jouzu no Takagi-san",
        imagen: "media/img/33.webp",
        video: "https://v.animethemes.moe/Takagi3S3-OP1-NCBD1080.webm",
        url: "https://karakai-jouzu-no-takagi-san.fandom.com/wiki/Takagi"
    },
    {
        nombre: "Vladilena Milizé",
        anime: "86: Eighty Six",
        imagen: "media/img/34.jpg",
        video: "https://v.animethemes.moe/86-OP1-NCBD1080.webm",
        url: "https://86-eighty-six.fandom.com/wiki/Vladilena_Miliz%C3%A9"
    },
    {
        nombre: "Lum",
        anime: "Urusei Yatsura",
        imagen: "media/img/35.jpg",
        video: "https://v.animethemes.moe/UruseiYatsura2022-OP2.webm",
        url: "https://uruseiyatsura.fandom.com/wiki/Lum"
    },
    {
        nombre: "Yuuko Yoshida",
        anime: "Machikado Mazoku",
        imagen: "media/img/37.jpg",
        video: "https://v.animethemes.moe/MachikadoMazoku-OP1-NCBD1080.webm",
        url: "https://machikado-mazoku.fandom.com/wiki/Yuko_Yoshida"
    },
    {
        nombre: "Kei Karuizawa",
        anime: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
        imagen: "media/img/38.jpg",
        video: "https://v.animethemes.moe/YoukosoZitsuS3-OP1v2.webm",
        url: "https://you-zitsu.fandom.com/wiki/Kei_Karuizawa"
    },
    {
        nombre: "Emilico",
        anime: "Shadows House",
        imagen: "media/img/39.jpg",
        video: "https://v.animethemes.moe/ShadowsHouseS2-OP1.webm",
        url: "https://shadows-house.fandom.com/wiki/Emilico"
    },
    {
        nombre: "Ai Hoshino",
        anime: "[Oshi no Ko]",
        imagen: "media/img/40.jpg",
        video: "https://v.animethemes.moe/OshiNoKo-OP1-NCBD1080.webm",
        url: "https://oshinoko.fandom.com/wiki/Ai_Hoshino"
    }
];

export { personajes };