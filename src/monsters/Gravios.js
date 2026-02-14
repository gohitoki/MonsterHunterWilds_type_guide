import Gravios from "../assets/Gravios.png"

export default {
  id: "Gravios",
  name: "グラビモス",
  img:Gravios,
  monster_elemental: [{name:"火属性",type_color:"fire_color"}],
  parts: [
    { name: "頭", element: { fire: "×", water: "○", thunder: "△", ice: "△", dragon: "◎" ,zan:"○",da:"○",tama:"○" ,zan_quality:"20",da_quality:"28",tama_quality:"20",fire_quality:"0",water_quality:"15",thander_quality:"5",ice_quality:"5",dragon_quality:"25"}},
    { name: "首", element: { fire: "×", water: "☆", thunder: "△", ice: "△", dragon: "◎" ,zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"30",tama_quality:"20",fire_quality:"0",water_quality:"30",thander_quality:"5",ice_quality:"10",dragon_quality:"20"}},
    { name: "腹部", element: { fire: "×", water: "☆", thunder: "△", ice: "○", dragon: "☆", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"30",tama_quality:"30",fire_quality:"0",water_quality:"35",thander_quality:"5",ice_quality:"15",dragon_quality:"30"}},
    { name: "背中", element: { fire: "×", water: "◎", thunder: "△", ice: "○", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"30",tama_quality:"25",fire_quality:"0",water_quality:"25",thander_quality:"5",ice_quality:"15",dragon_quality:"15"}},
    { name: "翼", element: { fire: "×", water: "◎", thunder: "△", ice: "△", dragon: "○", zan:"○",da:"○",tama:"○" ,zan_quality:"20",da_quality:"20",tama_quality:"20",fire_quality:"0",water_quality:"20",thander_quality:"5",ice_quality:"5",dragon_quality:"15"}},
    { name: "脚", element: { fire: "×", water: "☆", thunder: "△", ice: "△", dragon: "△", zan:"○",da:"○",tama:"○" ,zan_quality:"20",da_quality:"20",tama_quality:"20",fire_quality:"0",water_quality:"30",thander_quality:"5",ice_quality:"5",dragon_quality:"10"}},
    { name: "尻尾", element: { fire: "×", water: "☆", thunder: "△", ice: "△", dragon: "◎", zan:"○",da:"○",tama:"○" ,zan_quality:"25",da_quality:"30",tama_quality:"20",fire_quality:"0",water_quality:"30",thander_quality:"5",ice_quality:"10",dragon_quality:"20"}},
  ],

  status:[
    {status:{paralysis:"○",sleep:"○",poison:"○",explosion:"○"}},
  ],

  tools:[
    {tools:{frash:"◎",sound:"×",pitfull:"◎",mahitrap:"◎",induction:"◎"}},
  ],

  skills: [
    { name: "耳栓Lv3", priority: "low" },
  ]
  };