import { SkillsInfo } from "../../data/SkillsInfo";
import { useState } from "react";
import CreateSlug from "../CreateSlug";
import check from "../../assets/check.png";
import x from "../../assets/close.png";
import { Feats } from "../../data/Feats";

type race = { race: string | undefined };

export default function RaceTraits({ race }: race) {
  const [raceTraitsStage, setRaceTraitsStage] = useState<number>(0);
  const [skill, setSkill] = useState<string[]>([]);
  const [skillnr, setSkillnr] = useState<number>(1);

  const [feat, setFeat] = useState<string | undefined>(undefined);
  return (
    <>
      {CreateSlug(race) === CreateSlug("human") && raceTraitsStage === 0 && (
        <>
          <h2>Human traits</h2>
          <h3>Choose {skillnr} skill</h3>
          <div className="skillRaceTraitsParent">
            {SkillsInfo.map((skill, i) => {
              return (
                <>
                  <p
                    key={i}
                    onClick={() => {
                      setSkillnr((prev) => (prev === 1 ? prev - 1 : prev));
                      setSkill([skill.skill]);
                    }}
                    className="skillRaceTraits"
                  >
                    {skill.skill}
                  </p>
                </>
              );
            })}
          </div>
          {skill.length > 0 && (
            <>
              <div className="skillRaceTraitParent-checkx">
                <h3>You chose: {skill}</h3>
                <div>
                  <img className="check" src={check} />
                  <img
                    onClick={() => {
                      setSkillnr((prev) => (prev === 0 ? prev + 1 : prev));
                      setSkill([]);
                    }}
                    className="x-check"
                    src={x}
                  />
                </div>
              </div>
              <button
                onClick={() => setRaceTraitsStage((prev) => prev + 1)}
                className="selectionbtn"
              >
                Next
              </button>
            </>
          )}
        </>
      )}
      {CreateSlug(race) === CreateSlug("human") && raceTraitsStage === 1 && (
        <>
          <h3 className="feat">Versatile</h3>{" "}
          <p className="feat">
            You gain an Origin feat of your choice - Skilled is recommended.
          </p>
          <h3 className="feat">Origin Feats: </h3>
          {Feats.map((feats) => {
            if (feats.Category === "Origin") {
              return (
                <>
                  {feats.Feats.map((feat) => {
                    return (
                      <>
                        <p onClick={() => setFeat(feat.Name)} className="feat">
                          <h3>{feat.Name}</h3> <br></br>
                          {feat.Information}
                        </p>
                      </>
                    );
                  })}
                </>
              );
            }
          })}
          {feat && (
            <h3
              onClick={() => {
                feat === "Skilled" ? setSkillnr(3) : null;
                setRaceTraitsStage((prev) => prev + 1);
              }}
              className="feat"
            >
              Choose {feat}
            </h3>
          )}
        </>
      )}
      {CreateSlug(race) === CreateSlug("human") &&
        raceTraitsStage === 2 &&
        CreateSlug(feat) === "skilled" && (
          <>
            <h2>Feat: Skilled</h2>
            <h3>Choose {skillnr} skill</h3>
            <div className="skillRaceTraitsParent">
              {SkillsInfo.map((ski, i) => {
                return (
                  <>
                    <p
                      key={i}
                      onClick={() => {
                        setSkillnr((prev) => (!skill.includes(ski.skill) && prev > 0 ? prev - 1 : prev));
                        setSkill(prev => prev.includes(ski.skill) || skill.length > 3 ? prev : [...prev, ski.skill]);
                      }}
                      className="skillRaceTraits"
                    >
                      {ski.skill}
                    </p>
                  </>
                );
              })}
            </div>
            {skill.length > 0 && (
              <>
                
                  <h3>You chose: {skill.map(s => <div className="skillRaceTraitParent-checkx"><p>{s}</p>
                    <div><img className="check" src={check} />
                    <img
                      onClick={() => {
                        setSkillnr((prev) => (prev < 4 ? prev + 1 : prev));
                        setSkill(prev => prev.filter((p) => !p.includes(s)));
                      }}
                      className="x-check"
                      src={x}
                    /></div>
                  </div>)}</h3>
                <button
                  onClick={() => setRaceTraitsStage((prev) => prev + 1)}
                  className="selectionbtn"
                >
                  Next
                </button>
              </>
            )}
          </>
        )}
    </>
  );
}
