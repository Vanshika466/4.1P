import React from 'react';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import Tutorials from './Tutorials';
import SignUp from './SignUp'; // Import the SignUp component

const HomePage = () => {
  return (
    <div>
      <Header />
      <FeaturedArticles />
      <Tutorials />
      <SignUp /> {/* Include the SignUp component */}
    </div>
  );
};

export default HomePage;
