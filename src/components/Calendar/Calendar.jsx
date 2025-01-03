import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Calendar({currentDate, setCurrentDate , todos}) {  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const days = Array.from({length: daysInMonth}, (v, i) => i + 1);
  const startDay = new Date (year, month, 0).getDay();

  const daysInWeek = ['Mon', 'Tus', 'Wed', 'Thu' , 'Fri', 'Sat', 'Sun'];

  function handleClickPrevMonth(){
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()-1)))
  }

  function handleClickNextMonth(){
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth()+1)))
  }

    return (
      <div className="w-96 h-max mt-24 text-lg font-medium text-center rounded-lg overflow-hidden shadow-lg">
         <div className="w-full flex gap-x-5 items-center justify-center p-3 bg-pink-600 text-white">
            <button onClick={handleClickPrevMonth}>
              <IoIosArrowBack 
                    size={20} 
              />
            </button>
            <span>
              {currentDate.toLocaleString('en-US', { month: 'long' })}{' '}
              {year}
            </span>
            <button onClick={handleClickNextMonth}>
              <IoIosArrowForward
                 size={20} 
                  
              />
            </button>
         </div>
         <div className="w-full flex flex-wrap px-1 ">
          {daysInWeek.map(day => (
              <span className="w-[14%]" key={day}> {day} </span>
          ))}
         </div>
         <div className="flex flex-wrap p-1">
            {Array.from({length: startDay}, (v, i) => (
              <button className="w-[14%]" key={i}></button>
            ))}
            {days.map(day => {
                const hasTodo = todos.some(todo => todo.date.toDateString() === new Date(year, month, day).toDateString()); 

                return (
                  <button 
                    onClick ={() => setCurrentDate(new Date(year, month, day))} 
                    className={`w-[14%] rounded-md  ${hasTodo ? 'border-2 border-pink-600': ''} ${day === currentDate.getDate() && month === currentDate.getMonth() ? 'bg-pink-600 text-white' : ''} hover:bg-pink-200`} key={day}> 
                  {day} 
                  </button>
                );
          })}
         </div>
      </div>
    );


  }
  
  export default Calendar;