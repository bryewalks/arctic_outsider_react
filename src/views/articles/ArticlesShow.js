import React from 'react'
import axios from 'axios'

class ArticlesShow extends React.Component {
  constructor() {
    super()
    this.state = {
      article: []
    }
  }

  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`/api/articles/${params.id}`)
      .then(res => {
        const article = res.data;
        this.setState({ article });
      }) 
  }

  render() {
    return (
        <div>
          <h2>{this.state.article.title}</h2>
          <h2>{this.state.article.body}</h2>

          <img src={this.state.article.image_url} alt="article" />
        </div>
      )
  }
}

export default ArticlesShow 