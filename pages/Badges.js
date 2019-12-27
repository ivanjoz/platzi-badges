

// Conf logo
const imgConfLogo = 'images/badge-header.svg';

// Initial badge data

let initialBadgesData = [
  {
    id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
    firstName: 'Freda',
    lastName: 'Grady',
    email: 'Leann_Berge@gmail.com',
    jobTitle: 'Legacy Brand Director',
    twitter: 'FredaGrady22221-7573',
    avatarUrl:
      'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon',
  },
  {
    id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
    firstName: 'Major',
    lastName: 'Rodriguez',
    email: 'Ilene66@hotmail.com',
    jobTitle: 'Human Research Architect',
    twitter: 'MajorRodriguez61545',
    avatarUrl:
      'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
  },
  {
    id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
    firstName: 'Daphney',
    lastName: 'Torphy',
    email: 'Ron61@hotmail.com',
    jobTitle: 'National Markets Officer',
    twitter: 'DaphneyTorphy96105',
    avatarUrl:
      'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
  },
];

class Badges extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: undefined,
  }; 

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () =>{
    this.setState({loading:true, error:null});
    try {
      let response = await fetch('badges-api');
      let data = await response.json();      
      this.setState({loading:false, data:data});
      // this.setState({loading:false, data:[]}); // For testing empty data
    } catch (error) {
      console.log(error.message);
      this.setState({loading:false, error:error});
    }
  }

  render(){

    if(this.state.loading === true){
      return html`<${PageLoading}/>`;
    }
    if(this.state.error === true){
      return html`<${PageError}/>`;
    }

    return e('div',{},
      e('div',{class:'Badges'},
        e('div',{class:'Badges__hero'},
          e('div',{class:'Badges__container'},
            e('img', {class: 'Badges_conf-logo', src: imgConfLogo })
          )
        )
      ),
      e('div',{class:'Badge__container'},
        e('div',{class: 'Badges_buttons'},
          e(Link, {to: '/badges/new', class:'btn btn-primary'},
            'New Badge'
          )
        ),
        e('div',{class:'Badges__list'},
          e('div',{class:'Badges__container'},
            e(BadgesList,{badges:this.state.data})
          )
        )
      )
    )
  }
}

