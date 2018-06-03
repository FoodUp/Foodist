import React ,{ Component }  from 'react';

class SearchResultPage extends Component {
    render(){
        const { match :{ params }} = this.props;
        return(
            <div>search term {params.term} </div>
        )
    }
    
}
export default SearchResultPage;