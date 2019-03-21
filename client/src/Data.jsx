var React = require('react');

class Data extends React.Component {
  render() {
    return (
      <div className='history-block'>
        <p className='history-topic'>Category 1: {this.props.data.category1}</p>
        <p className='history-topic'>Category 2: {this.props.data.category2}</p>
        <p className='history-topic'>Date: {this.props.data.date}</p>
        <p className='history-details'>
          <p className='history-details-title'>Description:</p>{' '}
          {this.props.data.description}
        </p>
      </div>
    );
  }
}

export default Data;
