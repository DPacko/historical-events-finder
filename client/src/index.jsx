import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

import Search from './Search.jsx';
import Records from './Records.jsx';
import PropTypes from 'prop-types';

// import styles
import style from './styles.scss';

class App extends React.Component {
  static propTypes = {
    perPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      data: [],
      pageCount: 0,
      currentPage: 0,
      visibility: 'hidden',
    };

    this.getHistory = this.getHistory.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getHistory(page = 0, keyword) {
    const LIMIT = 10;
    axios
      .get(`/events?q=${keyword}&_page=${page}&_limit=${{ LIMIT }}`)
      .then((res) => {
        let count = Math.ceil(res.headers['x-total-count'] / LIMIT);

        // update state
        this.setState({
          keyword: keyword,
          data: res.data,
          pageCount: count,
          visibility: 'visible',
        });
      });
  }

  handlePageClick = (data) => {
    // console.log('keyword', this.state.keyword);
    // console.log('page selected', data.selected);
    const page = data.selected + 1;

    this.setState({
      currentPage: page,
    });

    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth',
    });

    this.getHistory(page, this.state.keyword);
  };

  render() {
    return (
      <div>
        <Search findData={this.getHistory} />
        <Records currentPage={this.state.currentPage} data={this.state.data} />
        <div className={this.state.visibility}>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App perPage={10} />, document.getElementById('app'));
