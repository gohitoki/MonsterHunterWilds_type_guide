import Gypceros from "../assets/Gypceros.png"

export default {
  id: "Gypceros",
  name: "ゲリョス",
  img: Gypceros,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "☆", water: "△", thunder: "×", ice: "◎", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"55",tama_quality:"45",fire_quality:"30",water_quality:"10",thander_quality:"0",ice_quality:"20",dragon_quality:"10"}},
    { name: "首", element: { fire: "◎", water: "△", thunder: "×", ice: "△", dragon: "△" ,zan:"◎",da:"○",tama:"◎" ,zan_quality:"",da_quality:"",tama_quality:"",fire_quality:"",water_quality:"",thander_quality:"",ice_quality:"",dragon_quality:""}},
    { name: "胴", element: { fire: "◎", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"◎" ,zan_quality:"45",da_quality:"30",tama_quality:"20",fire_quality:"20",water_quality:"5",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
    { name: "翼", element: { fire: "◎", water: "△", thunder: "×", ice: "◎", dragon: "△", zan:"◎",da:"○",tama:"○" ,zan_quality:"42",da_quality:"30",tama_quality:"30",fire_quality:"20",water_quality:"10",thander_quality:"0",ice_quality:"20",dragon_quality:"10"}},
    { name: "脚", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"30",fire_quality:"10",water_quality:"5",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
    { name: "尻尾", element: { fire: "◎", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"☆",da:"◎",tama:"☆" ,zan_quality:"70",da_quality:"40",tama_quality:"80",fire_quality:"20",water_quality:"5",thander_quality:"0",ice_quality:"10",dragon_quality:"10"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"×",induction:"◎"}},
  ],

  skills: [
    { name: "特になし"},
  ]
  };