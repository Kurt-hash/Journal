import './App.css';
// import Header from './components/header';
import Footer from './components/footer';
import FunctionalComp from './components/FunctionalComp';
import ClassComp from './components/ClassComp';
import Array from './components/Array';
import Square from './components/Square';
import SchoolBoard from './components/SchoolBoard';
import BoardData from './components/BoardData';
import ContactCardMain from './components/ContactCardMain';
// import Main from './Main';


function App() {
 const boardComponents = BoardData.map(board => {
  return (<SchoolBoard ID={board.ID} category ={board.category} post ={board.post}/>);
 })
 
 const BoardTable = () => {
  return (
    <table border = {1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Post</th>
        </tr>
      </thead>
      <tbody>
        {boardComponents}
      </tbody>
    </table>
  );
 }
  return ( 
    <div className="App">
      {/* <Header/> */}
      <header className="App-header">
        <ContactCardMain/>
      {/* {boardComponents} */}
      {/* <Main/> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      {/* <BoardData/> */}
      <table border={1}>
        <thead>
        <th>ID</th>
        <th>Category</th>
        <th>Post</th>
        </thead>
        <tbody>
          {boardComponents[0]}
          {boardComponents[1]}
          {boardComponents[2]}
          {boardComponents[3]}
        </tbody>
      </table>
        {BoardTable()}
        <FunctionalComp/>
        <ClassComp/>
        <Array/>
        <Square/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
