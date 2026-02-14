import GuardianFulgurAnjanath from "../assets/GuardianFulgurAnjanath.png"

export default {
  id: "GuardianFulgurAnjanath",
  name: "護竜アンジャナフ",
  img: GuardianFulgurAnjanath,
  monster_elemental: [{name:"雷属性",type_color:"thander_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "◎", thunder: "×", ice: "☆", dragon: "☆" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"60",da_quality:"60",tama_quality:"45",fire_quality:"10",water_quality:"20",thander_quality:"0",ice_quality:"30",dragon_quality:"30"}},
    { name: "鼻", element: { fire: "○", water: "◎", thunder: "×", ice: "☆", dragon: "☆" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"65",da_quality:"60",tama_quality:"55",fire_quality:"15",water_quality:"25",thander_quality:"0",ice_quality:"35",dragon_quality:"30"}},
    { name: "首", element: { fire: "△", water: "◎", thunder: "×", ice: "◎", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"30",da_quality:"30",tama_quality:"10",fire_quality:"5",water_quality:"20",thander_quality:"0",ice_quality:"25",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "○", thunder: "×", ice: "◎", dragon: "×", zan:"○",da:"○",tama:"◎" ,zan_quality:"30",da_quality:"30",tama_quality:"45",fire_quality:"5",water_quality:"15",thander_quality:"0",ice_quality:"20",dragon_quality:"0"}},
    { name: "翼", element: { fire: "○", water: "◎", thunder: "×", ice: "☆", dragon: "△", zan:"☆",da:"◎",tama:"◎" ,zan_quality:"65",da_quality:"45",tama_quality:"55",fire_quality:"15",water_quality:"25",thander_quality:"0",ice_quality:"35",dragon_quality:"10"}},
    { name: "脚", element: { fire: "△", water: "○", thunder: "×", ice: "◎", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"30",da_quality:"30",tama_quality:"10",fire_quality:"5",water_quality:"15",thander_quality:"0",ice_quality:"20",dragon_quality:"0"}},
    { name: "尻尾", element: { fire: "△", water: "◎", thunder: "×", ice: "◎", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"60",tama_quality:"55",fire_quality:"10",water_quality:"20",thander_quality:"0",ice_quality:"25",dragon_quality:"5"}},
    { name: "頭(帯電)", element: { fire: "△", water: "☆", thunder: "×", ice: "◎", dragon: "☆" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"55",da_quality:"55",tama_quality:"45",fire_quality:"10",water_quality:"30",thander_quality:"0",ice_quality:"20",dragon_quality:"30"}},
    { name: "鼻(帯電)", element: { fire: "○", water: "☆", thunder: "×", ice: "◎", dragon: "☆" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"65",da_quality:"60",tama_quality:"55",fire_quality:"15",water_quality:"40",thander_quality:"0",ice_quality:"25",dragon_quality:"30"}},
    { name: "首(帯電)", element: { fire: "△", water: "◎", thunder: "×", ice: "◎", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"26",da_quality:"26",tama_quality:"10",fire_quality:"5",water_quality:"25",thander_quality:"0",ice_quality:"20",dragon_quality:"5"}},
    { name: "胴(帯電)", element: { fire: "△", water: "◎", thunder: "×", ice: "○", dragon: "×", zan:"○",da:"○",tama:"◎" ,zan_quality:"26",da_quality:"26",tama_quality:"40",fire_quality:"5",water_quality:"20",thander_quality:"0",ice_quality:"15",dragon_quality:"0"}},
    { name: "翼(帯電)", element: { fire: "○", water: "☆", thunder: "×", ice: "◎", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"40",tama_quality:"50",fire_quality:"15",water_quality:"40",thander_quality:"0",ice_quality:"25",dragon_quality:"10"}},
    { name: "脚(帯電)", element: { fire: "△", water: "◎", thunder: "×", ice: "○", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"35",da_quality:"35",tama_quality:"15",fire_quality:"5",water_quality:"20",thander_quality:"0",ice_quality:"15",dragon_quality:"0"}},
    { name: "尻尾(帯電)", element: { fire: "△", water: "◎", thunder: "×", ice: "◎", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"55",da_quality:"55",tama_quality:"70",fire_quality:"10",water_quality:"25",thander_quality:"0",ice_quality:"20",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2",priority: "low" },
  ]
  };