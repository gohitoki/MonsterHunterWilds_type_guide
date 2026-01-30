import g_dosya from "../assets/g_dosya.png"

export default {
    id: "g_dosya",
    name: "護竜ドシャグマ",
    img:g_dosya,
    parts: [
      { name: "頭部", element: { fire: 0, water: 20, thunder: 25, ice: 15, dragon: 30 }},
      { name: "腕", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
      { name: "後足", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
      { name: "舌", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
    ],
  };