import React, { Component } from 'react';
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


class AddNoteButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAddNoteClick();
  }

  render() {
    const { classes } = this.props;
    return (
      <div onClick={this.handleClick}>
        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    );
  }

}

AddNoteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddNoteButton);
