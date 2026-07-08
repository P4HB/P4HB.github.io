/**
 * main.js
 * ------------------------------------------------------------------
 * All DOM rendering + interaction logic. Reads copy from I18N
 * (js/i18n.js) and project data from PROJECTS (js/projects.js) —
 * this file never hardcodes user-facing text.
 *
 * Responsibilities:
 *   - render every section from data on load and on language toggle
 *   - persist language choice in localStorage (default: ko)
 *   - project tag filter
 *   - mobile nav drawer
 *   - scroll-reveal animation
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  var STORAGE_KEY = "p4hb-lang";
  var state = {
    lang: "ko",
    activeFilter: "all",
  };

  /* ------------------------------------------------------------------
   * Inline SVG icons (no external icon font / CDN dependency)
   * ------------------------------------------------------------------ */
  var ICONS = {
    github:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21"/></svg>',
    mail:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
    menu:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/></svg>',
    close:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5h11v11"/><path d="M19 5 5 19"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19 19 5M9 5h10v10"/></svg>',
    chevron:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    education:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z"/><path d="M6 10.7v4.6c0 1.3 2.7 3.2 6 3.2s6-1.9 6-3.2v-4.6"/><path d="M21.5 8.5v6"/></svg>',
    briefcase:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M2.5 12.5h19"/></svg>',
    cpu:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
    layers:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  };

  /* ------------------------------------------------------------------
   * Small DOM helpers
   * ------------------------------------------------------------------ */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "class") node.className = attrs[key];
        else if (key === "html") node.innerHTML = attrs[key];
        else if (key === "text") node.textContent = attrs[key];
        else node.setAttribute(key, attrs[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function qs(sel, ctx) {
    return (ctx || document).querySelector(sel);
  }

  function t(lang) {
    return I18N[lang];
  }

  /* ------------------------------------------------------------------
   * Render: Nav
   * ------------------------------------------------------------------ */
  function renderNav(lang) {
    var copy = t(lang).nav;
    qs("[data-skip-link]").textContent = t(lang).skipLink;
    qs("[data-brand]").textContent = copy.brand;

    var list = qs("[data-nav-links]");
    list.innerHTML = "";
    copy.links.forEach(function (link) {
      var li = el("li", {}, [
        el("a", { href: "#" + link.id, class: "nav-link", text: link.label }),
      ]);
      list.appendChild(li);
    });

    var mobileList = qs("[data-nav-links-mobile]");
    mobileList.innerHTML = "";
    copy.links.forEach(function (link) {
      var li = el("li", {}, [
        el("a", { href: "#" + link.id, class: "nav-link-mobile", text: link.label }),
      ]);
      mobileList.appendChild(li);
    });

    var langBtn = qs("[data-lang-toggle]");
    langBtn.textContent = copy.langToggleLabel;
    langBtn.setAttribute("aria-label", copy.langToggleAria);

    var langBtnMobile = qs("[data-lang-toggle-mobile]");
    langBtnMobile.textContent =
      copy.langToggleLabel + (lang === "ko" ? " · English" : " · 한국어");
    langBtnMobile.setAttribute("aria-label", copy.langToggleAria);

    var menuBtn = qs("[data-menu-toggle]");
    var isOpen = document.body.classList.contains("nav-open");
    menuBtn.setAttribute("aria-label", isOpen ? copy.menuCloseAria : copy.menuOpenAria);

    // re-bind close-on-click for mobile nav links + escape handled elsewhere
    mobileList.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMobileNav);
    });
  }

  /* ------------------------------------------------------------------
   * Render: Hero
   * ------------------------------------------------------------------ */
  function renderHero(lang) {
    var copy = t(lang).hero;
    qs("[data-hero-eyebrow]").textContent = copy.eyebrow;
    qs("[data-hero-name]").textContent = copy.name;
    qs("[data-hero-name-note]").textContent = copy.nameNote;
    qs("[data-hero-tagline]").textContent = copy.tagline;

    var badgeRow = qs("[data-hero-badges]");
    badgeRow.innerHTML = "";
    copy.badges.forEach(function (badge) {
      badgeRow.appendChild(el("li", { class: "badge" }, [document.createTextNode(badge)]));
    });

    var githubLink = qs("[data-hero-github]");
    githubLink.setAttribute("aria-label", copy.contact.githubAria);
    githubLink.querySelector("[data-icon-slot]").innerHTML = ICONS.github;
    githubLink.querySelector("[data-label-slot]").textContent = copy.contact.githubLabel;

    var mailLink = qs("[data-hero-email]");
    mailLink.setAttribute("aria-label", copy.contact.emailAria);
    mailLink.querySelector("[data-icon-slot]").innerHTML = ICONS.mail;
    mailLink.querySelector("[data-label-slot]").textContent = copy.contact.emailLabel;

    qs("[data-hero-scroll-hint]").textContent = copy.scrollHint;
  }

  /* ------------------------------------------------------------------
   * Render: Highlights
   * ------------------------------------------------------------------ */
  function renderHighlights(lang) {
    var copy = t(lang).highlights;
    qs("[data-highlights-title]").textContent = copy.title;
    qs("[data-highlights-subtitle]").textContent = copy.subtitle;

    var grid = qs("[data-highlights-grid]");
    grid.innerHTML = "";
    copy.items.forEach(function (item, i) {
      var card = el("article", { class: "highlight-card reveal", style: "--delay:" + i * 70 + "ms" }, [
        el("div", { class: "highlight-icon", html: ICONS[item.icon] || "" }),
        el("p", { class: "highlight-label", text: item.label }),
        el("h3", { class: "highlight-title", text: item.title }),
        el("p", { class: "highlight-body", text: item.body }),
      ]);
      grid.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------
   * Render: Experience
   * ------------------------------------------------------------------ */
  function renderExperience(lang) {
    var copy = t(lang).experience;
    qs("[data-experience-title]").textContent = copy.title;
    qs("[data-experience-subtitle]").textContent = copy.subtitle;

    var timeline = qs("[data-experience-timeline]");
    timeline.innerHTML = "";
    copy.items.forEach(function (item, i) {
      var bulletsList = el("ul", { class: "timeline-bullets" });
      item.bullets.forEach(function (b) {
        var li = el("li", { class: "timeline-bullet" });
        if (b.label) {
          li.appendChild(el("span", { class: "timeline-bullet-label", text: b.label }));
        }
        li.appendChild(document.createTextNode(b.label ? ": " + b.text : b.text));
        bulletsList.appendChild(li);
      });

      var headerChildren = [
        el("h3", { class: "timeline-org", text: item.org }),
      ];
      if (item.badge) {
        headerChildren.push(el("span", { class: "timeline-badge", text: item.badge }));
      }

      var card = el("article", { class: "timeline-item reveal", style: "--delay:" + i * 90 + "ms" }, [
        el("div", { class: "timeline-marker", "aria-hidden": "true" }),
        el("div", { class: "timeline-content" }, [
          el("div", { class: "timeline-header" }, headerChildren),
          el("p", { class: "timeline-role" }, [
            document.createTextNode(item.role),
            el("span", { class: "timeline-period", text: item.period }),
          ]),
          bulletsList,
        ]),
      ]);
      timeline.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------
   * Render: Projects (+ dynamic tag filter)
   * ------------------------------------------------------------------ */
  function getAllTags() {
    var seen = [];
    PROJECTS.forEach(function (p) {
      (p.tags || []).forEach(function (tag) {
        if (seen.indexOf(tag) === -1) seen.push(tag);
      });
    });
    return seen;
  }

  function renderProjectFilters(lang) {
    var copy = t(lang).projects;
    var bar = qs("[data-project-filters]");
    bar.innerHTML = "";

    var tags = ["all"].concat(getAllTags());
    tags.forEach(function (tag) {
      var label = tag === "all" ? copy.filterAll : copy.tagLabels[tag] || tag;
      var btn = el("button", {
        type: "button",
        class: "filter-chip" + (state.activeFilter === tag ? " is-active" : ""),
        "data-tag": tag,
        "aria-pressed": state.activeFilter === tag ? "true" : "false",
        text: label,
      });
      btn.addEventListener("click", function () {
        state.activeFilter = tag;
        renderProjectFilters(state.lang);
        applyProjectFilter();
      });
      bar.appendChild(btn);
    });
  }

  function applyProjectFilter() {
    var cards = document.querySelectorAll("[data-project-card]");
    cards.forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split(",");
      var show = state.activeFilter === "all" || tags.indexOf(state.activeFilter) !== -1;
      card.classList.toggle("is-hidden", !show);
    });
  }

  function projectLinkButtons(project, lang) {
    var copy = t(lang).projects.links;
    var wrap = el("div", { class: "project-links" });
    var links = project.links || {};
    var count = 0;

    if (project.readme) {
      wrap.appendChild(
        internalProjectLink(
          "project.html?id=" + encodeURIComponent(project.id),
          copy.detail,
          ICONS.arrow
        )
      );
      count++;
    }
    if (links.github) {
      var isProfileRoot = /^https?:\/\/github\.com\/[^\/]+\/?$/i.test(links.github);
      wrap.appendChild(
        projectLink(links.github, isProfileRoot ? copy.githubProfile : copy.github, ICONS.github)
      );
      count++;
    }
    if (links.notion) {
      wrap.appendChild(projectLink(links.notion, copy.notion, ICONS.external));
      count++;
    }
    if (links.other && links.other.url) {
      wrap.appendChild(
        projectLink(links.other.url, links.other.label || copy.other, ICONS.external)
      );
      count++;
    }
    return count > 0 ? wrap : null;
  }

  function projectLink(href, label, icon) {
    return el(
      "a",
      {
        class: "project-link",
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      [
        el("span", { class: "project-link-icon", html: icon }),
        el("span", { text: label }),
      ]
    );
  }

  function internalProjectLink(href, label, icon) {
    return el(
      "a",
      {
        class: "project-link",
        href: href,
      },
      [
        el("span", { class: "project-link-icon", html: icon }),
        el("span", { text: label }),
      ]
    );
  }

  function renderProjects(lang) {
    var copy = t(lang).projects;
    qs("[data-projects-title]").textContent = copy.title;
    qs("[data-projects-subtitle]").textContent = copy.subtitle;

    renderProjectFilters(lang);

    var grid = qs("[data-projects-grid]");
    grid.innerHTML = "";

    PROJECTS.forEach(function (project, i) {
      var stackList = el("ul", { class: "project-stack" });
      (project.stack || []).forEach(function (tech) {
        stackList.appendChild(el("li", { class: "stack-chip", text: tech }));
      });

      var tagList = el("ul", { class: "project-tags" });
      (project.tags || []).forEach(function (tag) {
        tagList.appendChild(
          el("li", { class: "tag-chip", text: copy.tagLabels[tag] || tag })
        );
      });

      var highlightsList = el("ul", { class: "project-highlights" });
      (project.highlights && project.highlights[lang] ? project.highlights[lang] : []).forEach(
        function (h) {
          highlightsList.appendChild(el("li", { text: h }));
        }
      );

      var linksNode = projectLinkButtons(project, lang);

      var cardChildren = [
        tagList,
        el("h3", { class: "project-name", text: project.name[lang] || project.name.ko }),
        el("p", { class: "project-tagline", text: project.tagline[lang] || project.tagline.ko }),
        highlightsList,
        stackList,
      ];
      if (linksNode) cardChildren.push(linksNode);

      var card = el(
        "article",
        {
          class: "project-card reveal",
          style: "--delay:" + i * 80 + "ms",
          "data-project-card": "",
          "data-tags": (project.tags || []).join(","),
        },
        cardChildren
      );
      grid.appendChild(card);
    });

    // "more on GitHub" card, always last
    var moreCard = el("article", { class: "project-card project-card--more reveal" }, [
      el("div", { class: "more-icon", html: ICONS.arrow }),
      el("h3", { class: "project-name", text: copy.more.title }),
      el("p", { class: "project-tagline", text: copy.more.body }),
      el("a", { class: "project-link project-link--more", href: "https://github.com/P4HB", target: "_blank", rel: "noopener noreferrer" }, [
        el("span", { text: copy.more.linkText }),
        el("span", { class: "project-link-icon", html: ICONS.arrow }),
      ]),
    ]);
    grid.appendChild(moreCard);

    applyProjectFilter();
  }

  /* ------------------------------------------------------------------
   * Render: Skills
   * ------------------------------------------------------------------ */
  function renderSkills(lang) {
    var copy = t(lang).skills;
    qs("[data-skills-title]").textContent = copy.title;
    qs("[data-skills-subtitle]").textContent = copy.subtitle;

    var grid = qs("[data-skills-grid]");
    grid.innerHTML = "";
    copy.groups.forEach(function (group, i) {
      var chipList = el("ul", { class: "skill-chip-list" });
      group.items.forEach(function (item) {
        chipList.appendChild(el("li", { class: "skill-chip", text: item }));
      });
      var block = el("div", { class: "skill-group reveal", style: "--delay:" + i * 60 + "ms" }, [
        el("h3", { class: "skill-group-label", text: group.label }),
        chipList,
      ]);
      grid.appendChild(block);
    });
  }

  /* ------------------------------------------------------------------
   * Render: Footer
   * ------------------------------------------------------------------ */
  function renderFooter(lang) {
    var copy = t(lang).footer;
    qs("[data-footer-title]").textContent = copy.title;
    qs("[data-footer-body]").textContent = copy.body;

    var githubLink = qs("[data-footer-github]");
    githubLink.querySelector("[data-icon-slot]").innerHTML = ICONS.github;
    githubLink.querySelector("[data-label-slot]").textContent = copy.githubLabel;

    var mailLink = qs("[data-footer-email]");
    mailLink.querySelector("[data-icon-slot]").innerHTML = ICONS.mail;
    mailLink.querySelector("[data-label-slot]").textContent = copy.emailLabel;

    qs("[data-footer-copyright]").textContent = copy.copyright;
  }

  /* ------------------------------------------------------------------
   * Language switching
   * ------------------------------------------------------------------ */
  function setLang(lang) {
    state.lang = lang;
    document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : "en");
    document.title = t(lang).meta.title;

    var metaDesc = qs('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t(lang).meta.description);

    renderNav(lang);
    renderHero(lang);
    renderHighlights(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderSkills(lang);
    renderFooter(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage unavailable (e.g. private mode) — ignore */
    }

    initRevealObserver();
  }

  function toggleLang() {
    setLang(state.lang === "ko" ? "en" : "ko");
  }

  /* ------------------------------------------------------------------
   * Mobile nav
   * ------------------------------------------------------------------ */
  function openMobileNav() {
    document.body.classList.add("nav-open");
    qs("[data-menu-toggle]").setAttribute("aria-expanded", "true");
    qs("[data-menu-toggle]").innerHTML = ICONS.close;
    var firstLink = qs("[data-nav-links-mobile] a");
    if (firstLink) firstLink.focus();
  }

  function closeMobileNav() {
    document.body.classList.remove("nav-open");
    var menuBtn = qs("[data-menu-toggle]");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.innerHTML = ICONS.menu;
  }

  function toggleMobileNav() {
    if (document.body.classList.contains("nav-open")) closeMobileNav();
    else openMobileNav();
  }

  /* ------------------------------------------------------------------
   * Scroll reveal
   * ------------------------------------------------------------------ */
  var revealObserver = null;
  function initRevealObserver() {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = document.querySelectorAll(".reveal:not(.is-visible)");

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      targets.forEach(function (node) {
        node.classList.add("is-visible");
      });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
    }

    targets.forEach(function (node) {
      revealObserver.observe(node);
    });
  }

  /* ------------------------------------------------------------------
   * Sticky header shadow-on-scroll
   * ------------------------------------------------------------------ */
  function initHeaderScrollState() {
    var header = qs(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------------------------
   * Init
   * ------------------------------------------------------------------ */
  function getInitialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ko" || saved === "en") return saved;
    } catch (e) {
      /* ignore */
    }
    return "ko";
  }

  function init() {
    // Set static icon slots that never change with language.
    qs("[data-menu-toggle]").innerHTML = ICONS.menu;

    qs("[data-lang-toggle]").addEventListener("click", toggleLang);
    qs("[data-lang-toggle-mobile]").addEventListener("click", function () {
      toggleLang();
      closeMobileNav();
    });
    qs("[data-menu-toggle]").addEventListener("click", toggleMobileNav);
    qs("[data-nav-overlay]").addEventListener("click", closeMobileNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
        closeMobileNav();
        qs("[data-menu-toggle]").focus();
      }
    });

    // Note: desktop .nav-link elements and mobile .nav-link-mobile elements
    // are (re)created by renderNav() on every render, so their click
    // handlers (closing the mobile drawer) are bound there instead of here.

    initHeaderScrollState();
    setLang(getInitialLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
