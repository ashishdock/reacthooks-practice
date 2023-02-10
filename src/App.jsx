import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Home';
import UseReducerRoute from './UseReducerRoute';
import UseEffectRoute from './UseEffectRoute';
import UseRefRoute from './UseRefRoute';
import UseLayoutEffectRoute from './UseLayoutEffectRoute';
import UseImperativeHandleRoute from './UseImperativeHandleRoute';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useReducer" element={<UseReducerRoute />} />
          <Route path="/useEffect" element={<UseEffectRoute />} />
          <Route path="/useRef" element={<UseRefRoute />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffectRoute />} />
          <Route
            path="/useImperativeHandle"
            element={<UseImperativeHandleRoute />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
