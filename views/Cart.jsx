const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Cart extends React.Component {

    render() {

        const { coffees } = this.props

        let beans = []
        let drinks = []

        for(let i of coffees){
            console.log('hi')
            console.log(i)
            if(i.roast){
                beans.push(i);
            } else {
                drinks.push(i);
            }
        }

        return (
            <DefaultLayout title="Cart">
                    <h1>Coffee</h1>
                    <ul id="coffee-Cart">
                        {beans.map((coffee) => {
                            return (
                                <li id = 'cart-item' key={coffee._id}>
                                    <img className = 'coffee-pics' src={`/images/${coffee.type}.jpg`}></img>
                                    <p className='coffee-name'>{coffee.type} ({coffee.wholeBean? 'Whole Bean':'Ground'})</p>
                                </li>
                            )
                        })}
                    </ul>
                    <h1>Drinks</h1>
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