import Congalala from "../assets/Congalala.png"

export default {
  id: "Congalala",
  name: "ババコンガ",
  img: Congalala,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "△", thunder: "△", ice: "○", dragon: "△" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"65",da_quality:"70",tama_quality:"60",fire_quality:"25",water_quality:"10",thander_quality:"10",ice_quality:"15",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"35",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "○", water: "△", thunder: "△", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"15",water_quality:"10",thander_quality:"10",ice_quality:"15",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "○", water: "△", thunder: "△", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"35",fire_quality:"15",water_quality:"10",thander_quality:"10",ice_quality:"15",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "○", water: "△", thunder: "△", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"15",water_quality:"10",thander_quality:"10",ice_quality:"15",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "特になし" },
  ]
  };