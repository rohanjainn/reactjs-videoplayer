import React from 'react';
import SearchBar from './SearchBar'
import Youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
class App extends React.Component{

    state={
        videos:[],
        selectedVideo:null
    };

    componentDidMount(){
       this.onSearchSubmit('reactjs');  
    }
    onSearchSubmit=async search=>{
        console.log(search)
        const response=await Youtube.get('/search',{
            params:{
                q:search
            }
        });
        console.log(response.data.items)

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]});
    };

    onVideoSelect=(video)=>{
        console.log('From app ',video);
        this.setState({selectedVideo:video});

    };

    render(){
        return (
            <div className='ui container' style={{backgroundColor:'black'}}>
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                Found {this.state.videos.length} videos
                <br/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five video column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>    
                        </div>
                    
                    </div>

                </div>

                
            </div>);
    }
}

export default App;