import React, { Component } from 'react'
import Cards from '../../components/card/Cards'
import {connect} from "react-redux";
import {searchMovie} from "../../redux/action";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ value: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchMovie(this.state.value)
    };

    render(props) {
        const { movies, error, loading } = this.props;

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
                    Whoops, something went wrong trying to find movies with titles like
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
const mapStateToProps = state =>{
    return{
        movies: state.SR.movies,
        error:state.SR.error,
        loading: state.SR.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchMovie:(value) => dispatch(searchMovie(value))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)

