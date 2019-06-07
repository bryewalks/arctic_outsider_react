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
        image: "",
        errors: [],
        error: ""
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  setFile = (event) => {
    if (event.target.files.length > 0) {
      this.state.image = event.target.files[0];
    }
  }

  handleSubmit = event => {
    // var params = {
    //                           title: this.state.title, 
    //                           category: this.state.category, 
    //                           body: this.state.body, 
    //                           user_id: this.state.user_id,
    //                           image: this.state.image
    //                           }

    const formData = new FormData();
    formData.append('article[title]', this.state.title);
    formData.append('article[category]', this.state.category);
    formData.append('article[body]', this.state.body);
    formData.append('article[user_id]', this.state.user_id);
    formData.append('article[image]', this.state.image);

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
          <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <input 
              type="text"
              name="title"
              value={this.state.title}
              placeholder="title"
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="category"
              value={this.state.category}
              placeholder="category"
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="body"
              value={this.state.body}
              placeholder="body"
              onChange={this.handleChange}
            />
            <br />
            <input 
              type="text"
              name="user_id"
              value={this.state.user_id}
              placeholder="user"
              onChange={this.handleChange}
            />
            <br />  
            <input 
              type="file"
              name="image"
              value={this.state.image}
              placeholder="image"
              onChange={this.setFile}
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      )
  }
}

export default ArticlesNew