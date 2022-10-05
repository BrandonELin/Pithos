const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Cart extends React.Component {

    render() {

        const { coffee } = this.props

        return (
            <DefaultLayout title="Captains coffee">
                    <h1>Coffee Beans</h1>
                    <ul id="coffee-Cart">
                        {coffee.map((coffee) => {
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