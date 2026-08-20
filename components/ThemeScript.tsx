const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem("attestly-theme");
    var theme = stored === "light" || stored === "dark" ? stored : null;
    var resolved = theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", resolved === "dark");
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();
`;

/** Runs before hydration so the correct theme class is set on first paint. */
export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />;
}
