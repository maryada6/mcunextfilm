import "regenerator-runtime/runtime";
import axios from "axios";
import { useState, useEffect } from "react";
import { SolarSystemLoading } from "react-loadingg";
const BASE_URL = "https://www.whenisthenextmcufilm.com/api";

const Mcupage = () => {
  const [mcuData, setMcuData] = useState({
    days_until: "N/A",
    following_production: {
      days_until: " ",
      overview: "",
      poster_url: "",
      release_date: "",
      title: "",
      type: "",
    },
    overview: "",
    poster_url: "",
    release_date: "",
    title: "",
    type: "",
  });

  const [loading, setLoading] = useState(true);
  const getMcuFilm = async (date) => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}?date=${date}`);
      const mcuData = response.data;
      console.log(mcuData);
      setMcuData(mcuData);
      setLoading(false);
      return mcuData;
    } catch (errors) {
      console.error(errors);
      setLoading(false);
      return {};
    }
  };

  useEffect(() => {
    getMcuFilm();
  }, []);

  if (loading) return <SolarSystemLoading />;
  else {
    return (
      <>
        <div className="container">
          <h2 className="release-title">
            {mcuData.title} releases in{" "}
            <span className="highlight">{mcuData.days_until} days!</span>{" "}
          </h2>
          <h3>
            Release date:{" "}
            <span className="highlight">{mcuData.release_date}</span>
          </h3>
          <h3>Production type: {mcuData.type}</h3>
          <h4>
            What's next?
            {
              mcuData.following_production.title?
            (<button
              className="next-button"
              onClick={() => getMcuFilm(mcuData.release_date)}
            >
              {"  " + mcuData.following_production.title}
            </button>): <button className="next-button">Best is yet to come( That's it for now )!!!</button>}
          </h4>
          <img
            className="movie-img"
            src={mcuData.poster_url}
            alt={mcuData.title}
          />
          <h3>Overview: {mcuData.overview}</h3>
        </div>
        <hr />
        <footer id="footer">
          <a href="https://www.linkedin.com/in/maryada-kumar-lodha-d-a86285190">
           In
          </a>
          <a href="https://github.com/maryada6">
            Git
          </a>
          <p>Made By Maryada with 💙 &copy; 2021</p>
        </footer>
      </>
    );
  }
};

export { Mcupage };
