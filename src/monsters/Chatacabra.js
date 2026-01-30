import Chatacabra from "../assets/Chatacabra.png"

export default {
    id: "Chatacabra",
    name: "チャタカブラ",
    img: Chatacabra,
    monster_elemental: [{name:"無属性",type_color:"gray"}],
    parts: [
      { name: "頭部", element: { fire: "△", water: "△", thunder: "◎", ice: "△", dragon: "×" ,zan:"☆",da:"☆",tama:"☆"}},
      { name: "舌", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"☆",da:"☆",tama:"☆"}},
      { name: "胴", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎"}},
      { name: "左前脚", element: { fire: "△", water: "△", thunder: "○", ice: "△", dragon: "×", zan:"☆",da:"☆",tama:"☆" }},
      { name: "右前脚", element: { fire: "△", water: "△", thunder: "○", ice: "△", dragon: "×", zan:"☆",da:"☆",tama:"☆" }},
      { name: "左後脚", element: { fire: "×", water: "×", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" }},
      { name: "右後脚", element: { fire: "×", water: "×", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" }},
      { name: "尻", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" }},
    ],

    status:[
      {status:{paralysis:"◎",sleep:"○",poison:"◎",explosion:"○"}},
    ],

    tools:[
      {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
    ],

    skills: [
      { name: "特になし" },
    ]
    
  };