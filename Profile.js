function Profile() {
    const user = {
      name: 'John Doe',
      age: 30,
    };
  
    return (
      <div>
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  }
  
  export default Profile;
  