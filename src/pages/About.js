import React from 'react';
import Header from '../components/Navbar/Header';
import Footer from '../components/Footer/Footer';

const About = ({ searchInput, handleSearchInput }) => {
  return (
    <>
    <Header searchInput={searchInput} handleSearchInput={handleSearchInput} />
    <div className="bg-blue-50 h-auto w-full flex flex-wrap flex-col items-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
          About Us
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-8">
        <p className="text-lg text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed urna
          hendrerit, fermentum justo ut, scelerisque ex. Nullam non elit
          vulputate, ultricies enim sed, tempor odio. Fusce at pharetra justo.
          Nullam id arcu tristique, rhoncus ipsum id, vulputate nisl. Suspendisse
          potenti. Suspendisse potenti. Sed eu velit accumsan, consequat odio sed,
          viverra leo. Donec eleifend ligula id ultricies egestas. Nulla viverra
          quam ac elit fermentum, at tincidunt est egestas. Suspendisse non ex ut
          quam malesuada pharetra at nec risus.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          In nec tincidunt elit. Nullam viverra tortor non sem ultrices, vel
          eleifend urna elementum. Nam elementum, sapien eu sollicitudin placerat,
          neque orci ultricies nulla, id feugiat quam purus vitae leo. Integer
          accumsan libero nec ipsum varius, ac aliquet ligula mattis. Quisque
          suscipit, nisl nec hendrerit volutpat, sapien libero tincidunt justo,
          non gravida arcu arcu vitae arcu.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Vivamus fermentum sapien quis mauris malesuada vestibulum. Duis lacinia
          magna a luctus aliquet. Fusce vel lacus fermentum, laoreet elit nec,
          sodales lectus. Mauris eget libero at magna tempus mattis sit amet
          vel odio. Phasellus scelerisque auctor tortor, sed viverra elit
          efficitur vitae.
        </p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default About;