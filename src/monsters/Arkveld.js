import Arkveld from "../assets/Arkveld.png"

export default {
    id: "Arkveld",
    name: "アルシュベルド",
    img:Arkveld,
    monster_elemental: [{name:"龍属性",type_color:"dragon_color"}],
    parts: [
      { name: "頭部", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎"}},
      { name: "胴体", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○"}},
      { name: "左翼", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○"}},
      { name: "右翼", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" }},
      { name: "左鎖翼刃", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"◎" }},
      { name: "右鎖翼刃", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"◎" }},
      { name: "左脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
      { name: "右脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" }},
      { name: "尻尾", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" }},
    ],

    status:[
      {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
    ],

    tools:[
      {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
    ],

    skills: [
      { name: "属性やられ耐性", priority: "low" },
      { name: "耳栓Lv2", priority: "low" },
      { name: "破壊王", priority: "low" },
    ]
  };