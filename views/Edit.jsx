const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        let { music } = this.props

        return (
            <DefaultLayout title="edit a song">
                <h1>Edit Page</h1>
                <form action={`/${music._id}?_method=PUT`} method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" defaultValue={music.name} />

                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" name="genre" defaultValue={music.name}>
                        <option value="Soft Rock">Soft Rock</option>
                        <option value="Rock">Rock</option>
                        <option value="Hard Rock">Hard Rock</option>
                        <option value="Liquid Rock">Squishy Rock</option>
                        <option value="Electric">Electric</option>
                        <option value="Classical">Classical</option>
                        <option value="Jazz">Jazz</option>
                    </select>

                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity" defaultValue={music.quantity} />

                    <input type="submit" value="Edit Song"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit