
class Loader extends React.Component {
  render() {
    return e('div',{class:'lds-grid'},
      e('div'),e('div'),e('div'),e('div'),e('div'),
      e('div'),e('div'),e('div'),e('div'),
    )
  }
}

// Page Loading
function PageLoading(){
  return e('div',{class:'PageLoading'},
    e(Loader),
  );
}

// Page Error
function PageError(props){
  return html`
    <div class="PageError">${props.error.message}</div>
  `;
}

// Gravatar
function Gravatar(props){
  const email = props.email;
  const hash = md5(email);
  var gravatarURL = 
    `https://gravatar.com/avatar/${hash}?d=identicon}`;
  
  // When gravatar URL is changed
  props.onGravatarChange(gravatarURL);    
   
  return html`
    <img 
      class=${props.class} 
      src=${gravatarURL}
      alt="Gravatar Image"
    />
  `
}