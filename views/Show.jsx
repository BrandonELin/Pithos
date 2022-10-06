const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Show extends React.Component {

    render() {
        
        const { music } = this.props
        console.log(music)

            return (
                <DefaultLayout title={`${music.name} details`} >
                    <h1>{music.name}</h1>
                    <div id="description">
                        <img id = 'music-pic' src={`/images/music-logo-design.jpg`}></img>
                        <p id='music-desc'>
                            Genre: {music.genre} <br></br><br></br> {music.description} <br></br><br></br> {music.quantity}: In stock
                        </p>
                    </div>
                    <audio src = {`./music/${music.name}.mp3`} controls></audio>
                    <div id='show-bar'>
                        {music.quantity == 0? <button className='show'> Out Of Stock</button> : 
                        <form action={`/${music._id}/Thanks?_method=PUT`} method='POST'>
                            <button className='show show2' id='purchasebutton'>Buy</button>
                        </form>}
        
                        <button className='show'>
                            <a className='show2' href={`/${music._id}/edit`}>Edit</a>
                        </button>
        
                        <form action={`/${music._id}?_method=DELETE`} method="POST">
                            <input className='show show2' type="submit" value="Delete" />
                        </form>
                        <button className='show'>
                            <a className='show2' href="/">Back</a>
                        </button>
                    </div>
                    
                    
                </DefaultLayout>
            ) 
    }
}

module.exports = Show;