import UthDuna from "../assets/UthDuna.png"

export default {
  id: "UthDuna",
  name: "ウズ・トゥナ",
  img: UthDuna,
  monster_elemental: [{name:"水属性",type_color:"water_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "×", thunder: "◎", ice: "△", dragon: "△" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"40",da_quality:"60",tama_quality:"50",fire_quality:"10",water_quality:"0",thander_quality:"20",ice_quality:"5",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"50",da_quality:"45",tama_quality:"35",fire_quality:"5",water_quality:"0",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"65",da_quality:"65",tama_quality:"55",fire_quality:"10",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"55",tama_quality:"45",fire_quality:"10",water_quality:"0",thander_quality:"15",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"40",fire_quality:"5",water_quality:"0",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "ヴェール", element: { fire: "×", water: "×", thunder: "◎", ice: "×", dragon: "×", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"90",da_quality:"60",tama_quality:"60",fire_quality:"0",water_quality:"0",thander_quality:"25",ice_quality:"0",dragon_quality:"0"}},
    { name: "ヴェール(歴戦王)", element: { fire: "×", water: "×", thunder: "◎", ice: "×", dragon: "×", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"90",da_quality:"75",tama_quality:"35",fire_quality:"0",water_quality:"0",thander_quality:"20",ice_quality:"0",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv.2", priority: "low" },
    { name: "水場適応", priority: "low" },
  ]
  };