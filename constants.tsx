import { FileText, Coffee, Briefcase, Rocket, Sun, Globe, BookOpen, Users, Heart, Shield, Map, GraduationCap } from 'lucide-react';
import { NavItem, Feature, TimelineStep, FaqItem, Testimonial, Destination } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Team', href: 'team' },
  { label: 'Blog', href: 'blog' },
  { label: 'Content', href: 'content' },
];

export const HERO_CONTENT = {
  headline: "The only Study-in-Spain program for Southeast Asians",
  subheading: "Any questions big or small, we are here to listen, support, and guide. So, what are you waiting for?",
};

export const FEATURES: Feature[] = [
  {
    title: "The Boosters",
    description: "What takes you from surviving to thriving",
    icon: Rocket,
    items: [
        "Practical simulations to help you navigate daily life—making appointments, handling paperwork, finding accommodation, visiting the doctor, and more.",
        "24/7 guidance and support for administrative processes, housing, visa matters, and healthcare.",
        "Food and health advice to help you settle into your new environment with confidence.",
        "Entrepreneurship support and guidance for those interested in innovation, business, and startup opportunities in Spain.",
        "First week orientation: city tour, mobile data, transport cards, banking, safety tips."
    ]
  },
  {
    title: "Real Life in Spain",
    description: "Cultural Integration & Local Experiences",
    icon: Sun,
    items: [
        "Language exchange meetups and social events with local students.",
        "Cultural tours, festivals, and activities to immerse yourself in Spanish life.",
        "Orientation sessions and city tours to help you settle in and explore your new surroundings."
    ]
  },
  {
    title: "The Essentials",
    description: "Language, University & Visa",
    icon: Shield,
    items: [
        "Language School: Intensive Spanish language programs to help you gain fluency for academic, social, and everyday life.",
        "Academic Counseling (Entry & University Admissions): Personalized guidance to help you choose the right academic pathway, prepare your applications, and secure university admission.",
        "Visa Processing: Comprehensive support for your student visa application, residence permit renewals, and university documentation."
    ]
  },
  {
    title: "Future Proof Tools",
    description: "Career & Future Planning",
    icon: Briefcase,
    items: [
        "Career seminars featuring professors, industry professionals, and alumni sharing insights and advice.",
        "Workshops on networking, personal branding, and how to stand out in Spain's job market.",
        "Guidance for finding internships, part-time work, and post-study career opportunities.",
        "Support for navigating post-study work visas and accessing alumni career networks."
    ]
  },
  {
    title: "Your Circle Here",
    description: "Community & Wellbeing",
    icon: Users,
    items: [
        "A strong community of Southeast Asian students and access to local networks.",
        "Emotional support and personalized guidance to help you cope with the challenges of living abroad.",
        "Connection with your embassy to ensure you always have the support of your home country."
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
        "Seville Community Access"
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
    image: "https://drive.google.com/thumbnail?id=1l2uLskzj9oXSpFXJDIHojazXfUsJZ8z8&sz=w1000"
  },
  {
    city: "Valencia",
    tagline: "The Sun City",
    description: "Affordable, vibrant, and home to the City of Arts and Sciences. The perfect student balance.",
    image: "https://drive.google.com/thumbnail?id=1wX4v0it3F0qQwnUfWdHFOVST_AWycFKj&sz=w1000"
  },
  {
    city: "Seville",
    tagline: "Soul of Andalucia",
    description: "Rich tradition, flamenco, and history. Experience the true depth of Spanish heritage.",
    image: "https://drive.google.com/thumbnail?id=1Vy_Yqnlgo9SA7oFIw11_Xk-FQ75Hd1fA&sz=w1000"
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
  { name: "Michael", role: "Art Conservation", location: "UGR Granada", quote: "Every day in Granada inspires me to preserve beauty that tells a story.", image: "/voices-from-spain/michael.jpg" },
  { name: "Britney", role: "Fashion Design", location: "Barcelona", quote: "Barcelona sparked my creativity and gave me the confidence to be myself.", image: "/voices-from-spain/britney.jpg" },
  { name: "Sylvia Lew", role: "Fine Arts", location: "University of Seville", quote: "Seville taught me to listen to light and shadow.", image: "/voices-from-spain/sylvia.jpg" },
  { name: "Valentine Vallery Haryanto", role: "International Business", location: "Madrid", quote: "Madrid gave me the perfect foundation for my Spanish journey with incredible support.", image: "/hero/valentine-vallery.jpg" },
  { name: "Melina Mauro", role: "Human Nutrition", location: "Barcelona", quote: "Barcelona's lifestyle and academic environment exceeded all my expectations.", image: "/hero/melina-mauro.jpg" },
  { name: "Julius Caesar", role: "International Business", location: "Valencia", quote: "Valencia gave me the perfect blend of academic excellence and Mediterranean lifestyle.", image: "/hero/julius-caesar.jpg" }
];