

const platziconfLogoImage = '/images/platziconf-logo.svg';
const astronautsImage = '/images/astronauts.svg';


let objeto1 = {hola:'mundo'};

class Home extends React.Component {

  render() {

    return  e('div',{class:'Home'},
      e('div',{class: 'container'},
        e('div',{class: 'row'},
          e('div',{class: 'Home__col col-12 col-md-4'},
            e('img',{
              src:platziconfLogoImage, 
              alt:'platziconf logo',
              class:'img-fluid mb-2',
            }),
            e('h1',{},'Badge Management System'),
            e(Link,{class:'btn btn-primary', to:'/badges'},'start'),
          ),
          e('div',{class:'Home__col d-none d-md-block col-md-8'},
            e('img',{class:'img-fluid p-4', alt:'Astronatus', src: astronautsImage})
          )
        ),
      )
    );
  };
};