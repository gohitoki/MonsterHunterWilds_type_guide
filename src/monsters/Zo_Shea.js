import Zo_Shea from "../assets/Zo_Shea.png"

export default {
  id: "Zo_Shea",
  name: "ゾ・シア",
  img:Zo_Shea,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "△", water: "△", thunder: "○", ice: "△", dragon: "◎" ,zan:"☆",da:"☆",tama:"☆" ,zan_quality:"65",da_quality:"70",tama_quality:"65",fire_quality:"15",water_quality:"5",thander_quality:"5",ice_quality:"10",dragon_quality:"30"}},
    { name: "頭(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"40",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "首", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "☆", zan:"○",da:"○",tama:"◎" ,zan_quality:"30",da_quality:"30",tama_quality:"40",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"30"}},
    { name: "胴", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"25",da_quality:"25",tama_quality:"5",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
    { name: "左前脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "右前脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"45",tama_quality:"45",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "左翼腕", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"85",da_quality:"85",tama_quality:"60",fire_quality:"20",water_quality:"5",thander_quality:"5",ice_quality:"15",dragon_quality:"30"}},
    { name: "右翼腕", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "◎", zan:"☆",da:"☆",tama:"◎" ,zan_quality:"85",da_quality:"85",tama_quality:"60",fire_quality:"20",water_quality:"5",thander_quality:"5",ice_quality:"15",dragon_quality:"30"}},
    { name: "左翼腕(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"△" ,zan_quality:"40",da_quality:"40",tama_quality:"10",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "右翼腕(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "○", zan:"◎",da:"◎",tama:"△" ,zan_quality:"40",da_quality:"40",tama_quality:"10",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "左後脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"25",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
    { name: "右後脚", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"25",tama_quality:"25",fire_quality:"5",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
    { name: "尻尾(白纏晶)", element: { fire: "△", water: "△", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"◎" ,zan_quality:"35",da_quality:"35",tama_quality:"40",fire_quality:"10",water_quality:"5",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
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