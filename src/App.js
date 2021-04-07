import React from 'react';
import Anagram from './Anagram'


class App extends React.Component {

  state = {results: '', term: '', anagrams: []}

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/dlants/d3b25b0f6c0bf8d023f65e86498bf9e6/raw/b310b5aff00f62f5073b3b8d366f5a639aa88ee3/3000-words.txt") 
    .then(resp => resp.text())
    .then(text => this.setState({results: text.split('\n')}))
  }



 submitHandler = (e) => {
   e.preventDefault()
 let term = this.state.term
   
//    term = this.state.term
   let o = []
   let results = this.state.results
   

   for (let word2 of results) {
    const sortedWord = term.split("").sort().join("")
    const sortedWord2 = word2.split("").sort().join("")
    if (sortedWord === sortedWord2)  {
      o.push(word2)    
   }

 }

 for (let i = 0; i < o.length; i++) {
   if(o[i] === this.state.term){
      let index = o.indexOf(o[i])
      o.splice(index,1)
   }

 }


 
 this.setState({
   anagrams: o
 })
}
 

renderedResults = () => {


return this.state.anagrams.map((el, index) => <Anagram key={index} anagram={el} term={this.state.term}/>)


}
  

 



  render() {

    return (
      <>
      <div>
        <form onSubmit={this.submitHandler}>
        <label>Type a word to see a list of common anagrams</label>
        <input
          value={this.state.term}
          onChange={(e) => this.setState({
            term: e.target.value
          })}
        ></input>   
      </form>
    </div>
    <div>
      
      <h2>Searching for anagrams...</h2>
      {(this.state.term && this.state.anagrams.length > 0) ? 
      
      this.renderedResults()
      :
      <p>If there are no anagrams here after hitting enter, none were found.</p>}
      </div>
    </>
    )
  }
}
export default App;
