export default ({ breakpoints, spacing, typography }) => ({
  header: {
    [breakpoints.down('sm')]: {
      display      : 'flex',
      flexDirection: 'column',
    },
    display       : 'flex',
    justifyContent: 'space-between',
    minHeight     : 32,
  },
  productResultsContainer: {
    [breakpoints.down('sm')]: {
      display      : 'flex',
      flexDirection: 'column',
      marginTop    : spacing.unit,
      marginBottom : spacing.unit,
    },
    '& $productContainer:nth-child(3n+3)': {
      marginRight: 0,
    },
    display      : 'flex',
    flexDirection: 'row',
    flexWrap     : 'nowrap',
  },
  productContainer: {
    [breakpoints.down('sm')]: {
      width       : '100%',
      marginRight : 0,
      marginTop   : spacing.unit,
      marginBottom: spacing.unit,
    },
    marginTop    : spacing.unit * 2,
    marginRight  : spacing.unit * 2,
    marginBottom : spacing.unit * 2,
    display      : 'flex',
    flexDirection: 'column',
    width        : '33%',
  },
  image: {
    width       : 'auto',
    objectFit   : 'cover',
    height      : 140,
    borderRadius: '4px 4px 0px 0px'
  },
  contentContainer: {
    padding  : spacing.unit * 2,
    wordBreak: 'break-all',
  },
  links: {
    marginBottom: 0,
  },
  noResultsText: {
    [breakpoints.down('md')]: {
      fontSize: typography.pxToRem(22),
    },
  },
});
