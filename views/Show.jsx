const React = require('react');
const coffee = require('../models/seed');
const DefaultLayout = require('./layouts/DefaultLayout');

class Show extends React.Component {

    render() {
        
        const { coffee } = this.props

        if(coffee.roast){
            return (
                <DefaultLayout title={`${coffee.type} details`} >
                    <h1>{coffee.type}</h1>
                    <div id="description">
                        <img src={`/images/${coffee.type}.jpg`}></img>
                        <p>
                            {coffee.roast} <br></br> {coffee.description}
                        </p>
                    </div>
    
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
        } else {
            let descriptor = `${coffee.type}`
        }
    }
}

module.exports = Show;