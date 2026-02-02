import OmegaPlanetes from "../assets/OmegaPlanetes.png"

export default {
  id: "OmegaPlanetes",
  name: "オメガ・プラネテス",
  img: OmegaPlanetes,
  monster_elemental: [{name:"無属性",type_color:"gray"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"45",da_quality:"50",tama_quality:"45",fire_quality:"0",water_quality:"10",thander_quality:"25",ice_quality:"5",dragon_quality:"20"}},
    { name: "胴", element: { fire: "×", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"20",da_quality:"20",tama_quality:"5",fire_quality:"0",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "前脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"◎",da:"☆",tama:"☆" ,zan_quality:"45",da_quality:"65",tama_quality:"60",fire_quality:"0",water_quality:"5",thander_quality:"20",ice_quality:"5",dragon_quality:"15"}},
    { name: "背中", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"◎",da:"○",tama:"○" ,zan_quality:"45",da_quality:"30",tama_quality:"30",fire_quality:"0",water_quality:"5",thander_quality:"20",ice_quality:"5",dragon_quality:"15"}},
    { name: "後脚", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"☆",da:"◎",tama:"◎" ,zan_quality:"60",da_quality:"40",tama_quality:"40",fire_quality:"0",water_quality:"5",thander_quality:"20",ice_quality:"5",dragon_quality:"15"}},
    { name: "背中ユニット", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "☆", zan:"☆",da:"☆",tama:"△" ,zan_quality:"75",da_quality:"100",tama_quality:"10",fire_quality:"0",water_quality:"5",thander_quality:"15",ice_quality:"5",dragon_quality:"30"}},
    { name: "頭(クローン失敗)", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "◎" ,zan:"◎",da:"◎",tama:"◎" ,zan_quality:"40",da_quality:"45",tama_quality:"40",fire_quality:"0",water_quality:"10",thander_quality:"25",ice_quality:"5",dragon_quality:"20"}},
    { name: "胴(クローン失敗)", element: { fire: "×", water: "△", thunder: "△", ice: "×", dragon: "△", zan:"○",da:"○",tama:"△" ,zan_quality:"10",da_quality:"10",tama_quality:"5",fire_quality:"0",water_quality:"5",thander_quality:"5",ice_quality:"0",dragon_quality:"5"}},
    { name: "前脚(クローン失敗)", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"○",da:"◎",tama:"○" ,zan_quality:"28",da_quality:"45",tama_quality:"35",fire_quality:"0",water_quality:"5",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
    { name: "背中(クローン失敗)", element: { fire: "×", water: "△", thunder: "◎", ice: "△", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"30",da_quality:"20",tama_quality:"20",fire_quality:"0",water_quality:"5",thander_quality:"20",ice_quality:"5",dragon_quality:"15"}},
    { name: "後脚(クローン失敗)", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"35",da_quality:"28",tama_quality:"28",fire_quality:"0",water_quality:"5",thander_quality:"15",ice_quality:"5",dragon_quality:"10"}},
    { name: "背中ユニット(クローン失敗)", element: { fire: "×", water: "△", thunder: "○", ice: "△", dragon: "◎", zan:"◎",da:"☆",tama:"△" ,zan_quality:"45",da_quality:"65",tama_quality:"5",fire_quality:"0",water_quality:"5",thander_quality:"10",ice_quality:"5",dragon_quality:"20"}},
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