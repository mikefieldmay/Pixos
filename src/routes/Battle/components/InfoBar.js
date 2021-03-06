import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import PixosMenu from 'routes/Battle/components/PixosMenu'
import './InfoBar.scss'
import DiscardPile from 'routes/Battle/components/DiscardPile'


export default class InfoBar extends React.Component {

  constructor (props) {
    super(props)

    this.setTurnFinishedToTrue = this.setTurnFinishedToTrue.bind(this)
  }

  setTurnFinishedToTrue () {
    this.props.passTurn(true)
    this.props.setMyTurn(false)
    this.props.setTurnFinished(true)
  }

  loadContent () {
    if(this.props.battle.self.myTurn){
      return (
        <div className="full-width">
          <RaisedButton label="Pass"
                        primary={true}
                        fullWidth={true}
                        onTouchTap={this.setTurnFinishedToTrue} />
        </div>
      )
    } else {
      return (
        <div style={{ height: '35.99px' }}></div>
      )
    }
  }

  render () {
    let passButton = this.loadContent()
    let myTurn = this.props.battle.self.myTurn
    return (
      <div className="info-bar max-page-height col-1 d-flex flex-column justify-content-center align-items-center grey-bkgrnd">
        <PixosMenu />
        <img className={`game-avatar ${!myTurn ? 'pulse' : ''} circle circle-highlight mb-1`} src={`${this.props.battle.enemy.img}`}/>
        <span className="info-bar-text mx-2">{ this.props.battle.enemy.name }</span>
        <span className="my-2 info-bar-text land-main-bkgrnd circle circle-highlight info-bar-indicator">
          <span className="info-bar-text small-text info-bar-vert-text">Score</span>
          {this.props.battle.enemy.score}
        </span>


        <DiscardPile key={'enemy'} name={this.props.battle.enemy.name} cards={this.props.battle.enemy.discardPile} />


        <span className="mb-2 air-main-bkgrnd circle circle-highlight info-bar-indicator">
          <span className="info-bar-text small-text info-bar-vert-text">Power</span>
          {this.props.battle.enemy.power}
        </span>
        <span className="my-2 circle circle-highlight round-indicator material-bkgrnd">{ this.props.battle.self.roundCounter > 3 ? 3 : this.props.battle.self.roundCounter }/3</span>
        <span className="mt-2 air-main-bkgrnd circle circle-highlight info-bar-indicator">
          <span className="info-bar-text small-text info-bar-vert-text">Power</span>
          {this.props.battle.self.power}
        </span>


        <DiscardPile key={'self'} name={this.props.battle.self.name} cards={this.props.battle.self.discardPile} />


        <span className="mb-2 info-bar-text land-main-bkgrnd circle circle-highlight info-bar-indicator">
          <span className="info-bar-text small-text info-bar-vert-text">Score</span>
          {this.props.battle.self.score}
        </span>
        <span className="info-bar-text mx-2">{ this.props.battle.self.name }</span>
        <img className={`game-avatar ${myTurn ? 'pulse' : ''} circle circle-highlight mb-2 mt-1`} src={`${this.props.battle.self.img}`}/>
        {passButton}
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
