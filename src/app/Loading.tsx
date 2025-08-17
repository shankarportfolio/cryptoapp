const Loading = () =>{
    return(
        <div className="w-full h-screen flex items-center justify-center flex-col fixed top-[0] left-[0] bg-black z-50">
            <div className="flex justify-center items-center h-screen">
                <div className="rounded-full h-20 w-20 bg-[var(--themecolor)] animate-ping"></div>
            </div>
        </div>
    )
}

export default Loading;