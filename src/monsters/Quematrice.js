import Quematrice from "../assets/Quematrice.png"

export default {
  id: "Quematrice",
  name: "ケマトリス",
  img: Quematrice,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"65",tama_quality:"60",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "胴", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"30",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"40",da_quality:"35",tama_quality:"35",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"40",da_quality:"35",tama_quality:"35",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"65",da_quality:"60",tama_quality:"60",fire_quality:"0",water_quality:"25",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
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