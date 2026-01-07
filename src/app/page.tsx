"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Phone, Mail, Download, ExternalLink, Github } from "lucide-react";

// Navigation Component
function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "background", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skill" },
    { href: "#background", label: "Background" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050420]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link text-sm md:text-base font-medium transition-colors ${
                  activeSection === link.href.slice(1) ? "text-[#e3c783]" : "text-white hover:text-[#e3c783]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          {/* <div className="flex-1 text-center lg:text-left"> */}
          <div className="flex-1 text-center lg:text-left lg:pr-12">
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="badge-outline text-sm md:text-base">
                DATA ANALYST & FULL-STACK DEVELOPER <span className="text-white">PORTFOLIO</span>
              </span>
            </div>

            {/* Name */}
            <h1 className="hero-name text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">ALIU</span>
              <br />
              <span className="text-[#e3c783]">SUNDAY</span>
              <br />
              <span className="text-white">ADUKWU</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-white mb-8">
              I help people finding <span className="text-[#e3c783]">insights</span>
              <br />
              through <span className="text-[#e3c783]">data</span> 
              <span className="text-[#e3c783]"> & also skilled as full-stack developer</span>
            </p>
          </div>
            
          {/* Right Content - Profile Image */}
           <div className="flex-1 flex justify-center lg:justify-center lg:pr-24">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#e3c783]/30" />
              {/* Yellow background circle */}
              <div className="absolute inset-2  bg-[#e3c783] rounded-full overflow-hidden">
                <Image
                  src="/images/profile-photo.png"
                  alt="Aliu Sunday Adukwu"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <div className="w-7 h-11 rounded-full border-2 border-white flex justify-center overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-[#e3c783] mt-2 animate-scroll-indicator" />
          </div>
        </div>

      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="mb-12">
          <span className="badge-outline text-sm">About Me</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left - Greeting */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hello,
              <br />
              I'm <span className="text-[#e3c783]">Sunday!</span>
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed mb-6">
              <span className="text-[#e3c783] font-semibold">Data Reporting / Analyst</span> and{" "}
              <span className="text-[#e3c783] font-semibold"> Full-Stack .NET Developer </span> 
             experienced in building end-to-end solutions that turn data into actionable insights and modern web applications. I design scalable systems, data pipelines, and interactive dashboards that enable data-driven decisions and reliable software delivery.
             Proficient in{" "}
              <span className="text-[#e3c783] font-semibold">
             SQL, Python, C#, .NET, Angular, JavaScript, Excel, Power BI, Tableau, and Looker Studio, </span>{" "} with hands-on experience across the full data lifecycle-from extraction and transformation to application development, automated reporting, and dashboarding. 
             I bridge data, engineering, and business needs by analyzing requirements, modeling data, building software and dashboards, and clearly communicating insights to both technical and non-technical stakeholders to deliver solutions that are robust, actionable, and impactful.
            </p>

              {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/aliu-sunday-adukwu-b2a336b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#e3c783] flex items-center justify-center hover:bg-[#e3c783] hover:text-[#050420] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/33745999062"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#e3c783] flex items-center justify-center hover:bg-[#e3c783] hover:text-[#050420] transition-all"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:sundayadukwu.aliu@audencia.com"
                className="w-10 h-10 rounded-full border-2 border-[#e3c783] flex items-center justify-center hover:bg-[#e3c783] hover:text-[#050420] transition-all"
              >
                <Mail size={18} />
              </a>
              <a href="#projects" className="btn-outline inline-block">
              Projects
            </a>
             <a
              href="https://drive.google.com/drive/u/2/folders/1XR-a652QG1lG_RXDICluI-IPSQ9ns0AR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
             <a
                href="https://github.com/LiuSuny"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#e3c783] flex items-center justify-center hover:bg-[#e3c783] hover:text-[#050420] transition-all"
              >
                <Github size={18} />
              </a>
            </div>
            {/* <a
              href="https://drive.google.com/drive/u/2/folders/1XR-a652QG1lG_RXDICluI-IPSQ9ns0AR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a> */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const programmingTools = [
    { name: "SQL" },
    { name: "Python" },
    { name: "C#" },
    { name: "ASP .NET" },
    { name: "JavaScript" },
    { name: "Angular" },
  ];

  const analyticTools = [
    { name: "Microsoft Excel" },
    { name: "Google Sheet" },
    { name: "Google BigQuery" },
    { name: "Visual Code Studio" },
  ];

  const visualizationTools = [
    { name: "Power BI" },
    { name: "Tableau" },
    { name: "Looker Studio" },
  ];

  const analyticMethods = [
    "EDA",
    "Segmentation / Clustering",
    "Cohort",
    "Linear Regression",
    "Logistic Regression",
    "Statistic",
    "A/B Testing",
    "SQL Analytics",
    "Dashboarding & Reporting",
    "Performance Metrics Analysis",
    "ANOVA",
    "Hypothesis Testing",
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0835]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Tool Categories */}
          <div className="flex-1">
            {/* Programming Languages */}
            <div className="mb-10">
              <h3 className="text-[#e3c783] text-sm font-semibold mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-4">
                {programmingTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="skill-icon flex items-center gap-3 bg-[#050420] px-4 py-3 rounded-lg border border-[#e3c783]/20"
                  >
                    <div className="w-8 h-8 bg-[#e3c783] rounded flex items-center justify-center">
                      <span className="text-[#050420] font-bold text-xs">
                        {tool.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Analytic Tools */}
            <div className="mb-10">
              <h3 className="text-[#e3c783] text-sm font-semibold mb-4">Data Analytic Tools</h3>
              <div className="flex flex-wrap gap-4">
                {analyticTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="skill-icon flex items-center gap-3 bg-[#050420] px-4 py-3 rounded-lg border border-[#e3c783]/20"
                  >
                    <div className="w-8 h-8 bg-[#e3c783] rounded flex items-center justify-center">
                      <span className="text-[#050420] font-bold text-xs">
                        {tool.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Visualization Tools */}
            <div className="mb-10">
              <h3 className="text-[#e3c783] text-sm font-semibold mb-4">Data Visualization Tools</h3>
              <div className="flex flex-wrap gap-4">
                {visualizationTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="skill-icon flex items-center gap-3 bg-[#050420] px-4 py-3 rounded-lg border border-[#e3c783]/20"
                  >
                    <div className="w-8 h-8 bg-[#e3c783] rounded flex items-center justify-center">
                      <span className="text-[#050420] font-bold text-xs">
                        {tool.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Technical Skills */}
          <div className="flex-1">
            <div className="bg-[#050420] rounded-xl p-8 border border-[#e3c783]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#e3c783] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#050420]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold">Technical Skills</h3>
                  <p className="text-[#e3c783] text-sm">Data Analytic Methods</p>
                </div>
              </div>

              <ul className="space-y-3">
                {analyticMethods.map((method) => (
                  <li key={method} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#e3c783] rounded-full" />
                    <span className="text-gray-300">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Background Section
function BackgroundSection() {
  const education = [
    {
      institution: "Audencia Business School (France)",
      program: "Master's degree, Digital Business & Data Management (2027)",
      grade: "Grade: 91 / 100",
      description:
        "Pursuing a Master’s degree focused on digital business strategy and data management, with advanced coursework in data analytics, data-driven decision-making, visualization, and the application of analytics to real-world business challenges.",
    },
    {
      institution: "Southern Federal University (former Rostov State University)",
      program: "Master's degree, Economics & Law (2019)",
       grade: "Grade: 98 / 100",
      description:
        "Completed a Master’s degree with a focus on economics, law, and management principles, including applied training in the banking sector through a structured management trainee program combining academic study with hands-on, on-the-job experience.",
    },
    {
      institution: "RISEBA University of Applied Sciences",
      program: "Master of Business Administration - MBA, (Exchange/Semester Program) (2018)",
       grade: "Grade: 92 / 100",
      description:
        "Completed an MBA exchange semester focused on international business, strategic management, and leadership, gaining exposure to global business practices and applied case-based learning.",
    },
    {
      institution: "Southern Federal University (former Rostov State University)",
      program: "Bachelor's degree, Economics  (2017)",
       grade: "Grade: 97 / 100",
      description:
          "Completed a Bachelor’s degree in Economics with a strong foundation in microeconomics, macroeconomics, statistics, and quantitative analysis, developing analytical and problem-solving skills applicable to business and financial contexts.",
    },
  ];

  const experience = [
    {
      company: "Medotrade",
      roles: [
        {
          title: "Full Stack Developer",
          type: "Full time, Jun 2023 - Aug 2025",
          description:
            "Built full-stack .NET applications with ASP.NET MVC and .NET Core, REST APIs and responsive front-end components, Optimized databases and application performance",
        },
      ],
    },
    {
      company: "Green Birch Tech",
      roles: [
        {
          title: "Data Analyst",
          type: "Full time, Jan 2021 to Oct 2022",
          description:
            "Extracted and analyzed data from SQL Server and PostgreSQL to support strategic decisions, Developed interactive Power BI dashboards and reports to track KPIs and trends, Conducted data modeling, trend analysis, and reporting for actionable insights",
        },
      ],
    },
     {
      company: "Fila Energy Service Ltd",
      roles: [
        {
          title: "Business Development Specialist",
          type: "Full time, Sep 2019 - Dec 2020",
          description:
            "Developed data-driven business strategies for growth and performance improvement, Leveraged analytics and reporting to optimize sales and customer acquisition, Collaborated with teams to enhance strategic planning, KPI tracking, and business insights",
        },
      ],
    },
     {
      company: "Denali Backcountry Lodge, Alaska, USA",
      roles: [
        {
          title: "Kitchen Assistant",
          type: "Full time, May 2016 - October 2016",
          description:
            "Assisted kitchen team with meal preparation and basic food prep, Helped organize workstations and ensured compliance with food safety standards",
        },
      ],
    },
    
  ];

  return (
    <section id="background" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Education & Experience <span className="text-[#e3c783]">Background</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Education Column */}
          <div className="flex-1">
            <h3 className="text-[#e3c783] text-xl font-bold mb-8 uppercase tracking-wider">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.institution} className="timeline-item">
                  <h4 className="text-[#e3c783] font-semibold text-lg">{edu.institution}</h4>
                  <p className="text-white font-medium mt-1">{edu.program}</p>
                  {edu.grade && <p className="text-gray-400 text-sm mt-1">{edu.grade}</p>}
                  {edu.description && (
                    <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="flex-1">
            <h3 className="text-[#e3c783] text-xl font-bold mb-8 uppercase tracking-wider">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.company} className="timeline-item">
                  <h4 className="text-[#e3c783] font-semibold text-lg">{exp.company}</h4>
                  {exp.roles.map((role) => (
                    <div key={role.title} className="mt-3">
                      <p className="text-white font-medium">{role.title}</p>
                      <p className="text-gray-500 text-sm">({role.type})</p>
                      {role.description && (
                        <p className="text-gray-400 text-sm mt-1">{role.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const projects = [
       
     {
      number: "01",
      title: "BRAND PERFORMANCE & PROFIT INSIGHTS",
      subtitle: "DATA-DRIVEN PRICING & PROFITABILITY",
      description:
        "An end-to-end retail performance analysis focused on evaluating brand-level sales, pricing, discounts, and profitability. The dashboard analyzes top and bottom performing brands by profit margin, discount strategy, product variety, and average sales price to identify key drivers of profitability and pricing efficiency. The analysis delivers actionable insights and recommendations to optimize discount strategies, improve margins, and enhance overall brand performance.",
      tools: "Python (Google Collab), Power BI, SQL (BigQuery)",
      analysis: "EDA, KPI Analysis, Comparative Brand Analysis",
      image: "/images/fashion-1.png",
      secondImage: "/images/fashion-2.png",
      links: [
        {
          label: "Power BI Dashboard",
          url: "https://app.powerbi.com/groups/me/reports/ceb2da5a-ad4a-4889-aa5c-7a255f18d3a0/329616ecc44122d2cccc?ctid=7a879e87-03b2-441a-a2e3-3bbdc5b62f1f&experience=power-bi",
        },
         {
          label: "Google File (Analysis & Code)",
          url: "https://drive.google.com/drive/u/0/folders/1cap-dQbbrsw_5fU1F2gCUBK7uNRTVMdG",
        },
      ],
    },
    {
      number: "02",
      title: "INSURANCE CLAIMS & POLICY ANALYTICS",
      subtitle: "DATA-DRIVEN CLAIMS, POLICY & SATISFACTION ANALYTICS",
      description:
        "An end-to-end insurance analytics dashboard that evaluates policy performance, claim outcomes, and customer feedback. It highlights claim status, coverage and premium amounts, active vs inactive policies, and sentiment-based satisfaction to identify operational bottlenecks and opportunities to improve claims processing efficiency and customer experience.",
      tools: "Python (Google Collab), Power BI, Ecxel, SQL (BigQuery)",
      analysis: "EDA, KPI Analysis",
      image: "/images/insurance-1.png",
      secondImage: "/images/insurance-2.png",
      links: [
        {
          label: "Power BI Dashboard",
          url: "https://app.powerbi.com/groups/me/reports/1773214d-08f4-4dda-8dd8-b7123c0284ad/7817b3380e62e7cfef12?ctid=7a879e87-03b2-441a-a2e3-3bbdc5b62f1f&experience=power-bi",
        },
         {
          label: "Google File (Analysis & Code)",
          url: "https://drive.google.com/drive/u/0/folders/1ZQFEN8dhfl2eqdI5XkDVG9dCixXP70N-",
        },
      ],
    },
    {
      number: "03",
      title: "STUDENT WELL-BEING & STRESS INSIGHTS",
      subtitle: " DATA-DRIVEN ACADEMIC & FINANCIAL PRESSURE ANALYSIS",
      description:
       "An end-to-end student well-being analysis focused on evaluating sleep duration, study hours, satisfaction, academic pressure, and financial stress. The dashboard compares student counts across risk factors to identify patterns linked to potential depression and burnout and supports targeted interventions to improve overall student health and performance.",
      tools: " Python (Google Collab), Tableau, SQL (BigQuery)",
      analysis: " EDA, KPI Analysis, Comparative Brand Analysis",
      image: "/images/student-depression-2.png",
      secondImage: "/images/student-depression-1.png",
      links: [
        {
          label: "Tableau Dashboard",
          url: "https://prod-ch-a.online.tableau.com/#/site/sundayadukwualiu-573b35094a/workbooks/323890/views",
        },
         {
          label: "Google File (Analysis & Code)",
          url: "https://drive.google.com/drive/u/0/folders/1_6l5jeUD_Yg221BmgInfx1TTWNBP1RW3",
        },
      ],
    },
    {
      number: "04",
      title: "DIGITAL TRANSACTION PERFORMANCE INSIGHTS",
      subtitle: "DATA-DRIVEN FEES, VOLUMES & PROFITABILITY",
      description:
        "An end-to-end UPI transaction analysis focused on evaluating city-wise volumes, fees, discounts, and profitability across banks, devices, and customer segments. The dashboard tracks monthly transaction trends, remaining balances, and high-performing city–currency combinations to identify key drivers of profitability and pricing efficiency. The analysis delivers actionable insights and recommendations to refine fee and discount structures, improve margins, and enhance overall digital payment performance.",
      tools: "Python (Google Collab), Power BI, SQL (BigQuery)",
      analysis: "EDA, KPI Analysis, Comparative Brand Analysis",
      image: "/images/UPI-Transaction-1.png",
      secondImage: "/images/UPI-Transaction-2.png",
      links: [ 
        {
          label: "Power BI Dashboard",
          url: "https://app.powerbi.com/groups/me/reports/b9b85fc3-1003-416f-a773-d91329358d38/09056df2520223c2e1b4?ctid=7a879e87-03b2-441a-a2e3-3bbdc5b62f1f&experience=power-bi",
        },
         {
          label: "Google File (Analysis & Code)",
          url: "https://drive.google.com/drive/u/0/folders/1oJI5QjZ9H0CgS86f9_BAsD_7DzyGXWVj",
        },
      ],
    },
    
    
     {
      Name: " Notable .Net Developer Project Projects",
      number: "05",
      title: "SKINET ONLINE SHOP – ASP.NET CORE WEB API + ANGULAR",
      subtitle: "SCALABLE ONLINE STORE BUILT WITH .NET CORE AND ANGULAR",
      description:
        "A production-ready online marketplace built with ASP.NET Core Web API and Angular. Features complete retail functionality including product management, secure payments, user authentication, and order processing. Delivers insights on sales performance, inventory efficiency, and customer behavior to optimize pricing and promotional strategies. Built with scalability, maintainability, and modern development practices.",
      tools: "ASP.NET Core Web API, Angular, Entity Framework, SQL Server, Azure, Stripe API, Docker, kubernetes",
      analysis: "E-commerce Functionality, Sales Analytics, User Behavior Tracking",
      image: "/images/skinet-1.png",
      secondImage: "/images/skinet-2.png",
      links: [
        {
          label: "Github Repository",
          url: "https://github.com/LiuSuny/Skinet-Ecommerce",
        },
      ],
    },
     {
      number: "06",
      title: "SOCIAL DATING PLATFORM",
      subtitle: "FULLY FUNCTIONAL SOCIAL DATING APPLICATION WITH REAL-TIME FEATURES", 
      description:
        "A comprehensive social dating platform developed using ASP.NET Core and Angular. The application includes user authentication, profile management, real-time messaging, photo uploads, and match recommendations. It features an intuitive UI/UX design, robust backend architecture, and seamless integration with third-party services for enhanced user experience. The platform is built for scalability and security, ensuring reliable performance under high user loads.",
      tools: "ASP.NET Core, Angular, SignalR, Entity Framework, SQL Server",  
      analysis: "User Engagement, Matchmaking Efficiency, Real-Time Interaction", 
      image: "/images/DateApp-1.png",
      secondImage: "/images/DateApp-2.png",
      links: [
        {
          label: "Github Repository",
          url: "https://github.com/LiuSuny/Dating-App",
        },
      ],
    },
  ];
    

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#050420]">
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <div className="mb-12">
          <span className="badge-outline text-sm">
            Notable <span className="text-white">Projects</span>
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-24">
          {projects.map((project) => (
            <div key={project.number} className="project-card">
              {/* Project Header */}
              <div className="flex items-start gap-6 mb-8">
                <span className="text-6xl md:text-7xl font-bold text-white/20">
                  {project.number}
                </span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-xl md:text-2xl text-[#e3c783]">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Images */}
                <div className="flex-1 flex flex-col sm:flex-row gap-4">
                  <div className="relative w-full sm:w-1/2 h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-full sm:w-1/2 h-48 md:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={project.secondImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                  <div className="mb-6">
                    <p className="text-sm">
                      <span className="text-[#e3c783] font-semibold">Tools:</span>{" "}
                      <span className="text-gray-300">{project.tools}</span>
                    </p>
                    <p className="text-sm mt-1">
                      <span className="text-[#e3c783] font-semibold">Analysis:</span>{" "}
                      <span className="text-gray-300">{project.analysis}</span>
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-btn inline-flex items-center gap-2"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA: More Projects on GitHub */}
      <div className="mt-16 text-center">
        <p className="text-white/80 text-lg mb-4">
          For more projects, kindly click the GitHub link below
        </p>

        <a
          href="https://github.com/LiuSuny"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#e3c783] text-[#e3c783] rounded-md font-semibold transition-all duration-300 hover:bg-[#e3c783] hover:text-[#050420]"
        >
          View More Projects on GitHub
        </a>
      </div>

      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-[#0a0835]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Info</h2>
        <p className="text-gray-300 text-lg mb-12">Let's connect and work together!</p>

        {/* <div className="grid md:grid-cols-3 gap-8"> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aliu-sunday-adukwu-b2a336b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-[#050420] rounded-xl border border-[#e3c783]/20 hover:border-[#e3c783]/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#e3c783] flex items-center justify-center mb-4 group-hover:bg-[#e3c783] transition-colors">
              <Linkedin className="text-[#e3c783] group-hover:text-[#050420]" size={28} />
            </div>
            <h3 className="text-[#e3c783] font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-400 text-sm">linkedin.com/in/aliu-sunday-adukwu</p>
          </a>

          {/* Phone */}
          <a
            href="https://wa.me/333745999062"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-[#050420] rounded-xl border border-[#e3c783]/20 hover:border-[#e3c783]/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#e3c783] flex items-center justify-center mb-4 group-hover:bg-[#e3c783] transition-colors">
              <Phone className="text-[#e3c783] group-hover:text-[#050420]" size={28} />
            </div>
            <h3 className="text-[#e3c783] font-semibold mb-1">Phone (Whatsapp)</h3>
            <p className="text-gray-400 text-sm">+33 745 999 062</p>
          </a>
              {/* Github */}
           <a
            href="https://github.com/LiuSuny"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-[#050420] rounded-xl border border-[#e3c783]/20 hover:border-[#e3c783]/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#e3c783] flex items-center justify-center mb-4 group-hover:bg-[#e3c783] transition-colors">
              <Github className="text-[#e3c783] group-hover:text-[#050420]" size={28} />
            </div>
            <h3 className="text-[#e3c783] font-semibold mb-1">Github</h3>
            <p className="text-gray-400 text-sm">github.com/LiuSuny</p>
          </a>
          {/* Email */}
          <a
            href="mailto: aliusunny@hotmail.com"
            className="flex flex-col items-center p-6 bg-[#050420] rounded-xl border border-[#e3c783]/20 hover:border-[#e3c783]/50 transition-all group"
          >
            <div className="w-16 h-16 rounded-full border-2 border-[#e3c783] flex items-center justify-center mb-4 group-hover:bg-[#e3c783] transition-colors">
              <Mail className="text-[#e3c783] group-hover:text-[#050420]" size={28} />
            </div>
            <h3 className="text-[#e3c783] font-semibold mb-1">E-mail</h3>
            <p className="text-gray-400 text-sm">aliusunny@hotmail.com</p>
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#050420] border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © 2026 Aliu Sunday Adukwu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-[#050420]">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <BackgroundSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
