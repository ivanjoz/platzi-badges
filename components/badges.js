let confLogo = './images/badge-header.svg';

class Badge extends React.Component {
render() {
  return  e('div',{class:'Badge'}, 
      e('div', {class: 'Badge__header'}, 
        e('img', {src: confLogo, alt: 'logo de la conferencia'})
      ), 
      e('div', {class: 'Badge__section-name'}, 
        e(Gravatar, {
          class: 'Badge__avatar', 
          email: this.props.email, 
          alt: 'avatar',
          onGravatarChange: this.props.onGravatarChange,
          }
        ),
        e('h1', 0, this.props.firstName, e('br'), this.props.lastName ),
      ),
      e('div',{class: 'Badge__section-info'},
        e('h3',0, this.props.jobTitle),
        e('div',0,'@' + this.props.twitter),
      ),
      e('div',{class: 'Badge__footer'},'#platziconf')
    );
  }
}

let logo = 'images/logo.svg'

class Navbar extends React.Component {
  render() { return  html`
    <div class="Navbar">
      <div class="container-fluid">
        <a class="Navbar__brand" href="/">
          <img class="Navbar__logo" src="${logo}" alt="logo"/>
          <span class="font-weight-light">Plazi</span>
          <span class="font-weight-bold">Conf</span>
        </a>
      </div>
    </div>
    `
  };
};
  

class BadgeForm extends React.Component {

  handleClick = (e) => {
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return  e(React.Fragment,{},
      e('h1',{},'New Attendant'),
      e('form', {onSubmit: this.handleSubmit},
        e('div',{class:'form-group'},
          e('label',{htmlFor:''},'First Name'),
          e('input',{onChange: this.props.onChange, 
            class:'form-control',type:'text', 
            name:'firstName',
            value: this.props.formValues.firstname,
          }),
        ),
         e('div',{class:'form-group'},
          e('label',{htmlFor:''},'Last Name'),
          e('input',{
            onChange: this.props.onChange, 
            class:'form-control',type:'text', 
            name:'lastName',
            value: this.props.formValues.lastname,
          }),
        ),
        e('div',{class:'form-group'},
          e('label',{htmlFor:''},'Email'),
          e('input',{
            onChange: this.props.onChange, 
            class:'form-control',type:'email', 
            name:'email',
            value: this.props.formValues.email,
          }),
        ),
        e('div',{class:'form-group'},
          e('label',{htmlFor:''},'Job Title'),
          e('input',{
            onChange: this.props.onChange, 
            class:'form-control',type:'text', 
            name:'jobTitle',
            value: this.props.formValues.jobTitle,
          }),
        ),
        e('div',{class:'form-group'},
          e('label',{htmlFor:''},'Twitter'),
          e('input',{
            onChange: this.props.onChange, 
            class:'form-control',type:'text', 
            name:'twitter',
            value: this.props.formValues.twitter,
          }),
        ),
        e('buttom',{ 
          onClick: this.props.onSubmit,
          class:'btn btn-primary',
          type:'buttom', 
        },
        'SAVE')
      )
    )
  };
};


class BadgesList extends React.Component {

  render(){

    if(this.props.badges.length === 0){
      return e('div',{},
        e('h3',{},'No badges where found.'),
        e(Link, {class:'btn btn-primary', to:'/badges/new'},'Create New Badge')
      )
    }

    return e('ul',{class:'badge-cards-ctn'},
    ...this.props.badges.map(badge => {
      return e('li',{key:badge.id, class:'badge-card'},
          e('div',{class:'badge-card__image'},
            e('img', {src: badge.avatarUrl})
          ),
          e('div',{class:'badge-card__info'},
            e('div',{class:'badge-card__info--names'},
              e('span',0,badge.firstName + ' '),
              e('span',0,badge.lastName)),            
            e('div',{}, 
              e('i',{class:'icon-twitter'}),
              e('span',{class:'twitter-user'},badge.twitter)),
            e('div',{},badge.jobTitle),
          )
        )
      })
    )
  }
};