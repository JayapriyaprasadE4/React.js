function User(props){
    const {name , age} = props;

    console.log(name)
    console.log(age)

    return(
        <div>
        <h2>User Compents</h2>
        <p>Name : {name}</p>
        <p>Age: {age}</p>
        </div>
    )
}

export default User