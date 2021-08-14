import React,{Component} from 'react';
import axios from 'axios';

class Clients extends Component{
    constructor(props){
        super(props);
        this.state={client:[]};
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({client:res.data});
        })
    }

    render(){
        let allclients=this.state.client.map((item)=>{
            return (
                <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                </tr>
            )
        })
        return(
            <>
            <div className="container mb-5">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No.</th>
                    </tr>
                </thead>
                <tbody>{allclients}</tbody>
            </table>
            </div>            
            </>
        )
    }
}

export default Clients;