import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Collection from './components/Collection';
import BrandsData from './brands.json'
import MainContext from './context/MainContext';
import Copied from './components/Copied';
import './App.scss';

function App() {

  const brandsArray = [];

  Object.keys(BrandsData).map(key => 
    brandsArray.push(BrandsData[key]
  ))

  const [brands, setBrands] = useState(brandsArray); 
  
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [copied, setCopied] = useState(false);

  const [search, setSearch] = useState('');

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  };

  return (
    <BrowserRouter>
        <MainContext.Provider value={data}>
          {copied && <Copied color={copied}/>}
          <Sidebar />
          <Routes>
            <Route path='/' element={<Content />} exact />
            <Route path='/collection/:slugs' element={<Collection />} />
          </Routes>
        </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;
