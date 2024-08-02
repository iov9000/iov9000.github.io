---
title: "Imitation Learning using Generalized Sliced Wasserstein Distances"
authors:
- admin
date: "2024-06-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2024-06-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Imitation learning methods enable one to train reinforcement-learning-style policies by way of mimicking the state occupancies of a given expert agent. Most approaches are divergence-based, which can result in optimization objectives that, empirically, are brittle and difficult-to-solve. As an alternative, we explore an approach based on the sliced Wasserstein distance, with the hope of using its optimal-transport-based formulation and favorable computational properties to improve performance. To do so, we formulate a per-state reward function based on the approximate differential of the sliced Wasserstein distance, which allows one to apply standard forward reinforcement learning methods to solve the imitation learning policy optimization problem. We demonstrate that the proposed method exhibits improved performance compared to established imitation learning frameworks on a number of benchmark tasks from the MuJoCo robotic locomotion suite.

# Summary. An optional shortened abstract.
TLDR: We apply generalized sliced Wasserstein distances to do data-efficient imitation learning 

tags:
- Imitation Learning

featured: true

#links:
#- name: Custom Link
#  url: http://example.org
#url_pdf: http://arxiv.org/pdf/1512.04133v1
#url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_dataset: '#'
#url_poster: '#'
#url_project: ''
#url_slides: ''
#url_source: '#'
#url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
#  focal_point: ""
#  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

