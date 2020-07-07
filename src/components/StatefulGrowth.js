import React from 'react'
import './StatefulGrowth.css'

class StatefulGrowthCard extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        expanded: false
      }
    }

    onClick = () => {
        this.setState({ check: !this.state.check })
    }

    render(props) {
        return (
            <div className="StatefulGrowthCard">
            <div class="StatefulGrowthContainer">
                <div className="StatefulGrowthInfo">
                    <h1>{this.props.title}</h1>
                    <p>{this.state.expanded ? this.props.expandedtext : this.props.text}</p>
                </div>
                <div className="StatefulGrowthImageContainer">
                    <img width="300" src={this.props.image} />
                </div>
            </div>
            <button onClick={this.onClick}>Learn More</button>
        </div>
        )
      }
    }
    
    export default StatefulGrowthCard