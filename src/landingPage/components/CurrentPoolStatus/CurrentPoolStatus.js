import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
const CurrentPoolStatus = ({ backgroundColor }) => {
    return (
        <Box pt={1} px={2} sx={{ backgroundColor }}>
            <Box pb={2}>
                <Typography variant='body2' fontWeight={600} color='#3F3F3F'>Current Pool Status</Typography>
            </Box>
            <Stack pb={1} spacing={1} >
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Image
                            src="/assets/icons/btc.png"
                            height={16}
                            width={16}
                            alt="btc-icon"
                        />
                    </Box>
                    <Stack direction='row' spacing={.5} alignItems='center'>
                        <Typography variant='h5' component='span' color='#000'>4,651.8062</Typography>
                        <Typography variant='h5' component='span' color='#000' textTransform='uppercase'>btc</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Box>
                        <Image
                            src="/assets/icons/eth.png"
                            height={16}
                            width={16}
                            alt="btc-icon"
                        />
                    </Box>
                    <Stack direction='row' spacing={.5} alignItems='center'>
                        <Typography variant='h5' component='span' color='#000'>4,651.8062</Typography>
                        <Typography variant='h5' component='span' color='#000' textTransform='uppercase'>eth</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack py={2} direction='row' sx={{ borderTop: '1px solid #000' }} justifyContent='end' alignItems='center'>
                <Stack direction='row' alignItems='center' spacing={1}>
                    <Typography variant='h4' color='#4A3838'>≈</Typography>
                    <Typography variant='h1' color='#020202'>909,909,164,389</Typography>
                    <Typography variant='body1' color='#020202'>LUCKI</Typography>
                </Stack>
            </Stack>
        </Box >
    )
}

export default CurrentPoolStatus