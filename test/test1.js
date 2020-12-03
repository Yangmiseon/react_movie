//2020.12.03
//리액트가 제공하는 Component클래스를 상속받아 state로 숫자 증감을 만들기.
//클래스형 컴포넌트의 일생 알아보기
//render()함수가 실행된 후 componentDidMount() 함수가 실행된다.
//버튼을 누르면 setState() 함수가 실행하면서 화면이 업데이트 되니까
//화면이 바뀌면 render() 실행된 후 componentDidUpdate()함수가 실행된다. 
//리액트에서 컴포넌트가 죽을 때를 언마운트라고 분류하며, 화면에서 떠날 때 실행이됨.
//언마운트함수는 보통 컴포넌트에 적용한 이벤트 리스너를 제거할 때 많이 사용
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    console.log('hello');
  }

  /* 사용자 동작에 따라 state의 count를 바꿀 수 있도록 함 */
  state ={
    count:0,
  };

  add= () =>{
    this.setState(current => ({count:this.state.count+1}));
  };

  minus= () => {
    this.setState(current =>({count:this.state.count-1}));
  };

  componentDidMount(){
    console.log('component rendered');
  }

  componentDidUpdate(){
    console.log('Ijust updated');
  }

  componentWillUnmount(){
    console.log('good bye');
  }

  render(){
    console.log("I'm rendering");
    return (
      <div>
        <h1>the number is:{this.state.count}</h1>
        {/* onClick속성을 이용하여 버튼을 동작하도록 함 */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
    
  }
}

export default App;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                