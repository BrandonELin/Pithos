const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Thanks extends React.Component {
    render() {

        let { log } = this.props
        console.log(log)

        return (
            <DefaultLayout title="edit a log" foodGroup="logs">
                <h1>Thank you</h1>
                <form action={`/${log._id}?_method=PUT`} method="POST">
                    <input type="submit" value="Return to Cart"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Thanks