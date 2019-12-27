
let header = 'images/platziconf-logo.svg'

class BadgeNew extends React.Component {

  state = { 
    form: {
      firstName: '',
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
  }

  handleGravatarChange = e => {
    this.state.form.avatarUrl = e;
  };

  handleSubmit = async e => {
    e.preventDefault();
    let body = this.state.form;
    console.log(body);

    try {
      fetch('/badges-api/new', {
        method:'POST', body: JSON.stringify(body),
        header: 'Content-Type: application/json',
      })
      this.setState({ loading: true })
    } catch (error) {
      this.setState({ loading: true, error:null })
    }
  }

  render() { return html`
    <${React.Fragment}>
      <div class="BadgeNew__hero">
        <img class="img-fluid" src="${header}" alt="logo"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <${Badge} 
              gravatar=${'https://es.gravatar.com/userimage/146585728/6cfe3a958be1600d5b5e12e141f4b96e.png?size=400'}
              firstName=${this.state.form.firstName || 'FIRST_NAME'}
              lastName=${this.state.form.lastName || 'LAST_NAME'}
              jobTitle=${this.state.form.jobTitle || 'JOB_TITLE'}
              email=${this.state.form.email || 'EMAIL'}
              twitter=${this.state.form.twitter || 'TWITTER'}
              onGravatarChange=${this.handleGravatarChange}
            />
          </div>
          <div class="col-6">
            <${BadgeForm}
              onChange=${this.handleChange}
              onSubmit=${this.handleSubmit}
              formValues=${this.state.form}
            />
          </div>
        </div>
      </div>
    </${React.Fragment}>     
    `
  }
}