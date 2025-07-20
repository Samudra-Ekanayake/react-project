import "./Square.css";

function Square() {

    const x = 10;
    const b = 11;

    return (
        <>
        <div className={` ${x < b ? 'bg-success' : 'bg-info' }`}>
            ciao
        </div>
        </>
    )
    
}

export default Square;