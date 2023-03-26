import useRequest from "../hooks/useRequest";
import {useCallback} from "react";

const PlanetInfo = ({id}) => {

  const getPlanet = (planetId) => {
    return fetch(`https://swapi.dev/api/planets/${planetId}`)
      .then((response) => response.json())
      .then(data => data);
  }

  const requestPlanet = useCallback(() => getPlanet(id), [id]);

  const {data, loading, error} = useRequest(requestPlanet);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something is wrong</div>;
  }

  return (
    <div className='wrapper'>
      <h3>Planet name - {data && data.name}</h3>
    </div>
  )
}

export default PlanetInfo;
