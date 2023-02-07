import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { IoArrowRedoOutline } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BsFillCaretRightFill, BsFillInfoCircleFill } from "react-icons/bs";
import { FcNumericalSorting12 } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import ConfirmationDialog from './ConfirmationDialog';
import ConfirmationDialog2 from './ConfirmationDialog2';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const opt_weekday = { weekday: 'long' };

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  console.log(props.ridesCars);
  console.log(props.nb);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Tout moyen" icon={<AllInboxIcon />} {...a11yProps(0)} />
          <Tab label="Voitures" icon={<DriveEtaIcon />} {...a11yProps(1)} />
          <Tab label="Bus" icon={<DirectionsBusIcon />} {...a11yProps(2)} />
          {/* <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
          <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
        {
          props.ridesCars && props.ridesCars.length > 0 && props.ridesCars.map((car, index) => (
            <div key={index} className="blog-full d-flex justify-content-around mb-4">
              <div className="row w-100">

                <div className="col-lg-5 col-md-4 col-xs-12 blog-height">
                  <div className="blog-image">
                    <i><AiFillCar className='text-primary' size={250} /></i>
                    {/* <Link to="#" style={{ backgroundImage: "url(assets/images/cars/bmw.jpg)" }}></Link> */}
                  </div>
                </div>
                <div className="col-lg-7 col-md-8 col-xs-12">
                  <div className="blog-content p-0">
                    <h4 className="mb-1">
                      <Link to="#" className="">{toTitleCase(new Date(car.travelStartTime.toString().substring(0, 10)).toLocaleDateString("fr-FR", opt_weekday))}, le {new Date(car.travelStartTime.toString().substring(0, 10)).toLocaleDateString("fr-FR", options)}</Link>
                    </h4>
                    <div>{props.loading && props.getCustomerByCode(car.memberCode)?.firstname}</div>
                    <div className="rating pb-1">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                    </div>
                    <p className="mb-2 pink">
                      <i className="fa fa-map-marker mr-1 ml-3"></i>
                      {props.getTownByCode(car.fromCityCode)} {car.travelStartTime.toString().substring(11, 16)} De {car.fromCityName}
                      <br />
                      <FcNumericalSorting12 size={40} className="text-center" />
                      <br />
                      <i className="fa fa-map-marker mr-1 ml-3"></i>
                      {props.getTownByCode(car.toCityCode)} .......... A {car.toCityName}
                    </p>
                    <div className="deal-price">
                      <p className="fw-bold h3">Escales: {car.stopovers.map((stopover, index) =>
                        <>
                        {/* <button className='btn btn-outline-dark m-1' key={index}>
                          {stopover.toCityName}
                        </button> */}
                        <ConfirmationDialog2 nb={props.nb} key={index} customer={props.getCustomerByCode(car.memberCode)} car={car} stopover={stopover}/>
                        </>)}</p>
                      <p className="text-right">
                      </p>
                      <p className="price mb-0"><strong className='fw-bold h3'>Tarif</strong>: <span>{car.contributionPerHead} F/CFA</span> par personne</p>

                      {/* <div class="list-group">
                        <a href="#" className="list-group-item list-group-item-action active text-center bg-secondary" aria-current="true">
                          Escales
                        </a>
                        {car.stopovers.map((stopover, index) =><a key={index} href="#" className="list-group-item d-flex justify-content-between align-items-center">{stopover.toCityName}<span class="badge bg-dark rounded-pill">{stopover.prorataContribution}F/CFA</span></a>)}
                      </div> */}
                      <div className="text-right">
                        <ConfirmationDialog customer={props.getCustomerByCode(car.memberCode)} car={car} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div className="text-center">
          <Link to="#" className="nir-btn">Voir plus de résultats <i className="fa fa-long-arrow-alt-right"></i></Link>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {props.ridesCars && props.ridesCars.length > 0 && props.ridesCars.map((car, index) => (
          <div key={index} className="blog-full d-flex justify-content-around mb-4">
            <div className="row w-100">
              <div className="col-lg-5 col-md-4 col-xs-12 blog-height">
                <div className="blog-image">
                  <Link to="#" style={{ backgroundImage: "url(assets/images/cars/bmw.jpg)" }}></Link>
                </div>
              </div>
              <div className="col-lg-7 col-md-8 col-xs-12">
                <div className="blog-content p-0">
                  <h4 className="mb-1"><Link to="#" className="">{toTitleCase(new Date(car.travelStartTime.toString().substring(0, 10)).toLocaleDateString("fr-FR", opt_weekday))}, le {new Date(car.travelStartTime.toString().substring(0, 10)).toLocaleDateString("fr-FR", options)}</Link></h4>
                  {/* <div className="trend-tags">
                  <Link to="#"><i className="fa fa-heart"></i></Link>
                  </div> */}
                  <div>{props.loading && props.getCustomerByCode(car.memberCode)?.firstname}</div>
                  <div className="rating pb-1">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                  </div>
                  <p className="mb-2 pink">
                    <i className="fa fa-map-marker mr-1 ml-3"></i>
                    {props.getTownByCode(car.fromCityCode)} {car.travelStartTime.toString().substring(11, 16)}
                    <br />
                    <FcNumericalSorting12 size={40} className="text-center" />
                    <br />
                    <i className="fa fa-map-marker mr-1 ml-3"></i>
                    {props.getTownByCode(car.toCityCode)} ..........
                  </p>
                  {/* <p className="mb-2 border-t pt-2">RENAULT MEGANE II Noir</p>  */}
                  <div className="deal-price">
                    <p className="price mb-0">Tarif: <span>{car.contributionPerHead} F/CFA</span> par personne</p>
                    <div className="text-right">
                      <ConfirmationDialog nb={props.nb} customer={props.getCustomerByCode(car.memberCode)} car={car} />
                      {/* <Tooltip title="Choisir" aria-label="add">
                      <Fab color="primary" className="text-right" aria-label="add" >
                        <BsFillCaretRightFill />
                      </Fab>
                    </Tooltip> */}
                    </div>
                    {/*debut*/}

                    {/*fin*/}

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <Link to="#" className="nir-btn">Voir plus de résultats <i className="fa fa-long-arrow-alt-right"></i></Link>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        No record ...
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  );
}
