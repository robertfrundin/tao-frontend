import {  TonConnectUIProvider} from '@tonconnect/ui-react';
import './App.css'
import Content from './components/Content';

function App() {
  
  return (
    <TonConnectUIProvider manifestUrl={`https://www.tao-multisig.online/tonconnect-manifest.json`}>
      <Content/>
    </TonConnectUIProvider>
  )
}

export default App
