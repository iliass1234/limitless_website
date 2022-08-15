import './App.css';
import NavBar from './components/NavBar';
import WideCard from './components/WideCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WideCard>
        <div style={{
          order: 1,
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ fontSize: 40, marginBottom: 0 }}>.التصميم هو <span style={{ color: 'darkorange', fontSize: 50 }}>السر</span></h1>
          <h2>للاعمال و المشاريع الناجحة</h2>
        </div>
        <img style={{ backgroundColor: 'transparent', minWidth: 100, maxWidth: 500, }} src={require('./assets/landingPageImage1.png')} alt={'limitless graphics'} />
      </WideCard>

    </div>
  );
}



export default App;