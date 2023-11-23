import { useLocation } from 'react-router-dom';

function Foot() {
    const currentPage = useLocation().pathname;
  
    return (
      <div className='container-fluid hero'>
        <div className='row'>
        <div className='col-sm-9 left'> <div className='name'>Liz Fischnich</div>
          <div className='name-tag'>Hello World!</div>
        </div>
        <div className='col-sm-3  right'>
          <a href='https://www.linkedin.com/in/lizfischenich/'><img src='src/assets/images/LinkedIn-button.png' alt="LinkedIn Button" /></a>
          <a href='https://github.com/lizfischstix'><img src='src/assets/images/GitHub-button.png' alt="LinkedIn Button" /></a>
          <a href='https://www.instagram.com/lizfischenich/?short_redirect=1'><img src='src/assets/images/instagram-button.png' alt="Instagram Button" /></a>
          <a href='https://open.spotify.com/user/lizfischenich/'><img src='src/assets/images/spotify-button.png' alt="Instagram Button" /></a>
        </div>
      </div>
      </div>
  
    );
  }

export default Foot;