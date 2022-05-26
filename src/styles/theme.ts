import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        purple: {
            500:'#8615DF',
            600:'#570E91',
            800:'#38085C',
            900:'#190429',
        },
        gray: {
            50:'#f6f6f7',
            100:'#eee',
            200:'#d4d4d4',
            300:'#9e9ea7',
            400:'#666665',
            900:'#111',
        },
        red: {
            600:'#df1545',
        },
        green: {
            600:'#168821',
        },
    },
    fonts: {
        heading:'Inter',
        body:'Inter',
    },
    fontSize: {
        xs:'0.75rem',
        sm:'0.875rem',
        md:'1rem',
        lg:'1.125rem',
        xl:'1.25rem',
        '2x1':'1.5rem',
        '3x1':'1.875rem',
        '4x1':'2.25rem',
        '5x1':'3rem',
        '6x1':'3.75rem',
        '7x1':'4.5rem',
        '8x1':'6rem',
        '9x1':'8rem',
    },
    styles: {
        global:{
            body:{
                bg:'white',
                color:'gray.900',
            }
        }
    }
})