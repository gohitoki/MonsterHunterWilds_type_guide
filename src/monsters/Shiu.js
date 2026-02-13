import Shiu from "../assets/Shiu.png"

export default {
  id: "Shiu",
  name: "シーウー",
  img: Shiu,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "△", thunder: "△", ice: "☆", dragon: "×" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"63",da_quality:"63",tama_quality:"45",fire_quality:"5",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"8"}},
    { name: "傘膜", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"68",da_quality:"68",tama_quality:"48",fire_quality:"10",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
    { name: "口", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"20",fire_quality:"5",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "☆", ice: "◎", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"24",da_quality:"24",tama_quality:"10",fire_quality:"5",water_quality:"0",thander_quality:"30",ice_quality:"20",dragon_quality:"30"}},
    { name: "触腕", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"20",fire_quality:"10",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
    { name: "腕", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"43",da_quality:"43",tama_quality:"45",fire_quality:"8",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv.2", priority: "low" },
  ]
  };