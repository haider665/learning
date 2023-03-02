import logo from './logo.svg';
import './App.css';
import Greeting from './component/Greeting';
import Welcome from './component/Welcome';
import Title from './component/Title';
import Morning from './component/Morning';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ParentComponent from './component/ParentComponent';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import './component/style/style.css'
import './component/style/error.css'
import style from './component/style/module.success.css'

function App() {
  return (
    <div className="App">
      <Title/>
      <h1>Hello</h1>
      
      <Greeting/>

      <Welcome name="Anando Haider"/>

      <Morning name="Mojib"> 
        <u>Child node</u>
      </Morning>

      <Morning name="Haider">
        <button>Click</button>
      </Morning>
      
      <Morning name="Anando"/>

      <Message/>

      <Counter/>

      <FunctionClick/>

      <ParentComponent/>

      <NameList/>

      <Stylesheet primary={true}/>

      <h1 className='error'>Error</h1>
      <h1 className='success'>Success</h1>

    </div>
  );
}

export default App;
