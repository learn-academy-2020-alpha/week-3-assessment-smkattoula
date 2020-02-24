// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1. this.state is declaring the userInput as state with an empty string.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this.setState is the method that calls the target value of the userInput.
    this.setState({ userInput: e.target.value})
  }

  render(){
    // 3. This is what allows the userInput to be rendered. userInput is being destructered here.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. this executes the robot function in the UI */}
          onChange={ this.robot }
          {/* 5. this is whatever value the user inputs */}
          value={ userInput }
        />

        <div>
          {/* 6. GoodRobot is one of the components that is being exported into App and being displayed on the UI */}
          <GoodRobot
            {/* 7. This is links the userInput object to the GoodRobot that will render some message after the user has typed something in. */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. The div wraps around all of the elements because React can only render one element per component. h3 is displaying Good Robot as text on the page.
      <div>
        <h3>Good Robot</h3>
        {/* 9. Since this is a component, we use this.props.userInput to refer to the "parent" or state in the App file */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. We export the GoodRobot file to be imported into the App file in order for it work!
export default GoodRobot
