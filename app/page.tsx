"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import { Badge } from "@/components/ui/badge"
import { useState } from "react";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  Award,
  BookOpen,
  Trophy,
  BadgeIcon as Certificate,
  Code,
  Database,
  Layers,
  Settings,
  Palette,
  Globe,
  FileText,
  FileCode,
  Shield,
  Users,
  Terminal
} from "lucide-react"
import { motion, useInView, useAnimation } from "framer-motion"

const projects = [
  {
    name: "ComX",
    id: "1",
    image: "/project1.jpg?height=400&width=600&text=Project",
    description: "ComX is a social platform for community engagement, enabling users to create profiles, share content, and connect with others.",
    Link: "https://github.com/Asheeesh9/ComX-",
    technology: "React, Node.js, MongoDB, Express, Tailwind CSS"
  },
  {
    name: "Medical Inventory System",
    id : "3",
    image: "/project33.png?height=400&width=600&text=Project",
    description: "A web app for medical centers to manage inventory, track stock, handle orders, and oversee product catalogs and transactions. ",
    Link: "https://github.com/Asheeesh9/House-Price-Predictor.git",
    technology: "React, Node.js, MongoDB, Express, Tailwind CSS"
  },
  {
    name: "House Price Predictor",
    id: "2",
    image: "/project2.png?height=400&width=600&text=Project",
    description: "A machine learning model designed to predict house prices based on various features like size, location, and condition.",
    Link: "https://github.com/Asheeesh9/House-Price-Predictor.git",
    technology: "Python, Flask, Scikit-learn, Pandas, NumPy"
  }
];




const MotionDiv = motion.div

