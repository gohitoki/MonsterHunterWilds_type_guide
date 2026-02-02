import Lagiacrus from "../assets/Lagiacrus.png"

export default {
  id: "Lagiacrus",
  name: "ラギアクルス",
  img:Lagiacrus,
  monster_elemental: [{name:"雷属性",type_color:"thander_color"}],
  parts: [
    { name: "頭部", element: { fire: "○", water: "×", thunder: "×", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
    { name: "首", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"24",da_quality:"38",tama_quality:"15",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "胸", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"55",da_quality:"45",tama_quality:"35",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"20",fire_quality:"5",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"25",da_quality:"25",tama_quality:"10",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "背中", element: { fire: "◎", water: "×", thunder: "×", ice: "○", dragon: "○", zan:"◎",da:"◎",tama:"△" ,zan_quality:"45",da_quality:"45",tama_quality:"15",fire_quality:"25",water_quality:"0",thander_quality:"0",ice_quality:"15",dragon_quality:"15"}},
    { name: "背中(水中)", element: { fire: "◎", water: "×", thunder: "×", ice: "○", dragon: "○", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"25",water_quality:"0",thander_quality:"0",ice_quality:"15",dragon_quality:"15"}},
    { name: "後脚", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"38",da_quality:"38",tama_quality:"30",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"35",tama_quality:"20",fire_quality:"20",water_quality:"0",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
    { name: "尻尾(水中)", element: { fire: "◎", water: "×", thunder: "×", ice: "○", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"35",fire_quality:"20",water_quality:"0",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "雷耐性", priority: "low" },
    { name: "耳栓Lv2", priority: "low" },
    { name: "回避距離UP", priority: "low" },
  ]
};