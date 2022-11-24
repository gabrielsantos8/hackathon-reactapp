import './style.css'

export const Card = (props) => {

    return (
        <>
            <div id={props.id} className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className={"col-lg-6 " + props.classImg}>
                        <div className="p-5"><img className="img-fluid rounded-circle" src={props.img} alt={props.alt} /></div>
                    </div>
                    <div className={"col-lg-6 " + props.classTxt}>
                        <div className="p-5">
                            <h2 className="display-4">{props.title}</h2>
                            <p>{props.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
}