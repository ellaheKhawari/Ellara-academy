<div align="center">

# 🌍 Ellara Academy

**A modern, multilingual language-learning platform**

Built with React 19, TypeScript, and Vite — featuring a marketing landing page, mock authentication flow, and an interactive student dashboard.

[**🔗 Live Demo**](https://ellara-academy.netlify.app/)

</div>

---

## 🇬🇧 English

### About

Ellara Academy is a front-end showcase project for a language-course business offering **English, Chinese, Korean, Spanish, and Persian** courses. It includes a fully responsive marketing landing page, a complete mock authentication system (login / register / forgot password), and a student dashboard with data visualizations.

The project has **no real backend** — all authentication and data are simulated on the client side, making it a self-contained portfolio piece that anyone can clone and run in seconds.

### ✨ Features

- 🎨 **Landing page** with animated, scroll-revealed sections and a reviews carousel
- 🔐 **Mock authentication** — login, register, forgot password, session persistence (fake JWT)
- 📊 **Student dashboard** with charts and data tables
- 🌗 **Dark / light theme** toggle (dark by default)
- 🌐 **Bilingual (EN / FA)** with automatic **RTL** layout switch for Persian
- 📱 **Fully responsive** — mobile, tablet, laptop, and large-monitor breakpoints

### 🛠 Tech Stack

| Category | Technology |
|---|---|
| Core | React 19, TypeScript, Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router (with protected routes) |
| State / Data | Zustand (auth state), TanStack React Query (server-state & mock API caching) |
| Forms | TanStack Form |
| UI Components | MUI (`@mui/material`, `@mui/x-data-grid`) for dashboard tables |
| Charts | Recharts |
| Animation | Framer Motion (scroll-reveal & micro-interactions) |
| Theming | `next-themes` |
| Misc | `embla-carousel-react` (carousel), `sonner` (toasts), `lucide-react` (icons), `js-cookie` (fake JWT storage) |
| Architecture | Repository pattern in `src/services` |

### 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

### 🔑 Mock Authentication

There is **no real backend**. `src/services/api/authApi.ts` simulates one (login / register / forgot-password / me / logout) with artificial network delay and a fake JWT, backed by `localStorage` as a "database". The token itself is stored in a cookie (`src/services/repositories/authRepository.ts`), while a Zustand store (`src/store/authStore.ts`) combined with React Query hooks (`src/hooks/useAuth.ts`) restore the session on page refresh via a `/me`-style call.

**Demo account:**
```
email: demo@lingova.com
password: demo1234
```
Or simply register a new account — your data persists in the browser's `localStorage`.

### 📁 Project Structure

```
src/
  app/              # Query client setup
  components/
    layout/         # Header, Footer, AuthLayout, DashboardLayout
    sections/       # Landing page sections
    ui/             # Button, Input, ScrollReveal, LoadingPage
  hooks/            # useAuth (React Query hooks)
  i18n/             # English + Persian dictionaries, LanguageProvider (RTL switch)
  lib/              # cn() helper, mock content data
  pages/            # LandingPage, auth pages, dashboard pages
  routes/           # AppRouter, ProtectedRoute
  services/
    api/            # Fake backend (authApi.ts)
    repositories/   # Repository layer (authRepository.ts)
  store/            # Zustand authStore
  types/            # Shared TS types
```

### 🌐 Language & Theme

- **Language:** English is the default. Use the "EN / FA" toggle in the header (or dashboard sidebar) to switch to Persian, which also flips the page to RTL.
- **Theme:** Dark mode is the default; toggle it with the sun/moon icon.

### 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🇮🇷 فارسی

### درباره پروژه

الارا آکادمی (Ellara Academy) یک پروژه نمایشی فرانت‌اند برای یک مجموعه آموزش زبان‌هاست که دوره‌های **انگلیسی، چینی، کره‌ای، اسپانیایی و فارسی** ارائه می‌ده. این پروژه شامل یک لندینگ‌پیج تبلیغاتی کاملاً واکنش‌گرا، یک سیستم احراز هویت شبیه‌سازی‌شده (ورود / ثبت‌نام / فراموشی رمز عبور)، و یک داشبورد دانشجویی همراه با نمودارهای تصویری است.

این پروژه **بک‌اند واقعی ندارد** — تمام فرآیندهای احراز هویت و داده‌ها به‌صورت کامل در سمت کلاینت شبیه‌سازی شده‌اند؛ بنابراین هرکسی می‌تونه به‌راحتی این پروژه رو کلون کنه و در چند ثانیه اجراش کنه.

### ✨ ویژگی‌ها

- 🎨 **لندینگ‌پیج** با انیمیشن‌های اسکرول و کاروسل نظرات کاربران
- 🔐 **احراز هویت شبیه‌سازی‌شده** — ورود، ثبت‌نام، فراموشی رمز، حفظ نشست کاربر (JWT جعلی)
- 📊 **داشبورد دانشجویی** همراه با نمودار و جدول‌های داده
- 🌗 **تم تاریک / روشن** (پیش‌فرض: تاریک)
- 🌐 **دوزبانه (انگلیسی / فارسی)** با تغییر خودکار جهت صفحه به **RTL** برای فارسی
- 📱 **کاملاً واکنش‌گرا** — موبایل، تبلت، لپ‌تاپ و مانیتورهای بزرگ

### 🛠 تکنولوژی‌های استفاده‌شده

| بخش | تکنولوژی |
|---|---|
| هسته اصلی | React 19، TypeScript، Vite |
| استایل‌دهی | Tailwind CSS نسخه ۴ (`@tailwindcss/vite`) |
| مسیریابی | React Router (همراه با مسیرهای محافظت‌شده) |
| مدیریت state / داده | Zustand (وضعیت احراز هویت)، TanStack React Query (مدیریت state سرور و کش API جعلی) |
| فرم‌ها | TanStack Form |
| کامپوننت‌های UI | MUI (`@mui/material`, `@mui/x-data-grid`) برای جدول‌های داشبورد |
| نمودارها | Recharts |
| انیمیشن | Framer Motion |
| تم | `next-themes` |
| متفرقه | `embla-carousel-react` (کاروسل)، `sonner` (نوتیفیکیشن)، `lucide-react` (آیکون‌ها)، `js-cookie` (ذخیره‌سازی JWT جعلی) |
| معماری | الگوی Repository در پوشه `src/services` |

### 🚀 شروع به کار

```bash
npm install
npm run dev
```

سپس آدرس لوکالی که در ترمینال چاپ می‌شه رو باز کنید (معمولاً `http://localhost:5173`).

برای ساخت نسخه پروداکشن:

```bash
npm run build
npm run preview
```

### 🔑 احراز هویت شبیه‌سازی‌شده

این پروژه **بک‌اند واقعی نداره**. فایل `src/services/api/authApi.ts` یک بک‌اند جعلی (ورود / ثبت‌نام / فراموشی رمز / گرفتن اطلاعات کاربر / خروج) رو با تأخیر شبکه‌ای مصنوعی و یک JWT جعلی شبیه‌سازی می‌کنه که داده‌هاش در `localStorage` به‌عنوان "دیتابیس" ذخیره می‌شن. خودِ توکن در یک کوکی ذخیره می‌شه (`src/services/repositories/authRepository.ts`) و ترکیب استور Zustand (`src/store/authStore.ts`) با هوک‌های React Query (`src/hooks/useAuth.ts`) باعث می‌شه نشست کاربر بعد از رفرش صفحه با یک درخواست شبیه به `/me` بازیابی بشه.

**حساب کاربری آزمایشی:**
```
ایمیل: demo@lingova.com
رمز عبور: demo1234
```
یا به‌سادگی یک حساب کاربری جدید بسازید — داده‌هاتون در `localStorage` مرورگر شما ذخیره می‌مونه.

### 📁 ساختار پروژه

```
src/
  app/              # تنظیمات query client
  components/
    layout/         # هدر، فوتر، AuthLayout، DashboardLayout
    sections/       # بخش‌های صفحه لندینگ
    ui/             # Button، Input، ScrollReveal، LoadingPage
  hooks/            # useAuth (هوک‌های React Query)
  i18n/             # دیکشنری انگلیسی و فارسی، LanguageProvider (تغییر RTL)
  lib/              # تابع کمکی cn() و داده‌های محتوای جعلی
  pages/            # صفحه لندینگ، صفحات احراز هویت، صفحات داشبورد
  routes/           # AppRouter، ProtectedRoute
  services/
    api/            # بک‌اند جعلی (authApi.ts)
    repositories/   # لایه repository (authRepository.ts)
  store/            # authStore ساخته‌شده با Zustand
  types/            # تایپ‌های مشترک TypeScript
```

### 🌐 زبان و تم

- **زبان:** پیش‌فرض انگلیسیه. با دکمه "EN / FA" در هدر (یا سایدبار داشبورد) می‌تونید به فارسی سوییچ کنید که جهت صفحه هم به RTL تغییر می‌کنه.
- **تم:** پیش‌فرض تاریکه؛ با آیکون خورشید/ماه قابل تغییره.

### 📄 لایسنس

این پروژه تحت [مجوز MIT](LICENSE) منتشر شده.
