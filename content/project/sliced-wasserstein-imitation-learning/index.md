---
title: Distribution-Matching Imitation Learning
summary: Uses transport geometry to turn distribution-level imitation objectives into transition-level learning signals.
status: Research manuscript
highlight: Remained effective under up to 100× demonstration subsampling on Ant and Humanoid.
date: 2023-09-23
tags:
  - Imitation Learning
  - Optimal Transport
  - Occupancy Matching
links:
  - name: OpenReview
    url: https://openreview.net/forum?id=8rN439jpkT
math: true
---

## Problem

A policy $\pi$ and expert demonstrations induce occupancy measures $\rho_\pi$ and $\rho_E$. Distribution-matching imitation seeks

$$
\min_\pi d(\rho_\pi,\rho_E).
$$

Adversarial methods usually learn a discriminator between these evolving distributions. That density-ratio problem can be brittle when expert and policy trajectories have little support overlap. Wasserstein distances remain informative in that regime, but full optimal transport is expensive in high-dimensional state–action spaces.

## Claim

We convert sliced-Wasserstein occupancy discrepancies into per-transition rewards suitable for ordinary off-policy reinforcement learning.

## Method

Sliced Wasserstein distance replaces one high-dimensional transport problem with one-dimensional problems along projections $u_1,\ldots,u_K$:

$$
\operatorname{SW}_{U}^{2}(\rho_\pi,\rho_E)
=
\frac{1}{K}\sum_{m=1}^{K}
W_2^2\!\left((u_m)_\#\rho_\pi,(u_m)_\#\rho_E\right).
$$

Each projected problem is solved by sorting and rank-matching samples, giving approximately $O(KN\log N)$ computation for $N$ samples.

We turn the global discrepancy into a local learning signal. For a policy transition $x_t$, define

$$
r(x_t)
=
d(\hat\rho_E,\hat\rho_\pi)
-
d\!\left(\hat\rho_E,
\operatorname{rpl}(\hat\rho_\pi,x_t)\right),
$$

where $\operatorname{rpl}(\hat\rho_\pi,x_t)$ replaces one atom of the empirical policy occupancy measure by $x_t$. The reward is positive when inserting the transition moves the policy distribution closer to the expert distribution.

With fixed projections, the same construction can be expressed through one-dimensional transport residuals. Its expected reward equals the negative sliced Wasserstein discrepancy, so maximizing reward corresponds to minimizing the occupancy distance while the transport maps are held fixed. We also learn nonlinear projections that expose discrepancies random directions may miss, then optimize the resulting rewards with Soft Actor-Critic.

## Evidence

We evaluated SWIL on five MuJoCo locomotion tasks using one, four, or ten expert trajectories. With one trajectory, the reported cumulative returns were:

| Environment | SWIL | Expert |
|---|---:|---:|
| Ant | 4,339 | 5,160 |
| HalfCheetah | 7,482 | 8,901 |
| Hopper | 3,585 | 3,607 |
| Humanoid | 5,952 | 6,250 |
| Walker2d | 3,936 | 4,064 |

Across these tasks, SWIL was competitive with the evaluated behavioral-cloning, GAIL, AIRL, DAC, PWIL, and IQ-Learn baselines. It remained effective on Ant and Humanoid after retaining only every twentieth or hundredth expert transition, corresponding to datasets of 50 or 10 transitions.

## Failure modes

The results were not uniform. SWIL approached expert performance on Adroit door opening but was poor and high-variance on FrankaKitchen. It also depended strongly on the downstream RL algorithm: Soft Actor-Critic outperformed the tested PPO and TD3 variants.

The reward changes with the policy occupancy, and learned projections reintroduce a min–max problem. The result is therefore narrower than a general solution to distribution-matching imitation: sliced transport makes an occupancy discrepancy computationally practical and exposes it as a transition-level reward.

## Paper

[Imitation Learning using Generalized Sliced Wasserstein Distances](https://openreview.net/forum?id=8rN439jpkT), Ovinnikov, Terenin, and Buhmann.
