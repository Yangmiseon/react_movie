//2020.12.03
//isLoading state는 컴포넌트가 마운트되면 true여야 함
//로딩 상황에 따라 로딩중이다 혹은 로딩이 다 되었다 와 같은 문장을 화면에 출력
//App컴포넌트가 그려지면(render()함수가 실행되면) 
//호출되는 생명주기 함수는 componentDidMount()함수이다.
//setTimeout()함수를 적용해서 영화데이터가 로딩되는 현상 구현하기
//로딩된 영화 데이터는 state에 저장하기.
//movies state에 저장하기 위해 자료형은 배열

import React from 'react';

class App extends React.Component{

  state = {
    isLoading: true,
    movies:[],
  };

  componentDidMount(){
    //처음 인자로setTimeout(...)을 전달했고, 
    setTimeout(()=>{
      //state를 바꾸려면 setState()함수사용
      this.setState({isLoading: false});
    }, 6000);//두번째인자로 6000밀리초를 전달
  }

  render(){

    const{isLoading}=this.state;
                                          //바로 이부분에 영화 데이터를 출력할거임
    return <div>{isLoading ? 'Loading....':'We are ready'}</div>;
    
  }
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                