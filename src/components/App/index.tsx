import {  TonConnectUIProvider} from '@tonconnect/ui-react';
import './App.css'
import Content from './components/Content';

function App() {
  
  return (
    <TonConnectUIProvider manifestUrl={`http://178.154.228.248/tonconnect-manifest.json`}>
      <Content/>
    </TonConnectUIProvider>
  )
}

export default App
