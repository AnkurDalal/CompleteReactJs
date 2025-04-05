import { NetflixSeries } from "./components/NetflixSeries";
{/*import './components/Netflix.css'*/}
import './components/Netflix.module.css'

export function App() {
  return (
    <>
      <section className="container">
        <h1 className="card-heading">List of NetflixSeries</h1>
        <NetflixSeries />
      </section>
    </>
  );
}
