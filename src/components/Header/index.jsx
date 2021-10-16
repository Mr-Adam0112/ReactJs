import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CodeIcon from '@material-ui/icons/Code';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import { DialogContentText } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Register from '../../Feature/Auth/components/Register';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyless = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

// export default function Header(props) {

//     const classes = useStyles();
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value) => {
//     onClose(value);
//   };

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <CodeIcon className={classes.menuButton} />
//           <Typography variant="h6" className={classes.title}>
//             <Link className={classes.link} to="/">Home</Link>
//           </Typography>

//           <NavLink to="/album">
//             <Button  className={classes.link} color="inherit">album</Button>
//           </NavLink>
//           <NavLink to="/todos">
//             <Button  className={classes.link} color="inherit">Todos</Button>
//           </NavLink>
//           <NavLink to="/couter">
//             <Button  className={classes.link} color="inherit">Couter</Button>
//           </NavLink>
//           <Button  className={classes.link} color="inherit">Register</Button>
//         </Toolbar>
//       </AppBar>

//       <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//       <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
//       <List>
//         {emails.map((email) => (
//           <ListItem button onClick={() => handleListItemClick(email)} key={email}>
//             <ListItemAvatar>
//               <Avatar className={classes.avatar}>
//                 <PersonIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={email} />
//           </ListItem>
//         ))}

//         <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
//           <ListItemAvatar>
//             <Avatar>
//               <AddIcon />
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary="Add account" />
//         </ListItem>
//       </List>
//     </Dialog>
//     </div>
//   );
// }

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog className={classes.root} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle  id="simple-dialog-title">Set backup account</DialogTitle>
      <Register />
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Typography>

          <NavLink to="/album">
            <Button className={classes.link} color="inherit">
              album
            </Button>
          </NavLink>
          <NavLink to="/todos">
            <Button className={classes.link} color="inherit">
              Todos
            </Button>
          </NavLink>
          <NavLink to="/couter">
            <Button className={classes.link} color="inherit">
              Couter
            </Button>
          </NavLink>
          <Button className={classes.link} variant="outlined" color="primary" onClick={handleClickOpen}>
            Open simple dialog
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />

      <SimpleDialog
        disableBackdropClick
        disableEscapeKeyDown
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
