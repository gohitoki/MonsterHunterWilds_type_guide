import Arkveld from "../assets/Arkveld.png"

export default {
    id: "Arkveld",
    name: "アルシュベルド",
    img:Arkveld,
    monster_elemental: [{name:"龍属性",type_color:"dragon_color"}],
    parts: [
      { name: "頭部", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"48",tama_quality:"45",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
      { name: "胴体", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"28",da_quality:"30",tama_quality:"20",fire_quality:"1",water_quality:"1",thander_quality:"1",ice_quality:"1",dragon_quality:"5"}},
      { name: "左翼", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"42",da_quality:"40",tama_quality:"38",fire_quality:"2",water_quality:"2",thander_quality:"2",ice_quality:"2",dragon_quality:"4"}},
      { name: "右翼", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"42",da_quality:"40",tama_quality:"38",fire_quality:"2",water_quality:"2",thander_quality:"2",ice_quality:"2",dragon_quality:"4"}},
      { name: "左鎖翼刃", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
      { name: "右鎖翼刃", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
      { name: "左脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"26",da_quality:"25",tama_quality:"20",fire_quality:"2",water_quality:"2",thander_quality:"2",ice_quality:"2",dragon_quality:"4"}},
      { name: "右脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"26",da_quality:"25",tama_quality:"20",fire_quality:"2",water_quality:"2",thander_quality:"2",ice_quality:"2",dragon_quality:"4"}},
      { name: "尻尾", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"40",tama_quality:"42",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
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