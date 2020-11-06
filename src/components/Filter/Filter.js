import React, {Component} from 'react';
import styles from './Filter.module.css';

class Filter extends Component{
    onFilterChange = (e) => {
        e.preventDefault()
        this.props.handleGetFilter(e.target.value)
    }
    render(){
        const filter=this.props.filter;
        return(
            <div className={styles.container}>
                <h3>Find contacts by name</h3>
                <input type="text" value={filter} onChange={this.onFilterChange}></input>
            </div>
        )
    }
}

export default Filter;