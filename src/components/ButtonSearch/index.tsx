import './styles.css';

const ButtonSearch = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Digite sua busca"
      />

      <button className="btn btn-primary">
        <h6>BUSCAR</h6>
      </button>
    </div>
  );
};

export default ButtonSearch;
