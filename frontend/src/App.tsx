import './App.css'
import {useGetData} from './Hooks/useGetData.tsx'
import {Link} from 'react-router-dom'
import {useAppContext} from './Components/AppContext.tsx'


function App() {

  let {url} = useAppContext();

  //let url2 = config().main_url + 'api';
  const {data, isLoading, error} = useGetData(url + 'api');
  console.log(data);

  return (
    <>
    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {data && (
      <ul className="categories1-container">
      {Object.entries(data).map(([key]) => (
        <Link to={key} key={key}>
          <li className="categories1">
            <strong>{key}</strong>
          </li>
        </Link>
      ))}
      </ul>
    )}
    </>
  )
}

export default App
