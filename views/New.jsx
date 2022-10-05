const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New log">
                <h1>New Page</h1>
                <form action="/logs" method="POST">

                    <label htmlFor="title">Name:</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="entry">Entry:</label>
                    <input type="text" id="entry" name="entry" />

                    <label htmlFor="shipIsBroken">Is the ship broken?:</label>
                    <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />

                    <input type="submit" value="New Entry"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New