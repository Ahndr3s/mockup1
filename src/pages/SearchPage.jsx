import { SearchBar } from "../components/SearchBar";
import "./SearchPageStyles.css";


export const SearchPage = () => {
  return (
    <>
      <div className="search-body">

        <h1 className="titles">Buscar</h1>
        <hr />
        <SearchBar/>
      </div>
    </>
  )
}
