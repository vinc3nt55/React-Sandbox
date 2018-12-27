import React, { Component } from 'react';
import PropTypes from 'prop-types';
class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development'],
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === "") {
      alert('You need to enter text');
    }else{
      this.setState({ newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function() {
        this.props.addProject(this.state.newProject);
      });
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={ category } value={category}>{ category }</option>
    });
    return (
      <div>
       <h3>Add Project</h3> 
       <form onSubmit={ this.handleSubmit.bind(this) }>
         <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
         </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              { categoryOptions }
            </select>
         </div>
         <input type="submit"></input>
       </form>
      </div>
    );
  }
}
AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}
export default AddProject;