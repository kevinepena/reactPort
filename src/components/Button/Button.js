import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },

});

class FloatingActionButtons extends Component {
  
  constructor(props) {
    super(props);
    this.state = { open: false}
  }


  toggleButton = () => {
    this.setState({open: !this.state.open})
  }


render() {

  const { classes } = this.props;




  return (

    <div>

      <Button style={{
        position: "absolute",
        bottom: "0vh",
        left: "0",
        // width: "35px",
        // height: "35px",
        backgroundColor: "rgb(255, 213, 220)",
        color: "#34495e",
        zIndex: "999"
      }} variant="fab" color="secondary" aria-label="Edit" className={classes.button} onClick={this.toggleButton}>
      <Icon >
  <svg viewBox="0 0 465 465" className="add" >
<g>
	<path d="M117.5,173c34.462,0,62.5-28.037,62.5-62.5S151.962,48,117.5,48S55,76.037,55,110.5S83.038,173,117.5,173z M117.5,63
		c26.191,0,47.5,21.309,47.5,47.5S143.691,158,117.5,158S70,136.691,70,110.5S91.309,63,117.5,63z"/>
	<path d="M282.5,173c34.462,0,62.5-28.037,62.5-62.5S316.962,48,282.5,48S220,76.037,220,110.5S248.038,173,282.5,173z M282.5,63
		c26.191,0,47.5,21.309,47.5,47.5S308.691,158,282.5,158S235,136.691,235,110.5S256.309,63,282.5,63z"/>
	<path d="M363.656,256.882c1.478,1.912,3.697,2.915,5.94,2.914c1.601,0,3.215-0.511,4.581-1.565
		c3.278-2.533,3.881-7.243,1.349-10.521C353.077,218.66,319.17,202,282.5,202c-23.545,0-46.264,6.94-65.7,20.071
		c-3.433,2.319-4.335,6.981-2.017,10.413c2.32,3.434,6.982,4.336,10.413,2.017C242.144,223.052,261.959,217,282.5,217
		C314.489,217,344.07,231.536,363.656,256.882z"/>
	<path d="M117.5,202C52.71,202,0,254.71,0,319.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5C15,262.981,60.981,217,117.5,217
		S220,262.981,220,319.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5C235,254.71,182.29,202,117.5,202z"/>
	<path d="M392.5,272c-39.977,0-72.5,32.523-72.5,72.5s32.523,72.5,72.5,72.5s72.5-32.523,72.5-72.5S432.477,272,392.5,272z
		 M392.5,402c-31.706,0-57.5-25.794-57.5-57.5s25.794-57.5,57.5-57.5s57.5,25.794,57.5,57.5S424.206,402,392.5,402z"/>
	<path d="M417.5,337H400v-17.5c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5V337h-17.5c-4.142,0-7.5,3.357-7.5,7.5
		s3.358,7.5,7.5,7.5H385v17.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V352h17.5c4.142,0,7.5-3.357,7.5-7.5
		S421.642,337,417.5,337z"/>
</g>
</svg>
</Icon>
      </Button>


    </div>
  )
}
}


FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
