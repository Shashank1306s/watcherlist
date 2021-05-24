import React, { Component } from 'react'
import Cards from '../../components/card/Cards'
class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            movies: [],
            error: false,
            loading: false,
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ value: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true });
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.value}&api_key=8c079aa9925b3fc45546af53c0d30371`)
            .then(response => response.json())
            .then(response => {
                console.log(response.results);
                this.setState({ movies: response.results, loading: false });
            }).catch(err => {
                this.setState({ error: true, loading: false });
            })
    };

    render() {
        const { movies, error, loading } = this.state;

        let movieInfo = null;

        if (movies) {
            if (movies.length === 0) {
                movieInfo = (
                    <h3>No movies match your search terms. Please try again.</h3>
                );
            } else if (movies.length > 0) {
                movieInfo = (
                    <>
                        <h2>Movie Results for: {this.state.value}</h2>
                        <Cards
                            title={movies[0].title}
                            overview={movies[0].overview}
                            poster={movies[0].poster_path}
                            released={movies[0].release_date}
                        />
                    </>
                );
            }
        }

        if (error) {
            movieInfo = (
                <h3>
                    Woops, something went wrong trying to find movies with titles like
                    your search.
                </h3>
            );
        }

        if (loading) {
            movieInfo = <h3>Searching movies now...</h3>;
        }


        return (
            <div>
                <h1>Search Movie Title Here...</h1>
                <input type="text" className="form-control" placeholder="Search Movie.." value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-secondary" onClick={this.handleSubmit}>Search</button>

                {movieInfo ? movieInfo : null}
            </div>
        )
    }
}

export default Search

