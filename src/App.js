import { RouterProvider } from 'react-router-dom';
import './App.css';
import MyRouter from './MyRouter';
import TopNavbar from './TopNavbar';

function App() {
  return (
    <div>     
       <RouterProvider router={MyRouter} />
    </div> 
    
  );
}

export default App;
