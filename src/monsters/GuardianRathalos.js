import GuardianRathalos from "../assets/GuardianRathalos.png"

export default {
  id: "GuardianRathalos",
  name: "護竜リオレウス",
  img:GuardianRathalos,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "◎" ,zan:"☆",da:"☆",tama:"◎" ,zan_quality:"65",da_quality:"70",tama_quality:"55",fire_quality:"0",water_quality:"10",thander_quality:"15",ice_quality:"10",dragon_quality:"25"}},
    { name: "首", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"○",da:"◎",tama:"○" ,zan_quality:"35",da_quality:"40",tama_quality:"30",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"20"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"20",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"20"}},
    { name: "翼", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "◎", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"30",fire_quality:"0",water_quality:"10",thander_quality:"15",ice_quality:"10",dragon_quality:"25"}},
    { name: "脚", element: { fire: "×", water: "○", thunder: "◎", ice: "○", dragon: "☆", zan:"☆",da:"◎",tama:"◎" ,zan_quality:"60",da_quality:"50",tama_quality:"50",fire_quality:"0",water_quality:"15",thander_quality:"20",ice_quality:"15",dragon_quality:"30"}},
    { name: "尻尾", element: { fire: "×", water: "×", thunder: "△", ice: "×", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"30",fire_quality:"0",water_quality:"0",thander_quality:"5",ice_quality:"0",dragon_quality:"15"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };