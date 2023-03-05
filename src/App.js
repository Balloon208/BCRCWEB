import './App.css';
import React, {Component} from 'react';
import TOP from "./component/TOP";
import BOTTOM from "./component/BOTTOM";
import SoloMode from "./component/SoloMode"

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'Welcome',
      TOP:{title:"Battle Cat Random Challenge"},
      BOTTOM:{title:"EZ to make"},
      Welcome:{title:"BCRC에 방문한 것을 환영합니다!"},
      Solomode:{title:"BCRC 솔로 모드 입니다."},
      Versus:{title:"BCRC Versus 모드 입니다."},
      Setting:{title:"BCRC 세팅 모드 입니다."}
    };
  }

  getContent(){
    let Ctitle, Carticle;
    if(this.state.mode === 'Welcome'){
      Ctitle = this.state.Welcome.title;
      Carticle =
      <div>
        <h2 className='text'>{Ctitle}</h2>
      </div>
    }
    if(this.state.mode === 'Solomode'){
      Ctitle = this.state.Solomode.title;
      Carticle =
      <div>
        <h2 className='text'>{Ctitle}</h2>
        <SoloMode></SoloMode>
      </div>
    }
    if(this.state.mode === 'Versus'){
      Ctitle = this.state.Versus.title;
      Carticle =
      <div>
        <h2 className='text'>{Ctitle}</h2>
      </div>
    }
    if(this.state.mode === 'Setting'){
      Ctitle = this.state.Setting.title;
      Carticle = <h2 className='text'>{Ctitle}</h2>
    }

    return Carticle;
  }

  render(){
    return (
      <div className="App">
        <TOP onChangeMode={function(Mode){
            this.setState({
              mode: Mode
            });
        }.bind(this)} 
        title={this.state.TOP.title}></TOP>
        {this.getContent()}
        <BOTTOM title={this.state.BOTTOM.title}></BOTTOM>
      </div>
    );
  }
}

export default App;
