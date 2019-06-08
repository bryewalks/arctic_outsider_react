import React from 'react'
import axios from 'axios'

class ArticlesNew extends React.Component {
  constructor() {
    super()
    this.state = {
        title: "",
        category: "",
        body: "",
        user_id: "",
        image: null,
        errors: [],
        error: "",
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleFileChange = (event) => {
    if (event.target.files[0]) {
      this.setState({ image: event.target.files[0] })
    }
  }

  handleSubmit = event => {
      const formData = new FormData();
      formData.set('article[title]', this.state.title);
      formData.set('article[category]', this.state.category);
      formData.set('article[body]', this.state.body);
      formData.set('article[user_id]', this.state.user_id);
      if (this.state.image) {
        formData.append('article[image]', this.state.image);
      }
      

      const config = {     
          headers: { 'content-type': `multipart/form-data; boundary=${formData._boundary}` }
      }

      axios.post("/api/articles", formData, config)

      .then(response => {
        console.log(response);
        console.log(response.data);
      }).catch(error => {
          console.log(error.response.data);
          this.setState({
            error: error.response.data
          })
          localStorage.setItem("errors", error);
        });
  }

  componentDidCatch(error, info) {
    console.log({error})
  }

  render() {
    return (
        <div>
          <h2>ArticlesNew</h2>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="category"
              placeholder="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="body"
              placeholder="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="user_id"
              placeholder="user"
              value={this.state.user_id}
              onChange={this.handleChange}
            />
            <br />  
            <input 
              type="file"
              name="image"
              placeholder="image"
              onChange={this.handleFileChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      )
  }
}

export default ArticlesNew