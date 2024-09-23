import 'src/components/App/App.scss';
import Header from 'src/components/Header/Header';
import Main from 'src/components/Main/Main';
import Footer from 'src/components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Form from 'src/components/Form/Form';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
