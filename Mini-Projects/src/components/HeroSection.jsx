import React, { useState, useEffect } from 'react';

function HeroSection({ image = "/images/shoe_image.png" }) {
  const shoeImg = [{
    img1: "/images/shoes.png", 
    img2: "/images/shoe_image12.png",
    img3: "/images/shoe13.png",
    main: "/images/shoe_image.png",
  
  }];

  const [selectedImage, setSelectedImage] = useState(shoeImg[0].main);

  const [timer, setTimer] = useState(null);

  const [imageHeight, setImageHeight] = useState(650); // Default height (for img1)

  // Function to update height based on selected image
  const updateImageHeight = (imageSrc) => {
    if (imageSrc === shoeImg[0].main) {
      setImageHeight(650);  // img1 height
    } else if (imageSrc === shoeImg[0].img1) {
      setImageHeight(720);  // img2 height
    } else if (imageSrc === shoeImg[0].img3) {
      setImageHeight(500);  // img2 height
    } 
     else {
      setImageHeight(600);  // Default height for other images
    }
  };

  // Update height when selectedImage changes
  useEffect(() => {
    updateImageHeight(selectedImage);
  }, [selectedImage]);


  // Function to reset image to original after 5 seconds
  useEffect(() => {
    // Clear any existing timers
    if (timer) {
      clearTimeout(timer);
    }

    // Set a new timer to reset the image after 5 seconds of no interaction
    const newTimer = setTimeout(() => {
      setSelectedImage(image); // Reset to original image
    }, 5000); // 5 seconds

    // Update state with the new timer
    setTimer(newTimer);

    // Cleanup function to clear the timer when the component unmounts or on re-renders
    return () => clearTimeout(newTimer);
  }, [selectedImage, image]); // Runs when selectedImage changes


  return (
    <div className="flex flex-wrap items-center h-screen max-w-8xl mx-auto px-18 py-28 bg-gradient-to-r from-[#295ae1] to-[#9333ea] text-white shadow-2xl relative overflow-hidden">
      
      {/* Floating Blur Effect */}
      <div className="absolute w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl top-10 left-[-50px]"></div>
      <div className="absolute w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl bottom-10 right-[-50px]"></div>

      {/* Left Content with Glassmorphism */}
      <div className="flex-1 relative ml-7 -mt-6 bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-lg">
        <h1 className="text-6xl mr-8 mt-8 font-extrabold leading-snug bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
          Welcome <br /> to Our Website
        </h1>
        <h3 className="text-3xl mt-4 font-semibold text-yellow-300 drop-shadow-md">Your Perfect Fit Awaits</h3>
        <p className="font-medium mt-4 text-gray-200 leading-relaxed">
          At <span className="text-yellow-300 font-bold">Shoe Haven</span>, we believe the right pair of shoes can transform your look and comfort.
          Whether you need sporty sneakers, classic boots, or stylish sandals, we've got you covered.
        </p>

        {/* 3D Buttons */}
        <div className="flex gap-6 mt-6">
          <button className="text-lg cursor-pointer font-medium bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 hover:translate-x-1 transition-all duration-300">
            Shop Now
          </button>
          <button className="text-lg cursor-pointer font-medium border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full shadow-lg transform hover:-translate-y-1 hover:translate-x-1 transition-all duration-300">
            Categories
          </button>
        </div>

        {/* Brand Logos */}
        <div className="flex gap-5 mt-8">
          <img src="/images/flipkart.png" className="h-10 ml-2 cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-lg" alt="Flipkart" />
          <img src="/images/amazon.png" className="h-10 mt-1.5 cursor-pointer grayscale hover:grayscale-0 transition-all duration-300 drop-shadow-lg" alt="Amazon" />
        </div>   

        {/* 🔴 Color Selection Section with Circular Border (No Heading) */}
        <div className="-mt-16 ml-25 flex h-20 gap-4 justify-end">
          {shoeImg[0] && (
            <>
              <img src={shoeImg[0].img1} onClick={() => setSelectedImage(shoeImg[0].img1)} className="w-25 h-25 cursor-pointer rounded-full hover:scale-110 transition translate-x-2 translate-y-2 " alt="Color 1" />
              <img src={shoeImg[0].img2} onClick={() => setSelectedImage(shoeImg[0].img2)} className="w-20 h-20 cursor-pointer rounded-full hover:scale-110 transition translate-x-2 translate-y-2 " alt="Color 2" />
              <img src={shoeImg[0].img3} onClick={() => setSelectedImage(shoeImg[0].img3)} className="w-20 h-20 cursor-pointer rounded-full hover:scale-110 transition translate-x-2 translate-y-2 " alt="Color 3" />
              <img src={shoeImg[0].main} onClick={() => setSelectedImage(shoeImg[0].main)} className="w-15 h-15 cursor-pointer rounded-full hover:scale-110 transition translate-x-2 translate-y-2 " alt="Color 3" />
            
             </>
          )}
        </div>

      </div>

      {/* Right Image with 3D Effect */}
      <div className="flex-1 flex justify-center">
        <img className="ml-20 mt-8 max-h-[650px] w-full object-cover drop-shadow-2xl transform hover:scale-115 transition-all duration-1000" 
          src={selectedImage} alt="Shoe Display"
          style={{ maxHeight: `${imageHeight}px` }}  />
      </div>
    </div>
  );
}

export default HeroSection;
