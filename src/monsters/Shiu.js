import Shiu from "../assets/Shiu.png"

export default {
  id: "Shiu",
  name: "シーウー",
  img: Shiu,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"70",da_quality:"65",tama_quality:"50",fire_quality:"5",water_quality:"3",thander_quality:"5",ice_quality:"25",dragon_quality:"0"}},
    { name: "傘膜", element: { fire: "△", water: "△", thunder: "△", ice: "☆", dragon: "×" ,zan:"○",da:"◎",tama:"○" ,zan_quality:"30",da_quality:"50",tama_quality:"20",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"30",dragon_quality:"0"}},
    { name: "口", element: { fire: "○", water: "△", thunder: "○", ice: "☆", dragon: "×", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"100",da_quality:"100",tama_quality:"70",fire_quality:"15",water_quality:"10",thander_quality:"15",ice_quality:"45",dragon_quality:"0"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "☆", dragon: "×", zan:"○",da:"◎",tama:"○" ,zan_quality:"30",da_quality:"50",tama_quality:"20",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"30",dragon_quality:"0"}},
    { name: "触腕", element: { fire: "△", water: "△", thunder: "△", ice: "☆", dragon: "×", zan:"○",da:"◎",tama:"○" ,zan_quality:"30",da_quality:"50",tama_quality:"20",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"30",dragon_quality:"0"}},
    { name: "腕", element: { fire: "△", water: "△", thunder: "△", ice: "◎", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"50",da_quality:"45",tama_quality:"30",fire_quality:"5",water_quality:"3",thander_quality:"5",ice_quality:"25",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"×",poison:"◎",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv.2", priority: "low" },
  ]
  };