const {Router, Switch, BrowserRouter} = ReactRouterDOM;


function App() {
  return e(BrowserRouter,{},
    e('div',{},
      e(Router,{path:'/badges', component:Badges}),  
      e(Router,{path:'/badges/new', component:BadgeNew}),
    )
  )
}



const container = document.getElementById('app');
/*
let badgeProps = {
  firstName:'Iván', lastName:'Angulo',
  twitter:'ivanjoz',
  jobTitle: 'Full Stack JS Developer',
  gravatar: 'https://es.gravatar.com/userimage/146585728/6cfe3a958be1600d5b5e12e141f4b96e.png?size=400',
}
*/

ReactDOM.render(e(Badges, {}, null),container);



