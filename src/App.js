//2020.12.03
//URL로 영화데이터를 불어오기 위해 axios.get()에 URL전달
//평점 내림차순으로 영화 데이터를 가져올 수 있음.
//App컴포넌트에 Movie컴포넌트 그리기
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends React.Component{

  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async() =>{

    const {
      data: {
        data: { movies},
       },
       } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    
    this.setState({movies,isLoading:false});
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){

    const{isLoading, movies}=this.state;//state에 무비
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">'Loading....'</span>
          </div>  
        ) : (
          <div class="movies">
              {movies.map((movie)=>(
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                />
            ))}
            {/* //여기에서 movie컴포넌트 반환 */}

          </div>
        )}
       
          </section>
    );
    
  }
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                