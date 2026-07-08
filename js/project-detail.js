(function () {
  "use strict";

  var PROFILE_URL = "https://github.com/P4HB";
  var ICON_EXTERNAL =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5h11v11"/><path d="M19 5 5 19"/></svg>';

  function qs(sel) {
    return document.querySelector(sel);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function inlineMarkdown(value) {
    var text = escapeHtml(value);
    text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, label, href) {
      return '<a href="' + escapeHtml(href) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    });
    return text;
  }

  function renderMarkdown(markdown) {
    var lines = markdown.replace(/\r\n/g, "\n").split("\n");
    var html = [];
    var listOpen = false;
    var codeOpen = false;
    var codeLines = [];

    function closeList() {
      if (listOpen) {
        html.push("</ul>");
        listOpen = false;
      }
    }

    function closeCode() {
      if (codeOpen) {
        html.push("<pre><code>" + escapeHtml(codeLines.join("\n")) + "</code></pre>");
        codeOpen = false;
        codeLines = [];
      }
    }

    lines.forEach(function (line) {
      if (line.trim().indexOf("```") === 0) {
        if (codeOpen) closeCode();
        else {
          closeList();
          codeOpen = true;
          codeLines = [];
        }
        return;
      }

      if (codeOpen) {
        codeLines.push(line);
        return;
      }

      if (!line.trim()) {
        closeList();
        return;
      }

      var heading = line.match(/^(#{1,3})\s+(.+)$/);
      if (heading) {
        closeList();
        html.push("<h" + heading[1].length + ">" + inlineMarkdown(heading[2]) + "</h" + heading[1].length + ">");
        return;
      }

      var bullet = line.match(/^\s*[-*]\s+(.+)$/);
      if (bullet) {
        if (!listOpen) {
          html.push("<ul>");
          listOpen = true;
        }
        html.push("<li>" + inlineMarkdown(bullet[1]) + "</li>");
        return;
      }

      closeList();
      html.push("<p>" + inlineMarkdown(line) + "</p>");
    });

    closeCode();
    closeList();
    return html.join("\n");
  }

  function projectById(id) {
    return PROJECTS.find(function (project) {
      return project.id === id;
    });
  }

  function renderActions(project) {
    var actions = qs("[data-detail-actions]");
    var githubUrl = (project.links && project.links.github) || PROFILE_URL;
    actions.innerHTML =
      '<a class="contact-link" href="' +
      escapeHtml(githubUrl) +
      '" target="_blank" rel="noopener noreferrer"><span class="contact-icon">' +
      ICON_EXTERNAL +
      '</span><span>GitHub 보기</span></a>';

    if (project.links && project.links.notion) {
      actions.innerHTML +=
        '<a class="contact-link" href="' +
        escapeHtml(project.links.notion) +
        '" target="_blank" rel="noopener noreferrer"><span class="contact-icon">' +
        ICON_EXTERNAL +
        "</span><span>Notion 보기</span></a>";
    }
  }

  function init() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var project = projectById(id);
    var body = qs("[data-markdown-body]");

    if (!project) {
      document.title = "Project not found | P4HB";
      qs("[data-detail-title]").textContent = "Project not found";
      body.innerHTML = "<p>프로젝트 정보를 찾을 수 없습니다.</p>";
      return;
    }

    var title = project.name.ko || project.name.en || project.id;
    qs("[data-detail-title]").textContent = title;
    qs("[data-detail-tagline]").textContent = project.tagline.ko || project.tagline.en || "";
    document.title = title + " | P4HB";
    renderActions(project);

    if (!project.readme) {
      body.innerHTML = "<p>등록된 README가 없습니다.</p>";
      return;
    }

    fetch(project.readme)
      .then(function (res) {
        if (!res.ok) throw new Error("README fetch failed");
        return res.text();
      })
      .then(function (markdown) {
        body.innerHTML = renderMarkdown(markdown);
      })
      .catch(function () {
        body.innerHTML = "<p>README를 불러오지 못했습니다.</p>";
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
