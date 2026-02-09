import GaurdianDoshaguma from "../assets/GaurdianDoshaguma.png"

export default {
  id: "GaurdianDoshaguma",
  name: "護竜ドシャグマ",
  img:GaurdianDoshaguma,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "△", thunder: "◎", ice: "○", dragon: "△" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"55",da_quality:"60",tama_quality:"45",fire_quality:"25",water_quality:"5",thander_quality:"20",ice_quality:"15",dragon_quality:"5"}},
    { name: "胴", element: { fire: "◎", water: "△", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"38",da_quality:"38",tama_quality:"25",fire_quality:"25",water_quality:"5",thander_quality:"15",ice_quality:"10",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "◎", water: "△", thunder: "△", ice: "◎", dragon: "☆", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"60",tama_quality:"65",fire_quality:"20",water_quality:"5",thander_quality:"5",ice_quality:"20",dragon_quality:"30"}},
    { name: "左後脚", element: { fire: "△", water: "△", thunder: "○", ice: "◎", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"40",da_quality:"35",tama_quality:"35",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"20",dragon_quality:"5"}},
    { name: "右後脚", element: { fire: "△", water: "△", thunder: "○", ice: "◎", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"40",da_quality:"35",tama_quality:"35",fire_quality:"10",water_quality:"5",thander_quality:"15",ice_quality:"20",dragon_quality:"5"}},
    { name: "尾毛", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"25",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"20",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };