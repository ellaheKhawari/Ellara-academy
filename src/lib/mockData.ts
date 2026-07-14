import type {LanguageId} from "@/types";

export const courses = [
    {
        id: "en",
        flag: "🇬🇧",
        glyph: "A",
        levels: 6,
        students: 4820,
        color: "#5B8DEF",
        colorLight: "#3E6FD1",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "zh",
        flag: "🇨🇳",
        glyph: "文",
        levels: 5,
        students: 2310,
        color: "#E0645B",
        colorLight: "#C94F46",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "ko",
        flag: "🇰🇷",
        glyph: "한",
        levels: 5,
        students: 2075,
        color: "#7DE0D3",
        colorLight: "#2E9C8E",
        image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "es",
        flag: "🇪🇸",
        glyph: "Ñ",
        levels: 6,
        students: 2680,
        color: "#E5E4E0",
        colorLight: "#6E7076",
        image: "https://images.unsplash.com/photo-1509845350628-3f6ff23c0ba9?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "fa",
        flag: "🇮🇷",
        glyph: "ف",
        levels: 4,
        students: 615,
        color: "#B47DE0",
        colorLight: "#9558C9",
        image: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=800&auto=format&fit=crop",
    },
] as const ;

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
        courseId: "es" as LanguageId,
        rating: 5,
        quote: {
            en: "The live sessions made it click in a way apps never did. My instructor noticed patterns in my mistakes that I never would have caught alone.",
            fa: "جلسات زنده باعث شد چیزهایی برام جا بیفته که هیچ اپلیکیشنی نتونسته بود. استادم الگوهایی تو اشتباهاتم پیدا کرد که خودم به‌تنهایی هیچ‌وقت متوجهشون نمی‌شدم.",
        },
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        id: 2,
        name: "Daniel Cho",
        courseId: "ko" as LanguageId,
        rating: 5,
        quote: {
            en: "I went from barely reading Hangul to holding a ten-minute conversation in about three months. The dashboard kept me honest about practice time.",
            fa: "تو حدود سه ماه از به‌سختی خوندن هانگول رسیدم به یه گفتگوی ده‌دقیقه‌ای. پنل کاربری هم کمکم کرد نسبت به زمان تمرینم صادق بمونم.",
        },
        avatar: "https://i.pravatar.cc/100?img=13",
    },
    {
        id: 3,
        name: "Amira Haddad",
        courseId: "fa" as LanguageId,
        rating: 5,
        quote: {
            en: "Hard to find good Persian instruction anywhere else. The small class sizes meant I actually got to speak every single session.",
            fa: "پیدا کردن آموزش خوب فارسی جای دیگه‌ای واقعاً سخته. کلاس‌های کوچیک باعث شد تو هر جلسه واقعاً فرصت صحبت‌کردن داشته باشم.",
        },
        avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
        id: 4,
        name: "Lucas Berger",
        courseId: "zh" as LanguageId,
        rating: 4,
        quote: {
            en: "Recordings of every session saved me when work traveled. I never fell behind even during a rough month.",
            fa: "ضبط هر جلسه وقتی سفرهای کاری داشتم نجاتم داد. حتی تو یه ماه سخت هم هیچ‌وقت از بقیه عقب نیفتادم.",
        },
        avatar: "https://i.pravatar.cc/100?img=8",
    },
    {
        id: 5,
        name: "Ali Mohammadi",
        courseId: "fa" as LanguageId,
        rating: 5,
        quote: {
            en: "Hard to find good Persian instruction anywhere else. The small class sizes meant I actually got to speak every single session.",
            fa: "پیدا کردن آموزش خوب فارسی جای دیگه‌ای واقعاً سخته. کلاس‌های کوچیک باعث شد تو هر جلسه واقعاً فرصت صحبت‌کردن داشته باشم.",
        },
        avatar: "https://i.pravatar.cc/100?img=47",
    },
    {
        id: 6,
        name: "Lisa Grande",
        courseId: "zh" as LanguageId,
        rating: 4,
        quote: {
            en: "Recordings of every session saved me when work traveled. I never fell behind even during a rough month.",
            fa: "ضبط هر جلسه وقتی سفرهای کاری داشتم نجاتم داد. حتی تو یه ماه سخت هم هیچ‌وقت از بقیه عقب نیفتادم.",
        },
        avatar: "https://i.pravatar.cc/100?img=8",
    },
];

export const teachers = [
    {
        id: 1,
        name: "Sofia Martinez",
        courseId: "es" as LanguageId,
        bio: {
            en: "Native speaker, 8 years teaching conversational Spanish.",
            fa: "زبان مادری‌اش اسپانیایی است، ۸ سال سابقه‌ی تدریس مکالمه‌ی اسپانیایی دارد.",
        },
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Wei Zhang",
        courseId: "zh" as LanguageId,
        bio: {
            en: "Certified HSK examiner and Mandarin phonetics specialist.",
            fa: "ممتحن رسمی آزمون HSK و متخصص آواشناسی زبان چینی ماندارین است.",
        },
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Ji-ho Park",
        courseId: "ko" as LanguageId,
        bio: {
            en: "Former TOPIK instructor, focuses on real-life fluency.",
            fa: "مدرس سابق آزمون TOPIK، تمرکزش روی روان‌صحبت‌کردن در موقعیت‌های واقعی است.",
        },
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Leyla Ahmadi",
        courseId: "fa" as LanguageId,
        bio: {
            en: "Bilingual instructor specializing in heritage learners.",
            fa: "مدرس دوزبانه با تخصص در آموزش فارسی‌آموزانی که ریشه‌ی خانوادگی فارسی دارند.",
        },
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
    { key: "label1", value: 78 },
    { key: "label2", value: 85 },
    { key: "label3", value: 91 },
    { key: "label4", value: 66 },
] as const;

export const upcomingSessions = [
    {
        id: 1,
        title: { en: "Conversational Spanish — Unit 7", fa: "مکالمه اسپانیایی — بخش ۷" },
        time: { en: "Today, 6:00 PM", fa: "امروز، ساعت ۶ بعدازظهر" },
        instructor: "Sofia Martinez",
    },
    {
        id: 2,
        title: { en: "Grammar Clinic: Subjunctive", fa: "کارگاه دستور زبان: وجه التزامی" },
        time: { en: "Wed, 5:00 PM", fa: "چهارشنبه، ساعت ۵ بعدازظهر" },
        instructor: "Sofia Martinez",
    },
    {
        id: 3,
        title: { en: "Group Practice Room", fa: "اتاق تمرین گروهی" },
        time: { en: "Fri, 7:30 PM", fa: "جمعه، ساعت ۷:۳۰ بعدازظهر" },
        instructor: { en: "Community", fa: "انجمن" },
    },
];

export const recentHomework = [
    { id: 1, title: { en: "Unit 6 Vocabulary Quiz", fa: "آزمون واژگان بخش ۶" }, status: "graded" as const, score: 92 },
    { id: 2, title: { en: "Speaking Journal #12", fa: "دفترچه گفتاری شماره ۱۲" }, status: "pending" as const, score: null },
    { id: 3, title: { en: "Listening Worksheet 5B", fa: "کاربرگ شنیداری ۵ب" }, status: "graded" as const, score: 87 },
];
