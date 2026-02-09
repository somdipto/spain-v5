import { FileText, Coffee, Briefcase, Rocket, Sun, Globe, BookOpen, Users, Heart, Shield, Map, GraduationCap } from 'lucide-react';
import { NavItem, Feature, TimelineStep, FaqItem, Testimonial, Destination } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Book', href: 'contact' },
  { label: 'The Team', href: 'team' },
  { label: 'Blog', href: 'blog' },
  { label: 'Content', href: 'content' },
];

export const HERO_CONTENT = {
  headline: "The only Study-in-Spain program for Southeast Asians",
  subheading: "Any questions big or small, We are here to listen, support, and guide. So, what are you waiting for?",
};

export const FEATURES: Feature[] = [
  {
    title: "The Essentials",
    description: "Everything that gets you here.",
    icon: Shield,
    items: [
        "Student Visa Assistance (End-to-end)",
        "University Admission & Placement",
        "Health Insurance Setup",
        "Accommodation/Housing Search"
    ]
  },
  {
    title: "Real Life in Spain",
    description: "We help you blend in, not just move in.",
    icon: Sun,
    items: [
        "City Orientation & Transport Cards",
        "Bank Account Setup",
        "Cultural Integration (Local norms)",
        "Where to buy rice & soy sauce (Asian mart guide)"
    ]
  },
  {
    title: "Future-Proof Tools",
    description: "Building the runway for your professional life.",
    icon: Briefcase,
    items: [
        "CV & Cover Letter Adaptation",
        "Interview Simulations",
        "Internship Search Support",
        "Networking with Industry Pros"
    ]
  },
  {
    title: "The Boosters",
    description: "What takes you from surviving to thriving.",
    icon: Rocket,
    items: [
        "1-on-1 Academic Counseling",
        "Psychological Counseling",
        "24/7 Emergency Support",
        "Lifetime Alumni Community Access"
    ]
  },
  {
    title: "Your Circle Here",
    description: "Community & Wellbeing for Southeast Asian students.",
    icon: Users,
    items: [
        "Strong community of Southeast Asian students",
        "Emotional support & personalized guidance",
        "Connection with your embassy",
        "Always-on support: Emergency contacts"
    ]
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    phase: "Phase 1",
    title: "Pre-Arrival",
    description: "Laying the groundwork before you even pack.",
    items: [
        "Pre-departure Support", 
        "Student Visa Assistance", 
        "Health Insurance Support", 
        "Accommodation Arrangements"
    ]
  },
  {
    phase: "Phase 2",
    title: "Post-Arrival",
    description: "Touchdown. We handle the landing logistics.",
    items: [
        "Airport pick-up", 
        "Welcoming Orientation: City tour & Cultural Guidance", 
        "Bank Account Setup", 
        "Mobile Data & Transportation Card",
        "Residence Permit Application"
    ]
  },
  {
    phase: "Phase 3",
    title: "During the Program",
    description: "Academic & Personal Support.",
    items: [
        "Emergency Contacts", 
        "Spanish Language Course", 
        "University Admission & Academic Prep", 
        "One-on-one Academic Counseling",
        "Career Guidance & Internship Opportunities",
        "Psychological Counselling",
        "Seminars with Industry Professionals",
        "Food & Health Advice"
    ]
  },
  {
    phase: "Phase 4",
    title: "Post-Program & Alumni",
    description: "Your journey doesn't end when classes finish.",
    items: [
        "Continued Legal Support", 
        "Erasmus & Study Abroad Guidance", 
        "Alumni Network & Career Support",
        "Lifetime Community Access"
    ]
  },
];

export const DESTINATIONS: Destination[] = [
  {
    city: "Madrid",
    tagline: "The Capital Pulse",
    description: "The heart of business and culture. Fast-paced, historic, and undeniably electric.",
    image: "/madrid.jpg"
  },
  {
    city: "Barcelona",
    tagline: "Coastal Innovation",
    description: "Where tech meets the Mediterranean. A hub for design, startups, and creativity.",
    image: "/barcelona.jpg"
  },
  {
    city: "Valencia",
    tagline: "The Sun City",
    description: "Affordable, vibrant, and home to the City of Arts and Sciences. The perfect student balance.",
    image: "/valencia.jpg"
  },
  {
    city: "Seville",
    tagline: "Soul of Andalucia",
    description: "Rich tradition, flamenco, and history. Experience the true depth of Spanish heritage.",
    image: "/seville.jpg"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Can I work part time in Spain?",
    answer: "Yes—there are compliant ways to work during studies. We’ll show you how to balance hours with your timetable."
  },
  {
    question: "Do I need any sort of language certificate of English?",
    answer: "No, you do not need any language certificate."
  },
  {
    question: "Can I buy rice in Spain?",
    answer: "Of course, and also soy sauce and kecap manis. We’ll point you to the Asian marts in your city."
  },
  {
    question: "Do I need Spanish before I move?",
    answer: "No. We teach from zero and make Spanish easier than learning to parallel-park."
  },
  {
    question: "How much is the cost of living?",
    answer: "Lower than many Western EU capitals; we share city-by-city ranges during your consultation."
  },
  {
    question: "When should I apply?",
    answer: "Intakes fill quickly—earlier gives you more options. Book a call to lock your timeline."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { name: "Melina", role: "Human Nutrition", location: "URV", quote: "Spain taught me how to live well—through food, friendships, and freedom.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
  { name: "Michael", role: "Art Conservation", location: "UGR Granada", quote: "Every day in Granada inspires me to preserve beauty that tells a story.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
  { name: "Britney", role: "Fashion Design", location: "Barcelona", quote: "Barcelona sparked my creativity and gave me the confidence to be myself.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Dawn", role: "Finance", location: "University of Seville", quote: "I chose Spain to experience a culture completely different from my own.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { name: "Sylvia", role: "Fine Arts", location: "University of Seville", quote: "Seville taught me to listen to light and shadow.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop" }
];