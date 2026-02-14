import Dodobrango from "../assets/Dodobrango.png"

export default {
  id: "Dodobrango",
  name: "ドドブランゴ",
  img:Dodobrango,
  monster_elemental: [{name:"氷属性",type_color:"ice_color"}],
  parts: [
    { name: "頭", element: { fire: "☆", water: "△", thunder: "○", ice: "×", dragon: "×" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"70",da_quality:"70",tama_quality:"60",fire_quality:"30",water_quality:"5",thander_quality:"15",ice_quality:"0",dragon_quality:"0"}},
    { name: "胴", element: { fire: "◎", water: "△", thunder: "○", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"50",tama_quality:"40",fire_quality:"20",water_quality:"5",thander_quality:"15",ice_quality:"0",dragon_quality:"0"}},
    { name: "前脚", element: { fire: "○", water: "△", thunder: "○", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"40",tama_quality:"30",fire_quality:"15",water_quality:"5",thander_quality:"15",ice_quality:"0",dragon_quality:"0"}},
    { name: "後脚", element: { fire: "○", water: "△", thunder: "○", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"40",tama_quality:"30",fire_quality:"15",water_quality:"5",thander_quality:"15",ice_quality:"0",dragon_quality:"0"}},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "○", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"○" ,zan_quality:"50",da_quality:"40",tama_quality:"25",fire_quality:"15",water_quality:"5",thander_quality:"15",ice_quality:"0",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
    { name: "拘束耐性", priority: "low" },
  ]
  };