import JinDahaad from "../assets/JinDahaad.png"

export default {
  id: "JinDahaad",
  name: "ジン・ダハド",
  img: JinDahaad,
  monster_elemental: [{name:"氷属性",type_color:"ice_color"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "△", thunder: "△", ice: "×", dragon: "△" ,zan:"☆",da:"☆",tama:"◎"}},
    { name: "首", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"☆",da:"☆",tama:"◎"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"○",da:"○",tama:"○"}},
    { name: "左前脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "右前脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "左後脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "右後脚", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
    { name: "尻尾", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    { name: "凍成殻(腰部)", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"☆",da:"☆",tama:"◎" }},
    { name: "大凍成殻(露出前)", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"△",da:"△",tama:"△" }},
    { name: "大凍成殻(露出後)", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"☆",da:"☆",tama:"◎" }},
  ],

  status:[
    {status:{paralysis:"△",sleep:"△",poison:"△",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"×",mahitrap:"◎",induction:"×"}},
  ],

  skills: [
    { name: "拘束耐性(歴戦王)", priority: "high" },
    { name: "耳栓Lv3",priority: "low" },
    { name: "拘束耐性", priority: "low" },
  ]
  };