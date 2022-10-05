const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { coffee } = this.props

        return (
            <DefaultLayout title="eXpresso">
                    <div id='page-top'><b>Welcome to eXpresso</b></div>
                    <div id='coffee-selection'>
                        <div id='Mocha-Java' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/Mocha-Java.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                        <div id='Sumatra' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/Sumatra.jpg'></img>
                            <p className='coffee-name'>Sumatra</p>
                        </div>
                        <div id='Colombian' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/Colombian.jpg'></img>
                            <p className='coffee-name'>Colombian</p>
                        </div>
                        <div id='Guatemala' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/Guatemala.jpg'></img>
                            <p className='coffee-name'>Guatemala</p>
                        </div>
                        <div id='Espresso' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/Espresso.jpg'></img>
                            <p className='coffee-name'>Espresso</p>
                        </div>
                    </div>

                    <nav>
                        <a href="/coffee/new">Order a Drink</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;