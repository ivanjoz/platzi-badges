
class Loader extends React.Component {
  render() {
    return e('div',{class:'lds-grid'},
      e('div'),e('div'),e('div'),e('div'),e('div'),
      e('div'),e('div'),e('div'),e('div'),
    )
  }
}

function PageLoading(){
  return e('div',{class:'PageLoading'},
    e(Loader),
  );
}