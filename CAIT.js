const element = React.createElement;

class searchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
      showMessage: false,
      title: "",
      poster: "",
      year: ""
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
    //console.log("2");

    fetch("https://www.omdbapi.com/?s=" + this.state.input + "&apikey=3da8cf13")
      .then((response) => response.json())
      .then((movies) => {
        //displayResults(json);
        //    });
        //console.log("3");

        //function displayResults(json) {
        //console.log("4");
        //console.log(json);

        //  const movies = json;
        //console.log(movies.totalResults + " results");
        //console.log(movies.Search[1].Title);

        if (movies.Response === "False") {
          console.log("failed");
          alert('Can not find movie using: ' + this.state.input);
        } else {
          this.setState({
            title: movies.Search[0].Title,
            year: movies.Search[0].Year,
            poster: movies.Search[0].Poster
          });

          // for (var i = 0; i < movies.totalResults; i++) {
          //t = movies.Search[0].Title;
          //p = movies.Search[0].Poster;
          //console.log(movies.Search[i]);
          // }
        }
      });

    //console.log(result.json);
    //  let t = movie.Search[0].Title;
    this.setState({
      showMessage: true
      // title: movies.Search[0].Title
    });
    // });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.showMessage && <p>You searched: {this.state.input}</p>}
        {this.state.showMessage && <p> {this.state.title} </p>}
        {this.state.showMessage && <p> {this.state.year} </p>}
        {this.state.showMessage && <img src={this.state.poster} />}
      </form>
    );
  }
}

const domContainer = document.querySelector("#search_box");
ReactDOM.render(element(searchBox), domContainer);


//ReactDOM.render(<re1 />, document.getElementById("root"));
console.log("start");

