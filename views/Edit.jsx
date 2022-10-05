const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { log } = this.props

        return (
            <DefaultLayout title="edit a log" foodGroup="logs">
                <h1>Edit Page</h1>
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={log.title} />

                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color" defaultValue={log.entry} />

                    <label htmlFor="readyToEat">Is Ready To Eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat" defaultChecked={log.readyToEat} />

                    <input type="submit" value="Edit Log"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit