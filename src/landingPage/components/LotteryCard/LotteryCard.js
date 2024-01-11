import React from 'react'
import { Box, Stack, IconButton, Typography, Button } from '@mui/material'
import Image from 'next/image'
import CurrentPoolStatus from '../CurrentPoolStatus';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ZoomOutOutlinedIcon from '@mui/icons-material/ZoomOutOutlined';

const LotteryCard = ({ id, color, backgroundColor }) => {
    const [isZoomedIn, setIsZoomedIn] = React.useState(false);
    const [showCurrentPoolStatus, setShowCurrentPoolStatus] = React.useState(false);

    const handleToggleZoom = () => {
        setIsZoomedIn((prevState) => {
            return !prevState
        })
    }
    const handleTogglePoolStatus = () => {
        setShowCurrentPoolStatus((prevState) => {
            return !prevState
        })
    }
    const handleGetImageUrl = () => {
        if (id === 1)
            return "/assets/images/cosmic.svg"
        else if (id === 2)
            return "/assets/images/classic.svg"
        else
            return "/assets/images/atomic.svg"
    }
    return (
        <Box>
            <Stack pt={2} sx={{ borderRadius: '8px 8px 0  0', backgroundColor }} px={2} direction='row' alignItems='center' justifyContent='space-between'>
                <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
                    <Box>
                        <Image
                            src={handleGetImageUrl()}
                            height={16}
                            width={96}
                            alt="img"
                        />
                    </Box>
                    <Box>
                        <Typography variant='h6' component='span' color={color}>
                            {isZoomedIn ? 'Past 5 Results' : 'No. 2302131'}
                        </Typography>
                    </Box>
                </Stack>
                <Box>
                    {
                        isZoomedIn ? (<IconButton onClick={handleToggleZoom}>
                            <ZoomOutOutlinedIcon sx={{ fill: color }} />
                        </IconButton>) : (<IconButton onClick={handleToggleZoom}>
                            <ZoomInIcon sx={{ fill: color }} />
                        </IconButton>)
                    }
                </Box>
            </Stack>

            {
                isZoomedIn ? (<Stack py={1} px={2} sx={{ backgroundColor }} >
                    <Stack direction='row' alignItems='center' justifyContent='space-between' >
                        <Box><Typography variant='body2' fontWeight={500} color='#000'>2302123</Typography></Box>
                        <Box><Typography variant='body2' fontWeight={500} color={color}>2302123</Typography></Box>
                        <Box><Typography variant='body2' fontWeight={500} color='#000'>14,934,000,000</Typography></Box>
                    </Stack>
                </Stack>) : (<Stack px={2} py={1} sx={{ backgroundColor }}>
                    <Stack direction='row' spacing={1} alignItems='center'>
                        <Box py={1.5} px={.75} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', width: '36px', borderRadius: '50px', backgroundColor: color }}>
                            <Typography variant='h2' component='span' color='#FFF'>15</Typography>
                        </Box>
                    </Stack>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Box>
                            <Typography variant='body1' component='span' color='#000'>Winning Pot</Typography>
                        </Box>
                        <Stack direction='row' alignItems='end' spacing={1}>
                            <Typography variant='h2' component='span' color='#000'>980,934,368,172</Typography>
                            <Typography variant='body1' component='span' color='#000'>LUCKY</Typography>
                        </Stack>
                    </Stack>
                </Stack>)
            }

            <Stack px={2} py={1} sx={{ backgroundColor: color }} direction='row' alignItems='center' justifyContent='space-between'>
                <Stack direction='row' spacing={1} alignItems='center' >
                    <Box maxWidth='32px'>
                        <Typography variant='h6' fontWeight={600} component='span' color='#FFF'>Next Draw</Typography>
                    </Box>
                    <Stack direction='row' spacing={0.5}>
                        <AccessTimeIcon sx={{ fill: '#FFF' }} />
                        <Typography variant='h2' component='span' color='#FFF'>142:32:01</Typography>
                    </Stack>
                </Stack>
                <Box>
                    <Button disableElevation disableTouchRipple disableFocusRipple variant='contained' sx={{ textTransform: 'capitalize', backgroundColor: '#FFF', color, '&:hover': { backgroundColor: '#FFF' } }}>
                        play
                    </Button>
                </Box>
            </Stack>
            {
                showCurrentPoolStatus ? (<CurrentPoolStatus backgroundColor={backgroundColor} />) : null
            }
            <Stack sx={{ borderRadius: '0px 0px 8px 8px', backgroundColor }} py={1} px={2} direction='row' alignItems='center' justifyContent='center' >
                <Stack sx={{ cursor: 'pointer' }} direction='row' alignItems='center' spacing={.5} onClick={handleTogglePoolStatus}>
                    {showCurrentPoolStatus ? (<ArrowDropUpOutlinedIcon />) : (<ArrowDropDownOutlinedIcon />)}
                    <Typography variant='body2' fontWeight={600} color='#3F3F3F'>{showCurrentPoolStatus ? "Close" : "Current Pool Status"}</Typography>
                </Stack>
            </Stack>

        </Box>
    )
}

export default LotteryCard