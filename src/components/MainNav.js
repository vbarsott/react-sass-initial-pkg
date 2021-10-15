import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/dash'>Dashboard</Link>
    </nav>
  );
};

export default MainNav;
