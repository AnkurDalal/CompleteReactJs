import styles from "./Netflix.module.css";
export function SeriesCard(props) {
  const { name, img_url, description, genre, watch_url, cast, id, rating } =
    props.currElem;
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--bg-color)",
    fontWeight: "bold",
    cursor: "pointer",
    color: "black",
  };
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <>
      <li key={id} className={styles.card}>
        <div>
          <img src={img_url} width={"40%"} height={"40%"} alt="" />
        </div>
        <div className={styles["card-content"]}>
          <h1>Name:{name}</h1>
          <h2>
            Rating:
            <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </h2>
          <p>Summary:{description}</p>
          <p>Genre:{genre}</p>
          <p>Cast:{cast}</p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now !</button>
          </a>
        </div>
      </li>
    </>
  );
}
