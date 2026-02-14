import YianKutKu from "../assets/YianKutKu.png"

export default {
  id: "YianKutKu",
  name: "イャンクック",
  img: YianKutKu,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "○", thunder: "◎", ice: "☆", dragon: "×" ,zan:"◎",da:"☆",tama:"☆" ,zan_quality:"56",da_quality:"75",tama_quality:"80",fire_quality:"10",water_quality:"15",thander_quality:"20",ice_quality:"30",dragon_quality:"0"}},
    { name: "首", element: { fire: "△", water: "◎", thunder: "☆", ice: "☆", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"42",da_quality:"42",tama_quality:"45",fire_quality:"10",water_quality:"25",thander_quality:"30",ice_quality:"40",dragon_quality:"20"}},
    { name: "胴", element: { fire: "△", water: "○", thunder: "○", ice: "◎", dragon: "×", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"66",da_quality:"63",tama_quality:"60",fire_quality:"5",water_quality:"15",thander_quality:"15",ice_quality:"20",dragon_quality:"0"}},
    { name: "翼", element: { fire: "△", water: "△", thunder: "◎", ice: "○", dragon: "×", zan:"☆",da:"◎",tama:"☆" ,zan_quality:"80",da_quality:"42",tama_quality:"70",fire_quality:"5",water_quality:"10",thander_quality:"25",ice_quality:"15",dragon_quality:"0"}},
    { name: "脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "×", zan:"○",da:"○",tama:"○" ,zan_quality:"28",da_quality:"28",tama_quality:"30",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"0"}},
    { name: "尻尾", element: { fire: "△", water: "○", thunder: "○", ice: "◎", dragon: "×", zan:"☆",da:"◎",tama:"◎" ,zan_quality:"60",da_quality:"56",tama_quality:"50",fire_quality:"5",water_quality:"15",thander_quality:"15",ice_quality:"20",dragon_quality:"0"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"◎",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "特になし"},
  ]
  };