// import config from '../config.ts'
// import useGetData from '../Hooks/useGetData.tsx'
// import RenderValueAll from './RenderValueAll.tsx';
// import GetAMonster from './GetAMonster.tsx';


// export default function GetAllMonsters(): React.JSX.Element {

//   const url = `${config().main_url}/api/2014/monsters`;
//   const {data, isLoading, error} = useGetData(url);
   
//   // Render valueAll if you want all the object data key-values to map into a complete render on page
//   // Use data.(insert value here) to get specific data
//   const renderedValue = RenderValueAll(data);
//   console.log("Rendered value: ", renderedValue)
//   return (
//     <>
//     {isLoading && <p>Loading...</p>}
//     {error && <p>Error: {error.message}</p>}
//     {data && (
//       <div className="category">
//         <h2>{}</h2>
//         <p>This is the {} page.</p> 
//         <div><strong>data:</strong>{data.url}</div>    
//       </div> 
//     )}
//     <GetAMonster monsterUrl={data?.url}/>

//   </>
//   );
// }
