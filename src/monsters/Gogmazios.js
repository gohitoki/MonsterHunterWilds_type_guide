import Gogmazios from "../assets/Gogmazios.png"

export default {
  id: "Gogmazios",
  name: "ゴグマジオス",
  img: Gogmazios,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "△" ,zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"32",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
    { name: "頭(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"25"}},
    { name: "頭(気体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "☆" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"5",water_quality:"0",thander_quality:"5",ice_quality:"0",dragon_quality:"50"}},
    { name: "胸", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"25",da_quality:"25",tama_quality:"5",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"20",da_quality:"20",tama_quality:"5",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
    { name: "腹部", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"20",da_quality:"20",tama_quality:"5",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
    { name: "背中", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"38",da_quality:"38",tama_quality:"30",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
    { name: "翼脚", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"32",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
    { name: "翼脚(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "◎", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"15",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"25"}},
    { name: "翼脚(気体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "☆", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"5",water_quality:"0",thander_quality:"5",ice_quality:"0",dragon_quality:"50"}},
    { name: "後脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" ,zan_quality:"20",da_quality:"20",tama_quality:"5",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"25",da_quality:"25",tama_quality:"10",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
    { name: "尻尾(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "○", zan:"○",da:"○",tama:"△" ,zan_quality:"38",da_quality:"38",tama_quality:"5",fire_quality:"10",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"15"}},
    { name: "尻尾(気体状態)", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "☆", zan:"○",da:"○",tama:"△" ,zan_quality:"45",da_quality:"45",tama_quality:"5",fire_quality:"5",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"40"}},
    { name: "尻尾先端", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"25",da_quality:"25",tama_quality:"10",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"×",sleep:"×",poison:"×",explosion:"◎"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"×",mahitrap:"×",induction:"×"}},
  ],

  skills: [
    { name: "耐震Lv2", priority: "high" },
    { name: "耳栓Lv3", priority: "low" },
    { name: "ハンター生活", priority: "low" },

  ]
  };