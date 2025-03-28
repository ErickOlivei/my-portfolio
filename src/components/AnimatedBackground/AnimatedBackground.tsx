import { styled } from "@mui/material"

const AnimatedBackground = () => {
    const StyledBackground = styled("div")(()=>({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
        backgroundColor: "black",
        "&::before": {
            content: '""',
            position: "absolute",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
            background: "radial-gradient(circle, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 70%)",
            animation: "rotate 20s linear infinite",
        },
        "&::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)",
        },
        "@keyframes rotate": {
            "0%": {
                transform: "rotate(0deg)",
            },
            "100%": {
                transform: "rotate(360deg)",
            }
        }
    }))

    return <StyledBackground />
}

export default AnimatedBackground 