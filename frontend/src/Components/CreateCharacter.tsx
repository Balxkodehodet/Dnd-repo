import { useState } from "react";
import Gallery from "./Gallery/Gallery";
import { useParams } from "react-router-dom";
import ClassesComponent from "./Classes/ClassesComponent.tsx";
import Races from "./Races/Races.tsx";
import Gender from "./Genders/Gender.tsx";
import NameSelection from "./NameSelection.tsx";
import BottomTop from "./BottomTop.tsx";
import menu from "../assets/menu.png";
import x from "../assets/close.png";
import CreateSlug from "./CreateSlug.tsx";
import CharacterBackground from "./CharBackgrounds/CharacterBackground.tsx";
import ThrowDices4d6 from "./ThrowDices4d6.tsx";
import Dices from "./Utils/Dices.ts";
import Alignments from "./Alignments.tsx";
import Languages from "./Languages/Languages.tsx";

export default function CreateCharacter() {
  const { nameId, genderId, raceId, portraitId, classId } = useParams();
  const [characterCreationStage, setCharacterCreationStage] = useState<number>(
    () => {
      let stage = localStorage.getItem("characterCreationStage");
      return Number(stage) ?? 0;
    },
  );
  const [showCharacterInfo, setShowCharacterInfo] = useState(false);
  const [classStage, setClassStage] = useState<number | null>(() => {
    const stored = localStorage.getItem("classStage");
    return stored ? Number(stored) : null;
  });
  const [raceStage, setraceStage] = useState<number>(0);
  const [btmMenu, setBtmMenu] = useState<boolean>(true);
  const validatedHuman = CreateSlug(raceId) === CreateSlug("human");
  const validatedElf = CreateSlug(raceId) === CreateSlug("elf");
  const [chosenBackground, setChosenBackground] = useState<string>("");
  const [backgroundStage, setBackgroundStage] = useState<number>(0);
  //const [character, setCharacter] = useState([]);
  const validatedGenderId =
    genderId === "male" || genderId === "female" ? genderId : undefined;

  // useState for Roll Dices for ability scores
  const [diceThrow, setDiceThrow] = useState<number[]>(() => Dices(4, 6)); // 4d6 roll 4 dices with 6 sides, as this is needed for the ability scores, and we will drop the lowest dice
  const [diceThrow2, setDiceThrow2] = useState<number[]>(() => Dices(4, 6));
  const [diceThrow3, setDiceThrow3] = useState<number[]>(() => Dices(4, 6));
  const [diceThrow4, setDiceThrow4] = useState<number[]>(() => Dices(4, 6));
  const [diceThrow5, setDiceThrow5] = useState<number[]>(() => Dices(4, 6));
  const [diceThrow6, setDiceThrow6] = useState<number[]>(() => Dices(4, 6));

  const [alignmentStage, setAlignmentStage] = useState<number>(0);
  const [chosenAlignment, setChosenAlignment] = useState<string | null>(null);

  const [abilityStage, setAbilityStage] = useState<number>(0);

 
  return (
    <>
      {characterCreationStage === 0 && (
        <>
          <div className="character-containerparent">
            <h2 className="classes-h2">Name</h2>
            <div className="nameTxt">
              <NameSelection stage={characterCreationStage} nameId={nameId} />
            </div>
            <button
              disabled={nameId === undefined}
              className="selectionbtn"
              onClick={() =>
                setCharacterCreationStage((prev) => {
                  const newStage = prev + 1;
                  localStorage.setItem(
                    "characterCreationStage",
                    newStage.toString(),
                  );
                  return newStage;
                })
              }
            >
              Finish Name selection
            </button>
          </div>
        </>
      )}
      {characterCreationStage === 1 && (
        <>
          <div className="character-containerparent">
            <h2 className="classes-h2">Gender</h2>
            <div
              className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
            >
              {showCharacterInfo && (
                <div className="item nameTxt">
                  <NameSelection
                    stage={characterCreationStage}
                    nameId={nameId}
                  />
                </div>
              )}
              {!showCharacterInfo ? (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Show character Info
                </button>
              ) : (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Hide character Info
                </button>
              )}
            </div>
            <div className="genderContainer">
              <Gender
                singleGender={validatedGenderId}
                stage={characterCreationStage}
              />
            </div>
            <button
              disabled={validatedGenderId === undefined}
              className="selectionbtn"
              onClick={() =>
                setCharacterCreationStage((prev) => {
                  const newStage = prev + 1;
                  localStorage.setItem(
                    "characterCreationStage",
                    newStage.toString(),
                  );
                  return newStage;
                })
              }
            >
              Finish Gender selection
            </button>
          </div>
        </>
      )}
      {characterCreationStage === 2 && (
        <>
          <div className="character-containerparent">
            <h2 className="classes-h2">Races</h2>
            <div
              className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
            >
              {showCharacterInfo && (
                <>
                  <div className="item nameTxt">
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                  </div>
                  <div className="item">
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                  </div>
                </>
              )}
              {!showCharacterInfo ? (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Show character Info
                </button>
              ) : (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Hide character Info
                </button>
              )}
            </div>
            <Races
              setStage={setCharacterCreationStage}
              setRaceStage={setraceStage}
              raceStage={raceStage}
              isHuman={validatedHuman}
              isElf={validatedElf}
              singleRace={raceId}
              stage={characterCreationStage}
            />
          </div>
        </>
      )}
      {characterCreationStage === 3 && (
        <>
          <div className="character-containerparent">
            <h2 className="classes-h2">Portraits</h2>
            <div
              className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
            >
              {showCharacterInfo && (
                <>
                  <div className="item">
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                  </div>
                  <div className="item">
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                  </div>
                  <div className="item">
                    <Races singleRace={raceId} stage={characterCreationStage} />
                  </div>
                </>
              )}
              {!showCharacterInfo ? (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Show character Info
                </button>
              ) : (
                <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                  Hide character Info
                </button>
              )}
            </div>
            <Gallery
              className="selected"
              singleImg={portraitId}
              stage={characterCreationStage}
            />
            <button
              disabled={portraitId === undefined}
              className="selectionbtnPortrait"
              onClick={() =>
                setCharacterCreationStage((prev) => {
                  const newStage = prev + 1;
                  localStorage.setItem(
                    "characterCreationStage",
                    newStage.toString(),
                  );
                  return newStage;
                })
              }
            >
              Finish portrait selection
            </button>
          </div>
        </>
      )}
      {characterCreationStage === 4 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2">Classes</h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <div className="item">
                      <NameSelection
                        stage={characterCreationStage}
                        nameId={nameId}
                      />
                    </div>
                    <div className="item">
                      <Gender
                        singleGender={validatedGenderId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <div className="item">
                      <Gallery
                        className="galleryimg-minimize"
                        singleImg={portraitId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <div className="item">
                      <Races
                        singleRace={raceId}
                        stage={characterCreationStage}
                      />
                    </div>
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
              <div
                className={`${classStage === null ? "classCardParent1" : ""}`}
              >
                <ClassesComponent
                  setStage={setCharacterCreationStage}
                  btmMenu={btmMenu}
                  classStage={classStage}
                  setClassStage={setClassStage}
                  singleClass={classId}
                  stage={characterCreationStage}
                />
              </div>
            </div>
            {classId !== undefined ||
              (classStage !== null && classStage > 3 && (
                <button
                  className="selectionbtn"
                  onClick={() =>
                    setCharacterCreationStage((prev) => {
                      const newStage = prev + 1;
                      localStorage.setItem(
                        "characterCreationStage",
                        newStage.toString(),
                      );
                      return newStage;
                    })
                  }
                >
                  Finish Class selection
                </button>
              ))}
            {classId && classStage === null && btmMenu && (
              <>
                <BottomTop />
                <img
                  onClick={() => setBtmMenu((prev) => !prev)}
                  className="btmMenuX"
                  src={x}
                />
              </>
            )}
            {classId && classStage === null && !btmMenu && (
              <img
                onClick={() => setBtmMenu((prev) => !prev)}
                className="btmMenu"
                src={menu}
              />
            )}
          </div>
        </>
      )}
      {characterCreationStage === 5 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2">Character Backgrounds</h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                    <Gallery
                      className="galleryimg-minimize"
                      singleImg={portraitId}
                      stage={characterCreationStage}
                    />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <div className="classCardParent1">
                      <ClassesComponent
                        btmMenu={false}
                        classStage={classStage}
                        setClassStage={setClassStage}
                        singleClass={classId}
                        stage={characterCreationStage}
                      />
                    </div>
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
              <CharacterBackground
                backgroundStage={backgroundStage}
                setBackgroundStage={setBackgroundStage}
                chosenBackground={chosenBackground}
                setChosenBackground={setChosenBackground}
                setCharacterCreationStage={setCharacterCreationStage}
              />
            </div>
          </div>
        </>
      )}
      {characterCreationStage === 6 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2">Abilities</h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                    <Gallery
                      className="galleryimg-minimize"
                      singleImg={portraitId}
                      stage={characterCreationStage}
                    />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <div className="classCardParent1">
                      <ClassesComponent
                        btmMenu={false}
                        classStage={classStage}
                        setClassStage={setClassStage}
                        singleClass={classId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <CharacterBackground
                      backgroundStage={backgroundStage}
                      setBackgroundStage={setBackgroundStage}
                      chosenBackground={chosenBackground}
                      setChosenBackground={setChosenBackground}
                      setCharacterCreationStage={setCharacterCreationStage}
                    />
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
              <ThrowDices4d6
                stage={characterCreationStage}
                diceThrow={diceThrow}
                diceThrow2={diceThrow2}
                diceThrow3={diceThrow3}
                diceThrow4={diceThrow4}
                diceThrow5={diceThrow5}
                diceThrow6={diceThrow6}
                setDiceThrow={setDiceThrow}
                setDiceThrow2={setDiceThrow2}
                setDiceThrow3={setDiceThrow3}
                setDiceThrow4={setDiceThrow4}
                setDiceThrow5={setDiceThrow5}
                setDiceThrow6={setDiceThrow6}
                setAbilityStage={setAbilityStage}
                abilityStage={abilityStage}
              />
            </div>

            <button
              className="selectionbtn"
              onClick={() => {
                setAbilityStage(1);
                setCharacterCreationStage(7)
              }
            }
            >
              Finish Ability Scores
            </button>
          </div>
        </>
      )}
      {characterCreationStage === 7 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2">Alignments</h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                    <Gallery
                      className="galleryimg-minimize"
                      singleImg={portraitId}
                      stage={characterCreationStage}
                    />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <div className="classCardParent1">
                      <ClassesComponent
                        btmMenu={false}
                        classStage={classStage}
                        setClassStage={setClassStage}
                        singleClass={classId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <CharacterBackground
                      backgroundStage={backgroundStage}
                      setBackgroundStage={setBackgroundStage}
                      chosenBackground={chosenBackground}
                      setChosenBackground={setChosenBackground}
                      setCharacterCreationStage={setCharacterCreationStage}
                    />
                    <ThrowDices4d6
                      stage={characterCreationStage}
                      diceThrow={diceThrow}
                      diceThrow2={diceThrow2}
                      diceThrow3={diceThrow3}
                      diceThrow4={diceThrow4}
                      diceThrow5={diceThrow5}
                      diceThrow6={diceThrow6}
                      setDiceThrow={setDiceThrow}
                      setDiceThrow2={setDiceThrow2}
                      setDiceThrow3={setDiceThrow3}
                      setDiceThrow4={setDiceThrow4}
                      setDiceThrow5={setDiceThrow5}
                      setDiceThrow6={setDiceThrow6}
                      setAbilityStage={setAbilityStage}
                      abilityStage={abilityStage}
                    />
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
              <Alignments
                chosenAlignment={chosenAlignment}
                setChosenAlignment={setChosenAlignment}
                alignmentStage={alignmentStage}
                setAlignmentStage={setAlignmentStage}
                setStage={setCharacterCreationStage}
              />
            </div>
          </div>
        </>
      )}
      {characterCreationStage === 8 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2">Languages</h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                    <Gallery
                      className="galleryimg-minimize"
                      singleImg={portraitId}
                      stage={characterCreationStage}
                    />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <div className="classCardParent1">
                      <ClassesComponent
                        btmMenu={false}
                        classStage={classStage}
                        setClassStage={setClassStage}
                        singleClass={classId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <CharacterBackground
                      backgroundStage={backgroundStage}
                      setBackgroundStage={setBackgroundStage}
                      chosenBackground={chosenBackground}
                      setChosenBackground={setChosenBackground}
                      setCharacterCreationStage={setCharacterCreationStage}
                    />
                    <ThrowDices4d6
                      stage={characterCreationStage}
                      diceThrow={diceThrow}
                      diceThrow2={diceThrow2}
                      diceThrow3={diceThrow3}
                      diceThrow4={diceThrow4}
                      diceThrow5={diceThrow5}
                      diceThrow6={diceThrow6}
                      setDiceThrow={setDiceThrow}
                      setDiceThrow2={setDiceThrow2}
                      setDiceThrow3={setDiceThrow3}
                      setDiceThrow4={setDiceThrow4}
                      setDiceThrow5={setDiceThrow5}
                      setDiceThrow6={setDiceThrow6}
                      setAbilityStage={setAbilityStage}
                      abilityStage={abilityStage}
                    />
                    <Alignments
                      chosenAlignment={chosenAlignment}
                      setChosenAlignment={setChosenAlignment}
                      alignmentStage={alignmentStage}
                      setAlignmentStage={setAlignmentStage}
                      setStage={setCharacterCreationStage}
                    />
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
              <Languages setStage={setCharacterCreationStage} stage={characterCreationStage} />
            </div>
          </div>
        </>
      )}
      {characterCreationStage === 9 && (
        <>
          <div className="classesParent">
            <div className="classCardParent">
              <h2 className="classes-h2"></h2>
              <div
                className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
              >
                {showCharacterInfo && (
                  <>
                    <NameSelection
                      stage={characterCreationStage}
                      nameId={nameId}
                    />
                    <Gender
                      singleGender={validatedGenderId}
                      stage={characterCreationStage}
                    />
                    <Gallery
                      className="galleryimg-minimize"
                      singleImg={portraitId}
                      stage={characterCreationStage}
                    />
                    <Races singleRace={raceId} stage={characterCreationStage} />
                    <div className="classCardParent1">
                      <ClassesComponent
                        btmMenu={false}
                        classStage={classStage}
                        setClassStage={setClassStage}
                        singleClass={classId}
                        stage={characterCreationStage}
                      />
                    </div>
                    <CharacterBackground
                      backgroundStage={backgroundStage}
                      setBackgroundStage={setBackgroundStage}
                      chosenBackground={chosenBackground}
                      setChosenBackground={setChosenBackground}
                      setCharacterCreationStage={setCharacterCreationStage}
                    />
                    <ThrowDices4d6
                      stage={characterCreationStage}
                      diceThrow={diceThrow}
                      diceThrow2={diceThrow2}
                      diceThrow3={diceThrow3}
                      diceThrow4={diceThrow4}
                      diceThrow5={diceThrow5}
                      diceThrow6={diceThrow6}
                      setDiceThrow={setDiceThrow}
                      setDiceThrow2={setDiceThrow2}
                      setDiceThrow3={setDiceThrow3}
                      setDiceThrow4={setDiceThrow4}
                      setDiceThrow5={setDiceThrow5}
                      setDiceThrow6={setDiceThrow6}
                      setAbilityStage={setAbilityStage}
                      abilityStage={abilityStage}
                    />
                    <Alignments
                      alignmentStage={alignmentStage}
                      setAlignmentStage={setAlignmentStage}
                      setStage={setCharacterCreationStage}
                      chosenAlignment={chosenAlignment}
                      setChosenAlignment={setChosenAlignment}
                    />
                  </>
                )}
                {!showCharacterInfo ? (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Show character Info
                  </button>
                ) : (
                  <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                    Hide character Info
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {characterCreationStage === 10 && (
        <>
          <h2 className="classes-h2">Alignments</h2>
          <div
            className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
          >
            {showCharacterInfo && (
              <>
                <NameSelection stage={characterCreationStage} nameId={nameId} />
                <Gender
                  singleGender={validatedGenderId}
                  stage={characterCreationStage}
                />
                <Gallery
                  className="galleryimg-minimize"
                  singleImg={portraitId}
                  stage={characterCreationStage}
                />
                <Races singleRace={raceId} stage={characterCreationStage} />
                <div className="classCardParent1">
                  <ClassesComponent
                    btmMenu={false}
                    classStage={classStage}
                    setClassStage={setClassStage}
                    singleClass={classId}
                    stage={characterCreationStage}
                  />
                </div>
                <CharacterBackground
                  backgroundStage={backgroundStage}
                  setBackgroundStage={setBackgroundStage}
                  chosenBackground={chosenBackground}
                  setChosenBackground={setChosenBackground}
                  setCharacterCreationStage={setCharacterCreationStage}
                />
                <ThrowDices4d6
                  stage={characterCreationStage}
                  diceThrow={diceThrow}
                  diceThrow2={diceThrow2}
                  diceThrow3={diceThrow3}
                  diceThrow4={diceThrow4}
                  diceThrow5={diceThrow5}
                  diceThrow6={diceThrow6}
                  setDiceThrow={setDiceThrow}
                  setDiceThrow2={setDiceThrow2}
                  setDiceThrow3={setDiceThrow3}
                  setDiceThrow4={setDiceThrow4}
                  setDiceThrow5={setDiceThrow5}
                  setDiceThrow6={setDiceThrow6}
                  setAbilityStage={setAbilityStage}
                  abilityStage={abilityStage}
                />
              </>
            )}
            {!showCharacterInfo ? (
              <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                Show character Info
              </button>
            ) : (
              <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                Hide character Info
              </button>
            )}
          </div>
          <Alignments
            alignmentStage={alignmentStage}
            setAlignmentStage={setAlignmentStage}
            setStage={setCharacterCreationStage}
            chosenAlignment={chosenAlignment}
            setChosenAlignment={setChosenAlignment}
          />
        </>
      )}
      {characterCreationStage === 11 && (
        <>
          <h2 className="classes-h2">Alignments</h2>
          <div
            className={`characterInfo ${showCharacterInfo ? "blackborder" : ""}`}
          >
            {showCharacterInfo && (
              <>
                <NameSelection stage={characterCreationStage} nameId={nameId} />
                <Gender
                  singleGender={validatedGenderId}
                  stage={characterCreationStage}
                />
                <Gallery
                  className="galleryimg-minimize"
                  singleImg={portraitId}
                  stage={characterCreationStage}
                />
                <Races singleRace={raceId} stage={characterCreationStage} />
                <div className="classCardParent1">
                  <ClassesComponent
                    btmMenu={false}
                    classStage={classStage}
                    setClassStage={setClassStage}
                    singleClass={classId}
                    stage={characterCreationStage}
                  />
                </div>
                <CharacterBackground
                  backgroundStage={backgroundStage}
                  setBackgroundStage={setBackgroundStage}
                  chosenBackground={chosenBackground}
                  setChosenBackground={setChosenBackground}
                  setCharacterCreationStage={setCharacterCreationStage}
                />
                <ThrowDices4d6
                  stage={characterCreationStage}
                  diceThrow={diceThrow}
                  diceThrow2={diceThrow2}
                  diceThrow3={diceThrow3}
                  diceThrow4={diceThrow4}
                  diceThrow5={diceThrow5}
                  diceThrow6={diceThrow6}
                  setDiceThrow={setDiceThrow}
                  setDiceThrow2={setDiceThrow2}
                  setDiceThrow3={setDiceThrow3}
                  setDiceThrow4={setDiceThrow4}
                  setDiceThrow5={setDiceThrow5}
                  setDiceThrow6={setDiceThrow6}
                  setAbilityStage={setAbilityStage}
                  abilityStage={abilityStage}
                />
              </>
            )}
            {!showCharacterInfo ? (
              <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                Show character Info
              </button>
            ) : (
              <button onClick={() => setShowCharacterInfo((prev) => !prev)}>
                Hide character Info
              </button>
            )}
          </div>
          <Alignments
            alignmentStage={alignmentStage}
            setAlignmentStage={setAlignmentStage}
            setStage={setCharacterCreationStage}
            chosenAlignment={chosenAlignment}
            setChosenAlignment={setChosenAlignment}
          />
        </>
      )}
    </>
  );
}
