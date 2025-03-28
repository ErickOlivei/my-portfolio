import { styled } from "@mui/material"
import Perfil from "../../../../assets/images/fotoperfil.jpeg"
import { Box, Typography, IconButton, Container, useTheme, useMediaQuery } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground"

const Hero = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const StyledHero = styled("div")(()=>({
        backgroundColor:"transparent",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        position: "relative",
        zIndex: 1
    }))

    const Styledimg = styled("img")(()=>({
       width: isMobile ? "200px" : "300px",
       height: isMobile ? "200px" : "300px",
       borderRadius:"50%",
       objectFit: "cover",
       border: "4px solid #fff",
       boxShadow: "0 0 20px rgba(255,255,255,0.2)",
       transition: "transform 0.3s ease",
       "&:hover": {
           transform: "scale(1.05)",
           boxShadow: "0 0 30px rgba(0,255,0,0.3)"
       }
    }))

    const StyledSocialButton = styled(IconButton)(()=>({
        color: "white",
        margin: "0 10px",
        "&:hover": {
            color: "#00ff00",
            transform: "scale(1.1)",
            transition: "all 0.3s ease"
        }
    }))

    return (
      <>
        <AnimatedBackground />
        <StyledHero>
          <Container maxWidth="lg">
            <Box sx={{ 
              display: 'flex', 
              gap: isMobile ? 2 : 4, 
              width: "100%", 
              justifyContent: "center", 
              alignItems: "center", 
              flexDirection: isMobile ? "column" : "row",
              textAlign: isMobile ? "center" : "left"
            }}>
              <Box sx={{ 
                flex: isMobile ? "1" : "4", 
                display: "flex", 
                justifyContent: "center",
                mb: isMobile ? 4 : 0
              }}>
                <Styledimg src={Perfil} alt="Perfil" />
              </Box>
              <Box sx={{ 
                flex: isMobile ? "1" : "8", 
                display: "flex", 
                flexDirection: "column", 
                gap: isMobile ? 1 : 2,
                alignItems: isMobile ? "center" : "flex-start"
              }}>
                <Typography 
                  variant={isMobile ? "h3" : "h2"} 
                  component="h1" 
                  sx={{ 
                    fontWeight: "bold",
                    fontSize: isMobile ? "2rem" : "3rem"
                  }}
                >
                  Erick Felipe Prestes de Oliveira
                </Typography>
                <Typography 
                  variant={isMobile ? "h5" : "h4"} 
                  sx={{ 
                    color: "#00ff00",
                    fontSize: isMobile ? "1.5rem" : "2rem"
                  }}
                >
                  Desenvolvedor Front-End
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    maxWidth: "600px", 
                    lineHeight: 1.8,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    px: isMobile ? 2 : 0
                  }}
                >
                  Sou um desenvolvedor web. Possuo experiência com tecnologias como HTML, CSS, Tailwind CSS, JavaScript, React, Node.js e Vite, permitindo-me construir interfaces elegantes e sistemas robustos.
                </Typography>
                <Box sx={{ 
                  display: "flex", 
                  gap: isMobile ? 1 : 2, 
                  mt: isMobile ? 1 : 2,
                  justifyContent: isMobile ? "center" : "flex-start"
                }}>
                  <a href="https://github.com/ErickOlivei" target="_blank" rel="noopener noreferrer">
                    <StyledSocialButton aria-label="GitHub">
                      <GitHubIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
                    </StyledSocialButton>
                  </a>
                  <a href="https://www.linkedin.com/in/erick-felipe-prestes-de-oliveira-a447ab276/" target="_blank" rel="noopener noreferrer">
                    <StyledSocialButton aria-label="LinkedIn">
                      <LinkedInIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
                    </StyledSocialButton>
                  </a>
                  <a href="mailto:eprestesdeoliveira@gmail.com">
                    <StyledSocialButton aria-label="Email">
                      <EmailIcon sx={{ fontSize: isMobile ? 30 : 40 }} />
                    </StyledSocialButton>
                  </a>
                </Box>
              </Box>
            </Box>
          </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero