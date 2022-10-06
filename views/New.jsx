const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="write a song">
                <h1>New Song</h1>
                <form action='/' method="POST">

                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>

                    <label htmlFor="genre">Genre:</label>
                    <select id="genre" name="genre">
                        <option value="Soft Rock">Soft Rock</option>
                        <option value="Rock">Rock</option>
                        <option value="Hard Rock">Hard Rock</option>
                        <option value="Liquid Rock">Squishy Rock</option>
                        <option value="Electric">Electric</option>
                        <option value="Classical">Classical</option>
                        <option value="Jazz">Jazz</option>
                    </select>

                    <label htmlFor="quantity">Quantity:</label>
                    <input type="text" id="quantity" name="quantity"/>

                    <input type="submit" value="Write Song"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New