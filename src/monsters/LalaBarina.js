import LalaBarina from "../assets/LalaBarina.png"

export default {
  id: "LalaBarina",
  name: "ラバラ・バリナ",
  img: LalaBarina,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "×", thunder: "△", ice: "△", dragon: "×" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"55",da_quality:"60",tama_quality:"50",fire_quality:"20",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "胴", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"30",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "前脚", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"35",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "爪", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"40",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "後脚", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"35",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "花弁状部", element: { fire: "◎", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"60",da_quality:"60",tama_quality:"50",fire_quality:"25",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
    { name: "尻尾", element: { fire: "◎", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"60",da_quality:"60",tama_quality:"50",fire_quality:"25",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "麻痺耐性", priority: "low" },
  ]
  };