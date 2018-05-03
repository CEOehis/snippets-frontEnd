import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


class AddNote extends Component {
  constructor() {
    super();

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.addNote = this.addNote.bind(this);
    this.state = {
      title: '',
      body: ''
    }
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  onBodyChange(e) {
    this.setState({
      body: e.target.value
    })
  }
  addNote() {
    fetch('/api/notes/create', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    })
      .then(data => {
        this.props.history.push('/note/' + data.note._id);
      });
  }

  render() {
    return (
      <Grid container style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Card style={{padding: '20px 20px 50px'}} >
            <Typography variant="headline" >
              Add new snippet
            </Typography>
            <FormControl fullWidth style={{paddingBottom: '20px'}}>
              <InputLabel htmlFor="snippet-title">Title</InputLabel>
              <Input
                onChange={this.onTitleChange}
                id="snippet-title"
                value={this.state.title}
                inputProps={{
                  'aria-label': 'title',
                }}
              />
            </FormControl>
            <FormControl fullWidth style={{paddingBottom: '20px'}}>
              <InputLabel htmlFor="snippet-body">Snippet</InputLabel>
              <Input
                onChange={this.onBodyChange}
                id="snippet-body"
                value={this.state.body}
                multiline
                inputProps={{
                  'aria-label': 'snippet-body',
                }}
              />
            </FormControl>
            <Button onClick={this.addNote} variant="raised" color="secondary" aria-label="add">
              Save
            </Button>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default AddNote;