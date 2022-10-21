import React from "react";


type Detail = {
    id : number
    nom : string
}

// Fonction
/*
function List (props: Detail) {
    return <li>id: {props.id}, {props.nom} <button>X</button></li>
}
*/

// fonction variable
/*
const List = (props: Detail) => {
    return <li>id: {props.id}, {props.nom} <button>X</button></li>
}
*/



class ListClient extends React.Component<Detail> {

    private detail : Detail;

    constructor(props : Detail) {
        super(props);

        this.detail = props;
    }

    render() {
        return <li>id: {this.detail.id}, {this.detail.nom} <button>X</button></li>
    }
}



/*
class ListClient extends React.Component<Detail> {
    render() {
        return <li>id: {this.props.id}, {this.props.nom} <button>X</button></li>
    }
}
*/


export default ListClient;


