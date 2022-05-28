import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';


import './assets/styles/main.scss'

const HomePage = lazy(() => import("./pages/HomePage"));
const ConnectPage = lazy(() => import("./pages/ConnectPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const UploadPage = lazy(() => import("./pages/UploadPage"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading.....</h1>}>

          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/connect" element={<ConnectPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/upload" element={<UploadPage/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
