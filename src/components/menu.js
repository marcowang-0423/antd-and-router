export default function Menu({ onClick, isOnTouch }) {
    return ( <
        div id = "nav-icon1"
        className = { `${isOnTouch?"open":""}` }
        onClick = { onClick } >
        <
        span > < /span> <
        span > < /span> <
        span > < /span> < /
        div >

    );

}