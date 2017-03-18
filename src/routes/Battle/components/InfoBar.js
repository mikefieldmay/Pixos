import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import PixosMenu from 'routes/Battle/components/PixosMenu'

export default class InfoBar extends React.Component {

  constructor (props) {
    super(props)

    this.setTurnFinishedToTrue = this.setTurnFinishedToTrue.bind(this)
  }

  setTurnFinishedToTrue () {
    console.log('trying to set turn finished to true')
    console.log('this is ', this)
    this.props.passTurn()
    this.props.setMyTurn(false)
    this.props.setTurnFinished(true)
  }

  loadContent () {
    if(this.props.battle.self.myTurn){
      return (
        <div>
          <p>Your turn</p>
          <RaisedButton label="Pass" primary={true} onTouchTap={this.setTurnFinishedToTrue} />
        </div>
      )
    } else {
      return(
        <p>Enemy turn</p>
      )
    }
  }

  render () {
    let content = this.loadContent()
    return (
      <div className="info-bar col-1 d-flex flex-column justify-content-center align-items-center pt-2 pb-4">
        <PixosMenu/>
        <p className="mb-auto">{ this.props.battle.enemy.name }</p>
        {content}
        <p className="mt-auto">{ this.props.battle.self.name }</p>
    </div>
    )
  }
}

InfoBar.propTypes = {
  setTurnFinished  : React.PropTypes.func.isRequired,
  setMyTurn : React.PropTypes.func.isRequired,
  passTurn : React.PropTypes.func.isRequired,
  battle : React.PropTypes.object.isRequired
}