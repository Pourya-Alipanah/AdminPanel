import { extendTheme } from "@chakra-ui/react"


// const sysDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const sysThemeCheck = localStorage.getItem("theme") || (sysDarkTheme ? "dark" : "light")

const theme = extendTheme({
    config : {
        initialColorMode: 'system',
        useSystemColorMode: true,
    },
    colors:{
        siteTheme:{
            black: '#222831',
            grey: '#393E46',
            blue: '#00ADB5',
            white: '#EEEEEE'
        }
    },
    breakpoints: {
        base: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
    },
    styles:{
        global: (props) => ({
            'html, body': {
                backgroundColor: props.colorMode === 'dark' ? '#393E46' : '#EEEEEE',
            },
        }),
    }
})

export default theme