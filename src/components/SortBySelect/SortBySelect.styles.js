export default ({ spacing, palette, typography }) => ({
  root: {
    display   : 'flex',
    alignItems: 'center',
  },
  menu: {
    '& li': {
      padding: `${spacing()}px ${spacing()}px`,
    },
    '& ul': {
      paddingTop   : 0,
      paddingBottom: spacing(2),
    },
    '& .Mui-selected': {
      '& span': {
        color: palette.common.white,
      },
      background: `linear-gradient(to right, ${palette.common.selectedLight}, ${palette.common.selectedDark})`,
    },
  },
  sortLabel: {
    whiteSpace : 'nowrap',
    marginRight: spacing(),
    fontSize   : 16,
  },
  select: {
    width       : 175,
    borderRadius: 4,
    boxShadow   : '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2)',
  },
  currentSorting: {
    display: 'flex',
    padding: `${spacing()}px ${spacing()}px`,
  },
  currentSortingText: {
    '& span': {
      fontSize: 14,
    },
    color     : palette.common.darkBlack,
    lineHeight: 1,
  },
  divider: {
    margin: 0,
  },
  dropDownIcon: {
    marginRight: 0,
    minWidth   : typography.pxToRem(18),
    color      : palette.common.darkBlack,
  },
  sortingHeader: {
    padding      : `${spacing(0.5)}px ${spacing()}px`,
    fontSize     : typography.pxToRem(12),
    fontWeight   : 'bold',
    textTransform: 'uppercase',
  },
  selectText: {
    '& span': {
      fontSize: 14,
    },
    padding   : 0,
    color     : palette.common.darkBlack,
    lineHeight: 1,
    margin    : 0,
  },
});