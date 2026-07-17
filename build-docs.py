#!/usr/bin/env python3
"""Pre-render docs/Module_*.md into standalone static HTML pages.

Static output means the developer handbook works with zero JS/fetch -
opening index.html directly as a local file (no server) still works,
which a fetch()-based viewer cannot guarantee.
"""
import markdown
from pathlib import Path

DOCS = Path(__file__).parent / "docs"
MODULES = [f"Module_{i}" for i in range(1, 10)]

TITLES = {
    "Module_1": "Module 1: Layout &amp; Structural Containers",
    "Module_2": "Module 2: Advanced Data &amp; Grid Engines",
    "Module_3": "Module 3: Enterprise Form Fields",
    "Module_4": "Module 4: Date, Time &amp; Scheduling",
    "Module_5": "Module 5: Media &amp; Visual Content",
    "Module_6": "Module 6: Specialized Logic &amp; Programming",
    "Module_7": "Module 7: Reporting, Charts &amp; Analytics",
    "Module_8": "Module 8: Workflow &amp; Business Process (BPMN)",
    "Module_9": "Module 9: Specialized Modules",
}

PAGE = """<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Na3Na3 Soft Developer Handbook</title>
<link rel="icon" href="../favicon.ico" sizes="any">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500;700;900&family=Cairo:wght@400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">
</head>
<body>
<div class="doc-page">
  <div class="doc-page-nav">
    <a href="../index.html#developers" class="btn-ghost">&larr; Back to site</a>
    <div>
      {prev}
      {next}
    </div>
  </div>
  <div class="markdown-body">
{content}
  </div>
</div>
</body>
</html>
"""

def link(module, label, disabled_label):
    if module is None:
        return f'<span class="btn-secondary disabled">{disabled_label}</span>'
    return f'<a href="{module.lower().replace("_", "-")}.html" class="btn-secondary">{label}</a>'

for i, mod in enumerate(MODULES):
    src = DOCS / f"{mod}.md"
    text = src.read_text(encoding="utf-8")
    html = markdown.markdown(text, extensions=["fenced_code", "tables"])
    prev_mod = MODULES[i - 1] if i > 0 else None
    next_mod = MODULES[i + 1] if i < len(MODULES) - 1 else None
    page = PAGE.format(
        title=TITLES[mod],
        content=html,
        prev=link(prev_mod, "&larr; Previous", "&larr; Previous"),
        next=link(next_mod, "Next &rarr;", "Next &rarr;"),
    )
    out = DOCS / f"{mod.lower().replace('_', '-')}.html"
    out.write_text(page, encoding="utf-8")
    print(f"wrote {out.relative_to(DOCS.parent)}")
