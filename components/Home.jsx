import React from 'react'
import { withRouter } from 'react-router-dom';

const Home = props => {
    const { isLogged } = props;
    return (
        <>
          <h3>Home Page</h3>
          { isLogged && <span>You have been authorized. Welcome</span> }
          </>
    )
};

export default Home;
// export default withRouter(Home);
