import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cards from '../../components/card/Cards'
import {fetchMovie} from '../../redux/action';
class Upcoming extends Component {

    componentDidMount() {
        this.props.fetchMovie();
    }

    render(props) {
        const { loading, movieList, error } = this.props;
        return loading ? (
            <h1>Loading...</h1>
        ) : error ? (
            <h1>Error 404</h1>
        ) : (
            <div class="row">
                <h1>Upcoming</h1>
                <div>
                    {
                        movieList && movieList.map((movieName) =>
                            <Cards
                                title={movieName.title}
                                overview={movieName.overview}
                                poster={movieName.poster_path}
                                released={movieName.release_date}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.LR.loading,
        movieList: state.LR.movieList,
        error: state.LR.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: () => dispatch(fetchMovie('upcoming'))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)
