import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './footer';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "Resume":
        return <Resume />;
      case "Project":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />

    </div>
  );
}