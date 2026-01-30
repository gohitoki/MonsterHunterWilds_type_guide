import Zo_Shea from "../assets/Zo_Shea.png"

export default {
  id: "Zo_Shea",
  name: "ゾ・シア",
  img:Zo_Shea,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "△", thunder: "○", ice: "△", dragon: "◎" ,zan:"☆",da:"☆",tama:"☆"}},
    { name: "頭(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎"}},
    { name: "首", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "☆", zan:"○",da:"○",tama:"◎"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" }},
    { name: "左前脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎" }},
    { name: "右前脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎" }},
    { name: "左翼腕", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎" }},
    { name: "右翼腕", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎" }},
    { name: "左翼腕(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"△" }},
    { name: "右翼腕(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"△" }},
    { name: "左後脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "右後脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
    { name: "尻尾(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"◎" }},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"×",sound:"×",pitfull:"×",mahitrap:"×",induction:"×"}},
  ],

  skills: [
    { name: "耳栓Lv3", priority: "low" },
  ],
};