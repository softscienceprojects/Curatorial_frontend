


const logout = () => {
    API.logout();
    this.setState({ user: null });
    this.props.history.push(paths.ROOT);
    return null
  };


  signin = user => {
    try {
      this.setState({ user }, () => this.props.history.push(`/users/${user.id}`));
    } catch(error) {
      this.props.history.push("/signup")
    }
  };



  export default {
    logout,
    signin
  }