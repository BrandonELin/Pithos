const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

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
            <DefaultLayout title="eXpresso">
                    <div id='page-top'><b>Welcome to eXpresso</b></div>
                    <div id='coffee-selection'>
                        {beans.map((coffee) => {
                                return (
                                    <a href={`/${coffee._id}`} id={`${coffee.type}`} className='coffee-type'>
                                        <img className = 'coffee-pics' src={`/images/${coffee.type}.jpg`}></img>
                                        <p className='coffee-name'>{coffee.type}</p>
                                    </a>
                                )
                        })}
                    </div>

                    <nav>
                        <a className = 'navigation' href="/coffee/new">Order a Drink</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;