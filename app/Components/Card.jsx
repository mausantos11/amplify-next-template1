
function Card(props){

    return(
        <div className="card">
            <img className="card-image" src="/src/assets/cup.png" alt="profile picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className= "card-text">Vaso de plastico desechable, bueno para fiestas y demás</p>
            <button>Comprar</button>


        </div>
    );
}

export default Card