import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {Menu} from '@emotion-icons/material/Menu';
const NavHeader = () => {
    const logoStyle = {
        width: '100px'
    }
    const addButtonStyle = {
        fontSize: '10px',
        marginRight: '0px',
        padding: '3px',
        backgroundColor: 'transparent',
        display: 'block'
    }
    return (
        <>
            <Toolbar style={{justifyContent: 'space-between'}}>
                <img src="/kyroLogo.png" alt="Logo" style={logoStyle} />
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={addButtonStyle}
                >
                    <Menu style={{width: '26px'}} />
                </IconButton>
            </Toolbar>
        </>
    )
}

export default NavHeader;