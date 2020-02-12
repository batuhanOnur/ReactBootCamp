import React, { Component } from 'react';
import {choice} from './helpers';
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            {side:'heads', imgSrc:"https://tinyurl.com/react-coin-heads-jpg"}, 
            {side:'tails', imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=2e691ca71f16540da85cbcd15c76f44cf6cfcbcb-1581513685-0-ARNpU7bUMhzoHsl7KbAzbUbpS1yPpd6yeLmtJzuN1CYRamiPYjBh0zIXgg8wgscNbXx_jJDK2CVWoC7SY_OlFvd5jgjTbSOXQhTMwoyp3yjq9Upz-UIBNNy2F99FlAuSjNoUA8cUKh5I8jpQEqCihuxaFLOzgU1h9VKZcMD4t1GlljjbwqnBtSjkJP-yhXTxRgvrHsWANT8pRmKjuy-IaAOrr13x4FsJ3TkqW-E7kUzYxi_g1ZAlPzcW14Xg1WcNsO7kWBOyo2Ob5NcrDQN4RmFfraNH3Sp2vJrvyGYzWfaWHTf2LD6OAfkqa3mesfVXOA"}
        ]
    };

    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
       
    }

    flipCoin = () => {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
          return{
              currCoin : newCoin,
              nFlips : st.nFlips + 1,
              nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
              nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
          };
        });
    }

    handleClick = (e) => {
       this.flipCoin();
    }

    render() {
        return (
            <div className="CoinContainer">
              <h2>Let's Flip A Coin</h2>
              <button onClick={this.handleClick}> Flip Me!</button>

              {this.state.currCoin && <Coin info={this.state.currCoin}/>}

              <p> Out Of {this.state.nFlips} flips,
               there have been {this.state.nHeads}{" "} heads and 
               {" "}{this.state.nTails} tails.
              </p>  
            </div>
        )
    }
}

export default CoinContainer;
