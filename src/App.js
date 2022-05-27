import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';


import './assets/styles/main.scss'

const HomePage = lazy(() => import("./pages/HomePage"));
const ConnectPage = lazy(() => import("./pages/HomePage"));
const ProfilePage = lazy(() => import("./pages/HomePage"));
const UploadPage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<h1>Loading.....</h1>}>

          <Routes>
            <Route exact path="" element={<HomePage/>}/>
            <Route path="" element={<ConnectPage/>}/>
            <Route path="" element={<ProfilePage/>}/>
            <Route path="" element={<UploadPage/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
