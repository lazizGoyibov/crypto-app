import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  HomePage,
  ConnectPage,
  ProfilePage,
  UploadPage,
  CreateSinglePage

} from './pages'


import './assets/styles/main.scss'



function App() {
  return (
    <div className="App">
      <Router>
       

          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/connect" element={<ConnectPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/upload" element={<UploadPage/>}/>
            <Route path="/createSingle" element={<CreateSinglePage/>}/>
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
