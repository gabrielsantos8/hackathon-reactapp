import './style.css'

export const Footer = (props) => {

    return (
        <>
            <footer className="py-5 bg-black">
            <div className="container px-5"><p className="m-0 text-center text-white small">Copyright © {props.text ? props.text : "Lucas e Gabriel"}</p></div>
        </footer>


        </>



    )
}