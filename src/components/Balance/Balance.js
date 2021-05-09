import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import { formatCurrentDate } from '../../helpers/formatDate';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const Balance = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const date = formatCurrentDate(new Date());
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
        {balance} €
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {date}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View statistics
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Balance;