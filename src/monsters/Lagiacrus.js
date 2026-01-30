import Lagiacrus from "../assets/Lagiacrus.png"

export default {
  id: "Lagiacrus",
  name: "ラギアクルス",
  img:Lagiacrus,
  monster_elemental: [{name:"雷属性",type_color:"thander_color"}],
  parts: [
    { name: "頭部", element: { fire: "○", water: "×", thunder: "×", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎"}},
    { name: "首", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△"}},
    { name: "胸", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "前脚", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "背中", element: { fire: "◎", water: "×", thunder: "×", ice: "○", dragon: "○", zan:"◎",da:"◎",tama:"△" }},
    { name: "後脚", element: { fire: "△", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "尻尾", element: { fire: "◎", water: "×", thunder: "×", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "雷耐性", priority: "low" },
    { name: "耳栓Lv2", priority: "low" },
  ]
};