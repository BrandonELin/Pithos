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
                            <img className = 'coffee-pics' src='/images/coffee-1.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                        <div id='Sumatra' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/coffee-2.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                        <div id='Colombian' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/coffee-3.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                        <div id='Guatemala' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/coffee-4.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                        <div id='Espresso' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/coffee-5.jpg'></img>
                            <p className='coffee-name'>Mocha Java</p>
                        </div>
                    </div>

                    <nav>
                        <a href="/coffee/new">Create a new a log</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;