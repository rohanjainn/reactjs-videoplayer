import React from 'react';

class SearchBar extends React.Component{

    state={term:''};

    onInputChange=(e)=>{
        this.setState({term:e.target.value});
    };

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){

        return(
        <div className='search-bar ui segment' style={{backgroundColor:'black'}}>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                    <a style={{fontSize:'30px',color:'Blue'}} href="http://localhost:3000/">Home</a>
                    <br/>
                    <br/>
                    <label style={{color:'white'}}>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;