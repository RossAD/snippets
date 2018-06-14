import ReactDOM from 'react-dom'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentDidMount(){
    $(ReactDOM.findDOMNode(this)).modal('show');
    $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.viewModal);
  }

  render(){
    const { handler } = this.props
    return (
      <div
        className="modal fade" 
        id="newDocModal" 
        tabIndex="-1" 
        role="dialog" 
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Modal</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>Modal Body</div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => handler(this.state)}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}
