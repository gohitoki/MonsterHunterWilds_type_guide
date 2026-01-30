import brango from "../assets/brango.png"

export default {
    id: "brango",
    name: "ドドブランゴ",
    img:brango,
    parts: [
      { name: "頭部", element: { fire: 0, water: 20, thunder: 25, ice: 15, dragon: 30 }},
      { name: "腕", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
      { name: "後足", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
      { name: "舌", element: { fire: 0, water: 15, thunder: 20, ice: 10, dragon: 25 }},
    ],
  };