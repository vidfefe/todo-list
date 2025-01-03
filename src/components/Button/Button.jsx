function Button({children, handleClick}) {

    return (
     <button 
        onClick={handleClick}
        className="border-2 bg-pink-600 w-40 p-2 h-max text-white font-medium rounded-lg flex justify-between items-center transition-all duration-300 ease-in-out hover:bg-transparent hover:text-pink-600 hover:border-pink-600">
         {children}
     </button>
    );


  }
  
  export default Button;