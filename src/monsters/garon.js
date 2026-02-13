import garon from "../assets/GuardianOdogaron.png"

export default {
  id: "GuardianOdogaron",
  name: "護竜オドガロン",
  img: GuardianOdogaron,
  monster_elemental: [{name:"氷属性",type_color:"ice_color"}],
  parts: [
    { name: "頭", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"65",da_quality:"65",tama_quality:"45",fire_quality:"20",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "首", element: { fire: "○", water: "◎", thunder: "○", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"60",da_quality:"60",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"30",tama_quality:"20",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "☆", zan:"○",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"30",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "背中", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"30",fire_quality:"15",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"30",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "◎", water: "☆", thunder: "◎", ice: "◎", dragon: "☆", zan:"○",da:"○",tama:"○" ,zan_quality:"45",da_quality:"45",tama_quality:"30",fire_quality:"15",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "尻尾先端", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"55",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "凍成殻(腰部)", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"75",da_quality:"75",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "大凍成殻(露出前)", element: { fire: "×", water: "×", thunder: "×", ice: "×", dragon: "×", zan:"△",da:"△",tama:"△" ,zan_quality:"1",da_quality:"1",tama_quality:"1",fire_quality:"0",water_quality:"0",thander_quality:"0",ice_quality:"0",dragon_quality:"0"}},
    { name: "大凍成殻(露出後)", element: { fire: "△", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"75",da_quality:"75",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"×",sleep:"×",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"×",mahitrap:"◎",induction:"×"}},
  ],

  skills: [
    { name: "耳栓Lv2",priority: "low" },
  ]
  };