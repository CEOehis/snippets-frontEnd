import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


class EditNote extends Component {
  constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.EditNote = this.EditNote.bind(this);
    this.GoBack = this.GoBack.bind(this);
    // receive initial state from note passed via location object
    this.state = this.props.location.note;
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
  EditNote() {
    fetch('/api/notes/' + this.state.id + '/update', {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response);
      return response.json();
    })
      .then(data => {
        console.log(data);
        this.props.history.push('/note/' + data.note._id);
      });
  }

  GoBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <Grid container style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Card style={{ padding: '20px 20px 50px' }} >
            <Typography variant="headline" >
              Edit snippet
            </Typography>
            <FormControl fullWidth style={{ paddingBottom: '20px' }}>
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
            <FormControl fullWidth style={{ paddingBottom: '20px' }}>
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
            <Button onClick={this.EditNote} style={{ margin: 20, marginLeft: 0, backgroundColor: '#00d300' }}variant="raised" color="secondary" aria-label="add">
              Save
            </Button>
            <Button onClick={this.GoBack} style={{ margin: 20, marginLeft: 0 }}  variant="raised" color="secondary" aria-label="add">
              Back
            </Button>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default EditNote;