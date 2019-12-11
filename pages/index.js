/*
let actualLocation = window.location.href;
actualLocation = actualLocation.replace(window.location.origin,'');
console.log(actualLocation);
*/

// Layout component function
function Layout (props){
  return e(React.Fragment,{},
    e(Navbar),
    props.children,
  )
}

// App Router
function App() {
  return e(BrowserRouter,{},
    e(Layout,{},
      e(Switch,{},
        e(Route,{exact:true, path:'/', component:Home}),
        e(Route,{exact:true, path:'/badges/', component:Badges}),
        e(Route,{exact:true, path:'/badges/new', component:BadgeNew}),
        e(Route,{path:'*', component: NotFound }),
      )      
    )
  )
}

const container = document.getElementById('app');
ReactDOM.render(e(App, {}, null),container);



