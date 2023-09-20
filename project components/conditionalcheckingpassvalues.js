  const handleChangeRegion = (e) => {
    setSelectedRegion({ isAsiaSelected: false, isMenaSelected: false });
    const myAllGame = Object.keys(selectedRegion);
    const selectedValue = [...e];
    if(e){
      myRegion.forEach((e, i) => {
        const checking = (data, selecteddata) => {
          return selecteddata.find((ss, ii) => {
            return ss.value === data.value;
          });
        };
        if (checking(e, selectedValue)) {
          let key_selected = myAllGame[i];
          setSelectedRegion(prev=>{
            return {...prev,[key_selected]:true}
          })
        }
      });
    }
  };

  // defined values 
  const [selectedRegion, setSelectedRegion] = useState({
    isAsiaSelected: false,
    isMenaSelected: false
  });
  const myRegion = [
    { label: "ASIA", value: "ASIA" },
    { label: "MENA", value: "MENA" }
  ];


  <div className="form-group">
  <label htmlFor="">Add Region</label>
  <Select
    classNamePrefix="react-select" //package
    className="form-select"
    options={myRegion}
    menuPlacement={"auto"}
    isMulti
    onChange={(e) => handleChangeRegion(e)}
    placeholder="Select Region"
    // value={region.regionName}
  />
</div>

// onclick based on the value and pass the data  with conditional chechup


const AddAllSelectedReligion = (gameData, data) => {
  const myAllGameData = Object.keys(gameData);
  let finalGameData = [];
  myAllGameData.forEach((item, index) => {
    if (gameData[item]) {
      finalGameData.push({ ...data, region: myRegion[index].value });
    }
  });
  return finalGameData;
};

const gameData = AddAllSelectedReligion(selectedRegion, data); //data entered remaining values , selected region state value 

// data example data 
 // //{
//   "title": "gta",
//   "description": "test",
//   "features": "test",
//   "link": "https://uat.extramileplay.com/php/Festive_Mela/index.php",
//   "demoLink": "https://uat.extramileplay.com/php/Festive_Mela/index.php",
//   "answerSheet": "",
//   "mailerTemplate": "",
//   "isPublic": true,
//   "coverMedia": [
//       "https://uat.extramileplay.com/php/Festive_Mela/index.php",
//       "uploads/game-images/1695197204088_desktop-wallpaper-kick-buttowski-thumbnail.jpg"
//   ],
//   "category": [
//       {
//           "id": "a7a1376f-31d1-46fc-9728-0f1a4e6c6ca9"
//       }
//   ],
//   "objectives": [
//       {
//           "id": "9737a7d8-73b0-4b93-bfed-0e0b55ffff64"
//       }
//   ]
// }

/// 

