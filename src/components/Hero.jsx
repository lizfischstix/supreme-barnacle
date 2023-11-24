import { useLocation } from 'react-router-dom';

function Hero() {
  const currentPage = useLocation().pathname;
  return (
    <div className='container-fluid hero'>
      <div className='row pl-5'>
        <div className='col-sm-9 left'> 
        <div className='name'>Liz Fischnich</div>
          <div className='name-tag pl-6'>Hello World!</div>
        </div>
     </div>
    </div>
      );
}

      export default Hero;