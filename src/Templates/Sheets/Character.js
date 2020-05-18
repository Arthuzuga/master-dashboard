import React, { useState } from 'react'
import "./style.css"
import { modifiersOnSheet } from '../../helpers/functions'

const Character = () => {
  // Character Level
  const [level, setLevel] = useState(0)
  // Hit Dice
  // const [hitDice, setHitDice] = useState('d10')

  // modifiers
  const [str, setStr] = useState("")
  const [dex, setDex] = useState("")
  const [con, setCon] = useState("")
  const [wis, setWis] = useState("")
  const [inte, setInt] = useState("")
  const [cha, setCha] = useState("")
  const [hasInspiration, setInspiration] = useState(false)
  const [proficiency, setProficiency] = useState(2)

  // Saving Throws
  const [strST, setStrST] = useState(false)
  const [dexST, setDexST] = useState(false)
  const [consST, setConST] = useState(false)
  const [wisST, setWisST] = useState(false)
  const [intST, setIntST] = useState(false)
  const [chaST, setChaST] = useState(false)

  // Skills
  const [acrobatic, setAcrobatic] = useState(false)
  const [animal, setAnimal] = useState(false)
  const [arcana, setArcana] = useState(false)
  const [athletics, setAthletics] = useState(false)
  const [deception, setDeception] = useState(false)
  const [historyS, setHistoryS] = useState(false)
  const [insight, setInsight] = useState(false)
  const [intimidation, setIntimidation] = useState(false)
  const [investigation, setInvestigation] = useState(false)
  const [medicine, setMedicine] = useState(false)
  const [nature, setNature] = useState(false)
  const [perception, setPerception] = useState(false)
  const [performance, setPerformance] = useState(false)
  const [persuasion, setPersuasion] = useState(false)
  const [religion, setReligion] = useState(false)
  const [sleight, setSleight] = useState(false)
  const [stealth, setStealth] = useState(false)
  const [survival, setSurvival] = useState(false)

  const modifierOnString = (value) => {
    if (Number(value) > 0){
      return `+${value}`
    }
    return value
  }

  const modifierWithProficiency = (value, hasProficiency) => {
    if(hasProficiency){
      return modifierOnString(Number(modifiersOnSheet(value)) + proficiency)
    }
    return modifiersOnSheet(value)
  }

  const getLevel = (value) => {
    const levelRgx = value.replace(/[a-zA-Z]/g, "")
    setLevel(Number(levelRgx))
  }

  return (
    <div>
      <form class="charsheet">
        <header>
          <section class="charname">
            <label for="charname">Character Name</label>
            <input name="charname" placeholder="Thoradin Fireforge" />
          </section>
          <section class="misc">
            <ul>
              <li>
                <label for="classlevel">Class and Level</label>
                <input name="classlevel" placeholder="Paladin 2" onChange={({target:{value}}) => getLevel(value)}/>
              </li>
              <li>
                <label for="background">Background</label>
                <input name="background" placeholder="Acolyte" />
              </li>
              <li>
                <label for="playername">Player Name</label>
                <input name="playername" placeholder="Player McPlayerface"/>
              </li>
              <li>
                <label for="race">Race</label>
                <input name="race" placeholder="Half-elf" />
              </li>
              <li>
                <label for="alignment">Alignment</label>
                <input name="alignment" placeholder="Lawful Good" />
              </li>
              <li>
                <label for="experiencepoints">Experience Points</label>
                <input name="experiencepoints" placeholder="3240" />
              </li>
            </ul>
          </section>
        </header>
        <main>
          <section>
            <section class="attributes">
              <div class="scores">
                <ul>
                  <li>
                    <div class="score">
                      <label for="Strengthscore">Strength</label>
                      <input name="Strengthscore" placeholder="10" value={str} onChange={({target:{value}}) => setStr(value)}/>
                    </div>
                    <div class="modifier">
                      <input name="Strengthmod" placeholder="+0" value={modifiersOnSheet(str)}/>
                    </div>
                  </li>
                  <li>
                    <div class="score">
                      <label for="Dexterityscore">Dexterity</label>
                      <input name="Dexterityscore" placeholder="10" value={dex} onChange={({target:{value}}) => setDex(value)}/>
                    </div>
                    <div class="modifier">
                      <input name="Dexteritymod" placeholder="+0" value={modifiersOnSheet(dex)}/>
                    </div>
                  </li>
                  <li>
                    <div class="score">
                      <label for="Constitutionscore">Constitution</label>
                      <input name="Constitutionscore" placeholder="10" value={con} onChange={({target:{value}}) => setCon(value)}/>
                    </div>
                    <div class="modifier">
                      <input name="Constitutionmod" placeholder="+0" value={modifiersOnSheet(con)}/>
                    </div>
                  </li>
                  <li>
                    <div class="score">
                      <label for="Wisdomscore">Wisdom</label>
                      <input name="Wisdomscore" placeholder="10" value={wis} onChange={({target:{value}}) => setWis(value)}/>
                    </div>
                    <div class="modifier">
                      <input name="Wisdommod" placeholder="+0" value={modifiersOnSheet(wis)}/>
                    </div>
                  </li>
                  <li>
                    <div class="score">
                      <label for="Intelligencescore">Intelligence</label>
                      <input name="Intelligencescore" placeholder="10" value={inte} onChange={({target:{value}}) => setInt(value)}/>
                    </div>
                    <div class="modifier">
                      <input name="Intelligencemod" placeholder="+0" value={modifiersOnSheet(inte)}/>
                    </div>
                  </li>
                  <li>
                    <div class="score">
                      <label for="Charismascore">Charisma</label>
                      <input name="Charismascore" placeholder="10" value={cha} onChange={({target:{value}}) => setCha(value)} />
                    </div>
                    <div class="modifier">
                      <input name="Charismamod" placeholder="+0" value={modifiersOnSheet(cha)}/>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="attr-applications">
                <div class="inspiration box">
                  <div class="label-container">
                    <label for="inspiration">Inspiration</label>
                  </div>
                  <input 
                    name="inspiration" 
                    type="checkbox" 
                    checked={hasInspiration}
                    onChange={(e) => {
                      setInspiration(e.target.value)
                    }} 
                  />
                </div>
                <div class="proficiencybonus box">
                  <div class="label-container">
                    <label for="proficiencybonus">Proficiency Bonus</label>
                  </div>
                  <input name="proficiencybonus" placeholder="+2" value={modifierOnString(proficiency)} onChange={({target:{value}}) => setProficiency(value)}/>
                </div>
                <div class="saves list-section box">
                  <ul>
                    <li>
                      <label for="Strength-save">Strength</label>
                      <input name="Strength-save" placeholder="+0" type="text" value={modifierWithProficiency(str, strST)}/>
                      <input name="Strength-save-prof" type="checkbox" checked={strST} onChange={() => {
                        const value = !strST
                        setStrST(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Dexterity-save">Dexterity</label>
                      <input name="Dexterity-save" placeholder="+0" type="text" value={modifierWithProficiency(dex, dexST)}/>
                      <input name="Dexterity-save-prof" type="checkbox" checked={dexST} onChange={() => {
                        const value = !dexST
                        setDexST(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Constitution-save">Constitution</label>
                      <input name="Constitution-save" placeholder="+0" type="text" value={modifierWithProficiency(con, consST)}/>
                      <input name="Constitution-save-prof" type="checkbox" checked={consST} onChange={() => {
                        const value = !consST
                        setConST(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Wisdom-save">Wisdom</label>
                      <input name="Wisdom-save" placeholder="+0" type="text" value={modifierWithProficiency(wis, wisST)}/>
                      <input name="Wisdom-save-prof" type="checkbox" checked={wisST} onChange={() => {
                        const value = !wisST
                        setWisST(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Intelligence-save">Intelligence</label>
                      <input name="Intelligence-save" placeholder="+0" type="text" value={modifierWithProficiency(inte, intST)}/>
                      <input name="Intelligence-save-prof" type="checkbox" checked={intST} onChange={() => {
                        const value = !intST
                        setIntST(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Charisma-save">Charisma</label>
                      <input name="Charisma-save" placeholder="+0" type="text" value={modifierWithProficiency(cha, chaST)} />
                      <input name="Charisma-save-prof" type="checkbox" checked={chaST} onChange={() => {
                        const value = !chaST
                        setChaST(value)
                        }}/>
                    </li>
                  </ul>
                  <div class="label">
                    Saving Throws
                  </div>
                </div>
                <div class="skills list-section box">
                  <ul>
                    <li>
                      <label for="Acrobatics">Acrobatics <span class="skill">(Dex)</span></label>
                      <input name="Acrobatics" placeholder="+0" type="text" value={modifierWithProficiency(dex, acrobatic)}/>
                      <input name="Acrobatics-prof" type="checkbox" onChange={() => {
                        const value = !acrobatic
                        setAcrobatic(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Animal Handling">Animal Handling <span class="skill">(Wis)</span></label>
                      <input name="Animal Handling" placeholder="+0" type="text" value={modifierWithProficiency(wis, animal)}/>
                      <input name="Animal Handling-prof" type="checkbox" onChange={() => {
                        const value = !animal
                        setAnimal(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Arcana">Arcana <span class="skill">(Int)</span></label>
                      <input name="Arcana" placeholder="+0" type="text" value={modifierWithProficiency(inte, arcana)}/>
                      <input name="Arcana-prof" type="checkbox" onChange={() => {
                        const value = !arcana
                        setArcana(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Athletics">Athletics <span class="skill">(Str)</span></label>
                      <input name="Athletics" placeholder="+0" type="text" value={modifierWithProficiency(str, athletics)}/>
                      <input name="Athletics-prof" type="checkbox" onChange={() => {
                        const value = !athletics
                        setAthletics(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Deception">Deception <span class="skill">(Cha)</span></label>
                      <input name="Deception" placeholder="+0" type="text" value={modifierWithProficiency(cha, deception)}/>
                      <input name="Deception-prof" type="checkbox" onChange={() => {
                        const value = !deception
                        setDeception(value)
                        }}/>
                    </li>
                    <li>
                      <label for="History">History <span class="skill">(Int)</span></label>
                      <input name="History" placeholder="+0" type="text" value={modifierWithProficiency(inte, historyS)}/>
                      <input name="History-prof" type="checkbox" onChange={() => {
                        const value = !historyS
                        setHistoryS(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Insight">Insight <span class="skill">(Wis)</span></label>
                      <input name="Insight" placeholder="+0" type="text" value={modifierWithProficiency(wis, insight)}/>
                      <input name="Insight-prof" type="checkbox" onChange={() => {
                        const value = !insight
                        setInsight(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Intimidation">Intimidation <span class="skill">(Cha)</span></label>
                      <input name="Intimidation" placeholder="+0" type="text" value={modifierWithProficiency(cha, intimidation)}/>
                      <input name="Intimidation-prof" type="checkbox" onChange={() => {
                        const value = !intimidation
                        setIntimidation(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Investigation">Investigation <span class="skill">(Int)</span></label>
                      <input name="Investigation" placeholder="+0" type="text" value={modifierWithProficiency(inte, investigation)}/>
                      <input name="Investigation-prof" type="checkbox" onChange={() => {
                        const value = !investigation
                        setInvestigation(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Medicine">Medicine <span class="skill">(Wis)</span></label>
                      <input name="Medicine" placeholder="+0" type="text" value={modifierWithProficiency(wis, medicine)}/>
                      <input name="Medicine-prof" type="checkbox" onChange={() => {
                        const value = !medicine
                        setMedicine(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Nature">Nature <span class="skill">(Int)</span></label>
                      <input name="Nature" placeholder="+0" type="text" value={modifierWithProficiency(inte, nature)}/>
                      <input name="Nature-prof" type="checkbox" onChange={() => {
                        const value = !nature
                        setNature(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Perception">Perception <span class="skill">(Wis)</span></label>
                      <input name="Perception" placeholder="+0" type="text" value={modifierWithProficiency(wis, perception)}/>
                      <input name="Perception-prof" type="checkbox" onChange={() => {
                        const value = !perception
                        setPerception(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Performance">Performance <span class="skill">(Cha)</span></label>
                      <input name="Performance" placeholder="+0" type="text" value={modifierWithProficiency(cha, performance)}/>
                      <input name="Performance-prof" type="checkbox" onChange={() => {
                        const value = !performance
                        setPerformance(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Persuasion">Persuasion <span class="skill">(Cha)</span></label>
                      <input name="Persuasion" placeholder="+0" type="text" value={modifierWithProficiency(cha, persuasion)}/>
                      <input name="Persuasion-prof" type="checkbox" onChange={() => {
                        const value = !persuasion
                        setPersuasion(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Religion">Religion <span class="skill">(Int)</span></label>
                      <input name="Religion" placeholder="+0" type="text" value={modifierWithProficiency(inte, religion)}/>
                      <input name="Religion-prof" type="checkbox" onChange={() => {
                        const value = !religion
                        setReligion(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Sleight of Hand">Sleight of Hand <span class="skill">(Dex)</span></label>
                      <input name="Sleight of Hand" placeholder="+0" type="text" value={modifierWithProficiency(dex, sleight)}/>
                      <input name="sleight of Hand-prof" type="checkbox" onChange={() => {
                        const value = !sleight
                        setSleight(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Stealth">Stealth <span class="skill">(Dex)</span></label>
                      <input name="Stealth" placeholder="+0" type="text" value={modifierWithProficiency(dex, stealth)}/>
                      <input name="Stealth-prof" type="checkbox" onChange={() => {
                        const value = !stealth
                        setStealth(value)
                        }}/>
                    </li>
                    <li>
                      <label for="Survival">Survival <span class="skill">(Wis)</span></label>
                      <input name="Survival" placeholder="+0" type="text" value={modifierWithProficiency(wis, survival)}/>
                      <input name="Survival-prof" type="checkbox" onChange={() => {
                        const value = !survival
                        setSurvival(value)
                        }} />
                    </li>
                  </ul>
                  <div class="label">
                    Skills
                  </div>
                </div>
              </div>
            </section>
            <div class="passive-perception box">
              <div class="label-container">
                <label for="passiveperception">Passive Wisdom (Perception)</label>
              </div>
              <input name="passiveperception" placeholder="10" value={10 + Number(modifiersOnSheet(wis))}/>
            </div>
            <div class="otherprofs box textblock">
              <label for="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
            </div>
          </section>
          <section>
            <section class="combat">
              <div class="armorclass">
                <div>
                  <label for="ac">Armor Class</label>
                  <input name="ac" placeholder="10" type="text" />
                </div>
              </div>
              <div class="initiative">
                <div>
                  <label for="initiative">Initiative</label>
                  <input name="initiative" placeholder="+0" type="text" value={modifiersOnSheet(dex)}/>
                </div>
              </div>
              <div class="speed">
                <div>
                  <label for="speed">Speed</label>
                  <input name="speed" placeholder="30" type="text" />
                </div>
              </div>
              <div class="hp">
                <div class="regular">
                  <div class="max">
                    <label for="maxhp">Hit Point Maximum</label>
                    <input name="maxhp" placeholder="10" type="text" />
                  </div>
                  <div class="current">
                    <label for="currenthp">Current Hit Points</label>
                    <input name="currenthp" type="text" />
                  </div>
                </div>
                <div class="temporary">
                  <label for="temphp">Temporary Hit Points</label>
                  <input name="temphp" type="text" />
                </div>
              </div>
              <div class="hitdice">
                <div>
                  <div class="total">
                    <label for="totalhd">Total</label>
                    <input name="totalhd" placeholder="2d10" type="text" value={`${level} d10`}/>
                  </div>
                  <div class="remaining">
                    <label for="remaininghd">Hit Dice</label>
                    <input name="remaininghd" type="text" />
                  </div>
                </div>
              </div>
              <div class="deathsaves">
                <div>
                  <div class="label">
                    <label>Death Saves</label>
                  </div>
                  <div class="marks">
                    <div class="deathsuccesses">
                      <label>Successes</label>
                      <div class="bubbles">
                        <input name="deathsuccess1" type="checkbox" />
                        <input name="deathsuccess2" type="checkbox" />
                        <input name="deathsuccess3" type="checkbox" />
                      </div>
                    </div>
                    <div class="deathfails">
                      <label>Failures</label>
                      <div class="bubbles">
                        <input name="deathfail1" type="checkbox" />
                        <input name="deathfail2" type="checkbox" />
                        <input name="deathfail3" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="attacksandspellcasting">
              <div>
                <label>Attacks and Spellcasting</label>
                <table>
                  <thead>
                    <tr>
                      <th>
                        Name
                      </th>
                      <th>
                        Atk Bonus
                      </th>
                      <th>
                        Damage/Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input name="atkname1" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus1" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage1" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input name="atkname2" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus2" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage2" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input name="atkname3" type="text" />
                      </td>
                      <td>
                        <input name="atkbonus3" type="text" />
                      </td>
                      <td>
                        <input name="atkdamage3" type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <textarea></textarea>
              </div>
            </section>
            <section class="equipment">
              <div>
                <label>Equipment</label>
                <div class="money">
                  <ul>
                    <li>
                      <label for="cp">cp</label>
                      <input name="cp" />
                    </li>
                    <li>
                      <label for="sp">sp</label>
                      <input name="sp" />
                    </li>
                    <li>
                      <label for="ep">ep</label>
                      <input name="ep" />
                    </li>
                    <li>
                      <label for="gp">gp</label>
                      <input name="gp" />
                    </li>
                    <li>
                      <label for="pp">pp</label>
                      <input name="pp" />
                    </li>
                  </ul>
                </div>
                <textarea placeholder="Equipment list here"></textarea>
              </div>
            </section>
          </section>
          <section>
            <section class="flavor">
              <div class="personality">
                <label for="personality">Personality</label><textarea name="personality"></textarea>
              </div>
              <div class="ideals">
                <label for="ideals">Ideals</label><textarea name="ideals"></textarea>
              </div>
              <div class="bonds">
                <label for="bonds">Bonds</label><textarea name="bonds"></textarea>
              </div>
              <div class="flaws">
                <label for="flaws">Flaws</label><textarea name="flaws"></textarea>
              </div>
            </section>
            <section class="features">
              <div>
                <label for="features">Features and Traits</label><textarea name="features"></textarea>
              </div>
            </section>
          </section>
        </main>
      </form>
    </div>
  )
}

export default Character
