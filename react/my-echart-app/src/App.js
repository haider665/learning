import logo from './logo.svg';
import './App.css';
import Echarts from './component/Echart';
import Echart2 from './component/Echart2';
import data from './dataset/data.json'

function App() {

  // console.log(data)

  return (
    <div className="App">

      <h1>Hello World!</h1>

      <Echarts data={data}/>
      <Echart2/>

    </div>
  );
}

export default App;
