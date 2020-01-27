import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { withTranslation } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import { MenuItem, ListItemIcon, Menu } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import styles from './SortBySelect.styles';

class SortBySelect extends Component {
  state = {
    sorting    : 'most_relevant',
    sortingText: this.props.t('sortBy.mostRelevant'),
    open       : false,
    anchorEl   : null,
  };

  handleOpen = event => {
    this.setState({ open: true });
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ anchorEl: null });
  };

  handleChange = (value, text) => {
    this.setState({ sorting: value });
    this.setState({ sortingText: text });
    this.setState({ open: false });
  };

  renderSortings = () => {
    const { t, classes }     = this.props;
    const { open, anchorEl } = this.state;

    const sortings = [
      {
        header : '',
        options: [
          {
            text : t('sortBy.mostRelevant'),
            value: 'most_relevant',
          },
        ],
      },
      {
        header : t('dateOfOriginal'),
        options: [
          {
            text : t('sortBy.newestFirst'),
            value: 'newest_date_of_original_first',
          },
          {
            text : t('sortBy.oldestFirst'),
            value: 'oldest_date_of_original_first',
          },
        ],
      },
      {
        header : t('dateOfPublication'),
        options: [
          {
            text : t('sortBy.newestFirst'),
            value: 'newest_date_of_publication_first',
          },
          {
            text : t('sortBy.oldestFirst'),
            value: 'oldest_date_of_publication_first',
          },
        ],
      },
      {
        header : t('dateOfAddition'),
        options: [
          {
            text : t('sortBy.newestFirst'),
            value: 'newest_date_of_addition_first',
          },
          {
            text : t('sortBy.oldestFirst'),
            value: 'oldest_date_of_addition_first',
          },
        ],
      },
    ];

    return (
      <Menu
        className={classes.menu}
        open={open}
        anchorEl={anchorEl}
        onClose={this.handleClose}
        keepMounted
      >
        {this.renderCurrentlySelected()}
        {sortings && sortings.map(({ header, options }) => (
          <React.Fragment>
            {header ? (
              <Typography
                className={classes.sortingHeader}
              >
                {t(header)}
              </Typography>
            ) : null}
            {this.renderOptions(options)}
          </React.Fragment>
        ))}
      </Menu>
    );
  }

  renderOptions = options => {
    const { classes, t } = this.props;
    const { sorting }    = this.state;
    
    return (
      <React.Fragment>
        {options && options.map(({ text, value }) => (
          <MenuItem
            onClick={() => this.handleChange(value, text)}
            selected={sorting === value}
            key={value}
          >
            <ListItemText className={classes.selectText}>
              {t(text)}
            </ListItemText>
          </MenuItem>
        ))}
      </React.Fragment>
    );
  }

  renderCurrentlySelected = () => {
    const { classes, t }  = this.props;
    const { sortingText } = this.state;

    return (
      <React.Fragment>
        <div className={classes.currentSorting}>
          <ListItemText className={classes.currentSortingText}>
            {t(sortingText)}
          </ListItemText>
          <ListItemIcon className={classes.dropDownIcon}>
            <ArrowDropUpIcon />
          </ListItemIcon>
        </div>
        <hr className={classes.divider} />
      </React.Fragment>
    );
  }

  render() {
    const { t, classes }  = this.props;
    const { sortingText } = this.state;

    return (
      <div className={classes.root}>
        <Typography
          className={classes.sortLabel}
        >
          {t('sortOn')}
        </Typography>
        <MenuItem className={classes.select} onClick={this.handleOpen}>
          <ListItemText className={classes.selectText}>
            {t(sortingText)}
          </ListItemText>
          <ListItemIcon className={classes.dropDownIcon}>
            <ArrowDropDownIcon />
          </ListItemIcon>
        </MenuItem>
        {this.renderSortings()}
      </div>
    );
  };
}

export default withTranslation('sortBySelect')(withStyles(styles)(SortBySelect));