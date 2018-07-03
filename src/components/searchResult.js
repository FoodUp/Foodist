import React ,{ Component }  from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../actions/index';

class SearchResultPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.searchItem(this.props.term);
    }
    render(){
        return(
            <div>search term : {this.props.term} </div>        
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { term: ownProps.match.params.term }
}

export default connect(mapStateToProps, { searchItem })(SearchResultPage);