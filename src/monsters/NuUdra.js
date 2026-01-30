import NuUdra from "../assets/NuUdra.png"

export default {
  id: "NuUdra",
  name: "ヌ・エグドラ",
  img: NuUdra,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"◎"}},
    { name: "傘膜", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○"}},
    { name: "口", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"☆"}},
    { name: "胴", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"☆",tama:"◎" }},
    { name: "触腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"◎",tama:"○" }},
    { name: "左第1腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右第1腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左第2腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右第2腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左第3腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右第3腕", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"○",poison:"○",explosion:"△"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
    { name: "環境適応(歴戦王)", priority: "high" },
  ]
  };