---
title: Predictive Safety Curricula for Robust Legged Locomotion
authors:
- Ivan Ovinnikov
- Pascal Sutter
- Christian Gehring
- Jordis Herrmann
date: '2026-09-29'
publication_types:
- manuscript
publication: 'arXiv preprint'
featured: true
summary: Predictive safety critics guide terrain sampling and randomized-event replay for robust legged locomotion, reducing shank-collision incidence by 63% on ANYmal-D hardware relative to a learning-progress curriculum.
links:
- name: arXiv
  url: https://arxiv.org/abs/2609.37070
- name: PDF
  url: https://arxiv.org/pdf/2609.37070
---

**Status:** Preprint.

**Summary:** Predictive Safety Curricula (PSC) learns a distributional safety critic from policy rollouts and uses predicted future safety costs to prioritize terrain contexts and replay randomized events. It changes the training distribution while preserving the task reward and policy-optimization objective.

PSC improves reliability in controlled rough-terrain experiments and transfers to two production locomotion stacks. On ANYmal-D hardware, shank-collision incidence falls by 63% relative to a learning-progress curriculum across three matched training seeds, with a reduction in every seed. On the production stair-climbing platform, no shank collisions were observed in 50 ascent–descent pairs, compared with 33 of 50 trials for the baseline.

See the related [locomotion project](/project/quadruped-locomotion/).
