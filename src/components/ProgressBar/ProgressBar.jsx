

function ProgressBar({todos}){
    const totalCount = todos.length;
    const completedCount = todos.filter(todo => todo.completed).length;
    const completedPercent = `${Math.round(completedCount/totalCount*100)}%`

    return (
        <>
         <p className="font-medium opacity-60">Completed {completedPercent}</p>
            <div className="w-1/4 h-2 bg-gray-200 rounded-lg">
                <span
                    className={`block h-full bg-pink-600 rounded-lg transition-all duration-300`}
                    style={{width: completedPercent}}
                />
            </div>
        </>
       
    )
}

export default ProgressBar;