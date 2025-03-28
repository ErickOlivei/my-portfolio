import { styled } from "@mui/material"
import { Box, Typography, Container, useTheme, useMediaQuery, IconButton, Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

const Footer = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const StyledFooter = styled("footer")(()=>({
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: isMobile ? "20px 0" : "40px 0",
        borderTop: "1px solid rgba(255,255,255,0.1)"
    }))

    const StyledIconButton = styled(IconButton)(()=>({
        color: "white",
        margin: "0 10px",
        "&:hover": {
            color: "#00ff00",
            transform: "translateY(-3px)",
            transition: "all 0.3s ease"
        }
    }))

    return (
        <StyledFooter>
            <Container maxWidth="lg">
                <Box sx={{ 
                    display: "flex", 
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: isMobile ? 2 : 0
                }}>
                    <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
                        <Typography variant="h6" sx={{ mb: 1, color: "#00ff00" }}>
                            Erick Felipe Prestes de Oliveira
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#888" }}>
                            Desenvolvedor Front-End
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Link 
                            href="https://github.com/ErickOlivei" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ color: "inherit" }}
                        >
                            <StyledIconButton>
                                <GitHubIcon />
                            </StyledIconButton>
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/erick-felipe-prestes-de-oliveira-a447ab276/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            sx={{ color: "inherit" }}
                        >
                            <StyledIconButton>
                                <LinkedInIcon />
                            </StyledIconButton>
                        </Link>
                        <Link 
                            href="mailto:eprestesdeoliveira@gmail.com"
                            sx={{ color: "inherit" }}
                        >
                            <StyledIconButton>
                                <EmailIcon />
                            </StyledIconButton>
                        </Link>
                    </Box>
                </Box>

                <Box sx={{ 
                    mt: isMobile ? 2 : 4,
                    textAlign: "center",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    pt: 2
                }}>
                    <Typography variant="body2" sx={{ color: "#888" }}>
                        © {new Date().getFullYear()} Erick Felipe. Todos os direitos reservados.
                    </Typography>
                </Box>
            </Container>
        </StyledFooter>
    )
}

export default Footer 