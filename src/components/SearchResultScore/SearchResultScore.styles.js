export default ({ spacing, typography, palette, breakpoints }) => ({
  root: {
    marginBottom: spacing.unit * 3,
  },
  header: {
    fontSize   : typography.pxToRem(20),
    fontWeight : 'bold',
  },
  resultsCount: {
    fontSize   : typography.pxToRem(14),
    color      : palette.common.darkGrey,
    marginLeft : spacing.unit * 0.5,
  },
  results: {
    [breakpoints.down('sm')]: {
      marginTop: spacing.unit,
    },
    marginTop   : spacing.unit * 1.5,
    marginBottom: spacing.unit,
  },
  resultContainer: {
    display       : 'flex',
    marginBottom  : spacing.unit,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  image: {
    [breakpoints.down('sm')]: {
      width: '21vw',
    },
    borderRadius : '4px 0px 0px 4px',
    height       : '100%',
    width        : '6.5vw',
    display      : 'flex',
    flexDirection: 'column',
  },
  typeIcon: {
    color   : palette.common.darkBlack,
    fontSize: typography.pxToRem(24),
  },
  typeText: {
    fontSize: typography.pxToRem(12),
  },
  infoContainer: {
    [breakpoints.down('sm')]: {
      display      : 'flex',
      flexDirection: 'column',
    },
    width  : '100%',
    padding: spacing.unit * 2,
  },
  infoHeader: {
    display       : 'flex',
    justifyContent: 'space-between',
    width         : '100%',
  },
  sourceIcon: {
    color      : palette.common.darkBlack,
    fontSize   : typography.pxToRem(18),
    marginRight: spacing.unit * 0.5,
  },
  resultSource: {
    [breakpoints.down('sm')]: {
      marginTop: spacing.unit * 2,
    },
    display   : 'flex',
    alignItems: 'center',
  },
  source: {
    fontSize: typography.pxToRem(16),
  },
  resultRole: {
    fontSize  : typography.pxToRem(16),
    fontWeight: 'bold',
  },
  mobileHeader: {
    display      : 'flex',
    flexDirection: 'column',
  },
  resultName: {
    fontSize  : typography.pxToRem(20),
    fontWeight: 'bold',
  },
  button: {
    fontSize     : typography.pxToRem(14),
    textTransform: 'none',
    color        : palette.common.blue,
    padding      : `${spacing.unit}px ${spacing.unit}px ${spacing.unit}px ${spacing.unit * 2}px`
  },
  buttonIcon: {
    fontSize  : typography.pxToRem(18),
    marginLeft: spacing.unit * 0.5,
  },
  publisherHeader: {
    [breakpoints.down('sm')]: {
      marginTop: spacing.unit * 2,
    },
    display    : 'flex',
    marginTop  : spacing.unit * 1.75,
    fontSize   : typography.pxToRem(14),
  },
  publisher: {
    fontWeight : 'bold',
    marginRight: spacing.unit * 0.5,
  },
});