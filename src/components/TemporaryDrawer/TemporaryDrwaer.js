import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import MovieIcon from '@material-ui/icons/Movie';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/Report';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));


export default function SwipeableTemporaryDrawer() {

  const classes = useStyles();


  const [test, tester] = React.useState(false)

  const opener  = () => {
    tester(!test);
  }


  return (
    <div>
          <Button onClick={opener}>left</Button>
          <SwipeableDrawer
            anchor={'left'}
            open={test}
            onClose={opener}
            onOpen={opener}
          >
       <div
      style={{width: 250}}
      role="presentation"
      onClick={opener}
      onKeyDown={opener}
    >
      <List>

        {[['Home', <HomeIcon />], ['Trending',  <WhatshotIcon />], ['Subsriptions',  <SubscriptionsIcon />]].map((text, index) => (
        
          <ListItem button key={text[0]}>
            <ListItemIcon>{text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </ListItem>
        ))}
      </List>
      <Divider />

      {[['Library', <VideoLibraryIcon />], ['History',  <HistoryIcon />], ['Your videos', <MovieIcon />] ,['Watch later',  <ScheduleIcon />], ['Liked videos', <ThumbUpAltIcon />]].map((text, index) => (
        
        <ListItem button key={text[0]}>
          <ListItemIcon>{text[1]}</ListItemIcon>
          <ListItemText primary={text[0]} />
        </ListItem>
      ))}
      <Divider />

      {[['Library', <VideoLibraryIcon />], ['History',  <HistoryIcon />], ['Your videos', <MovieIcon />] ,['Watch later',  <ScheduleIcon />], ['Liked videos', <ThumbUpAltIcon />]].map((text, index) => (
        
        <ListItem button key={text[0]}>
          <ListItemIcon>{text[1]}</ListItemIcon>
          <ListItemText primary={text[0]} />
        </ListItem>
      ))}

    </div>
          </SwipeableDrawer>
    </div>
  );
}
