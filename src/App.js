import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import moment from 'moment';
import shave from 'shave';

global.shave = shave;

class App extends Component {
  state = {
    notes: []
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
  render() {
    return (
      <div className="App">
        <Navbar title="Snippet" />
        <Grid container style={{ padding: 20 }} >
          <Grid item xs={12}>
            <Grid container spacing={16}>
              {this.state.notes.map(note => (
              <Grid item xs={6} sm={3}key={note._id}>
                <Card>
                  <CardContent>
                    <Typography component="h3" style={{fontWeight: 'bold'}} >
                      {note.title}
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
      </div>
    );
  }
}

export default App;
