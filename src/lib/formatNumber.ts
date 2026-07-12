export function formatNumber(value: number, locale: "en" | "fa") {
    return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(value);
}

export function formatDate(date: Date | string, locale: "en" | "fa") {
    const d = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(d);
}