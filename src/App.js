import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin/Signin";
import Index from "./Pages/index/Index";
import User from "./Pages/User/User";
import Page404 from './Pages/404/Page404';
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    	<BrowserRouter>
		
			<Routes>
				<Route exact path="/" element={<Index />} />					
				<Route exact path="/login" element={<Signin />} />
				<Route element={<PrivateRoute />}>
          			<Route exact path='/profile' element={<User />} />
        		</Route>

				{/* <Route path='/user' 
					element={
					<PrivateRoute >
						<User />
					</PrivateRoute>
				} 
        		/> */}
				<Route path="*" element={<Page404 />} />
          	
																	
			</Routes>
	
		</BrowserRouter>
		
  );
}

export default App;


