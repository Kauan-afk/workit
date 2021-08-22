import { Home } from './pages/Home'

import { Chat } from './pages/Chat'

import { Route, BrowserRouter } from 'react-router-dom'

import { Explorer } from './pages/Explorer'

import { AuthContextProvider } from './contexts/AuthContext'



function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path='/' exact component={Home}/>
        <Route path='/inside/Chat' component={Chat}/>
        <Route path='/inside/Explorer' component={Explorer}/>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
