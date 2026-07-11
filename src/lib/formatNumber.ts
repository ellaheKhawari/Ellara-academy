export function formatNumber(value: number, locale: "en" | "fa") {
    return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US").format(value);
}