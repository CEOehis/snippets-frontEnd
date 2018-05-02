import React, { Component } from 'react';
import './App.css';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import shave from 'shave';
import AddNoteButton from './components/AddNoteButton';

class App extends Component {
  state = {
    notes: []
  }

  constructor() {
    super();

    this.showAddNoteForm = this.showAddNoteForm.bind(this);
  }

  componentDidMount() {
    fetch('/api/notes')
      .then((response => response.json()))
      .then(result => {
        this.setState({
          notes: result.notes
        })
        shave('.note', 100)
      });
  }

  showAddNoteForm() {
    this.props.history.push('/note/create');
  }
  render() {
    return (
      <div className="App">
        <Grid container style={{ padding: 20 }} >
          <Grid item xs={12} style={{postion: 'relative'}}>
            <Grid container spacing={16}>
              {this.state.notes.map(note => (
              <Grid item xs={6} sm={3}key={note._id}>
                <Card className="note-card" style={{height: 200}}>
                  <CardContent>
                    <Typography component="h3" style={{fontWeight: 'bold'}} >
                      {note.title ? note.title : 'snippet ...' + note._id.slice(0,6)}
                    </Typography>
                    <Typography component="small">
                      {moment(note.updated).format('MMMM Do YYYY')}
                    </Typography>
                    <Typography style={{ height: 100 }}  component="p" className="note">
                      {note.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <AddNoteButton onAddNoteClick={this.showAddNoteForm} />
      </div>
    );
  }
}

export default App;
