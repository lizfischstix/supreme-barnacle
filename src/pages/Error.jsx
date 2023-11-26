import { useRouteError } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='container-fluid droids'>
      <div className='container pt-2'>
        <div className='col-6'>
          <h1 className=''>This is not the page you are looking for...</h1>
          <p className='i'>an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <a href="/"><button>LET'S GO HOME</button></a>
      </div>
    </div>
  );
}
