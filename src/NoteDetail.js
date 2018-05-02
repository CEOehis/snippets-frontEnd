import React, { Component } from 'react';
import moment from 'moment';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


class NoteDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      created: '',
      updated: '',
      id: ''
    }
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    fetch('/api/notes/' + id)
      .then(response => {
        return response.json();
      }).then(data => {
        let note = data.note;
        this.setState({
          title: note.title,
          body: note.body,
          created: note.created,
          updated: note.updated,
          id: note._id
        });
      });
  }
  render() {
    const { title, body, created, updated, id } = this.state
    return (
      <Grid container container style={{ padding: 20 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography component="h3" style={{fontWeight: 'bold'}} >
                {title ? title : 'snippet ...' + id.slice(0,6)}
              </Typography>
              <small><em>updated: {created ? moment(created).format('MMMM Do YYYY hh:mm:ss a') : ''}</em></small> <br />
              <small><em>created: {updated ? moment(updated).format('MMMM Do YYYY hh:mm:ss a') : ''}</em></small>
              {/* <Typography component="small">
              </Typography> */}
              <Typography component="p" className="note">
                {body}
              </Typography>
              <Button style={{margin: 20, marginLeft: 0, backgroundColor: '#00d300'}} onClick={this.addNote} variant="raised" color="secondary" aria-label="add">
                Edit
              </Button>
              <Button style={{margin: 20, marginLeft: 0}} onClick={this.addNote} variant="raised" color="secondary" aria-label="add">
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}


export default NoteDetail;