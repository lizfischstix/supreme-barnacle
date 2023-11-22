import { useLocation } from 'react-router-dom';

function Hero() {
  const currentPage = useLocation().pathname;

    return (
      <div className='img-fluid hero'> 
      <div className='left'> <div className='name'>Liz Fischnich</div>
      <div className='name-tag'>Hello World!</div>
      </div>
      <div className='right'></div>
      </div>
     
    );
  }

  export default Hero;