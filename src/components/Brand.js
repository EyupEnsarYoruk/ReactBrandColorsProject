import { useContext } from 'react'
import MainContext from '../context/MainContext'
import {getContrastYIQ} from '../helpers'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Brand({brand, style}) {

  const {selectedBrands, setSelectedBrands, setCopied} = useContext(MainContext);

  const toggleBrands = () => {
    if(selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  }

  const setColor = (color) => {
    setCopied(color);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const selectedControl = selectedBrands.includes(brand.slug);

  return (
    <article className={`brand${selectedControl ? ' selectedbrand' : ''}`} >
      <div className='brand-main'>
        <div className='brand-header' 
          style={{padding: '10px 0'}}
          onClick={toggleBrands}
        >
          {brand.title}
          {/* svg gelecek */}
        </div>
        <ol className='brand-colors'>
          {brand.colors.map((color, index) => 
            <li 
              key={index}
              style={{
                '--flexControl': selectedControl ? '1' : '0',
                '--textColor': getContrastYIQ(color)
              }} 
            >
              <CopyToClipboard 
                text={"#"+color}
                onCopy={() => setColor(color)}
                className='colorButton' 
                style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}} 
              >
                <button>
                  <span style={{display: selectedControl ? 'block' : 'none'}}>#{color}</span> 
                </button>
              </CopyToClipboard>
            </li>
          )}
        </ol>
      </div>
      <div className='brand-footer'>
      </div>
    </article>
  )
}

export default Brand