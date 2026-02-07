import Rompopolo from "../assets/Rompopolo.png"

export default {
  id: "Rompopolo",
  name: "ププロポル",
  img: Rompopolo,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"65",tama_quality:"60",fire_quality:"10",water_quality:"25",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "頭(萎んだ状態)", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "胴", element: { fire: "△", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"35",tama_quality:"35",fire_quality:"5",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "△", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"40",da_quality:"40",tama_quality:"40",fire_quality:"5",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "背中", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"55",da_quality:"55",tama_quality:"45",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "背中(萎んだ状態)", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "後脚", element: { fire: "△", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"33",da_quality:"33",tama_quality:"33",fire_quality:"5",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"60",da_quality:"60",tama_quality:"60",fire_quality:"10",water_quality:"25",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
    { name: "尻尾(萎んだ状態)", element: { fire: "△", water: "◎", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"20",thander_quality:"10",ice_quality:"10",dragon_quality:"5"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"×",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv.2", priority: "low" },
    { name: "水場適応", priority: "low" },
  ]
  };