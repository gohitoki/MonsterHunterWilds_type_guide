import ReyDau from "../assets/ReyDau.png"

export default {
  id: "ReyDau",
  name: "レ・ダウ",
  img:ReyDau,
  monster_elemental: [{name:"雷属性",type_color:"thander_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "○", thunder: "×", ice: "◎", dragon: "△" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"60",da_quality:"65",tama_quality:"50",fire_quality:"5",water_quality:"15",thander_quality:"0",ice_quality:"20",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"30",tama_quality:"25",fire_quality:"5",water_quality:"5",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "左翼", element: { fire: "△", water: "△", thunder: "×", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"50",tama_quality:"45",fire_quality:"5",water_quality:"10",thander_quality:"0",ice_quality:"15",dragon_quality:"5"}},
    { name: "右翼", element: { fire: "△", water: "△", thunder: "×", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"50",tama_quality:"45",fire_quality:"5",water_quality:"10",thander_quality:"0",ice_quality:"15",dragon_quality:"5"}},
    { name: "左脚", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"37",da_quality:"37",tama_quality:"33",fire_quality:"5",water_quality:"5",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "右脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"37",da_quality:"37",tama_quality:"33",fire_quality:"5",water_quality:"5",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"40",tama_quality:"45",fire_quality:"5",water_quality:"5",thander_quality:"0",ice_quality:"10",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"×",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };