export const getDayTitle = (selectedDay) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);


    if(selectedDay.toDateString() === today.toDateString()){
        return 'Today';
    } else if(selectedDay.toDateString() === yesterday.toDateString()){
        return 'Yesterday';
    } else if(selectedDay.toDateString() === tomorrow.toDateString()){
        return 'Tomorrow';
    } else {
        return selectedDay.toLocaleString('en-US', {year: 'numeric', month: 'long' , day: '2-digit'});
    }
}