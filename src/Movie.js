//2020.12.03
//Movie컴포넌트에 id, title, year, summary, poster를 받아 출력하도록 하기.


import React from 'react';
import ProtoTypes from 'prop-types';
import './Movie.css';

function Movie({title, year, summary, poster}){
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
        
    <div class="movie__data">
        <h3 class="movie__title">
            {title}
        </h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>

    </div>
    </div>
    );
}

Movie.propTypes={
    //API에서 넘어오는 id는 key값이 있으므로 없어도됨.
    year : ProtoTypes.number.isRequired,
    title : ProtoTypes.string.isRequired,
    summary : ProtoTypes.string.isRequired,
    poster : ProtoTypes.string.isRequired,//이미지 주소가 저장됨
    };

export default Movie;