var React = require('react');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.grabHistory = this.grabHistory.bind(this);
  }

  grabHistory(e) {
    if (e.key == 'Enter') {
      const keyword = e.target.value;
      this.props.findData(null, keyword);

      this.inputEntry.value = '';
    }
  }

  render() {
    return (
      <div className='search-box'>
        <input
          ref={(el) => (this.inputEntry = el)}
          className='form-control'
          type='text'
          placeholder='Search history...'
          onKeyPress={this.grabHistory}
          autofocus='true'
        />
      </div>
    );
  }
}

export default Search;
