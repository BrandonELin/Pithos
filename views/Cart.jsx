const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Cart extends React.Component {

    render() {

        const { coffees } = this.props

        let { beans } = []
        let { drinks } = []

        for(let i of coffees){
            if(i.roast){
                beans.push()
            } else {
                drinks.push()
            }
        }

        return (
            <DefaultLayout title="Cart">
                    <h1>Coffee</h1>
                    <ul id="coffee-Cart">
                        {beans.map((coffee) => {
                            return (
                                <li key={coffee._id}>
                                    <img src = {`/images/${coffee.type}.jpg`}></img>
                                </li>
                            )
                        })}
                    </ul>
                    <ul id="coffee-Cart">
                        {drinks.map((coffee) => {
                            return (
                                <li key={coffee._id}>
                                    Captain's Log: <a href={`/coffee/${coffee._id}`}>{coffee.title}</a><br></br>  {coffee.entry}.
                                </li>
                            )
                        })}
                    </ul>

                    <nav>
                        <a href="/coffee/new">Create a new a coffee</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Cart;