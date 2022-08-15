import './App.css';
import NavBar from './components/NavBar';
import WideCard from './components/WideCard';
import LandingSvgImg from './assets/desigerGirl.svg';

function App() {
  return (
    <div className="App" >
      <NavBar />
      <WideCard>
        <div style={{
          order: 1,
          minWidth: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '1 1 200px'
        }}>
          <h1 style={{ fontSize: 40, marginBottom: 0, color: '#471601' }}>التصميم هو <span style={{ color: 'darkorange', fontSize: 50 }}>السر</span></h1>
          <h2 style={{ color: '#471601' }}>للاعمال و المشاريع الناجحة</h2>
          <button style={styles.orderButton}> now </button>
        </div>
        <img style={{ margin: '40px 0px', backgroundColor: 'transparent', minWidth: 100, flex: '2 1 200px', maxWidth: 600 }} src={LandingSvgImg} alt={'limitless graphics'} />
      </WideCard>

    </div>
  );
}

const styles = {
  orderButton: {
    color: 'white',
    height: 50,
    width: 100,
    backgroundColor: 'orange',
    border: 'none',
    borderRadius: 50,
    borderBottom: '5px solid #471601'
  }
}


export default App;