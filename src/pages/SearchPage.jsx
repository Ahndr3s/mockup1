// import { SimpleForm } from "../components/SimpleForm"
import { SearchBar } from "../components/SearchBar";
import "./SearchPageStyles.css";


export const SearchPage = () => {
  return (
    <>
      <div className="search-body">

        <h1 className="titles">Buscar</h1>
        <hr />
        {/* <SimpleForm type={3}/> */}
        <SearchBar/>
      </div>
    </>
  )
}
