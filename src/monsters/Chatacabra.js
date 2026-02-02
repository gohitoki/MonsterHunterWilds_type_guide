import Chatacabra from "../assets/Chatacabra.png"

export default {
    id: "Chatacabra",
    name: "チャタカブラ",
    img: Chatacabra,
    monster_elemental: [{name:"無属性",type_color:"gray"}],
    parts: [
      { name: "頭部", element: { fire: "△", water: "△", thunder: "◎", ice: "△", dragon: "×" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"65",tama_quality:"60",fire_quality:"10",water_quality:"5",thander_quality:"25",ice_quality:"10",dragon_quality:"0"}},
      { name: "胴", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"30",ice_quality:"15",dragon_quality:"0"}},
      { name: "前脚", element: { fire: "△", water: "△", thunder: "○", ice: "△", dragon: "×", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"60",tama_quality:"65",fire_quality:"5",water_quality:"5",thander_quality:"15",ice_quality:"10",dragon_quality:"0"}},
      { name: "前脚(粘着纏)", element: { fire: "×", water: "×", thunder: "○", ice: "○", dragon: "×", zan:"◎",da:"☆",tama:"◎" ,zan_quality:"50",da_quality:"65",tama_quality:"50",fire_quality:"0",water_quality:"0",thander_quality:"15",ice_quality:"10",dragon_quality:"0"}},
      { name: "後脚", element: { fire: "×", water: "×", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"0",water_quality:"0",thander_quality:"20",ice_quality:"15",dragon_quality:"0"}},
      { name: "尻", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"50",tama_quality:"55",fire_quality:"10",water_quality:"5",thander_quality:"20",ice_quality:"15",dragon_quality:"0"}},
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