import { defineCustomElements } from "@orama/wc-components/loader/index.js";
import { JSX as OramaJSX } from "@orama/wc-components/dist/types/index.d.ts";

document.addEventListener("DOMContentLoaded", () => {
  defineCustomElements();
  const oramaSearchBox: OramaJSX.OramaSearchBox | null = document.querySelector(
    "orama-search-box",
  );

  if (oramaSearchBox) {
    // Get current theme
    const currentTheme = localStorage.denoDocsTheme ||
      (globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    oramaSearchBox.colorScheme = currentTheme;

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target instanceof HTMLElement) {
          const isDark = mutation.target.classList.contains("dark");
          oramaSearchBox.colorScheme = isDark ? "dark" : "light";
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    oramaSearchBox.themeConfig = {
      colors: {
        light: {
          "--text-color-primary": "hsla(var(--foreground-primary))",
          "--text-color-secondary": "hsla(var(--foreground-primary))",
          "--text-color-accent": "hsla(var(--foreground-primary))",
          "--text-color-inactive": "hsla(var(--foreground-primary))",
          "--background-color-tertiary": "hsla(var(--background-tertiary))",
          "--border-color-primary": "hsla(var(--foreground-primary))",
          "--border-color-secondary": "hsla(var(--foreground-primary))",
          "--border-color-accent": "hsla(var(--foreground-primary))",
          "--icon-color-accent": "hsla(var(--foreground-primary))",
          "--button-text-color-primary": "hsla(var(--foreground-primary))",
          "--button-background-color-primary": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientSix": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientSix": "hsla(var(--background-tertiary))",
        },
        dark: {
          "--text-color-primary": "hsla(var(--foreground-primary))",
          "--text-color-secondary": "hsla(var(--foreground-primary))",
          "--text-color-accent": "hsla(var(--foreground-primary))",
          "--text-color-inactive": "hsla(var(--foreground-primary))",
          "--background-color-tertiary": "hsla(var(--background-tertiary))",
          "--border-color-primary": "hsla(var(--foreground-primary))",
          "--border-color-secondary": "hsla(var(--foreground-primary))",
          "--border-color-accent": "hsla(var(--foreground-primary))",
          "--icon-color-accent": "hsla(var(--foreground-primary))",
          "--button-text-color-primary": "hsla(var(--foreground-primary))",
          "--button-background-color-primary": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientSix": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientSix": "hsla(var(--background-tertiary))",
        },
      },
    };
    oramaSearchBox.index = {
      api_key: "BhHQBNY6gwBukMREm9FOproywA50UDQs",
      endpoint: "https://cloud.orama.run/v1/indexes/deno-docs-pp7js4",
    };
    oramaSearchBox.resultMap = {
      description: "content",
      section: "section",
    };
    oramaSearchBox.facetProperty = "category";
    oramaSearchBox.highlight = { HTMLTag: "b" };
    oramaSearchBox.sourceBaseUrl = "https://docs.deno.com";
    oramaSearchBox.suggestions = [
      "How to get started?",
      "How to configure?",
      "How to deploy?",
    ];
  }

  const oramaSearchButton: OramaJSX.OramaSearchButton | null = document
    .querySelector("orama-search-button");

  if (oramaSearchButton) {
    // Get current theme
    const currentTheme = localStorage.denoDocsTheme ||
      (globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    oramaSearchButton.colorScheme = currentTheme;

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target instanceof HTMLElement) {
          const isDark = mutation.target.classList.contains("dark");
          oramaSearchButton.colorScheme = isDark ? "dark" : "light";
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    oramaSearchButton.themeConfig = {
      colors: {
        light: {
          "--text-color-primary": "hsla(var(--foreground-primary))",
          "--text-color-secondary": "hsla(var(--foreground-primary))",
          "--text-color-accent": "hsla(var(--foreground-primary))",
          "--text-color-inactive": "hsla(var(--foreground-primary))",
          "--background-color-tertiary": "hsla(var(--background-tertiary))",
          "--border-color-primary": "hsla(var(--foreground-primary))",
          "--border-color-secondary": "hsla(var(--foreground-primary))",
          "--border-color-accent": "hsla(var(--foreground-primary))",
          "--icon-color-accent": "hsla(var(--foreground-primary))",
          "--button-text-color-primary": "hsla(var(--foreground-primary))",
          "--button-background-color-primary": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientSix": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientSix": "hsla(var(--background-tertiary))",
        },
        dark: {
          "--text-color-primary": "hsla(var(--foreground-primary))",
          "--text-color-secondary": "hsla(var(--foreground-primary))",
          "--text-color-accent": "hsla(var(--foreground-primary))",
          "--text-color-inactive": "hsla(var(--foreground-primary))",
          "--background-color-tertiary": "hsla(var(--background-tertiary))",
          "--border-color-primary": "hsla(var(--foreground-primary))",
          "--border-color-secondary": "hsla(var(--foreground-primary))",
          "--border-color-accent": "hsla(var(--foreground-primary))",
          "--icon-color-accent": "hsla(var(--foreground-primary))",
          "--button-text-color-primary": "hsla(var(--foreground-primary))",
          "--button-background-color-primary": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-border-color-gradientSix": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientOne": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientTwo": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientThree": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFour": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientFive": "hsla(var(--background-tertiary))",
          "--chat-button-background-color-gradientSix": "hsla(var(--background-tertiary))",
        },
      },
    };
    oramaSearchButton.innerText = "Search";
    oramaSearchButton.size = "small";
  }
});

declare module "npm:preact" {
  namespace JSX {
    interface IntrinsicElements {
      "orama-search-box": OramaJSX.OramaSearchBox;
      "orama-search-button": OramaJSX.OramaSearchButton;
    }
  }
}
