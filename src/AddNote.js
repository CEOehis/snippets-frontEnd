import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input';
import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';


class AddNote extends Component {

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
                id="snippet-title"
                inputProps={{
                  'aria-label': 'title',
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="snippet-body">Snippet</InputLabel>
              <Input
                id="snippet-body"
                multiline
                inputProps={{
                  'aria-label': 'snippet',
                }}
              />
            </FormControl>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default AddNote;