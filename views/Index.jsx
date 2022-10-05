const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { coffee } = this.props

        return (
            <DefaultLayout title="eXpresso">
                    <div id='page-top'>Welcome to eXpresso</div>
                    <div id='coffee-selection'>
                        <div id='Mocha-Java' className='coffee-type'>
                            <img className = 'coffee-pics' src='/images/coffee-1.jpg'></img>
                        </div>
                        <div id='Sumatra' className='coffee-type'>

                        </div>
                        <div id='Colombian' className='coffee-type'>
                            
                        </div>
                        <div id='Guatemala' className='coffee-type'>
                            
                        </div>
                        <div id='Espresso' className='coffee-type'>
                            
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