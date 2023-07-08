import React from 'react';

const Contact = () => {
  return (
    <div className="contact-content flex items-center justify-start " id='contact'>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center">
          <div className="mr-8">
            <h1 className="text-4xl font-bold mb-4 text-blue-500 mt-20 ">Contact</h1>
            <p className="text-gray-600 mb-6">Don't be shy, get in touch with me!</p>
            <div className="flex items-center mb-4">
             <i class="fa fa-envelope-square text-3xl m-4" aria-hidden="true"></i>
              <span className="text-lg"> danjoshuanaing@gmail.com</span>
            </div>
            <div className="flex items-center">
              <i class="fa fa-phone-square text-3xl m-4" aria-hidden="true"></i>
              <span className="text-lg">+63-945-6136-034</span>
            </div>
          </div>
          <div>
            <img className="w-64 h-64 object-cover rounded-md" src="/images/misosoup.png" alt="Contact"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
