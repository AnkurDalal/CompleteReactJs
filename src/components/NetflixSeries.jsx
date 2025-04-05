import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export function NetflixSeries() {
  return (
    <>
      <ul className="grid grid-three--cols" >
        {seriesData.map((currElem) => {
            return <SeriesCard key={currElem.id} currElem={currElem}/>
        })}
      </ul>
    </>
  );
}
