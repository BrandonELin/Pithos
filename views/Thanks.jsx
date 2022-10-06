const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Thanks extends React.Component {
    render() {

        return (
            <DefaultLayout title="Thank you">
                <h1>Thank you</h1>
            </DefaultLayout>
        )
    }
}

module.exports = Thanks