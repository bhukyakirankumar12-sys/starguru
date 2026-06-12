import { Injectable } from '@angular/core';
import {
  AdvantageItem,
  CaseStudy,
  IndustryItem,
  ProcessStep,
  ServiceItem,
  TechGroup,
  Testimonial,
} from './models';

@Injectable({ providedIn: 'root' })
export class ContentService {
  services: ServiceItem[] = [
    { title: 'Custom Software Development', description: 'Enterprise-grade applications built for scale, security, and speed.', icon: '🧩' },
    { title: 'Web Application Development', description: 'High-performing web products with exceptional UX and integrations.', icon: '🌐' },
    { title: 'Mobile Application Development', description: 'Cross-platform mobile experiences for growth and engagement.', icon: '📱' },
    { title: 'AI & Automation Solutions', description: 'LLM-powered copilots, automation workflows, and smart assistants.', icon: '🤖' },
    { title: 'Cloud Solutions', description: 'Secure cloud migration, modernization, and managed architecture.', icon: '☁️' },
    { title: 'Digital Transformation', description: 'Streamline operations, data, and customer journeys for digital growth.', icon: '⚙️' },
    { title: 'IT Consulting', description: 'Strategy, roadmap, architecture, and executive advisory for complex programs.', icon: '🧠' },
    { title: 'Technology Staffing', description: 'Augment your teams with elite engineers and delivery specialists.', icon: '👥' },
    { title: 'QA & Testing', description: 'Quality engineering, automation, and release confidence at enterprise scale.', icon: '✅' },
    { title: 'DevOps & Cloud Engineering', description: 'CI/CD pipelines, observability, infrastructure automation, and reliability.', icon: '🚀' },
    { title: 'Data Engineering', description: 'Modern data platforms, ETL pipelines, and analytics foundations.', icon: '📊' },
    { title: 'Cyber Security', description: 'Secure-by-design engineering, governance, and resilience strategies.', icon: '🔐' },
  ];

  techGroups: TechGroup[] = [
    { label: 'Frontend', items: ['Angular', 'React', 'Vue'] },
    { label: 'Backend', items: ['.NET', 'Java', 'Node.js', 'Python'] },
    { label: 'Database', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB'] },
    { label: 'Cloud', items: ['AWS', 'Azure', 'GCP'] },
    { label: 'AI', items: ['OpenAI', 'LLM', 'RAG', 'Vector Databases', 'AI Agents'] },
    { label: 'DevOps', items: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'] },
  ];

  industries: IndustryItem[] = [
    { name: 'Healthcare', detail: 'Patient portals, care analytics, and secure interoperability.' },
    { name: 'Finance', detail: 'Regulatory-ready platforms, fraud intelligence, and data modernization.' },
    { name: 'Manufacturing', detail: 'Smart operations, ERP integrations, and process automation.' },
    { name: 'Retail', detail: 'Omnichannel commerce, personalization, and digital storefronts.' },
    { name: 'Logistics', detail: 'Route optimization, fulfillment intelligence, and tracking ecosystems.' },
    { name: 'Automotive', detail: 'Connected vehicle platforms and dealership digital experiences.' },
    { name: 'Education', detail: 'Learning systems, student engagement, and campus transformation.' },
    { name: 'Insurance', detail: 'Claims automation, customer portals, and risk analytics.' },
  ];

  advantages: AdvantageItem[] = [
    { title: 'Experienced Engineers', description: 'Senior specialists with enterprise delivery across global markets.', accent: 'From strategy to release.' },
    { title: 'Agile Delivery', description: 'Fast iteration cycles with transparent planning and measurable outcomes.', accent: 'Predictable velocity.' },
    { title: 'Enterprise Architecture', description: 'Scalable patterns, governance, and reusable platforms built for growth.', accent: 'Future-ready foundation.' },
    { title: 'Security First', description: 'Secure development practices, compliance alignment, and risk controls.', accent: 'Trusted by regulated teams.' },
    { title: 'AI Driven Development', description: 'Accelerate delivery using AI-assisted coding, analytics, and automation.', accent: 'Sharper outcomes.' },
    { title: 'Cost Effective Delivery', description: 'Optimize budgets through modular architecture and offshore collaboration.', accent: 'Better ROI.' },
    { title: 'Scalable Solutions', description: 'Build once and extend across products, geographies, and channels.', accent: 'Growth confidence.' },
    { title: '24/7 Support', description: 'Dedicated support, monitoring, and incident management around the clock.', accent: 'Always available.' },
  ];

  process: ProcessStep[] = [
    { label: 'Discover', detail: 'Align business goals, stakeholders, and success metrics.' },
    { label: 'Analyze', detail: 'Assess systems, data, and operational constraints in detail.' },
    { label: 'Design', detail: 'Define architecture, UX, and roadmap with enterprise standards.' },
    { label: 'Develop', detail: 'Build secure, high-quality solutions using modern engineering.' },
    { label: 'Test', detail: 'Run automation, performance, and validation across environments.' },
    { label: 'Deploy', detail: 'Launch with governance, monitoring, and rollout readiness.' },
    { label: 'Support', detail: 'Operate with optimization, maintenance, and continuous improvement.' },
  ];

  caseStudies: CaseStudy[] = [
    {
      client: 'Aster Health',
      challenge: 'Need to modernize patient engagement and unify clinical data workflows.',
      solution: 'Built a secure portal, AI response assistant, and cloud data pipeline.',
      impact: 'Reduced manual coordination by 60% and improved patient response time.',
      stack: ['Angular', 'Azure', 'OpenAI', 'SQL Server'],
    },
    {
      client: 'Northline Finance',
      challenge: 'Wanted faster lending workflows and more transparent reporting.',
      solution: 'Delivered an automated workflow engine and real-time dashboard platform.',
      impact: 'Cut loan processing time by 40% and boosted reporting accuracy.',
      stack: ['React', '.NET', 'AWS', 'Power BI'],
    },
  ];

  testimonials: Testimonial[] = [
    { name: 'Sarah Kim', role: 'COO, Aster Health', quote: 'StarGuru IT helped us move from fragmented systems to a trustworthy digital foundation.', rating: 5 },
    { name: 'David Brooks', role: 'CTO, Northline Finance', quote: 'Their delivery team blended strategy, engineering, and AI innovation with precision.', rating: 5 },
    { name: 'Mina Patel', role: 'Director, Innova Retail', quote: 'The site, workflow, and cloud architecture transformed our customer journey.', rating: 5 },
  ];

  faqItems = [
    { question: 'Do you support enterprise security and compliance?', answer: 'Yes. We design with secure coding, cloud governance, and compliance-friendly controls.' },
    { question: 'Can you work with existing teams?', answer: 'Absolutely. We collaborate with in-house teams as delivery partners or strategic advisors.' },
    { question: 'Do you provide AI implementation support?', answer: 'We deliver AI copilots, automation, and data-enabled platforms for measurable outcomes.' },
  ];

  blogPosts = [
    { title: 'How enterprises modernize cloud platforms without disruption', tag: 'Cloud' },
    { title: 'AI-assisted delivery for faster product launches', tag: 'AI' },
    { title: 'Building secure, scalable digital transformation roadmaps', tag: 'Strategy' },
  ];

  careers = [
    { role: 'Senior Angular Engineer', type: 'Full-time' },
    { role: 'AI Solution Architect', type: 'Hybrid' },
    { role: 'Cloud DevOps Specialist', type: 'Remote' },
  ];
}
