import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Card } from "./Card";
import queryString from "query-string";
import { getContentByName } from "../helpers/getContentByName";

export const SearchBar = () => {
  let cardOption;
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const contents = getContentByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q
  });
  const ShowSearch = q.length === 0;
  const ShowError = q.length > 0 && contents.length === 0;

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
        {contents.map((content) => {
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
                resume={content.info}
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
