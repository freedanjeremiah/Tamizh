import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Layout from './components/Layout';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="*" element={<NoPage />} />
        </Route>

    </Routes>
     
    </BrowserRouter>
  );
  
}


export default App
