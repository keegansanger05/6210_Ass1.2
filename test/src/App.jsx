import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import NavMenu from './NavMenu';
import ModelDetails from './ModelDetails';
import DataLoader from './DataLoader'; 
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="intro" style={{ backgroundImage: "url('media/background5.png')", backgroundSize: 'fill', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>SCP Foundation</h1>
      <h2>Continue at OWN risk...</h2>
      <button 
        onClick={() => navigate('/model/SCP-002')} 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}
      >
        Click to Continue...
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/model/:modelname" 
          element={
            <DataLoader 
              render={(data) => (
                <>
                  <NavMenu data={data} />
                  <ModelDetailsWrapper data={data} />
                </>
              )} 
            />
          } 
        />
      </Routes>
    </Router>
  );
};

const ModelDetailsWrapper = ({ data }) => {
  const { modelname } = useParams(); 
  const modelData = data.find((item) => item.Item === modelname);

  if (!modelData) return <div>Model not found</div>;

  return <ModelDetails modelData={modelData} />;
};

export default App;
