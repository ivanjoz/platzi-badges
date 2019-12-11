
let header = 'images/badge-header.svg'

class BadgeNew extends React.Component {

  state = { 
    form: {
      fistName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '',
    } 
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
    console.log(this.state.form);
  }

  render() {
    return e(React.Fragment,0,
      e('div',{class:'BadgeNew__hero'},
        e('img',{class:'img-fluid', src:header, alt:'logo'} 
        )      
      ),
      e('div',{class:'container'},
        e('div',{class:'row'}, 
          e('div',{class:'col-6'},
            e(Badge, {
              firstName: this.state.form.firstName,
              lastName: this.state.form.lastName,
              jobTitle: this.state.form.jobTitle,
              email: this.state.form.email,
              twitter: this.state.form.twitter,
              gravatar: 'https://es.gravatar.com/userimage/146585728/6cfe3a958be1600d5b5e12e141f4b96e.png?size=400',
            })
          ),
          e('div',{class:'col-6'},
            e(BadgeForm,{ 
              onChange: this.handleChange , 
              formValues: this.state.form             
            })
          )        
        )
      )
    )
  }
}