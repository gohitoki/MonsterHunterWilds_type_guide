import GuardianOdogaron from "../assets/GuardianOdogaron.png"

export default {
  id: "GuardianOdogaron",
  name: "護竜オドガロン",
  img: GuardianOdogaron,
  monster_elemental: [{name:"氷属性",type_color:"ice_color"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"25",water_quality:"40",thander_quality:"25",ice_quality:"25",dragon_quality:"5"}},
    { name: "首", element: { fire: "○", water: "◎", thunder: "○", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"35",tama_quality:"30",fire_quality:"15",water_quality:"25",thander_quality:"15",ice_quality:"15",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"25",tama_quality:"20",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "☆", zan:"○",da:"◎",tama:"○" ,zan_quality:"35",da_quality:"40",tama_quality:"30",fire_quality:"20",water_quality:"35",thander_quality:"20",ice_quality:"20",dragon_quality:"30"}},
    { name: "背中", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"25",tama_quality:"20",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"35",tama_quality:"30",fire_quality:"20",water_quality:"35",thander_quality:"20",ice_quality:"20",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "☆", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"25",tama_quality:"20",fire_quality:"20",water_quality:"35",thander_quality:"20",ice_quality:"20",dragon_quality:"30"}},
    { name: "尻尾先端", element: { fire: "○", water: "◎", thunder: "○", ice: "○", dragon: "☆", zan:"◎",da:"○",tama:"◎" ,zan_quality:"45",da_quality:"30",tama_quality:"40",fire_quality:"15",water_quality:"25",thander_quality:"15",ice_quality:"15",dragon_quality:"30"}},
  ],

  status:[
    {status:{paralysis:"◎",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2",priority: "low" },
  ]
  };