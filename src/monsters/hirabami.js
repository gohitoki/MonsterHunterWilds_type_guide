import Hirabami from "../assets/Hirabami.png"

export default {
  id: "Hirabami",
  name: "ヒラバミ",
  img:Hirabami,
  monster_elemental: [{name:"氷属性",type_color:"ice_color"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "△", thunder: "◎", ice: "×", dragon: "△" ,zan:"◎",da:"☆",tama:"◎" ,zan_quality:"55",da_quality:"70",tama_quality:"45",fire_quality:"20",water_quality:"10",thander_quality:"20",ice_quality:"0",dragon_quality:"10"}},
    { name: "首", element: { fire: "◎", water: "△", thunder: "◎", ice: "×", dragon: "△", zan:"◎",da:"☆",tama:"◎" ,zan_quality:"55",da_quality:"70",tama_quality:"45",fire_quality:"20",water_quality:"10",thander_quality:"20",ice_quality:"0",dragon_quality:"10"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"40",da_quality:"35",tama_quality:"30",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"0",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"40",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"0",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"40",fire_quality:"10",water_quality:"5",thander_quality:"10",ice_quality:"0",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "◎", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"45",tama_quality:"45",fire_quality:"20",water_quality:"5",thander_quality:"10",ice_quality:"0",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"◎",poison:"◎",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
    { name: "拘束耐性", priority: "low" },
  ]
  };