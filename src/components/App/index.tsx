import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  
  return (
    <TonConnectUIProvider manifestUrl={`http://178.154.228.248/tonconnect-manifest.json`}>
      <div>
        <h1>
          TAO FRONTEND
        </h1>
        <TonConnectButton />
        <img src='liza.jpg'/>
      </div>
    </TonConnectUIProvider>
  )
}

export default App
