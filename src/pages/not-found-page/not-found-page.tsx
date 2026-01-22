import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main page__main--not-found">
        <h1>404 Not Found</h1>
        <Link to="/">Go to main page</Link>
      </main>
    </div>
  );
}

export default NotFoundPage;
