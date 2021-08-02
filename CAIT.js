const element = React.createElement;

class searchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
      showMessage: false,
      title: [],
      poster: [],
      year: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    fetch("https://www.omdbapi.com/?s=" + this.state.input + "&apikey=3da8cf13")
      .then((response) => response.json())
      .then((movies) => {
        if (movies.Response === "False") {
          alert("Can not find movie using: " + this.state.input);
        } else {
          for (var i = 0; i < movies.totalResults; i++) {
            this.setState({
              title: [...this.state.title, movies.Search[i].Title],
              year: [...this.state.year, movies.Search[i].Year],
              poster: [...this.state.poster, movies.Search[i].Poster]
            });
          }
        }
      });

    this.setState({
      showMessage: true
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          {" "}
          Submit{" "}
        </button>

        {this.state.showMessage && <p>You searched: {this.state.input}</p>}
        {this.state.title.map((item, i) => (
          <ul key={i} value={item}>
            {item}
          </ul>
        ))}
        {this.state.year.map((item, i) => (
          <ul key={i} value={item}>
            {item}
          </ul>
        ))}
        {this.state.poster.map((item, i) => (
          <img key={i} src={item} />
        ))}
      </form>
    );
  }
}

const domContainer = document.querySelector("#search_box");
ReactDOM.render(element(searchBox), domContainer);
