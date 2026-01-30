import Mizutsune from "../assets/Mizutsune.png"

export default {
  id: "Mizutsune",
  name: "タマミツネ",
  img: Mizutsune,
  monster_elemental: [{name:"水属性",type_color:"water_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"◎"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○"}},
    { name: "左爪", element: { fire: "△", water: "×", thunder: "☆", ice: "○", dragon: "☆", zan:"○",da:"○",tama:"△"}},
    { name: "右爪", element: { fire: "△", water: "×", thunder: "☆", ice: "○", dragon: "☆", zan:"○",da:"○",tama:"△" }},
    { name: "背ビレ", element: { fire: "△", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左脚", element: { fire: "△", water: "×", thunder: "◎", ice: "○", dragon: "☆", zan:"○",da:"○",tama:"△" }},
    { name: "右脚", element: { fire: "△", water: "×", thunder: "◎", ice: "○", dragon: "☆", zan:"○",da:"○",tama:"△" }},
    { name: "左後脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右後脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"◎" }},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv.2", priority: "low" },
  ]
  };