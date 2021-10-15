import { Link } from 'react-router-dom';

const UtilNav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/dash'>Dashboard</Link>
    </nav>
  );
};

export default UtilNav;
