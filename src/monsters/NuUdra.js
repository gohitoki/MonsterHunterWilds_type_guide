import NuUdra from "../assets/NuUdra.png"

export default {
  id: "NuUdra",
  name: "ヌ・エグドラ",
  img: NuUdra,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"70",da_quality:"75",tama_quality:"50",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "傘膜", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○" ,zan_quality:"30",da_quality:"43",tama_quality:"25",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "口", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"80",da_quality:"80",tama_quality:"80",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
    { name: "胴", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"☆",tama:"◎" ,zan_quality:"50",da_quality:"65",tama_quality:"43",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "触腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○" ,zan_quality:"30",da_quality:"43",tama_quality:"25",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "左第1腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "右第1腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "左第2腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "右第2腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "左第3腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
    { name: "右第3腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"48",tama_quality:"48",fire_quality:"0",water_quality:"15",thander_quality:"10",ice_quality:"5",dragon_quality:"10"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"△"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
    { name: "環境適応(歴戦王)", priority: "high" },
  ]
  };