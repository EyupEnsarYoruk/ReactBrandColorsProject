import {useState} from 'react';
import Modal from 'react-modal';
import {GrClose} from 'react-icons/gr'


function Sidebar() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  return (
    <>
      <header className='sidebar'>
        <div className='logo'>
          <a href="">BrandColors</a>
        </div>
        <div className='description'>
          The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <br />
          <nav className='menu'> 
            <ul>
              <li>
                <a>Suggest a Brand</a>
              </li>
              <li>
                <a onClick={toggleModal}>About BrandColors</a>
              </li>
            </ul>
          </nav>
      </header>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-model"
        overlayClassName="about-model-overlay"
      >
        <button onClick={toggleModal} className="about-model-icon"><GrClose /></button>
        <div className='about-model-contents'>
          <h2>About BrandColors</h2>
          <br />
          <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
          <br />
          <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
        </div>
      </Modal>
    </>
  )
}

export default Sidebar