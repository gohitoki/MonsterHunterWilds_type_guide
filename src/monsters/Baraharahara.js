import Baraharahara from "../assets/Baraharahara.png"

export default {
  id: "Baraharahara",
  name: "バーラハーラ",
  img:Baraharahara,
  monster_elemental: [{name:"水属性",type_color:"water_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "×", thunder: "◎", ice: "△", dragon: "△" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"50",da_quality:"60",tama_quality:"45",fire_quality:"10",water_quality:"0",thander_quality:"20",ice_quality:"5",dragon_quality:"5"}},
    { name: "首", element: { fire: "△", water: "×", thunder: "◎", ice: "△", dragon: "△", zan:"◎",da:"☆",tama:"◎" ,zan_quality:"50",da_quality:"60",tama_quality:"45",fire_quality:"10",water_quality:"0",thander_quality:"20",ice_quality:"5",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○" ,zan_quality:"38",da_quality:"40",tama_quality:"30",fire_quality:"5",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"42",da_quality:"40",tama_quality:"25",fire_quality:"5",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"38",tama_quality:"25",fire_quality:"5",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "属性やられ耐性", priority: "low" },
    { name: "耳栓Lv2", priority: "low" },
    { name: "破壊王", priority: "low" },
  ]
  };