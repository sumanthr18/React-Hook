import React,{Component} from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            users : [],
        };
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({...this.state,users:data})
            console.log(this.state.users);
        });
    }

    render(){
        let allUsers=this.state.users.map((item)=>{
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
                <tbody>{allUsers}</tbody>
            </table>
            </div>
        )
    }
}

export default Contact;