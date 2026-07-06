export const courses = [
  {
    id: "en",
    flag: "🇬🇧",
    glyph: "A",
    name: "English",
    levels: 6,
    students: 4820,
    color: "#5B8DEF",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "zh",
    flag: "🇨🇳",
    glyph: "文",
    name: "Chinese",
    levels: 5,
    students: 2310,
    color: "#E0645B",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ko",
    flag: "🇰🇷",
    glyph: "한",
    name: "Korean",
    levels: 5,
    students: 2075,
    color: "#7DE0D3",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "es",
    flag: "🇪🇸",
    glyph: "Ñ",
    name: "Spanish",
    levels: 6,
    students: 2680,
    color: "#E5E4E0",
    image: "https://images.unsplash.com/photo-1509845350628-3f6ff23c0ba9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fa",
    flag: "🇮🇷",
    glyph: "ف",
    name: "Persian",
    levels: 4,
    students: 615,
    color: "#B47DE0",
    image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop",
  },
];

export const sampleSessions = [
  {
    id: 1,
    course: "English",
    title: "Business small talk, unit 4",
    duration: "6:12",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    course: "Chinese",
    title: "Tones & greetings, unit 1",
    duration: "4:48",
    image: "https://images.unsplash.com/photo-1512427691650-1ac72c50b5c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    course: "Korean",
    title: "Cafe ordering role-play",
    duration: "5:30",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    course: "Spanish",
    title: "Past tense storytelling",
    duration: "7:02",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=800&auto=format&fit=crop",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Maya Feldman",
    course: "Spanish",
    rating: 5,
    quote: "The live sessions made it click in a way apps never did. My instructor noticed patterns in my mistakes that I never would have caught alone.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 2,
    name: "Daniel Cho",
    course: "Korean",
    rating: 5,
    quote: "I went from barely reading Hangul to holding a ten-minute conversation in about three months. The dashboard kept me honest about practice time.",
    avatar: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: 3,
    name: "Amira Haddad",
    course: "Persian",
    rating: 5,
    quote: "Hard to find good Persian instruction anywhere else. The small class sizes meant I actually got to speak every single session.",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 4,
    name: "Lucas Berger",
    course: "Chinese",
    rating: 4,
    quote: "Recordings of every session saved me when work traveled. I never fell behind even during a rough month.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Sofia Martinez",
    course: "Spanish",
    bio: "Native speaker, 8 years teaching conversational Spanish.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Wei Zhang",
    course: "Chinese",
    bio: "Certified HSK examiner and Mandarin phonetics specialist.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ji-ho Park",
    course: "Korean",
    bio: "Former TOPIK instructor, focuses on real-life fluency.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Leyla Ahmadi",
    course: "Persian",
    bio: "Bilingual instructor specializing in heritage learners.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  },
];

export const weeklyProgress = [
  { week: "W1", fluency: 22, retention: 60 },
  { week: "W2", fluency: 28, retention: 64 },
  { week: "W3", fluency: 34, retention: 68 },
  { week: "W4", fluency: 41, retention: 71 },
  { week: "W5", fluency: 46, retention: 75 },
  { week: "W6", fluency: 53, retention: 78 },
  { week: "W7", fluency: 58, retention: 80 },
  { week: "W8", fluency: 64, retention: 83 },
  { week: "W9", fluency: 69, retention: 85 },
  { week: "W10", fluency: 74, retention: 87 },
  { week: "W11", fluency: 79, retention: 89 },
  { week: "W12", fluency: 85, retention: 92 },
];

export const hoursStudied = [
  { day: "Mon", hours: 1.2 },
  { day: "Tue", hours: 0.8 },
  { day: "Wed", hours: 1.6 },
  { day: "Thu", hours: 1.1 },
  { day: "Fri", hours: 0.6 },
  { day: "Sat", hours: 2.1 },
  { day: "Sun", hours: 1.4 },
];

export const skillBreakdown = [
  { skill: "Speaking", value: 78 },
  { skill: "Listening", value: 85 },
  { skill: "Reading", value: 91 },
  { skill: "Writing", value: 66 },
];

export const upcomingSessions = [
  { id: 1, title: "Conversational Spanish — Unit 7", time: "Today, 6:00 PM", instructor: "Sofia Martinez" },
  { id: 2, title: "Grammar Clinic: Subjunctive", time: "Wed, 5:00 PM", instructor: "Sofia Martinez" },
  { id: 3, title: "Group Practice Room", time: "Fri, 7:30 PM", instructor: "Community" },
];

export const recentHomework = [
  { id: 1, title: "Unit 6 Vocabulary Quiz", status: "Graded", score: "92%" },
  { id: 2, title: "Speaking Journal #12", status: "Pending review", score: "—" },
  { id: 3, title: "Listening Worksheet 5B", status: "Graded", score: "87%" },
];
