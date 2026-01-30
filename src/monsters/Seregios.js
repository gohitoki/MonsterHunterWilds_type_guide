import Seregios from "../assets/Seregios.png"

export default {
  id: "Seregios",
  name: "セルレギオス",
  img:Seregios,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭部", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎"}},
    { name: "首", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△"}},
    { name: "左翼", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "右翼", element: { fire: "×", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "左脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右脚", element: { fire: "×", water: "△", thunder: "◎", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "尻尾", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"◎" }},
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