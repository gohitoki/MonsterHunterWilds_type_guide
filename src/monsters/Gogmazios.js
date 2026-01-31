import Gogmazios from "../assets/Gogmazios.png"

export default {
  id: "Gogmazios",
  name: "ゴグマジオス",
  img: Gogmazios,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "△" ,zan:"◎",da:"◎",tama:"○"}},
    { name: "頭(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎"}},
    { name: "頭(気体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "☆" ,zan:"☆",da:"☆",tama:"☆"}},
    { name: "胸", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△"}},
    { name: "左前脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△"}},
    { name: "右前脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" }},
    { name: "腹部", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" }},
    { name: "背中", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "左翼脚", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "左翼脚(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "◎", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左翼脚(気体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "☆", zan:"☆",da:"☆",tama:"☆" }},
    { name: "右翼脚", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "右翼脚(液体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "◎", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右翼脚(気体状態)", element: { fire: "○", water: "×", thunder: "×", ice: "×", dragon: "☆", zan:"☆",da:"☆",tama:"☆" }},
    { name: "左後脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" }},
    { name: "右後脚", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"○",da:"○",tama:"△" }},
    { name: "尻尾", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "尻尾先端", element: { fire: "△", water: "×", thunder: "×", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" }},
  ],

  status:[
    {status:{paralysis:"×",sleep:"×",poison:"×",explosion:"◎"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"×",mahitrap:"×",induction:"×"}},
  ],

  skills: [
    { name: "耐震Lv2", priority: "high" },
    { name: "耳栓Lv3", priority: "low" },
    { name: "ハンター生活", priority: "low" },

  ]
  };