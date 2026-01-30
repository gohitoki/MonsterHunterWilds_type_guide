import ReyDau from "../assets/ReyDau.png"

export default {
  id: "ReyDau",
  name: "レ・ダウ",
  img:ReyDau,
  monster_elemental: [{name:"雷属性",type_color:"thander_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "○", thunder: "×", ice: "◎", dragon: "△" ,zan:"☆",da:"☆",tama:"◎"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○"}},
    { name: "左翼", element: { fire: "△", water: "△", thunder: "×", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎"}},
    { name: "右翼", element: { fire: "△", water: "△", thunder: "×", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左脚", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "尻尾", element: { fire: "△", water: "△", thunder: "×", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"×",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };