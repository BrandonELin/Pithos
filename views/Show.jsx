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
                        <a href={`/logs/${log._id}/edit`}>Edit</a>
                    </button>
    
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
    
                    <nav>
                        <a href="/logs">Back</a>
                    </nav>
                </DefaultLayout>
            ) 
        } else {
            let descriptor = `${coffee.type}`
        }

        return (
            <DefaultLayout title={`${log.type} details`} >
                <p>
                    {descriptor}
                </p>
                <p>
                    {log.shipIsBroken ? "The ship is broken" : "The ship is okay"}
                </p>

                <button>
                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                </button>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" />
                </form>

                <nav>
                    <a href="/logs">Back</a>
                </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Show;