import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { monsters } from "./monsters/index.js";
import "./App.css";
import logo from "./assets/logo.jpg"
import fire from "./assets/fire.png"
import water from "./assets/water.png"
import thander from "./assets/thander.png"
import ice from "./assets/ice.png"
import dragon from "./assets/dragon.png"
import mahi from "./assets/mahi.png"
import poison from "./assets/poison.png"
import sleep from "./assets/sleep.png"
import bomb from "./assets/bomb.png"
import zan from "./assets/zan.png"
import hanmer from "./assets/hanmer.png"
import arrow from "./assets/arrow.png"

export default function MonsterPage() {
  const { id } = useParams();
  const [tab, setTab] = useState("elemental"); // physical or elemental

  const monster = monsters[id]; // ← ここでmonsterを取得

  // モンスターが見つからない場合
  if (!monster) {
    return (
      <main>
        <h1>モンスターが見つかりません</h1>
        <Link to="/">← 戻る</Link>
      </main>
    );
  }

  return (
    <main className="monster-page">
      <img className="monster-page_logo" src={logo} alt="" />
      {/* 戻るボタン */}
      <Link className="back-btn" to="/">戻る</Link>

      {/* モンスター画像 */}
      <div className="monster-image">
        <img src={monster.img} alt={monster.name} />
      </div>
      <h1 className="monster-title">{monster.name}</h1>
      {monster.monster_elemental.map((el, i) => (
        <p key={i} className={`monster-elemental ${el.type_color}`}>
          {el.name}
        </p>
      ))}

      <h2 className="title">通常状態</h2>
      <div className="change_button">
        <button onClick={() => setTab("elemental")}>属性</button>
        <button onClick={() => setTab("physical")}>物理</button>
      </div>
      <p className="notes"><span className="star">☆</span>=非常に有効　<span className="verygood">◎</span>=かなり有効　○=有効　△=効きづらい　×=無効</p>
      <div>
        {tab === "elemental" && (
          <div className="elemental_grid">
            <div>部位/属性</div>
            <div className="elemental_img fire"><img src={fire} alt="" /></div>
            <div className="elemental_img water"><img src={water} alt="" /></div>
            <div className="elemental_img ice"><img src={ice} alt="" /></div>
            <div className="elemental_img thander"><img src={thander} alt="" /></div>
            <div className="elemental_img dragon"><img src={dragon} alt="" /></div>

            {monster.parts.map((part) => (
              <React.Fragment key={part.name}>
                <div className="part-name">{part.name}</div>
                <div className={`part-name ${part.element.fire === "☆" ? "star" : part.element.fire === "◎" ? "verygood" : ""}`}>
                  {part.element.fire}
                </div>

                <div className={`part-name ${part.element.water === "☆" ? "star" : part.element.water === "◎" ? "verygood" : ""}`}>
                  {part.element.water}
                </div>

                <div className={`part-name ${part.element.ice === "☆" ? "star" : part.element.ice === "◎" ? "verygood" : ""}`}>
                  {part.element.ice}
                </div>

                <div className={`part-name ${part.element.thunder === "☆" ? "star" : part.element.thunder === "◎" ? "verygood" : ""}`}>
                  {part.element.thunder}
                </div>

                <div className={`part-name ${part.element.dragon === "☆" ? "star" : part.element.dragon === "◎" ? "verygood" : ""}`}>
                  {part.element.dragon}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}

        {tab === "physical" && (
          <div className="physical_grid">
            <div>部位/武器種</div>
            <div className="physical_img"><img src={zan} alt="" /></div>
            <div className="physical_img"><img src={hanmer} alt="" /></div>
            <div className="physical_img"><img src={arrow} alt="" /></div>
        
            {monster.parts.map((part) => (
              <React.Fragment key={part.name}>
                <div className="part-name">{part.name}</div>
                <div className={`part-name ${part.element.zan === "☆" ? "star" : part.element.zan === "◎" ? "verygood" : ""}`}>
                  {part.element.zan}
                </div>

                <div className={`part-name ${part.element.da === "☆" ? "star" : part.element.da === "◎" ? "verygood" : ""}`}>
                  {part.element.da}
                </div>

                <div className={`part-name ${part.element.tama === "☆" ? "star" : part.element.tama === "◎" ? "verygood" : ""}`}>
                  {part.element.tama}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      
      <h2 className="status_title">状態異常</h2>
      <p className="notes"><span className="star">☆</span>=非常に有効　<span className="verygood">◎</span>=かなり有効　○=有効　△=効きづらい　×=無効</p>
      <div className="status_grid">
        <div className="status_img"><img src={mahi} alt="" /></div>
        <div className="status_img"><img src={sleep} alt="" /></div>
        <div className="status_img"><img src={poison} alt="" /></div>
        <div className="status_img"><img src={bomb} alt="" /></div>
        {monster.status.map((statu) => (
          <React.Fragment >
            <div className="status">{statu.status.paralysis}</div>
            <div className="status">{statu.status.sleep}</div>
            <div className="status">{statu.status.poison}</div>
            <div className="status">{statu.status.explosion}</div>
          </React.Fragment>
        ))}
      </div>

      <div className="tools_grid">
        <div className="tools_text">閃光玉</div>
        <div className="tools_text">音爆弾</div>
        <div className="tools_text">落とし穴</div>
        <div className="tools_text">シビレ罠</div>
        <div className="tools_text">誘導弾</div>
        
        {monster.tools.map((tool) => (
          <React.Fragment >
            <div className="tools">{tool.tools.frash}</div>
            <div className="tools">{tool.tools.sound}</div>
            <div className="tools">{tool.tools.pitfull}</div>
            <div className="tools">{tool.tools.mahitrap}</div>
            <div className="tools">{tool.tools.induction}</div>
          </React.Fragment>
        ))}
      </div>

      <h2 className="skill_title">推奨スキル</h2>
      <p className="skill_notes"><span className="red">赤</span>=優先度高め　<span className="blue">青</span>=優先度低め</p>
      <div className="skill_flex">
        {monster.skills.map((skill, i) => (
          <div key={i} className={`skills ${skill.priority}`}>
            {skill.name}
          </div>
        ))}
      </div>
    </main>
  );
}
