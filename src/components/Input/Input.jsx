function Input({inputedValue, setInputedValue, type = 'text', placeholder = '', errorMessage}) {
  return (
    <div className="flex flex-col w-3/4 font-medium">
       <input className=" p-2 rounded-lg border-2 border-gray focus:border-pink-600 focus:outline-pink-600"
      required
      type={type}
      value = {inputedValue}
      placeholder={placeholder}
      onChange={(e) => setInputedValue(e.target.value)}
      />
    {errorMessage && <span className="text-red-700 text-sm">{errorMessage}</span>}
    </div>
  );
}

export default Input;
