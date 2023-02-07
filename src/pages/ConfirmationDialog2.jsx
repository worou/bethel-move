import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BsFillCaretRightFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { Fab, Tooltip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import util from '../helpers/util';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));


export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    const token = localStorage.getItem("token");
    if(token){
      navigate('/pay');
    }else{

      navigate('/login');
    }
  };
console.log(props.nb)
  return (
    <>
      <div style={{ isplay: "inline" }}>
        <Button className='fs-5' variant="text" color="primary" style={{ color: "black" }} onClick={handleClickOpen}>
          <BsFillInfoCircleFill />  {props.stopover.toCityName}
        </Button>
        {/* <Tooltip title="Choisir" aria-label="add" onClick={handleClickOpen}>
        <Fab color="primary" className="text-right" aria-label="add" >
          <BsFillCaretRightFill />
        </Fab>
      </Tooltip> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >

          <DialogTitle id="alert-dialog-title">Trajet: {props.car.fromCityName} - {props.stopover.toCityName}</DialogTitle>
          <DialogTitle id="alert-dialog-title">{props.car.travelStartTime}</DialogTitle>
          <div>
            {/* <i className="fa fa-map-marker mr-1 ml-3"></i> 
          {props.customer} */}
          </div>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div className={classes.root}>
                <div className={classes.section1}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="body1">
                        <Avatar className={classes.large} alt="Remy Sharp" src="/assets/images/profiles/avatar1.png" />
                        {props.customer?.firstname}
                        {/* <div>{util.getAge(props.customer?.birthdate)} ans.</div>  */}
                        <div className="rating pb-1">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="body1">

                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography color="textSecondary" variant="body2">
                    <p>J'aime bien discuter quand je me sens à l'aise.</p>
                  </Typography>
                </div>
                <Divider variant="middle" />
                <div className={classes.section2}>
                  <Typography gutterBottom variant="body1">
                    <strong>Voiture: {props.car.car.name}</strong><br/>
                    <strong>Pace(s) disponible(s): {props.car.seatsOffered}</strong><br/>
                    <strong>Prix par personne:</strong>
                    <Chip className={classes.chip} color="primary" label={`${props.nb} x ${props.stopover.prorataContribution} F/CFA`} />
                  </Typography>
                  {/* <div>
                  <Chip className={classes.chip} label="Extra Soft" />
                  <Chip className={classes.chip} color="primary" label="Soft" />
                  <Chip className={classes.chip} label="Medium" />
                  <Chip className={classes.chip} label="Hard" />
                </div> */}
                </div>

              </div>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
            <Button onClick={handleClose} color="primary" autoFocus>
              Réserver
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
