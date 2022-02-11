import './App.css';
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";
import ClickToEdit from "./component/ClickToEdit";
import Tab from "./component/Tab";
import Modal from "./component/Modal";

function App() {
  return (
    <div className="App">
      <h1>원티드 프리온보딩</h1>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <ClickToEdit />
    </div>
  );
}

export default App;
