import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: '50px',
    right: '50px'
  },
});

function AddNoteButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  );
}

AddNoteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNoteButton);
