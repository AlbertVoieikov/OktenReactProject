import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import './App.css';
import {GenrePage, MoviePage} from "./pages";
import {Layout} from "./layouts";

function App() {
  return (
      <div>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route path={'movies'} element={<MoviePage/>}/>
            <Route path={'genres'} element={<GenrePage/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
