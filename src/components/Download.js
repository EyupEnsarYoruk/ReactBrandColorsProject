import {useEffect, useState, useContext} from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { MdFileDownload } from 'react-icons/md';
import { FiLink2 } from 'react-icons/fi';
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom';

function Download() {

  const {selectedBrands, setSelectedBrands, brands} = useContext(MainContext);

  const [downloadUrl, setDownloadUrl] = useState();

  const [cssMethod, setCssMethod] = useState('css');

  const control = selectedBrands.length >= 1;


  useEffect(() => {
    if(selectedBrands.length > 0) {
      let output = '';
      let control = '';
      switch (cssMethod) {
        case 'css':
          control = '--';
        break;
          case 'scss':
          control = '$';
        break;
          case 'less':
          control = '@';
        break;
      }
      selectedBrands.map((slug) => {
        let brand = brands.find((brand) => brand.slug === slug)
        brand.colors.map((color, key) => {
          output += `${control}${slug}-${key}: #${color};\n`;
        })
      })
      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      }
    }
  }, [selectedBrands, cssMethod]);

  return (
    <div className='download'>
      <span className='svg'>
        <a download={`brands.${cssMethod}`} href={downloadUrl}>
          <MdFileDownload style={{'--downloadCursor': control ? 'pointer' : 'auto', marginRight: '8px'}}/>
        </a>
        <select onChange={(e) => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <Link to={"/collection/" + selectedBrands.join(",")}>
          <FiLink2 
            style={{'--downloadCursor': control ? 'pointer' : 'auto'}} 
          />
        </Link>
        <MdOutlineClose 
          style={{'--downloadCursor': control ? 'pointer' : 'auto'}} 
          onClick={() => control && setSelectedBrands([])}
        />
      </span>
      <span 
        className='downloadtext' 
        style={{'--downloadCursor': control ? 'auto' : 'context-menu'}} 
      >
        {selectedBrands.length} {selectedBrands.length <= 1 ? "brand" : "brands"} colected
      </span>
      <span className='alldownload'>
        <MdFileDownload /> All Brands
      </span>
    </div>
  )
}

export default Download