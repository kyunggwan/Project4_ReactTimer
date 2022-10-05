import logo from './logo.svg';
import './App.css';
import MyTick from './components/MyTick';

function App() {
  console.log("App"); // 이렇게 뭐 써도 되긴함.
  return ( //표현되는 것은 div 태그 하나
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       </header>
      <MyTick /> 
     
    </div>
  );
}
//class 속성은 className
export default App;
