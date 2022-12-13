const ScrollDown = () => {

    const scrollDown = () => {
        window.scrollBy({
            top:window.innerHeight,
            left: 0,
            behavior: "smooth",
        });
    };

    return(
        <div>
            <button onClick={scrollDown}>click here</button>
        </div>
    )
}

export default ScrollDown;