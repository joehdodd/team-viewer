import "./search.css";

export default function Search(props: any) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className="search-input"
        type="text"
        value={props.searchValue}
        onChange={props.onChange}
      />
    </div>
  );
}
