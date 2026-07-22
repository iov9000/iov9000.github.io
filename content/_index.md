---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  spacing: "5rem"

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          filename: endless-constellation.svg
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: true

  - block: collection
    id: papers
    content:
      title: Selected Publications & Preprints
      text: "Peer-reviewed papers, preprints, and under-review manuscripts in reinforcement learning, reward learning, imitation learning, and generative modeling."
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: date-title-summary

  - block: markdown
    id: themes
    content:
      title: Research Themes
      subtitle: ''
      text: |-
        <div class="text-base leading-7">

        - **Robust learning signals:** reward, preference, and evaluation design under distribution shift.
        - **Distributional control:** generative and control-as-inference approaches to scalable sequential decision-making.
        - **Open-ended learning:** automated curricula over task distributions for long-tail robustness and skill discovery.
        - **Physical AI evaluation:** simulation workflows, rare-failure curricula, and safety-critical policy tests for embodied agents.

        </div>
    design:
      columns: '1'

  - block: collection
    id: projects
    content:
      title: Research Artifacts
      text: "Projects are grouped as peer-reviewed work, preprints, under-review manuscripts, internal deployment work, and research notes rather than product case studies."
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 2

  - block: collection
    id: notes
    content:
      title: Research Notes
      text: "Technical notes and updates on reinforcement learning, reward design, simulation workflows, and evaluation."
      page_type: post
      count: 3
      filters:
        tag: Research Note
        exclude_featured: false
      order: desc
    design:
      view: date-title-summary

---
