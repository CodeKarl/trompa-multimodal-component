import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import VideoCamIcon from '@material-ui/icons/Videocam';
import { providers } from '../../utils';
import { SearchContext } from '../SearchProvider/SearchProvider';
import SearchFilters from '../SearchFilters';
import SearchResult from '../../components/SearchResult';
import styles from './SearchResults.styles';

class SearchResults extends Component {
  renderTypeResult(typeName, item) {
    switch (typeName) {
    case 'Person':
      return (
        <SearchResult
          icon={AccountCircleIcon}
          variant="default"
          type={typeName}
          heading={item.jobTitle ? item.jobTitle : "Unknown role"}
          title={item.name}
          source={item.source}
        />
      );
    case 'MusicComposition':
      return (
        <SearchResult
          icon={LibraryMusicIcon}
          variant="default"
          type={typeName}
          heading={item.creator}
          title={item.name}
          source={item.source}
        />
      );
    case 'DigitalDocument':
      return (
        <SearchResult
          icon={LibraryMusicIcon}
          variant="default"
          type={typeName}
          heading={`${item.creator} • ${item.name}`}
          title={item.name}
          source={item.source}
        />
      );
    case 'VideoObject':
      return (
        <SearchResult
          icon={VideoCamIcon}
          variant="card"
          type={typeName}
          heading={item.creator}
          title={item.name}
          source={item.source}
        />
      );
    default:
      return null;
    }
  }

  renderTypeResults(typeName, selectedCategory, setCategory, searchResultsByType, counts) {
    const { classes, t } = this.props;
    const count          = counts[typeName] || 0;

    if (count === 0 || (selectedCategory !== 'all' && selectedCategory !== typeName)) {
      return null;
    }

    const grid       = typeName === 'VideoObject';
    const itemsLimit = selectedCategory === 'all' ? grid ? 4 : 3 : count;

    return (
      <div style={{ marginBottom: 16 }}>
        <Typography variant="h6" gutterBottom>
          {t(`types.${typeName}`, { count })} <span className={classes.resultsCount}>({count})</span>
        </Typography>
        <Grid spacing={1} container>
          {searchResultsByType[typeName].slice(0, itemsLimit).map(item => (
            <Grid key={item.identifier} xs={12} sm={grid ? 3 : 12} item>
              {this.renderTypeResult(typeName, item)}
            </Grid>
          ))}
        </Grid>
        {selectedCategory === 'all' && count > 3 ? (
          <p>
            <Button
              className={classes.button}
              onClick={event => setCategory(event, typeName)}
              variant="text"
            >
              {t('showMore')}<ChevronRightIcon className={classes.buttonIcon} />
            </Button>
          </p>
        ) : null}
      </div>
    );
  }

  renderNoResults(searchPhrase, selectedCategory) {
    const { classes, t } = this.props;

    const types = {
      Person          : t('personResult.personLower'),
      MusicComposition: t('compositionResult.compositionLower'),
      DigitalDocument : t('scoreResult.scoreLower'),
      VideoObject     : t('videoResult.videoLower'),
    };

    return (
      <div className={classes.noResults}>
        <Typography className={classes.noResultsHeader}>
          {selectedCategory === 'all' ? (t('emptyResults.noResults', { searchPhrase })) : (
            t('emptyResults.noResultsCategory', { type: types[selectedCategory], searchPhrase })
          )}:
        </Typography>
        <div>
          <Typography className={classes.searchTipsHeader}>
            {t('searchTips.searchTips')}
          </Typography>
          <ul className={classes.searchTips}>
            {selectedCategory !== 'all' ? (
              <li>{t('searchTips.tryOtherFilter')}</li>
            ) : null}
            <li>{t('searchTips.doubleCheck')}</li>
            <li>{t('searchTips.tryAnother')}</li>
            <li>{t('searchTips.lessSpecific')}</li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    const { t, classes } = this.props;

    return (
      <SearchContext.Consumer>
        {({ searchPhrase, selectedCategory, setCategory, searchResults, searchResultsByType, counts }) => (
          <Grid className={classes.root}>
            <Grid xs={12} md={3} item>
              <SearchFilters data={searchResults} />
            </Grid>
            <Grid xs={12} md={9} className={classes.resultsContainer} item>
              <Typography
                variant="subtitle1"
                className={classes.resultsTotal}
              >{searchResults ? searchResults.length : 0} {t('results')}
              </Typography>
              {this.renderTypeResults('Person', selectedCategory, setCategory, searchResultsByType, counts)}
              {this.renderTypeResults('MusicComposition', selectedCategory, setCategory, searchResultsByType, counts)}
              {this.renderTypeResults('DigitalDocument', selectedCategory, setCategory, searchResultsByType, counts)}
              {this.renderTypeResults('VideoObject', selectedCategory, setCategory, searchResultsByType, counts)}
              {searchResults && searchResults.length === 0 ? (
                this.renderNoResults(searchPhrase, selectedCategory)
              ) : null}
            </Grid>
          </Grid>
        )}
      </SearchContext.Consumer>
    );
  }
}

export default providers(
  SearchResults,
  withTranslation('searchResults'),
  withStyles(styles),
);
