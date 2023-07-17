import { useEffect } from 'react';
import { useContext } from 'react';
import LazyLoad from 'react-lazyload';
import { useParams, Link} from 'react-router-dom'
import MainContext from '../context/MainContext';
import Brand from './Brand';
import Download from './Download';
import Search from './Search';
import {GrLinkPrevious} from 'react-icons/gr';
import Loader from './Loader';

function Collection() {

  const {slugs} = useParams();


  const {selectedBrands, setSelectedBrands, brands} = useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(','));
  }, [])

  const clearSelectedBrands = () => {
    setSelectedBrands([]);
  }

  return (
    <main className='main'>
      <div className='toolbar'>
        <Link to='/' onClick={clearSelectedBrands}>
          <button className="back-btn">
            <GrLinkPrevious />
            All Brands
          </button>
        </Link>
        <Search />
        <Download />
      </div>
      <div className='content'>
        {selectedBrands.map((slug, index) => {
          let brand = brands.find(brand => brand.slug === slug);
          return (
            <LazyLoad key={brand.slug} placeholder={<Loader />} >
              <Brand key={index} brand={brand}/>
            </LazyLoad>
          )
        })}
      </div>
    </main>
  )
}

export default Collection