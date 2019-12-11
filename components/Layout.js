function Layout (props){
  // const childen = props.childen;
  return e(React.Fragment,{},
    e(Navbar),
    props.children,
  )
}

/*
class Layout extends React.Component {

    

    render() {  

        console.log(this.props);

      return this.props.children;
    }
}
*/