import { styled } from "@mui/material"
import { Box, Typography, Container, useTheme, useMediaQuery } from "@mui/material"
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import LanguageIcon from '@mui/icons-material/Language'

const Experience = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const StyledExperience = styled("div")(()=>({
        backgroundColor:"#1a1a1a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: isMobile ? "40px 0" : "60px 0"
    }))

    const ExperienceCard = styled(Box)(()=>({
        backgroundColor: "#2a2a2a",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "20px",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 5px 15px rgba(0,255,0,0.1)"
        }
    }))

    const experiences = [
        {
            title: "Analista de Suporte",
            company: "CISS S.A | Gestão para o Varejo",
            period: "2023 - Presente",
            description: "Anlista de Suporte de TI, atendendo aos clientes da empresa, auxiliando com dúvidas e problemas relacionados ao sistema da empresa.",
            icon: <WorkIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        }
    ]

    const education = [
        {
            title: "Análise e Desenvolvimento de Sistemas",
            institution: "PUCPR - Pontifícia Universidade Católica do Paraná",
            period: "2024 - 2026",
            description: "Cursando 2° Semestre de Análise e Desenvolvimento de Sistemas",
            icon: <SchoolIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        },
        {
            title: "Ensino Médio",
            institution: "Colégio Sesi da Indústria",
            period: "2021 - 2023",
            description: "Ensino Médio concluído com foco em tecnologia e inovação",
            icon: <SchoolIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        }
    ]

    const languages = [
        {
            name: "Português",
            level: "Nativo"
        },
        {
            name: "Inglês",
            level: "Avançado",
            description: "Inglês avançado, com certificação MET - B1"
        }
    ]

    const courses = [
        {
            title: "Formação React JS.",
            institution: "Udemy",
            period: "2024",
            description: "Curso completo de ReactJs, TailwindCss, Styled-Components, Vite, Firebase, Typescript.",
            icon: <EmojiEventsIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        },
        {
            title: "Formação Pyton",
            institution: "Curso em Video",
            period: "2024",
            description: "Curso completo de Python, conceitos básicos.",
            icon: <EmojiEventsIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        },
        {
            title: "Formação JS",
            institution: "Curso em Video",
            period: "2024",
            description: "Curso completo de JavaScript, conceitos básicos e intermediário.",
            icon: <EmojiEventsIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        },
        {
            title: "Ensino Profissionalizante",
            institution: "Sudotec",
            period: "2023",
            description: "Iniciativa Aprender e Crescer para joves no mercado da tecnologia.",
            icon: <EmojiEventsIcon sx={{ color: "#00ff00", fontSize: 40 }} />
        }
    ]

    return (
        <StyledExperience>
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
                        Experiência Profissional
                    </Typography>
                    
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    {exp.icon}
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                            {exp.title}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: "#00ff00" }}>
                                            {exp.company}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
                                    {exp.period}
                                </Typography>
                                <Typography variant="body1">
                                    {exp.description}
                                </Typography>
                            </ExperienceCard>
                        ))}
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <Typography 
                            variant={isMobile ? "h3" : "h2"} 
                            component="h2" 
                            sx={{ 
                                textAlign: "center",
                                mt: 6,
                                mb: 4,
                                color: "#00ff00"
                            }}
                        >
                            Formação Acadêmica e Idiomas
                        </Typography>

                        <Box sx={{ 
                            display: "grid", 
                            gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
                            gap: 3 
                        }}>
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                {education.map((edu, index) => (
                                    <ExperienceCard key={index}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                            {edu.icon}
                                            <Box>
                                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                                    {edu.title}
                                                </Typography>
                                                <Typography variant="subtitle1" sx={{ color: "#00ff00" }}>
                                                    {edu.institution}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
                                            {edu.period}
                                        </Typography>
                                        <Typography variant="body1">
                                            {edu.description}
                                        </Typography>
                                    </ExperienceCard>
                                ))}
                            </Box>

                            <ExperienceCard>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    <LanguageIcon sx={{ color: "#00ff00", fontSize: 40 }} />
                                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                        Idiomas
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                    {languages.map((lang, index) => (
                                        <Box key={index}>
                                            <Typography variant="h6" sx={{ color: "#00ff00" }}>
                                                {lang.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#888" }}>
                                                {lang.level}
                                            </Typography>
                                            {lang.description && (
                                                <Typography variant="body2" sx={{ color: "#888", mt: 0.5 }}>
                                                    {lang.description}
                                                </Typography>
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            </ExperienceCard>
                        </Box>
                    </Box>

                    <Typography 
                        variant={isMobile ? "h3" : "h2"} 
                        component="h2" 
                        sx={{ 
                            textAlign: "center",
                            mt: 6,
                            mb: 4,
                            color: "#00ff00"
                        }}
                    >
                         Cursos e Certificações
                    </Typography>

                    <Box sx={{ 
                        display: "grid", 
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                        gap: 3 
                    }}>
                        {courses.map((course, index) => (
                            <ExperienceCard key={index}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                                    {course.icon}
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                            {course.title}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: "#00ff00" }}>
                                            {course.institution}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{ color: "#888", mb: 1 }}>
                                    {course.period}
                                </Typography>
                                <Typography variant="body1">
                                    {course.description}
                                </Typography>
                            </ExperienceCard>
                        ))}
                    </Box>
                </Box>
            </Container>
        </StyledExperience>
    )
}

export default Experience 