// lib/mock-data/about.ts
// ---------------------------------------------------------------------------
// About page mock data — replace with Sanity GROQ queries in production
// ---------------------------------------------------------------------------

export interface Person {
  id: string;
  name: string;
  role: string;
  bio?: string;
  department?: string;
  imageUrl?: string; // replace with Sanity image asset
  email?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Accreditation {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
}

export interface SchoolValue {
  icon: string; // Tabler icon name used as reference only — mapped in component
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
export const ABOUT_STATS: Stat[] = [
  { value: "2008", label: "Year Founded" },
  { value: "650", label: "Students Enrolled", suffix: "+" },
  { value: "48", label: "Faculty & Staff" },
  { value: "97", label: "University Placement", suffix: "%" },
];

// ---------------------------------------------------------------------------
// Founder
// ---------------------------------------------------------------------------
export const FOUNDER: Person = {
  id: "founder-1",
  name: "Mrs. Abena Marble Asante",
  role: "Founder & Executive Director",
  bio: "Mrs. Asante established Marble Educational Center in 2008 with a conviction that every child carries a unique spark waiting to be lit. A trained Montessori educator with a Master's in Early Childhood Development from the University of Ghana, she spent a decade observing how rigid, one-size-fits-all schooling dimmed the curiosity of the children she loved.\n\nShe founded MEC to prove a different way was possible — one that places the child at the centre, honours their natural pace, and builds not just academic competence but confidence, creativity, and character. Today, the school she built from a single classroom stands as one of Accra's most respected learning communities.",
  imageUrl: undefined,
};

// ---------------------------------------------------------------------------
// Executive Team
// ---------------------------------------------------------------------------
export const EXECUTIVES: Person[] = [
  {
    id: "exec-1",
    name: "Mr. Kofi Agyemang",
    role: "Head of Academics",
    bio: "Oversees curriculum design, teacher development, and academic outcomes across all year groups.",
    imageUrl: undefined,
  },
  {
    id: "exec-2",
    name: "Mrs. Esi Nkrumah",
    role: "Director of Admissions",
    bio: "Guides families through the enrolment journey and ensures every prospective student finds the right fit.",
    imageUrl: undefined,
  },
  {
    id: "exec-3",
    name: "Mr. Kwabena Darko",
    role: "Director of Operations",
    bio: "Manages campus infrastructure, finance, and the systems that keep Marble running smoothly every day.",
    imageUrl: undefined,
  },
];

// ---------------------------------------------------------------------------
// Staff
// ---------------------------------------------------------------------------
export const STAFF: Person[] = [
  {
    id: "staff-1",
    name: "Ms. Akua Mensah",
    role: "Early Years Lead",
    department: "Early Years",
    imageUrl: undefined,
  },
  {
    id: "staff-2",
    name: "Mr. Yaw Boateng",
    role: "Science Teacher",
    department: "Sciences",
    imageUrl: undefined,
  },
  {
    id: "staff-3",
    name: "Mrs. Adwoa Owusu",
    role: "English & Literature",
    department: "Humanities",
    imageUrl: undefined,
  },
  {
    id: "staff-4",
    name: "Mr. Fiifi Asante",
    role: "Mathematics Teacher",
    department: "Sciences",
    imageUrl: undefined,
  },
  {
    id: "staff-5",
    name: "Ms. Abena Frimpong",
    role: "Creative Arts Lead",
    department: "Arts",
    imageUrl: undefined,
  },
  {
    id: "staff-6",
    name: "Mr. Nana Appiah",
    role: "Physical Education",
    department: "Sports",
    imageUrl: undefined,
  },
];

export const STAFF_DEPARTMENTS = [
  "All",
  "Early Years",
  "Sciences",
  "Humanities",
  "Arts",
  "Sports",
];

// ---------------------------------------------------------------------------
// School Values
// ---------------------------------------------------------------------------
export const SCHOOL_VALUES: SchoolValue[] = [
  {
    icon: "bulb",
    title: "Curiosity",
    description: "We nurture the joy of asking questions and the courage to explore answers.",
  },
  {
    icon: "heart",
    title: "Compassion",
    description: "We build a community where every child feels seen, safe, and supported.",
  },
  {
    icon: "award",
    title: "Excellence",
    description: "We hold high standards — not as pressure, but as an expression of belief in every learner.",
  },
  {
    icon: "users",
    title: "Community",
    description: "We grow together. Families, staff, and students are equal partners in this journey.",
  },
];

// ---------------------------------------------------------------------------
// Accreditations
// ---------------------------------------------------------------------------
export const ACCREDITATIONS: Accreditation[] = [
  {
    id: "acc-1",
    name: "Ghana Education Service",
    abbreviation: "GES",
    description: "Fully accredited and licensed by the Ghana Education Service.",
  },
  {
    id: "acc-2",
    name: "West African Examinations Council",
    abbreviation: "WAEC",
    description: "Registered WAEC examination centre.",
  },
  {
    id: "acc-3",
    name: "Association Montessori Internationale",
    abbreviation: "AMI",
    description: "Affiliated with the global Montessori standards body.",
  },
  {
    id: "acc-4",
    name: "National Accreditation Board",
    abbreviation: "NAB",
    description: "Recognised by Ghana's National Accreditation Board.",
  },
];
