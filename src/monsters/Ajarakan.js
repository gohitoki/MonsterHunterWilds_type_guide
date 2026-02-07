import Ajarakan from "../assets/Ajarakan.png"

export default {
  id: "Ajarakan",
  name: "アジャラカン",
  img:Ajarakan,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "△" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"40",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"15",dragon_quality:"10"}},
    { name: "頭(高温状態)", element: { fire: "×", water: "◎", thunder: "○", ice: "◎", dragon: "○" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"25",thander_quality:"10",ice_quality:"20",dragon_quality:"15"}},
    { name: "前脚", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"50",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"25",thander_quality:"5",ice_quality:"15",dragon_quality:"10"}},
    { name: "前脚(高温状態)", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "△", zan:"☆",da:"☆",tama:"☆" ,zan_quality:"65",da_quality:"65",tama_quality:"60",fire_quality:"0",water_quality:"25",thander_quality:"5",ice_quality:"15",dragon_quality:"10"}},
    { name: "腹部", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"30",tama_quality:"25",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "腹部(高温状態)", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "背中", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"30",tama_quality:"25",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"15",dragon_quality:"10"}},
    { name: "後脚", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"20",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "尻尾", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "△", zan:"◎",da:"◎",tama:"○" ,zan_quality:"40",da_quality:"40",tama_quality:"35",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"10",dragon_quality:"5"}},
    { name: "尻尾先端", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "△", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"15",dragon_quality:"10"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv2", priority: "low" },
    { name: "爆破やられ耐性", priority: "low" },
  ]
  };