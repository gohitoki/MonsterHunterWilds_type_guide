import GoreMagala from "../assets/GoreMagala.png"

export default {
  id: "GoreMagala",
  name: "ゴア・マガラ",
  img: GoreMagala,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "○", water: "×", thunder: "○", ice: "△", dragon: "○" ,zan:"☆",da:"◎",tama:"◎"}},
    { name: "触角", element: { fire: "◎", water: "×", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎"}},
    { name: "首", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○"}},
    { name: "胴", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "左前脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "右前脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "左翼", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "右翼", element: { fire: "○", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "左翼脚", element: { fire: "◎", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右翼脚", element: { fire: "◎", water: "×", thunder: "○", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "左後脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右後脚", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"△",poison:"△",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
  ]
  };