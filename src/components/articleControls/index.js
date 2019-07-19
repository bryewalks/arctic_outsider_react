import React from 'react'
import axios from 'axios'
import { Wrapper } from 'components/globals'
import { StyledButton } from './style.js'

export default function ArticleControls(props) {

  const redirectToEdit = () => {
    props.router.push(`/articles/${props.params.id}/edit`);
  }

  const deleteArticle = () => {
    axios.delete(`/api/articles/${props.params.id}`)
    .then(response => {
      console.log(response);
      props.router.push('/articles/');
    }).catch(error => {
      console.log(error);
      console.log(error.response.data.errors[0]);
    });
  }

  return (
    <Wrapper>
        <StyledButton onClick={redirectToEdit}>Edit</StyledButton>
        <StyledButton onClick={deleteArticle} delete>Delete</StyledButton>
    </Wrapper>
  )
}