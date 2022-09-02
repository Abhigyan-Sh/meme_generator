<!-- props -->
refers to the properties being passed into a component in order fo rit to work correctly, similar to how a function receives parameters: 'from above'. A component receiving props is not allowed to modify these props.
<!-- state -->
refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/ displayed, you'll likely be using state.

<!-- 
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = 
const hours = date.getHours()
 -->

function greeting(name) {
    let dayTime = new Date()
    let timeOfDay = dayTime.getHours()
    console.log(timeOfDay)

    if (timeOfDay >= 4 && timeOfDay <= 11) {
        timeOfDay = 'morning'
    }
    if (timeOfDay >= 12 && timeOfDay <= 16) {
        timeOfDay = 'afternoon'
    }
    if (timeOfDay >= 17 && timeOfDay <= 19) {
        timeOfDay = 'evening'
    }
    if (timeOfDay >= 20 && timeOfDay <= 23 || timeOfDay >= 0 && timeOfDay <= 3) {
        timeOfDay = 'night'
    }
    console.log(`Good ${timeOfDay} ${name}`)
}

greeting("Bob")

<!-- QUIZ -->
1. How would you describe the concept of "state"?
A way for React to remember saved values from within a component.
This is similar to declaring variables from within a component,
with a few added bonuses (which we'll get to later)

2. When would you want to use props instead of state?
Anytime you want to pass data into a component so that
component can determine what will get displayed on the
screen.

3. When would you want to use state instead of props?
Anytime you want a component to maintain some values from
within the component. (And "remember" those values even
when React re-renders the component).

4. What does "immutable" mean? Are props immutable? Is state immutable?
Unchanging. Props are immutable. S

<!-- plus clair -->

import React from "react"

export default function App() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    const result = React.useState("Yes") // result will be an array ['Yes',f()]
    console.log(result)
<!-- we observe above console.log's a list [Yes, f()] -->
<!-- we observe above console.log's a list [undefined, f()] , (in case .useState(""))-->
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}
<!--  -->
import React from "react"

export default function App() {
    const [isImportant, func] = React.useState("Yes")
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
<!-- // array destructuring allows us of a leverage where now like before we are not pulling through indexing -->

<!-- true way of doing -->
function subtract() {
    setCount(prev => prev - 1), i.e. setCount should always be having a callback function.
}

instead of:: setCount(count--)

<!--  -->
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
a. New value of state (setCount(42))
b. Callback function - whatever the callback function 
   returns === new value of state


2. When would you want to pass the first option (from answer
   above) to the state setter function?
Whenever you don't need the previous value of state to determine
what the new value of state should be.


3. When would you want to pass the second option (from answer
   above) to the state setter function?
Whenever you DO need the previous value to determine the new value

<!-- tu es un genie, useState() tertiary operator onClick-->

import React, {useState} from "react" 
export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    let [isGoingOut, setIsGoingOut] = useState(true)
    function callGoingOut () {
        isGoingOut ? setIsGoingOut(false) : setIsGoingOut(true)
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick= {callGoingOut}>
                <h1>{isGoingOut ? 'yes' : 'no'}</h1>
            </div>
        </div>
    )
}

<!-- when button is clicked data is changed and then it is read again!  -->
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

<!--  -->
import React, {useState} from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact((prev) => {
            // console.log(prev)
            return ({
                ...prev,
                isFavorite: !prev.isFavorite
            })
        })
        // console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

<!--  -->
when the 'setNum' makes any change in 'num' then any component which uses 'num' as its props to be passed also gets re-rendered.

<!--  -->