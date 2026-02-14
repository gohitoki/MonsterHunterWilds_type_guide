import Rathian from "../assets/Rathian.png"

export default {
  id: "Rathian",
  name: "リオレイア",
  img:Rathian,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "○", thunder: "◎", ice: "○", dragon: "☆" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"70",da_quality:"75",tama_quality:"65",fire_quality:"0",water_quality:"15",thander_quality:"20",ice_quality:"15",dragon_quality:"30"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"30",tama_quality:"25",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"20"}},
    { name: "翼", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "◎", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"10",thander_quality:"15",ice_quality:"10",dragon_quality:"25"}},
    { name: "脚", element: { fire: "×", water: "×", thunder: "△", ice: "×", dragon: "○", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"35",fire_quality:"0",water_quality:"0",thander_quality:"5",ice_quality:"0",dragon_quality:"15"}},
    { name: "尻尾", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"40",tama_quality:"35",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"20"}},
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