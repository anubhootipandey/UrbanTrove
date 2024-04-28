import React from 'react';
import Header from '../components/Navbar/Header';

const About = ({ searchInput, handleSearchInput }) => {
  return (
    <>
        <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
        <div className="about-content">
        <h2>Welcome to the About section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius aliquet nisi, et tempor magna maximus vitae. Integer vehicula velit vitae eros tincidunt, ac lobortis odio luctus. Donec blandit velit nec nisi consectetur, id consequat justo placerat. Suspendisse potenti. Ut lacinia eros ut leo tincidunt, in ultricies risus convallis.</p>
        <p>Nulla suscipit tempor lectus, id laoreet justo tempor nec. Aenean ac sem nec nulla vehicula viverra. Nunc aliquam, ex id rutrum tincidunt, mi nisl dapibus orci, at gravida ligula odio vel eros. Aliquam erat volutpat. Nulla facilisi. Vivamus ut scelerisque libero.</p>
        <p>Pellentesque sit amet tristique justo. Vestibulum nec lorem libero. Quisque commodo libero ut enim sollicitudin, vel sodales felis consequat. Nullam luctus leo nec vehicula commodo. Curabitur imperdiet eros vel metus aliquam, et tempor leo tristique. Fusce id diam sit amet quam dapibus aliquet id et risus.</p>
      </div>
        <footer className="footer">
        <p>&copy; 2024 Your Online Store</p>
      </footer>
    </>
  )
}

export default About;