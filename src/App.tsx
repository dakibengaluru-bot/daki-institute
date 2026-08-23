import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  FileSpreadsheet, 
  Terminal, 
  Cpu, 
  Award, 
  Compass, 
  BookOpen, 
  FolderKanban, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  ChevronDown, 
  ArrowRight, 
  GraduationCap, 
  Sparkles,
  Info,
  Calendar,
  X,
  CheckCircle2,
  Lock,
  FileText,
  Users,
  Languages,
  Briefcase,
  MessageSquare,
  Check,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

import Logo from './components/Logo';
import PowerBiDashboard from './components/PowerBiDashboard';
import AdminPanel from './components/AdminPanel';
import { COURSES, HIGHLIGHTS, TESTIMONIALS, FAQS } from './data';
import { Course } from './types';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showAdminPortal, setShowAdminPortal] = useState(false);

  const handleEnrollClick = (courseId: string) => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSegNFodsXlvEMGIp3g1T0jBjJsW7hNPa-p0L0zZHt2nWGVmgg/viewform?usp=publish-editor',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const getLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className="h-6 w-6" />;
      case 'Database': return <Database className="h-6 w-6" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="h-6 w-6" />;
      case 'Terminal': return <Terminal className="h-6 w-6" />;
      case 'BookOpen': return <BookOpen className="h-6 w-6" />;
      case 'Cpu': return <Cpu className="h-6 w-6" />;
      case 'FolderKanban': return <FolderKanban className="h-6 w-6" />;
      case 'Award': return <Award className="h-6 w-6" />;
      case 'Compass': return <Compass className="h-6 w-6" />;
      case 'Briefcase': return <Briefcase className="h-6 w-6" />;
      case 'MessageSquare': return <MessageSquare className="h-6 w-6" />;
      case 'Languages': return <Languages className="h-6 w-6" />;
      case 'Users': return <Users className="h-6 w-6" />;
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'Calendar': return <Calendar className="h-6 w-6" />;
      default: return <GraduationCap className="h-6 w-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ================= HEADER & NAVIGATION ================= */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center">
            <Logo className="h-14 w-auto" />
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#courses" className="hover:text-indigo-600 transition-colors">Courses</a>
            <a href="#highlights" className="hover:text-indigo-600 transition-colors">Why Us</a>
            <a href="#faqs" className="hover:text-indigo-600 transition-colors border-r border-slate-200 pr-8">FAQs</a>
          </nav>

          {/* Contact and CTA Action */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919353039710" 
              className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-indigo-950 hover:text-indigo-600 transition-colors bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-100"
            >
              <Phone className="h-4 w-4 text-indigo-600" />
              +91 9353039710
            </a>

            <button
              onClick={() => handleEnrollClick('')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-md shadow-indigo-100 flex items-center gap-1.5 cursor-pointer"
            >
              Enroll Now
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-900">
        {/* Modern dark grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero text branding */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Badges Flow Container */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {['Power BI', 'SQL', 'Advanced Excel', 'Python', 'ChatGPT', 'Microsoft Copilot', 'Prompt Engineering', 'AI Productivity'].map((badge) => (
                <span key={badge} className="inline-block py-1 px-3 bg-indigo-500/10 text-indigo-300 text-[10px] md:text-xs font-bold tracking-wider uppercase rounded-full border border-indigo-500/20 shadow-sm shadow-indigo-500/5">
                  {badge}
                </span>
              ))}
            </div>
            
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] max-w-3xl">
              Become Job-Ready in Data Analytics with <span className="text-indigo-400 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">Power BI, SQL, Excel & AI</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed">
              Master industry-ready skills with real corporate projects, Prompt Engineering, ChatGPT, Microsoft Copilot, resume preparation, mock interviews, and job assistance.
            </p>

            {/* Feature Check Bullets */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 pt-4 border-t border-slate-900">
              {[
                'Industry-Oriented Curriculum',
                'Live Projects',
                'Resume & CV Preparation',
                'Mock Interviews',
                'Job Assistance',
                'Interview Question Bank',
                'Practice Files',
                'Certificate of Completion'
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                  <span className="text-emerald-400 font-bold font-mono">✓</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Banner Call-To-Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => handleEnrollClick('')}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4 animate-pulse" />
              </button>
            </div>
          </div>

          {/* Brochure Styled Dashboard card mockup */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            {/* Background glowing aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/10 rounded-full filter blur-3xl transform scale-110 -z-10 animate-pulse"></div>
            
            {/* Visual representation card */}
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl w-full max-w-sm md:max-w-md shadow-2xl relative overflow-hidden flex flex-col justify-between h-[420px]">
              
              {/* Card top banner */}
              <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
                <Logo variant="full" showText={false} theme="dark" className="h-10" />
                <span className="text-[10px] bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Career Bootcamp
                </span>
              </div>

              {/* Course Highlights summary */}
              <div className="space-y-4 my-6">
                <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">🔥 Standard Core Pillars:</div>
                <div className="space-y-3">
                  {[
                    'Full Relational Database Querying',
                    'Interactive Executive Dashboards',
                    'Modern AI Workflow Automation',
                    'Placement Support & CV Reviews'
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <div className="h-1.5 w-1.5 bg-indigo-500 rounded-full"></div>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card bottom contact info */}
              <div className="bg-slate-950/80 p-4 sm:p-5 rounded-xl border border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 font-sans">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase font-bold tracking-wide text-indigo-400">
                    Class Format
                  </span>
                  <span className="text-white text-[11px] sm:text-xs font-bold leading-relaxed">
                    Online weekdays / Weekends available
                  </span>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-[9px] uppercase font-bold tracking-wide text-indigo-400">
                    Inquire Today
                  </span>
                  <span className="text-white text-[11px] sm:text-xs font-bold whitespace-nowrap">
                    +91 9353039710
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-mono text-xs font-extrabold text-indigo-600 uppercase tracking-[0.2em] block">
              Outcome-Based Professional Development
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-indigo-950 tracking-tight leading-snug">
              Positioning Your Career for Global Market Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
            <div className="space-y-5">
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Practical Business Analytics, Not Textbook Theory
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                At DAKI AI, we train students from beginner to job-ready level using actual corporate datasets, production-grade dashboards, SQL query pipelines, AI tools, and systematic interview prep templates.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Our core mission is to replace standard textbook lectures with rigorous practical workflows. Instead of copying formulas, you will solve actual operational problems and build professional portfolios recruiters notice.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
              <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                Our Career Preparedness Philosophy:
              </h4>
              <ul className="space-y-3">
                {[
                  'Work with authentic raw business spreadsheets',
                  'Synthesize multi-table SQL queries from real requirements',
                  'Automate report development with Generative AI tools',
                  'Craft customized ATS-friendly personal portfolios'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans leading-normal">
                    <span className="text-indigo-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROGRAMS SECTION ================= */}
      <section id="courses" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-100">
              Courses Offered
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-indigo-950 tracking-tight">
              Guided Specialized Training Programs
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-xl mx-auto">
              Choose from our curated syllabus streams specifically engineered to transition beginners into job-ready enterprise practitioners.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES
              .filter(
                course =>
                  course.title !== 'Kannada Communication Skills' &&
                  course.title !== 'Government School Student Development Program'
              )
              .map(course => (
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      {getLucideIcon(course.icon)}
                    </div>
                    <span className="text-[10px] bg-slate-50 text-slate-500 font-bold px-3 py-1 rounded-full border border-slate-100 font-sans uppercase">
                      {course.duration}
                    </span>
                  </div>
                  
                  {/* Titles */}
                  <h4 className="font-display font-black text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-xs text-indigo-600 font-semibold mt-1 font-sans">{course.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-500 mt-4 leading-relaxed font-sans">
                    {course.description}
                  </p>

                  {/* Course Highlights (features) */}
                  <div className="mt-5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Course Highlights:</span>
                    <ul className="space-y-1.5">
                      {course.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="text-slate-600 text-[11px] font-sans flex items-start gap-1.5 leading-normal">
                          <span className="text-indigo-600 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools Covered */}
                  {course.tools && course.tools.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">Tools Covered:</span>
                      <div className="flex flex-wrap gap-1">
                        {course.tools.map((tool) => (
                          <span key={tool} className="bg-slate-100 text-slate-600 text-[9px] font-bold px-2 py-0.5 rounded uppercase font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">Key Skills:</span>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.map((skill) => (
                        <span key={skill} className="bg-indigo-50/60 text-indigo-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions bottom */}
                <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-700 text-[11px] font-extrabold py-3 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer font-sans"
                  >
                    <Info className="h-3.5 w-3.5" />
                    Syllabus
                  </button>
                  <button
                    onClick={() => handleEnrollClick(course.id)}
                    className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-[11px] font-extrabold py-3 px-2 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer font-sans shadow-sm shadow-indigo-600/10"
                  >
                    Enroll Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NEW SECTION: CAREER SUPPORT ================= */}
      <section className="py-24 bg-indigo-950 text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-indigo-500/15 text-indigo-300 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-500/30">
              Placement Pipeline
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Premium Corporate Career Support
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto">
              Our professional career coaching systems guarantee students are ready to confidently stand out in highly competitive job applications and recruiters channels.
            </p>
          </div>

          {/* Premium cards list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Professional Resume Building', desc: 'Craft high-scoring ATS resumes utilizing advanced formatting and industry keywords.', icon: 'FileText' },
              { title: 'LinkedIn Profile Optimization', desc: 'Structure headers, summaries, and skills categories to rank higher in recruiter searches.', icon: 'Linkedin' },
              { title: 'GitHub & Portfolio Creation', desc: 'Compile interactive Power BI and SQL projects into an elegant personal digital portfolio.', icon: 'FolderKanban' },
              { title: 'Mock Technical Interviews', desc: 'Simulate intensive live technical interviews with active industry practitioners.', icon: 'Cpu' },
              { title: 'HR Interview Preparation', desc: 'Master behavioral response strategies using the certified STAR explanation method.', icon: 'Users' },
              { title: 'Aptitude Practice', desc: 'Solve logical reasoning, quant mechanics, and pattern analytics mock tests.', icon: 'GraduationCap' },
              { title: 'SQL Interview Questions', desc: 'Access an advanced question bank of the most common corporate technical queries.', icon: 'Database' },
              { title: 'Power BI Interview Questions', desc: 'Practice addressing performance modeling, RLS configurations, and complex DAX requests.', icon: 'BarChart3' },
              { title: 'AI Prompt Practice', desc: 'Learn to use Generative AI tools to write scripts and automate analytical processes.', icon: 'Terminal' },
              { title: 'Job Assistance', desc: 'Unlock consistent job application notifications curated directly from active networks.', icon: 'Briefcase' },
              { title: 'Placement Guidance', desc: 'Receive continuous profile reviews, counseling, and interview scheduling checklists.', icon: 'Compass' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/20">
                    {getLucideIcon(item.icon)}
                  </div>
                  <h4 className="font-display font-bold text-white text-sm leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NEW SECTION: AI TOOLS YOU WILL MASTER ================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-100">
              Future-Proof Skills
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-indigo-950 tracking-tight">
              AI Tools You Will Master
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-xl mx-auto">
              We integrate Generative AI into every module so you learn to execute data queries, write documentation, and automate reports 10x faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { tool: 'ChatGPT', desc: 'Learn context prompting, structural formulas generation, and rapid SQL syntax debugging workflows.' },
              { tool: 'Microsoft Copilot', desc: 'Harness native Excel and Word integrations to generate summaries and charts instantly.' },
              { tool: 'Google Gemini', desc: 'Execute deep research, formulate query briefs, and analyze unstructured raw reports.' },
              { tool: 'Claude', desc: 'Leverage industry-best code synthesis, functional logic building, and Artifact prototyping.' },
              { tool: 'Perplexity AI', desc: 'Conduct comprehensive competitor research and source verified market analytics with citations.' },
              { tool: 'NotebookLM', desc: 'Synthesize messy corporate documents into structured, bite-sized podcast outlines.' },
              { tool: 'Power BI Copilot', desc: 'Generate visual outlines, DAX descriptions, and custom report templates automatically.' },
              { tool: 'Excel AI', desc: 'Formulate highly complex nested logical statements and calculations through plain English commands.' },
              { tool: 'Prompt Engineering', desc: 'Master context modeling, few-shot prompts, and structural formatting blueprints.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 text-[10px] font-bold uppercase rounded-md tracking-wider">
                    <Cpu className="h-3 w-3" />
                    {item.tool}
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= NEW SECTION: GOVERNMENT SCHOOL PROGRAM ================= */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase rounded-full border border-emerald-100">
              Social Initiative
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-indigo-950 tracking-tight">
              Government School Student Development Program
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-xl mx-auto">
              Special weekend and holiday programs focused on improving communication, confidence, digital literacy, and career awareness for government school students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'English Speaking', desc: 'Learn conversational speaking vocabulary, greetings, and basic grammatical structures through fun games.', icon: 'MessageSquare' },
              { title: 'Kannada Communication', desc: 'Enhance regional speaking confidence, vocabulary depth, and storytelling capabilities.', icon: 'Languages' },
              { title: 'Public Speaking', desc: 'Overcome stage fright and practice presenting clear speeches in front of large audiences.', icon: 'GraduationCap' },
              { title: 'Computer Fundamentals', desc: 'Acquire practical knowledge of keyboards, mouse navigation, and basic operating software.', icon: 'Terminal' },
              { title: 'Personality Development', desc: 'Build self-respect, active listening skills, teamwork dynamics, and positive personal values.', icon: 'Users' },
              { title: 'Career Guidance', desc: 'Examine future path structures and understand the skillsets needed for tech and enterprise careers.', icon: 'Compass' },
              { title: 'Digital Skills', desc: 'Learn to search educational content on the internet, formulate lists, and type documents.', icon: 'FileText' },
              { title: 'Basic AI Awareness', desc: 'Get introduced to how computers and AI assistants operate to solve everyday arithmetic queries.', icon: 'Cpu' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100">
                    {getLucideIcon(item.icon)}
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE DAKI ================= */}
      <section id="highlights" className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-100">
              Daki Advantage
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-indigo-950 tracking-tight">
              Why Choose DAKI AI?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-md mx-auto">
              Our structured weekend training pipelines combine expert technical logic with premium career guidance.
            </p>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHTS.map(hl => (
              <div 
                key={hl.title} 
                className="bg-white border border-slate-100 p-6 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 duration-300"
              >
                <div className="space-y-4">
                  <div className="h-10 w-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                    {getLucideIcon(hl.icon)}
                  </div>
                  <h4 className="font-display font-bold text-slate-950 text-sm leading-tight">
                    {hl.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {hl.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= STUDENT OUTCOMES (KPIs ACHIEVEMENTS) ================= */}
      <section className="py-24 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-3">
            <span className="inline-block py-1 px-4 bg-indigo-500/15 text-indigo-300 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-500/30">
              Student Progress
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Measurable Student Achievements
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto">
              No generic testimonials. We track concrete, real skills and portfolio milestones that prove our students are ready to excel.
            </p>
          </div>

          {/* KPI metrics achievements list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { score: '100+', label: 'Dashboards Created', desc: 'Real-world business dashboards generated from scratch using raw multi-table worksheets.' },
              { score: '5000+', label: 'SQL Queries Practiced', desc: 'Intensive database commands, aggregation commands, multi-table joins, and CTE scripts.' },
              { score: '100%', label: 'Resume Portfolio Built', desc: 'Comprehensive technical repositories hosted live on GitHub and optimized LinkedIn profiles.' },
              { score: 'Ready', label: 'Interview Preparedness', desc: 'Simulated technical mock loops, conceptual whiteboarding practice, and behavioral HR prep.' },
              { score: 'Active', label: 'Hands-on AI Projects', desc: 'Integration of ChatGPT, Copilot, and Prompt Engineering into daily corporate reporting.' },
              { score: '20+', label: 'Business Case Studies', desc: 'Analytical breakdowns of marketing strategies, logistics models, and corporate budgets.' }
            ].map((metric, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="font-display font-black text-4xl sm:text-5xl text-indigo-400 block tracking-tight">
                    {metric.score}
                  </span>
                  <h4 className="font-display font-bold text-white text-base">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQs ACCORDION ================= */}
      <section id="faqs" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="inline-block py-1 px-4 bg-indigo-50 text-indigo-700 text-xs font-bold tracking-widest uppercase rounded-full border border-indigo-100">
              Information Desk
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-indigo-950 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-slate-500 font-sans max-w-sm mx-auto">
              Find solutions regarding admission structures, course duration, and logistics.
            </p>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left py-2 group cursor-pointer"
                  >
                    <span className="font-display font-bold text-slate-950 text-sm group-hover:text-indigo-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="pb-4 pt-2 text-xs text-slate-500 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SYLLABUS DETAIL MODAL ================= */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-white w-full max-w-2xl rounded-2xl flex flex-col max-h-[85vh] shadow-2xl overflow-hidden">
            {/* Modal Top Header */}
            <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Logo variant="icon" className="h-7 w-7" />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">{selectedCourse.title} Syllabus</h4>
                  <span className="text-[10px] text-slate-400 font-mono font-medium block">{selectedCourse.duration} • {selectedCourse.level}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-white bg-slate-800/60 p-2 rounded-xl transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Syllabus Chapters List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="p-3 bg-slate-950/50 border border-slate-800 rounded-xl">
                <h5 className="text-xs font-bold text-indigo-400 mb-1">Target Core Skills:</h5>
                <p className="text-[11px] text-slate-300 leading-normal font-sans">
                  {selectedCourse.skills.join('  •  ')}
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Week-By-Week Modules:</span>
                
                {selectedCourse.syllabus.map((syl, sIdx) => (
                  <div key={sIdx} className="border-l-2 border-indigo-500 pl-4 space-y-1.5 py-1">
                    <span className="text-[10px] uppercase font-bold text-indigo-400 block font-mono">{syl.week}</span>
                    <span className="text-xs font-bold text-white block">{syl.topic}</span>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {syl.details.map((det, dIdx) => (
                        <li key={dIdx} className="text-[11px] text-slate-400 font-sans leading-relaxed">
                          {det}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="bg-slate-950 border-t border-slate-800 px-6 py-3.5 flex items-center justify-between">
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-slate-400 hover:text-white text-xs font-medium cursor-pointer"
              >
                Close Curriculum
              </button>
              <button
                onClick={() => {
                  handleEnrollClick(selectedCourse.id);
                  setSelectedCourse(null);
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer font-sans shadow-md shadow-indigo-650/10"
              >
                Enroll in This Course
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= ADMIN LEADS DASHBOARD INJECT ================= */}
      {showAdminPortal && (
        <AdminPanel onClose={() => setShowAdminPortal(false)} />
      )}

      {/* ================= FOOTER CONTACT ================= */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Logo variant="full" theme="dark" className="h-14 w-auto" />
            <p className="text-[11px] text-slate-500 font-sans leading-relaxed max-w-xs">
              DAKI AI: Guide path for Business Intelligence, SQL analytics, advanced spreadsheet automations, and LLM-powered business integration systems.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-white text-xs uppercase tracking-wider">Useful Navigation</h5>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Our Courses</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Career Support</a></li>
              <li><a href="#courses" className="hover:text-indigo-400 transition-colors">Government School Program</a></li>
            </ul>
          </div>

          {/* Location info */}
          <div className="space-y-4">
            <h5 className="font-display font-bold text-white text-xs uppercase tracking-wider">Our Center Location</h5>
            <div className="space-y-3.5 text-xs font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="font-sans leading-normal">
                  Banasawadi,<br />
                  Bengaluru, Karnataka, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <a href="mailto:daki.bengaluru@gmail.com" className="font-mono hover:text-indigo-400 transition-colors">daki.bengaluru@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Follow Us social networks */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h5 className="font-display font-bold text-white text-xs uppercase tracking-wider">Follow Us On Socials</h5>
              <div className="flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/daki.institute/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl hover:text-indigo-400 hover:border-indigo-400/50 transition-all text-slate-300"
                  title="Follow Daki on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl hover:text-indigo-400 hover:border-indigo-400/50 transition-all text-slate-300"
                  title="Subscribe to Daki on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Hidden admin lead-portal portal button */}
            <div className="pt-6">
             </div>
          </div>

        </div>

        {/* Copy lines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-600 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 DAKI AI. All rights reserved. Registered in Bengaluru, Karnataka.</span>
          <span> Built for practical, AI-powered learning. 
          </span>
        </div>
      </footer>

    </div>
  );
}
