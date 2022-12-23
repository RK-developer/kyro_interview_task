import {flexStyle} from './common';

export const appBarStyleProps = (extendProps) => ({
    paddingLeft: '24px',
    paddingRight: '24px',
    minHeight: '64px',
    backgroundColor: '#fff',
    color: '#000',
    justifyContent: 'space-between',
    boxShadow: 'none',
    flexDirection: 'row',
    ...extendProps
});

export const addStyled = (extendProps) => ({
    width: '14px',
    height: '14px',
    ...extendProps
});

export const rightCol = (extendProps) => ({
    ...flexStyle({flexType:'centerBoth'}),
    justifyContent: 'space-between',
    width: '288px',
    ...extendProps
});