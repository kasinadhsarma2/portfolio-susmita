"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X, ArrowUp, Download } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { toast } = useToast()

  // Check scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    // Reset form
    ;(e.target as HTMLFormElement).reset()
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Intersection observer hooks for animations
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [educationRef, educationInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Susmita Kumari</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-primary">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#education" className="transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#certifications" className="transition-colors hover:text-primary">
                Certifications
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center space-x-2">
              <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/susmita-kumari-3ab31524a/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="hidden lg:flex items-center gap-2">
                <Download className="h-4 w-4" />
                Resume
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-background border-t">
            <nav className="flex flex-col p-6 space-y-6 text-lg font-medium">
              <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                About
              </Link>
              <Link href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Experience
              </Link>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Skills
              </Link>
              <Link href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Education
              </Link>
              <Link href="#certifications" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Certifications
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary">
                Contact
              </Link>
              <div className="pt-6 flex items-center space-x-4">
                <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://linkedin.com/in/susmita-kumari-3ab31524a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:susmitakumari1571@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
              <Button className="mt-4">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]"></div>
          <div className="mx-auto max-w-[58rem] space-y-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <Image
                    src="/me .jpg"
                    alt="Susmita Kumari"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Susmita Kumari
                </h1>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground md:text-2xl max-w-[42rem] mx-auto"
            >
              Software Developer | MERN Stack | Data Structures & Algorithms
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center pt-8"
            >
              <div className="animate-bounce">
                <Link
                  href="#about"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-sm mb-2">Scroll Down</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="py-16 md:py-24"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold tracking-tight mb-4 inline-block border-b-2 border-primary pb-2">
                About Me
              </h2>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>susmitakumari1571@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 9608185843</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <Link
                    href="https://github.com/susmitakumari14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/susmitakumari14
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <Link
                    href="https://linkedin.com/in/susmita-kumari-3ab31524a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/susmita-kumari-3ab31524a/
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6 text-lg">
                <p className="leading-relaxed">
                  I am a passionate software developer with expertise in data structures & algorithms (DSA) and the MERN
                  stack. I was honored to be among the top 50 in a national-level hackathon, showcasing my
                  problem-solving skills, creativity, and teamwork.
                </p>
                <p className="leading-relaxed">
                  Through successful internships, I gained hands-on experience, refining my technical abilities and
                  industry knowledge. I am eager to secure a challenging software development role where I can apply my
                  skills, innovate, and grow.
                </p>
                <p className="leading-relaxed">
                  I thrive in hackathons, coding competitions, and collaborative projects that push my limits and
                  inspire me. My goal is to create impactful software solutions that solve real-world problems.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          ref={experienceRef}
          initial="hidden"
          animate={experienceInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Experience
          </h2>
          <div className="grid gap-8 relative before:absolute before:left-[17px] before:top-0 before:h-full before:w-[2px] before:bg-border md:before:left-1/2 md:before:-ml-[1px] md:grid-cols-2">
            <motion.div variants={fadeIn} className="relative md:col-start-2">
              <div className="absolute left-0 top-[14px] h-[14px] w-[14px] rounded-full border-4 border-primary bg-background md:left-auto md:right-full md:mr-[10px]"></div>
              <Card className="md:mr-4 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">Software Engineer Intern</CardTitle>
                    <CardDescription className="text-base">GHN Universal Solutions</CardDescription>
                    <p className="text-sm text-muted-foreground">November 2024 - Present</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Working as a Full Stack Developer under IT head Mr. Pawan Kumar Singh.</li>
                    <li>Assisting in various software projects, developing and maintaining web applications.</li>
                    <li>Collaborating with team members to enhance software solutions.</li>
                    <li>Key Skills: Java, React.js, Spring Boot, UI/UX.</li>
                    <li>
                      <span className="text-sm italic text-muted-foreground">
                        (Note: Company is in transition phase)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="relative md:col-start-1 md:row-start-2">
              <div className="absolute left-0 top-[14px] h-[14px] w-[14px] rounded-full border-4 border-primary bg-background md:left-auto md:right-[-7px]"></div>
              <Card className="md:ml-4 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">Front-end Developer Intern</CardTitle>
                    <CardDescription className="text-base">Mr. Loggage</CardDescription>
                    <p className="text-sm text-muted-foreground">July 2024 - September 2024 (Upcoming)</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Will be developing Web App with the team in a dynamic startup environment.</li>
                    <li>Will gain hands-on experience in the logistics and tech industry.</li>
                    <li>Key Skills: MERN Stack, Front-end Development.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn} className="relative md:col-start-2 md:row-start-3">
              <div className="absolute left-0 top-[14px] h-[14px] w-[14px] rounded-full border-4 border-primary bg-background md:left-auto md:right-full md:mr-[10px]"></div>
              <Card className="md:mr-4 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">Web Developer Intern</CardTitle>
                    <CardDescription className="text-base">Techsouq Technologies Private Limited</CardDescription>
                    <p className="text-sm text-muted-foreground">December 2024 - May 2025 (Upcoming)</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Will be developing, testing, and maintaining web applications remotely.</li>
                    <li>Will collaborate with design and development teams on projects.</li>
                    <li>Will troubleshoot and debug web applications.</li>
                    <li>Will ensure the quality and responsiveness of applications.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeIn}>
              <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <svg
                      className="h-16 w-16 text-primary/40"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2H2v10h10V2Z" />
                      <path d="M22 12h-4v10h4V12Z" />
                      <path d="M14 18h4" />
                      <path d="M14 14h4" />
                      <path d="M14 10h4" />
                      <path d="M14 6h4" />
                      <path d="M6 22v-4" />
                      <path d="M10 22v-4" />
                      <path d="M2 22v-4" />
                      <path d="M2 14h10v4H2v-4Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Detection of Counterfeit Using AI
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">CNN</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed an AI-based system to detect counterfeit products in online marketplaces.</li>
                    <li>
                      Implemented convolutional neural networks (CNN) for image classification and counterfeit
                      identification.
                    </li>
                    <li>
                      Addressed the growing trillion-dollar problem of counterfeit goods impacting global brands and
                      businesses.
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <svg
                      className="h-16 w-16 text-primary/40"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 6.1H3" />
                      <path d="M21 12.1H3" />
                      <path d="M15.1 18H3" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Student Management System
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Designed a CRUD-based student management system with a React.js frontend and Spring Boot backend.
                    </li>
                    <li>Integrated MongoDB for dynamic data storage and retrieval.</li>
                    <li>Used Postman API for testing and verifying backend functionalities.</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <svg
                      className="h-16 w-16 text-primary/40"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="M12 12v9" />
                      <path d="m8 17 4 4 4-4" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Dynamic Weather Website
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed a dynamic weather website with real-time weather updates using Java and JavaScript.
                    </li>
                    <li>Implemented a responsive UI using HTML and CSS for an interactive user experience.</li>
                    <li>Utilized external weather APIs to fetch and display accurate weather data.</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="group h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <svg
                      className="h-16 w-16 text-primary/40"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Ayushman Card Healthcare
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Healthcare</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed a healthcare management system for Ayushman Bharat, India's national health insurance
                      scheme.
                    </li>
                    <li>
                      Implemented features for patient registration, card issuance, and healthcare provider integration.
                    </li>
                    <li>Created a user-friendly interface for beneficiaries to access healthcare services.</li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Link
                      href="https://github.com/susmitakumari14/ayushman-bharat-healthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Research Articles
          </h2>
          <Card className="hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-1"></div>
            <CardHeader>
              <CardTitle className="text-xl">
                Solar-Powered Processing Units: Enabling Sustainable Computation Through Temperature Regulation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                This research explores innovative approaches to sustainable computing through solar-powered processing
                units with advanced temperature regulation systems.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Article
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Skills
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Java</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">React.js</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Node.js</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">MongoDB</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Python</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Professional Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Problem Solving</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Team Collaboration</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Communication</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Project Management</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">UI/UX Design</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mt-8">
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                    Programming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Java</Badge>
                    <Badge>Python</Badge>
                    <Badge>C</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                      <path d="M16 19h6" />
                      <path d="M19 16v6" />
                    </svg>
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MERN Stack</Badge>
                    <Badge>React.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Express.js</Badge>
                    <Badge>HTML/CSS</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Android Application Development</Badge>
                    <Badge>Java</Badge>
                    <Badge>Kotlin</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    AI/ML
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Artificial Intelligence</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>CNN</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    </svg>
                    Cloud Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Cloud Computing</Badge>
                    <Badge>Deployment</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M12 2v2" />
                      <path d="M12 22v-2" />
                      <path d="m17 20.66-1-1.73" />
                      <path d="M11 10.27 7 3.34" />
                      <path d="m20.66 17-1.73-1" />
                      <path d="m3.34 7 1.73 1" />
                      <path d="M14 12h8" />
                      <path d="M2 12h2" />
                      <path d="m20.66 7-1.73 1" />
                      <path d="m3.34 17 1.73-1" />
                      <path d="m17 3.34-1 1.73" />
                      <path d="m7 20.66 1-1.73" />
                    </svg>
                    Design
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>UI/UX Design</Badge>
                    <Badge>Responsive Design</Badge>
                    <Badge>User Experience</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          ref={educationRef}
          initial="hidden"
          animate={educationInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Education
          </h2>
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-transparent p-1"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">B.Tech in Computer Science and Engineering</CardTitle>
                    <CardDescription className="text-lg">Parul University, Vadodara</CardDescription>
                  </div>
                  <div className="text-sm px-3 py-1 bg-primary/10 rounded-full inline-flex items-center">
                    August 2022 - March 2026
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      CGPA: 7.16
                    </Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground">
                      Studying Computer Science with a focus on software development, algorithms, and artificial
                      intelligence.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Relevant Coursework:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Data Structures</Badge>
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary">Database Systems</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Software Engineering</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-transparent p-1"></div>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <CardTitle className="text-xl">Dual Degree in Neural Deep Learning</CardTitle>
                    <CardDescription className="text-lg">Parul University, Vadodara</CardDescription>
                  </div>
                  <div className="text-sm px-3 py-1 bg-primary/10 rounded-full inline-flex items-center">
                    2023 - 2024
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-muted-foreground">
                    Specialized training in neural networks, deep learning architectures, and their applications in
                    solving complex problems.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="font-medium mb-2">Key Focus Areas:</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Neural Networks</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">AI Applications</Badge>
                    <Badge variant="secondary">Machine Learning Models</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Certifications
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                    AWS Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified in AWS cloud services and architecture, demonstrating proficiency in cloud computing
                    solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Cloud Computing</Badge>
                    <Badge>AWS Services</Badge>
                    <Badge>Cloud Architecture</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    Android Application Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified by Parul University in Android application development, covering Java, Kotlin, and Android
                    SDK.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Android SDK</Badge>
                    <Badge>Java</Badge>
                    <Badge>Kotlin</Badge>
                    <Badge>Mobile UI/UX</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Certified in full-stack web development with expertise in MERN stack technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Express.js</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="py-16 md:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-12 inline-block border-b-2 border-primary pb-2">
            Contact Me
          </h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="mb-8">
                  Feel free to reach out to me for job opportunities, collaborations, or just to say hello! I'm always
                  open to discussing new projects and ideas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 p-3 rounded-full">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>susmitakumari1571@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 p-3 rounded-full">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span>+91 9608185843</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 p-3 rounded-full">
                      <Github className="h-5 w-5" />
                    </div>
                    <Link
                      href="https://github.com/susmitakumari14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/susmitakumari14
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary-foreground/20 p-3 rounded-full">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <Link
                      href="https://linkedin.com/in/susmita-kumari-3ab31524a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/susmita-kumari-3ab31524a/
                    </Link>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
                    <div className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/susmita-kumari-3ab31524a/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                  </Link>
                  <Link href="mailto:susmitakumari1571@gmail.com">
                    <div className="bg-primary-foreground/20 p-3 rounded-full hover:bg-primary-foreground/30 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" required />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/40">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Susmita Kumari. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/susmitakumari14" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/susmita-kumari-3ab31524a/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:susmitakumari1571@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button onClick={scrollToTop} className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg" size="icon">
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  )
}

