import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
      sides: ["one","two","three","four","five","six"]
    };

    constructor(props){
        super(props);
        this.state={
            die1: 'one',
            die2: 'one',
            rolling: false
        }
    }

    roll = () => {
         //pick 2 new rolls
        const newDie1 =this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        
        const newDie2 =this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ]; 

        //set state with new rolls
        this.setState({
            die1:newDie1,
            die2:newDie2,
            rolling: true
        });

        //wait 1 second then set rolling false
        setTimeout(()=> {
            this.setState({
                rolling:false
            })
        },1000)
    }

    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                  <Die face={this.state.die1} shaking={this.state.rolling}/>
                  <Die face={this.state.die2} shaking={this.state.rolling}/>
                </div>
               <button onClick={this.roll} disabled={this.state.rolling}>
                   {this.state.rolling ? 'Rolling...' : 'Role Dice!'}
                </button> 
            </div>
        )
    }
}

export default RollDice;
