class Logout extends Component{
    componentDidMount(){
        sessionStorage.clear(); 

    }

    render(){
        return(
            <div>
                Now loggedOut; 
            </div>
        )
    }}
