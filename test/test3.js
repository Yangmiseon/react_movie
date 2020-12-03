//2020.12.03
//영화 데이터를 로딩하려면 자바스크립트의 fetch()라는 함수가 필요했고, 
//fetch()함수 대신 axios라는 도구를 사용해서 영화 앱을 만들거임.
//터미널에 npm install axios 입력하여 설치 후 영화 API사용하기
//axios는 네트워크를 사용하므로 느리게 동작하기 때문에 axios.get()이 반환한 영화 데이터를 잡으려면
//자바스크립트에게 axios.get()을 포함하고 있는 함수의 실행이 끝날 때까지 
//시간이 걸릴수 있다고 async를 붙여주고 시간이 필요한 대상인 axios.get()앞에 await붙이기
//axios.get()의 실행이 분리될 수 있도록 함수를 만들어야함
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async() =>{

    const {//구조분해할당
      data: {//여기서 data
        data: { movies},//여기서 data >> movies가 진행됨 
       },
       } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //순서대로 객체에 접근하도록 하기 console.log(movies.data.data.movies);
    //>>위와같이 구조분해 할당으로 바꿀수 있음.
    
    //구조분해할당으로 얻은 데이터를 state에 저장하기
    this.setState({movies,isLoading:false});//여기 무비는 구조분해할당에 있는 무비임. state의 무비아님
  };

//컴포넌트가 마운트 되면 axios.get()함수가 실행되며 영화 데이터를 가져오게됨
  componentDidMount(){
    this.getMovies();
  }

  render(){

    const{isLoading}=this.state;
    return <div>{isLoading ? 'Loading....':'We are ready'}</div>;
    
  }
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                