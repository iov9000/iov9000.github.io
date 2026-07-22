---
title: Research-grade applied ML for embodied agents
summary: A short technical note on connecting reward learning, simulation-based training, and safety-critical evaluation for physical AI systems.
date: 2026-06-09
authors:
  - Ivan Ovinnikov
tags:
  - Research Note
  - Reinforcement Learning
  - Reward Learning
  - Physical AI
math: true
---

Embodied reinforcement learning sits between two requirements that are often treated separately: the objective must encode the right behavior, and the trained policy must survive the deployment distribution.

A useful abstraction is to keep three objects visible:

$$
\pi_\theta(a \mid s), \qquad r_\phi(s,a), \qquad \mathcal{E}(p_{\mathrm{train}}, p_{\mathrm{deploy}}).
$$

The policy $\pi_\theta$ is the controller, the reward or evaluation model $r_\phi$ defines the learning signal, and $\mathcal{E}$ is the evaluation protocol that exposes distribution shift between training and deployment.

My research and applied work focus on this interface: inverse RL and imitation learning for objective design, simulation workflows for scalable policy optimization, and robustness experiments that deliberately search for rare failure modes rather than only reporting average-case task performance.
