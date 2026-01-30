import OmegaPlanetes from "../assets/OmegaPlanetes.png"

export default {
  id: "OmegaPlanetes",
  name: "オメガ・プラネテス",
  img: OmegaPlanetes,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△"}},
    { name: "左前脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"◎",da:"☆",tama:"☆" }},
    { name: "右前脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"◎",da:"☆",tama:"☆" }},
    { name: "背中", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"◎",da:"○",tama:"○" }},
    { name: "左後脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"☆",da:"◎",tama:"◎" }},
    { name: "右後脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"☆",da:"◎",tama:"◎" }},
    { name: "背中ユニット", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "☆", zan:"☆",da:"☆",tama:"△" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"×",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"×",mahitrap:"×",induction:"×"}},
  ],

  skills: [
    { name: "拘束耐性", priority: "low" },
  ]
  };