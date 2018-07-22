import React, {Component} from 'react';
// import Name from './Name_input';
// import Nbutton from './Name_button';

import './style.css';

function shuffleArray(array) {
let i = array.length - 1;
for (; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
return array;
}

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      textvalue : "",
      pairs : [],
      itemm : '',
      pairss : [],
    };

    this.handleAddName = this.handleAddName.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handledelName = this.handledelName.bind(this)
    this.generatePair = this.generatePair.bind(this)

  }


handleChange(e) {
  this.setState({
    textvalue:e.target.value
  })
}

handleAddName() {
  if(this.state.textvalue !== ""){
   this.state.value.push(this.state.textvalue)
   this.setState(
     this.state
   )
   this.state
   console.log(this.state.value)
 }
 }

 handledelName(v){
    for(var i = 0; i < this.state.value.length; i++){
      if(this.state.value[i] == v){
         delete this.state.value[i]
      }
    }
    this.setState({
      value:this.state.value
    })
    console.log(this.state.value)
  }



  generatePair(){

    this.state.value = shuffleArray(this.state.value);

    for(var i =0; i<this.state.value.length+1; i++){
    let q=0
    while( q < 2){
        this.state.itemm = this.state.value.pop()
           this.state.pairss.push(this.state.itemm + ' ')
      if(this.state.pairss.length > 1){
        this.state.pairs.push(this.state.pairss + " ")
           this.state.pairss = []
       }
++q
}
}

     this.setState({
       pairs : this.state.pairs
     })
     console.log(this.state.pairs)

   }



  render() {
    let { value } = this.state;
    let { pairs } = this.state;
      return (
        <div>
          <input type="text" placeholder="Enter name" className="text" onChange={ this.handleChange } required />
          <button className="addbutton" onClick={this.handleAddName}>Add Name</button>
            <button className="allbutton" onClick={this.generatePair}> generate Pairs</button>
          {value.map((v) => {
            return <div><h1 className="font"><button className="allbutton" onClick={this.handledelName.bind(this, v)}>DelName</button>{v}</h1></div>

          })}


          {pairs.map((p) => {

            return <div><h1 className="font">{p}</h1></div>

          })}

        </div>
      )
  }
}

export default Names;
