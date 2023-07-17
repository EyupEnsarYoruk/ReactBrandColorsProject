import { useContext } from 'react';
import MainContext from '../context/MainContext';
import Search from './Search';
import Brand from './Brand';
import Download from './Download';
import Loader from './Loader';
import {List, AutoSizer} from 'react-virtualized';
 
function Content() {

  const {brands} = useContext(MainContext);
  
  const rowRenderer = ({key, index, style, isScrolling}) => {
    const content = isScrolling ? <Loader /> : <Brand brand={brands[index]} />;
    return (
      <div style={style} key={key}>
      {content}
    </div>
    )
  }

  return (
    <main className='main'>
      <div className='toolbar'>
        <Search />
        <Download />
      </div>
      <section className='content'>
        <AutoSizer>
          {({height, width}) => (
            <List 
              width={width}
              height={height} 
              rowCount={brands.length}
              rowHeight={120}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </section>
    </main>
  )
}

export default Content