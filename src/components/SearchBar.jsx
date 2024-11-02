import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Card } from "./Card";
import queryString from "query-string";
import { getContentByName } from "../helpers/getContentByName";
import { useVideoStore } from "../hooks/useVideoStore";
import { useCourseStore } from "../hooks/useCourseStore";
import { contents } from "../../assets/data/content";

export const SearchBar = () => {
  const { videos } = useVideoStore();
  const { courses } = useCourseStore();
  const data = contents.concat(courses.concat(videos))
  // console.log(data)
  let cardOption;
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const searches = getContentByName(q, data);
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const ShowSearch = q.length === 0;
  const ShowError = q.length > 0 && searches.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={onSearchSubmit}>
        <input
          type="text"
          name="searchText"
          className="search-bar"
          placeholder="Buscar Cualquier Cosa"
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
        />
      </form>
      <div className="result-container">
        <div
          className="search-res-pos"
          style={{ dispay: ShowSearch ? "" : "none" }}
        >
          Resultados de Búsqueda:
        </div>
        <div
          className="search-res-neg"
          style={{ display: ShowError ? "" : "none" }}
        >
          Contenido No Encontrado
        </div>
        {searches.map((content) => {
          if(content.type === '2') {
            cardOption = (
              <Card
                style={{marginLeft: '2rem'}}
                type={Number(content.type)}
                id={content.id}
                key={content.id}
                title={content.name}              
                Coursedata={content.Coursedata}
                img={content.img}
                btntxt={content.btntxt}
                resume={content.resume}
              />
            )
          } else {
            cardOption = (
              <Card
                style={{marginLeft: '2rem'}}
                type={Number(content.type)}
                id={content.id}
                key={content.id}
                title={content.name}
                img={content.img}
                resume={content.resume}
                btntxt={"Cónocenos"}
              />
            )
          }
          return (
            cardOption
          );
        })}
      </div>
    </div>
  );
};
