const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')


class Index extends React.Component {

    render() {

        const { music } = this.props

        return (
            <DefaultLayout title="Pithos">
                    <div id='page-top'><b>Welcome to Pithos</b></div>
                    <div id='music-selection'>
                        {music.map((song) => {
                                return (
                                    <a href={`/${song._id}`} id={`${song.type}`} className='song-type'>
                                        <img className = 'song-pics' src={`/images/${song.type}.jpg`}></img>
                                        <p className='song-name'>{song.type}</p>
                                    </a>
                                )
                        })}
                    </div>

                    <nav>
                        <a className = 'navigation' href="/new">Write a Song</a>
                    </nav>
            </DefaultLayout>
        )
    }
}

module.exports = Index;