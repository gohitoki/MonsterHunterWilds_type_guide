import GoreMagala from "../assets/GoreMagala.png"

export default {
  id: "GoreMagala",
  name: "ゴア・マガラ",
  img: GoreMagala,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "○", water: "×", thunder: "○", ice: "△", dragon: "○" ,zan:"☆",da:"◎",tama:"◎" ,zan_quality:"65",da_quality:"55",tama_quality:"45",fire_quality:"15",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"15"}},
    { name: "触角", element: { fire: "◎", water: "×", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"75",da_quality:"70",tama_quality:"50",fire_quality:"20",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"25"}},
    { name: "首", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"25",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"20",fire_quality:"10",water_quality:"0",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"42",da_quality:"42",tama_quality:"25",fire_quality:"10",water_quality:"0",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "翼", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"26",da_quality:"26",tama_quality:"15",fire_quality:"15",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "翼脚", element: { fire: "◎", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"27",da_quality:"27",tama_quality:"20",fire_quality:"20",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
    { name: "後脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"38",da_quality:"38",tama_quality:"35",fire_quality:"10",water_quality:"0",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"38",da_quality:"38",tama_quality:"25",fire_quality:"10",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"△",poison:"△",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };