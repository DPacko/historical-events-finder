var React = require('react');
import Data from './Data.jsx';

class Records extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='historical-records-container'>
        {this.props.data.map((data, index) => (
          <Data key={index} data={data} spot={index} />
        ))}
      </div>
    );
  }
}

export default Records;
