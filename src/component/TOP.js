import React, {Component} from 'react';

class TOP extends Component{
    render(){
        return(
            <header>
                <div id='TOPheader'>
                    <li><a href='/home' onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('Welcome');
                        }.bind(this)}>HOME</a></li>
                    <li><a href='/SoloMode' onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('Solomode');
                        }.bind(this)}>Solomode</a></li>
                    <li><a href='/VersusMode' onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('Versus');
                        }.bind(this)}>Versus</a></li>
                    <li><a href='/Setting' onClick={function(e){
                            e.preventDefault();
                            this.props.onChangeMode('Setting');
                        }.bind(this)}>Setting</a></li>
                </div>
                <h2 className='logo'>{this.props.title}</h2>
            </header>
        )
    }
}

export default TOP;