export default function Home() {


  // const ContactForm = () => {
  //   const [email, setEmail] = useState<string>("");
  //   const [error, setError] = useState<string>("");
  
  //   const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  
  //   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setEmail(e.target.value);
  //   };
  
  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  
  //     if (!emailPattern.test(email)) {
  //       setError("Please enter a valid email address (format: characters@characters.domain)");
  //     } else {
  //       setError("");
  //       // Proceed with form submission (e.g., API call)
  //       console.log("Form submitted!");
  //     }
  //   };
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">PORTFOLIO</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Skills
              </Link>
              <Link
                href="#achievements"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Achievements
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Asheeesh9" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://https://www.linkedin.com/in/ashish-saraswat-059018327/.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <AnimatedSection>
          <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <motion.h1
                className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, I'm <span className="text-primary">Ashish Saraswat</span>
              </motion.h1>
              <motion.p
                className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A passionate full-stack developer creating beautiful and functional web experiences
              </motion.p>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild className="px-8">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about" className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-[64rem] gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">About Me</h2>
                <p className="text-muted-foreground sm:text-lg">
                  I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly
                  websites and applications. I am proficient in a wide range of technologies including React, Node.js, and Python, among others. I'm always eager to learn new things and stay updated with the latest trends in the tech world
                </p>
                <p className="text-muted-foreground sm:text-lg">
                  My approach to development is centered around creating clean, maintainable code that delivers
                  exceptional user experiences. I'm constantly learning and exploring new technologies to stay at the
                  forefront of web development.
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume.pdf" target="_blank">
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <motion.div
                className="flex items-center justify-center"
                // whileHover={{ scale: 1.05 }}
                // transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="/myphoto3.jpeg?height=600&width=600"
                    alt="Profile"
                    width={500}
                    height={500}
                    className="aspect-square object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects" className="bg-muted/50 py-12 md:py-24 lg:py-32">
            <div className="container space-y-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">My Projects</h2>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                  Here are some of my recent projects. Each one presented unique challenges and opportunities for
                  growth.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-video w-full overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={`Project ${project.name}`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl">{project.name}</h3>
                        <p className="text-muted-foreground">
                        {project.description}
                        </p>
                        <br/>
                        <p className="text-muted-foreground">
                        Technology Used: {project.technology}
                        </p>
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.Link} target = "_blank" className="inline-flex items-center gap-1">
                              <Github className="h-4 w-4" /> Code
                            </Link>
                          </Button>
                          {/* <Button size="sm" asChild>
                            <Link href="#" className="inline-flex items-center gap-1">
                              <ExternalLink className="h-4 w-4" /> View Project Details
                            </Link>
                          </Button> */}
                          <Button size="sm" asChild>
                            <Link href={`/projects/project-${project.id}`} target ="_blank" className="inline-flex items-center gap-1">
                              <FileText className="h-4 w-4" /> Project Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              {/* <div className="flex justify-center">
                <Button variant="outline" asChild>
                  <Link href="/projects" className="inline-flex items-center gap-1">
                    View All Projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div> */}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="skills" className="container py-12 md:py-24 lg:py-32">
            {/* <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Skills & Expertise</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                I've worked with a variety of technologies and frameworks to create exceptional digital experiences.
              </p>
            </div> */}
            <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Skills & Expertise</h2>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                I've worked with a variety of technologies and frameworks to create exceptional digital experiences.
              </p>
            </div>
            {/* <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                { name: "Languages", skills: ["C/C++", "Java", "Javascript", "HTML/CSS"] },
                { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { name: "Backend", skills: ["Node.js", "Express", "Python", "Django"] },
                { name: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
                { name: "Design", skills: ["Figma", "Canva", "UI/UX", "Responsive Design"] },
                { name: "Developer's Tools", skills: ["VS Code", "Git", "GitHub", "Linux"] },
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full">
                    <h3 className="font-heading text-xl">{category.name}</h3>
                    <ul className="mt-2 space-y-1">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div> */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2 md:grid-cols-3">
            <SkillCard
                icon={<FileCode className="h-10 w-10" />}
                title="Languages"
                skills={[
                  { name: "C/C++", level: 95 },
                  { name: "Java", level: 85 },
                  { name: "Javascript", level: 85 },
                  { name: "HTML/CSS", level: 90 },
                ]}
              />
              <SkillCard
                icon={<Code className="h-10 w-10" />}
                title="Frontend"
                skills={[
                  { name: "React", level: 95 },
                  { name: "Next.js", level: 85 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 90 },
                ]}
              />
              <SkillCard
                icon={<Database className="h-10 w-10" />}
                title="Backend"
                skills={[
                  { name: "Node.js", level: 95 },
                  { name: "Express", level: 90 },
                  { name: "Python", level: 90 },
                  { name: "PHP", level: 85 },
                ]}
              />
              <SkillCard
                icon={<Layers className="h-10 w-10" />}
                title="Database"
                skills={[
                  { name: "MongoDB", level: 95 },
                  { name: "PostgreSQL", level: 80 },
                  { name: "MySQL", level: 95 },
                  { name: "Firebase", level: 90 },
                ]}
              />
              <SkillCard
                icon={<Palette className="h-10 w-10" />}
                title="Design"
                skills={[
                  { name: "Figma", level: 85 },
                  { name: "Canva", level: 80 },
                  { name: "UI/UX", level: 85 },
                  { name: "Responsive Design", level: 90 },
                ]}
              />
              <SkillCard
                icon={<Terminal className="h-10 w-10" />}
                title="Developer's Tools"
                skills={[
                  { name: "VS Code", level: 95 },
                  { name: "Git", level: 95 },
                  { name: "Github", level: 95 },
                  { name: "Linux", level: 90 },
                ]}
              />
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h3 className="font-heading text-2xl">Education & Coursework</h3>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Formal Education</h4>
                      <ul className="space-y-3">
                        <li className="border-l-2 border-primary pl-4 py-1">
                          <div className="font-medium">Bachelors of Technology in Information Technology</div>
                          <div className="text-sm text-muted-foreground">Indian Institute of Information Technology, Allahabad <br/> 2023-2027 <br/> 
                          Current GPA: 8.91/10</div>
                        </li>
                        <li className="border-l-2 border-primary pl-4 py-1">
                          <div className="font-medium">Class 12th (Non-medical), CBSE</div>
                          <div className="text-sm text-muted-foreground">Army Public School, Chandimandir<br/> 2022-2023 <br/>
                          Percentage: 95.8%</div>
                        </li>
                        <li className="border-l-2 border-primary pl-4 py-1">
                          <div className="font-medium">Class 10th, CBSE</div>
                          <div className="text-sm text-muted-foreground">Army Public School, Chandimandir<br/> 2020-2021 <br/>
                          Percentage: 98%</div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg">Classroom Coursework</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Data Structures and Algorithms </div>
                            <div className="text-sm text-muted-foreground">Grade obtained: A</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Software Engineering</div>
                            <div className="text-sm text-muted-foreground">Grade obtained: A</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Object Oriented Methodologies</div>
                            <div className="text-sm text-muted-foreground">Grade obtained: A+</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Operating System</div>
                            <div className="text-sm text-muted-foreground">Grade obtained: A</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Computer Networks</div>
                            <div className="text-sm text-muted-foreground">Grade obtained: Currently enrolled</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">
                            Course
                          </Badge>
                          <div>
                            <div className="font-medium">Database Management System</div>
                            <div className="text-sm text-muted-foreground">Grade obtained: Currently enrolled</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="achievements" className="bg-muted/50 py-12 md:py-24 lg:py-32">
            <div className="container">
              <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center mb-12">
                <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Achievements and Position of Responsibilities</h2>
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                  Recognition and milestones from my academic journey.
                </p>
              </div>

              <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 md:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Trophy className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading text-xl">Awards & Recognition</h3>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Qualified JEE Advanced</div>
                              <div className="text-sm text-muted-foreground">Secured AIR 12012 in JEE Advamced 2023 and 99.5 percentile in JEE Mains 2023</div>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Indian Olympiad Qualifier in Mathematics</div>
                              <div className="text-sm text-muted-foreground">Ranked top 300 in North Indian States in 2020 and 2022</div>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Vidyarthi Vigyan Manthan</div>
                              <div className="text-sm text-muted-foreground">Achieved 1st rank at the State Level and attended 3 day National Camp at IIT BHU in 2022</div>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Certificate className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-heading text-xl">Competitive Programming</h3>
                        </div>
                        <ul className="space-y-4">
                          <li className="flex gap-3">
                            <Certificate className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">Leetcode</div>
                              <div className="text-sm text-muted-foreground">Maximum Rating: 1605 <br/> Solved 350+ DSA Questions</div>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Certificate className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">CodeForces</div>
                              <div className="text-sm text-muted-foreground">Maximum Rating: 1407 (Specialist) <br/> Solved 175+ Problems</div>
                            </div>
                          </li>
                          <li className="flex gap-3">
                            <Certificate className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <div>
                              <div className="font-medium">CodeChef</div>
                              <div className="text-sm text-muted-foreground">Maximum Rating: 1698 (3 Star) <br/> Solved 100+ Problems</div>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full bg-primary/10 p-3">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-heading text-xl">Position of Responsibilities</h3>
                      </div>
                      <div className="relative border-l-2 border-primary/30 pl-6 ml-3 space-y-8">
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
                          <div className="font-medium text-lg">Senator, Students’ Gymkhana, Student body of IIIT Allahabad</div>
                          <div className="text-muted-foreground">
                          Elected Senator leading student representation in institutional forums, championing initiatives for student welfare and academic growth. Collaborated with administration to influence policies and drive impactful change.
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">2024-Present</div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
                          <div className="font-medium text-lg">Sports Coordinator, 6th Inter-IIIT Sports Meet</div>
                          <div className="text-muted-foreground">
                          Successfully orchestrated the 6th Inter-IIIT Sports Meet, managing logistics for more than 1800 participants from 21
                          colleges and ensuring smooth event execution through effective coordination and communication
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">2024</div>
                        </div>
                        <div className="relative">
                          <div className="absolute -left-[31px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-background"></div>
                          <div className="font-medium text-lg">Operation Executive, Effervescence, Cultural Fest of IIIT Allahabad</div>
                          <div className="text-muted-foreground">
                          Led operational planning, streamlined event workflows, and ensured seamless coordination among various departments of organizing team for successful fest execution.
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">2024</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container">
              <div className="mx-auto grid max-w-[64rem] gap-8 lg:grid-cols-2">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">Get in Touch</h2>
                  <p className="text-muted-foreground sm:text-lg">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
                  </p>
                  <div className="space-y-2">
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <Link href="mailto:ashishsaraswat1912@gmail.com">
                      <span>ashishsaraswat1912@gmail.com</span>
                      </Link>
                      
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <Link href="https://www.linkedin.com/in/ashish-saraswat-059018327/.com" target="_blank" rel="noreferrer" className="hover:underline">
                        linkedin.com/in/AshishSaraswat
                      </Link>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <Link href="https://github.com/Asheeesh9" target="_blank" rel="noreferrer" className="hover:underline">
                        github.com/Asheeesh9
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <ContactForm />
                  {/* <Card>
                    <CardContent className="p-6">
                      <form className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Name
                            </label>
                            <input
                              id="name"
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="hello@example.com"
                            />
                            
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Subject
                          </label>
                          <input
                            id="subject"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Project Inquiry"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            required
                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Tell me about your project..."
                          />
                        </div>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button type="submit" className="w-full">
                            Send Message
                          </Button> 
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card> */}

                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Ashish Saraswat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Asheeesh9" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button> */}
            {/* <Button variant="ghost" size="icon" asChild>
              <Link href="https://https://www.linkedin.com/in/ashish-saraswat-059018327/." target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button> */}
            {/* <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:ashishsaraswat1912@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button> */}
          </div>
        </div>
      </footer>
    </div>
  )

}







function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  )
  
}


interface Skill {
  name: string
  level: number
}

function SkillCard({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode
  title: string
  skills: Skill[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="p-6 h-full transition-all duration-300 group-hover:shadow-lg border-t-4 border-t-primary/70">
        <div className="flex flex-col items-center mb-4">
          <div className="text-primary mb-2">{icon}</div>
          <h3 className="font-heading text-xl">{title}</h3>
        </div>
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}
