import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box >
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Box>
                    <MenuIcon />
                </Box>
                <Box>
                    <Typography variant='h1' component='h1'>
                        Lottery
                    </Typography>
                </Box>
                <Box>

                </Box>
            </Stack>
        </Box>
    )
}

export default Header