import Quematrice from "../assets/Quematrice.png"

export default {
  id: "Quematrice",
  name: "ケマトリス",
  img: Quematrice,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"☆"}},
    { name: "胴", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○"}},
    { name: "左前脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○"}},
    { name: "右前脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○" }},
    { name: "左後脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○" }},
    { name: "右後脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"○",tama:"○" }},
    { name: "尻尾", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"☆" }},
  ],

  status:[
    {status:{paralysis:"◎",sleep:"○",poison:"◎",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "特になし" },
  ]
  };