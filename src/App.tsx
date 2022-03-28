import { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { HashRouter } from 'react-router-dom';
import { SubstrateContextProvider } from './substrate/SubstrateContext';
import NameServiceRoutes from './pages/Routes';
import { useSubstrate } from './substrate';
import DeveloperConsole from './substrate/DeveloperConsole';
import Processing from './components/Processing';
import Error from './components/Error';

function ConnectionInProgress() {
  const { apiState, apiError }: any = useSubstrate();
  const error = apiState === 'ERROR';
  const [showError, setShowError] = useState(true);
  console.log(error, showError);
  return (
    <>
      <Error
        show={error && showError}
        message={`An error happened while connecitng Polkadot.`}
        handleClose={() => setShowError(false)}
      />
      <Processing
        show={!error && apiState !== 'READY'}
        message="Connecting to Polkadot..."
      />
    </>
  );
}
function Body() {
  const { apiState }: any = useSubstrate();
  return (
    <>
      <Header />
      <NameServiceRoutes />
      <ConnectionInProgress />
    </>
  );
}
function App() {
  return (
    <>
      <SubstrateContextProvider>
        <DeveloperConsole />
        <HashRouter>
          <Container fluid>
            <Body />
          </Container>
        </HashRouter>
      </SubstrateContextProvider>
    </>
  );
}

export default App;
