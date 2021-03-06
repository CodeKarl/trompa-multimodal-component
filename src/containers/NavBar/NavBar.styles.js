export default ({ spacing, palette, breakpoints }) => ({
  root: {
    backgroundColor: palette.common.white,
  },
  toolbar: {
    [breakpoints.down('md')]: {
      padding: `${spacing.unit * 1.5}px ${spacing.unit * 2}px 0px ${spacing.unit * 2}px`,
    },
    padding      : `${spacing.unit * 2.25}px ${spacing.unit * 5}px 0px ${spacing.unit * 5}px`,
    display      : 'flex',
    flexDirection: 'column',
    alignItems   : 'flex-start',
  },
  navLink: {
    '&:hover': {
      textDecoration: 'none',
    },
    color: palette.common.white,
  },
  logo: {
    [breakpoints.down('md')]: {
      height: 35,
    },
    height   : 29,
    width    : 'auto',
    marginTop: 10,
  },
  headerContainer: {
    display       : 'flex',
    width         : '100%',
    alignItems    : 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    justifyContent: 'center',
    width         : '100%',
    padding       : `${spacing()}px 0px ${spacing(2)}px 0px`,
  },
});
