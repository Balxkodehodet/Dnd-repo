import {useParams} from 'react-router-dom'
import config from '../config.ts'
import useGetData from '../Hooks/useGetData.tsx'
import { type CategoryData } from '../types/types.ts'

export default function Category(): React.JSX.Element {
  const {category} = useParams();

  const url = `${config().main_url}/api/${category}`;
  const {data, isLoading, error} = useGetData<CategoryData>(url);
  console.log("This is data from category:",data);
  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && (
      <div className="category">
        <h2>{category}</h2>
        <p>This is the {category} page.</p> 
        <div>{data.results.map((result) => (
          <div key={result.index}>
            <strong className="category-name">{result.name}</strong>
          </div>
        ))}</div>    
      </div> 
    )}
  </>
  );
}
