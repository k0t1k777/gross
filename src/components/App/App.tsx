import 'src/components/App/App.scss';
import { Header } from 'src/components/Header/Header';
import Main from 'src/pages/Main/Main';
import { Footer } from 'src/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Form from 'src/pages/Form/Form';
import WaitYou from 'src/pages/WaitYou/WaitYou';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/wait-you" element={<WaitYou />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
