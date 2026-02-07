import Nerscylla from "../assets/Nerscylla.png"

export default {
  id: "Nerscylla",
  name: "ネルスキュラ",
  img: Nerscylla,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "○", water: "×", thunder: "×", ice: "△", dragon: "×" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"50",da_quality:"65",tama_quality:"50",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "胴", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "×", zan:"○",da:"○",tama:"◎" ,zan_quality:"36",da_quality:"36",tama_quality:"40",fire_quality:"25",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "前脚", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "×", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"25",fire_quality:"20",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "爪", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "×", zan:"○",da:"○",tama:"○" ,zan_quality:"28",da_quality:"35",tama_quality:"20",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "腹部", element: { fire: "○", water: "×", thunder: "◎", ice: "△", dragon: "×", zan:"☆",da:"◎",tama:"◎" ,zan_quality:"65",da_quality:"50",tama_quality:"45",fire_quality:"15",water_quality:"0",thander_quality:"20",ice_quality:"5",dragon_quality:"0"}},
    { name: "毒トゲ", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "×", zan:"○",da:"○",tama:"☆" ,zan_quality:"28",da_quality:"35",tama_quality:"65",fire_quality:"25",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "後脚", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "×", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"25",fire_quality:"20",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
    { name: "外套膜", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"35",fire_quality:"20",water_quality:"0",thander_quality:"0",ice_quality:"5",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"◎",sleep:"×",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "拘束耐性", priority: "low" },
    { name: "耳栓Lv2", priority: "low" },
  ]
  };