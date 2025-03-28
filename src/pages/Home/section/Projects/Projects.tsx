import { styled } from "@mui/material"
import { Box, Typography, Container, useTheme, useMediaQuery, Card, CardContent, CardMedia, Button } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Projects = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const StyledProjects = styled("div")(()=>({
        backgroundColor:"#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: isMobile ? "40px 0" : "60px 0"
    }))

    const projects = [
        {
            title: "Portfólio Pessoal",
            description: "Portfólio desenvolvido com React, TypeScript e Material-UI. Interface moderna e responsiva.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["React", "TypeScript", "Material-UI"],
            github: "https://github.com/seu-usuario/portfolio",
            demo: "https://seu-portfolio.com"
        },
        {
            title: "Sistema de Gerenciamento",
            description: "Aplicação web para gerenciamento de tarefas e projetos. Desenvolvida com React e Node.js.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["React", "Node.js", "MongoDB"],
            github: "https://github.com/seu-usuario/gerenciador",
            demo: "https://gerenciador.com"
        },
        {
            title: "E-commerce",
            description: "Plataforma de e-commerce completa com carrinho de compras e integração com pagamentos.",
            image: "https://via.placeholder.com/400x300",
            technologies: ["React", "Redux", "Stripe"],
            github: "https://github.com/seu-usuario/ecommerce",
            demo: "https://ecommerce.com"
        }
    ]

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <Typography 
                        variant={isMobile ? "h3" : "h2"} 
                        component="h2" 
                        sx={{ 
                            textAlign: "center",
                            mb: 4,
                            color: "#00ff00"
                        }}
                    >
                        Projetos
                    </Typography>

                    <Box sx={{ 
                        display: "grid", 
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: 4 
                    }}>
                        {projects.map((project, index) => (
                            <Card 
                                key={index}
                                sx={{ 
                                    backgroundColor: "#2a2a2a",
                                    color: "white",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 5px 15px rgba(0,255,0,0.1)"
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: "bold" }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mb: 2, color: "#ccc" }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <Typography 
                                                key={techIndex}
                                                variant="body2"
                                                sx={{ 
                                                    backgroundColor: "#00ff00",
                                                    color: "black",
                                                    padding: "4px 8px",
                                                    borderRadius: "4px"
                                                }}
                                            >
                                                {tech}
                                            </Typography>
                                        ))}
                                    </Box>
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        <Button 
                                            variant="outlined" 
                                            startIcon={<GitHubIcon />}
                                            href={project.github}
                                            target="_blank"
                                            sx={{ 
                                                color: "#00ff00",
                                                borderColor: "#00ff00",
                                                "&:hover": {
                                                    borderColor: "#00ff00",
                                                    backgroundColor: "rgba(0,255,0,0.1)"
                                                }
                                            }}
                                        >
                                            Código
                                        </Button>
                                        <Button 
                                            variant="outlined" 
                                            startIcon={<LaunchIcon />}
                                            href={project.demo}
                                            target="_blank"
                                            sx={{ 
                                                color: "#00ff00",
                                                borderColor: "#00ff00",
                                                "&:hover": {
                                                    borderColor: "#00ff00",
                                                    backgroundColor: "rgba(0,255,0,0.1)"
                                                }
                                            }}
                                        >
                                            Demo
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Container>
        </StyledProjects>
    )
}

export default Projects 