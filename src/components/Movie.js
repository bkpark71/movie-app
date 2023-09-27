import PropTypes from 'prop-types';

function Movie({key, coverImage, title, summary, genres}) {
    return (
        <div key={key}>
            <img src={coverImage} alt={title} />
            <h1>{title}</h1>
            <ul>{genres.map((genre, index) => 
                    <li key={index}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    key : PropTypes.number,
    coverImage : PropTypes.string,
    title : PropTypes.string,
    summary : PropTypes.string,
    genres : PropTypes.array
}

export default Movie;