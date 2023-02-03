import { ReactComponent as Filter } from "../../assets/filter_list.svg";

function SearchBar() {
  return (
    <form
      className="p-2 pl-6 relative flex items-center"
      onSubmit={(e) => e.preventDefault()}
      role="search"
    >
      <input
        type="search"
        placeholder="Busca un chat o inicia uno nuevo."
        className="w-10/12 h-9 bg-slate-100 placeholder:text-sm  placeholder:text-slate-500 placeholder:text-center placeholder:p-6 outline-transparent rounded-md leading-10"
      />
      <img src="src/assets/search.svg" className="h-5 w-5 absolute left-9" />
      <div className="p-2 hover:bg-slate-300 cursor-pointer rounded-md absolute right-6">
        <div className="h-6 w-6">
          <Filter className="hover:cursor-pointer" height={24} width={24} viewBox={"0 0 50 50"}/>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
