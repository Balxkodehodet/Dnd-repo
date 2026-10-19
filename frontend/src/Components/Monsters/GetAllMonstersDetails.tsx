// import config from '../config.ts'
// import useGetData from '../Hooks/useGetData.tsx';
// export default function GetAMonster({monsterUrl}){

//     const url = `${config().main_url}${monsterUrl}`
//     const {data:monsterData, isLoading: loading, error: isError} = useGetData(url)
//     const monsterImg = `${config().main_url}${monsterData?.image}`
//     console.log("MonsterData unrendered:", monsterData);

//     return (
//         <>
//         {monsterData && <div>
//         <h2>{monsterData.name}</h2>
//         <img src={monsterImg}/>
//         <h3>Armor class:</h3>
//         <p>{monsterData.armor_class[0].type}</p>
//         <p>{monsterData.armor_class[0].value}</p>
//         </div>}
//         </>
//     )
// }