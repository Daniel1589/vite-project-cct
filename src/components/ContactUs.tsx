import React, { useState } from "react";

export const ContactUs = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const firstOptions = () => {
    setIsOpen1(!isOpen1);
  };
  const secondOptions = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className="bg-yellow-100 h-36">
      <div>Get a Free Estimate</div>
      <div>Contact us</div>
      <div>
        <div className="text-red-600">
          <div>First name *</div>
          <input type="text"></input>
          <div>Last name *</div>
          <input type="text"></input>
          <div>Email *</div>
          <input type="text"></input>
          <div>Phone number *</div>
          <input type="text"></input>
          <div>Address *</div>
          <input type="text"></input>
          <div>City *</div>
          <input type="text"></input>
          <div>
            <div>Number of rooms *</div>
            <div onClick={firstOptions}>
              <input type="text"></input>
            </div>
            {isOpen1 && (
              <div>
                <ul>
                  <li>Option 1</li>
                  <li>Option 2</li>
                  <li>Option 3</li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <div>Choose your service *</div>
            <div onClick={secondOptions}>
              <input type="text"></input>
            </div>
            {isOpen2 && (
              <div>
                <ul>
                  <li>Option 4</li>
                  <li>Option 5</li>
                  <li>Option 6</li>
                </ul>
              </div>
            )}
          </div>
          <input type="button" value="Get a Quote"></input>
        </div>
      </div>
    </div>
  );
};
