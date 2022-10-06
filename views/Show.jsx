const React = require('react');
const coffee = require('../models/seed');
const DefaultLayout = require('./layouts/DefaultLayout');

class Show extends React.Component {

    buyNow() {

    }

    render() {
        
        const { coffee } = this.props
        console.log(coffee._id)

            return (
                <DefaultLayout title={`${coffee.type} details`} >
                    <h1>{coffee.type}</h1>
                    <div id="description">
                        <img id = 'coffee-pic' src={`/images/${coffee.type}.jpg`}></img>
                        <p id='coffee-desc'>
                            {coffee.roast} <br></br><br></br> {coffee.description} <br></br><br></br> {coffee.quantity}: In stock
                        </p>
                    </div>
                    <div id='buy-sheet'>
                        
                    </div>
                    <form action={`/${coffee._id}`} method="POST">
                        <input type="text" id="type" name="type" value={coffee.type} readOnly/>
                        <input type="text" id="roast" name="roast" value={coffee.roast} readOnly/>

                        <label htmlFor="wholeBean">Whole Bean?:</label>
                        <input type="checkbox" id="wholeBean" name="wholeBean" />

                        <input onClick = {`${coffee.quantity}-=1`} type="submit" value="Buy"/>
                    </form>
    
                    <button>
                        <a href={`/${coffee._id}/edit`}>Edit</a>
                    </button>
    
                    <form action={`/${coffee._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
    
                    <nav>
                        <a href="/">Back</a>
                    </nav>
                </DefaultLayout>
            ) 
    }
}

module.exports = Show;