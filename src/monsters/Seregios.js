import Seregios from "../assets/Seregios.png"

export default {
  id: "Seregios",
  name: "セルレギオス",
  img:Seregios,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭部", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"55",tama_quality:"40",fire_quality:"0",water_quality:"5",thander_quality:"15",ice_quality:"10",dragon_quality:"5"}},
    { name: "首", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○" ,zan_quality:"35",da_quality:"40",tama_quality:"30",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"35",da_quality:"35",tama_quality:"10",fire_quality:"0",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "翼", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"30",da_quality:"30",tama_quality:"15",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"5"}},
    { name: "脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"45",tama_quality:"45",fire_quality:"0",water_quality:"10",thander_quality:"20",ice_quality:"15",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"◎" ,zan_quality:"40",da_quality:"35",tama_quality:"45",fire_quality:"0",water_quality:"5",thander_quality:"15",ice_quality:"10",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "裂傷耐性Lv3", priority: "high" },
    { name: "耳栓Lv2", priority: "low" },
  ]
};