import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-lg mx-auto mt-10 mb-10 px-4">
      <div className="grid grid-cols-1 gap-6">
        <div className="w-full">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
            nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
            dapibus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-5 shadow-md">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
              nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
              dapibus.
            </p>
          </div>
          <div className="bg-gray-200 p-5 shadow-md">
            <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
            <p className="text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis, felis vitae feugiat commodo, tortor velit tempus nunc,
              nec feugiat quam dolor ut risus. Cras rutrum ultrices augue ac
              dapibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
