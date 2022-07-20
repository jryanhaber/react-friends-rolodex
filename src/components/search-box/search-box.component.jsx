import { Component } from 'react';
import { Input } from 'semantic-ui-react';

class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHandler, className } = this.props;
    return (
      <Input
        className={className}
        type="search"
        // placeholder={placeholder}
        onChange={onChangeHandler}
        icon="users"
        iconPosition="left"
        placeholder="Search friends..."
      />
    );
  }
}

export default SearchBox;
