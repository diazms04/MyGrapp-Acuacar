import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {WebRouter} from './routes/WebRouter'
function App() {

  return (
    <BrowserRouter>
      <WebRouter></WebRouter>
    </BrowserRouter>
  )
}

export default App
