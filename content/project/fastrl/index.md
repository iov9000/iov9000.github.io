---
title: "FASTRL: Reinforcement Learning in Surgical Digital Twins"
summary: Peer-reviewed work on reinforcement-learning benchmarks and assistance policies in surgical digital-twin environments.
status: Published
highlight: Peer-reviewed benchmark and assistance-policy study in surgical digital twins.
date: 2024-04-29
tags:
  - Reinforcement Learning
  - Inverse Reinforcement Learning
  - Digital Twins
  - Surgical Robotics
  - Skill Assessment
links:
  - name: Project
    url: https://fastrl.ethz.ch/
  - name: Paper
    url: https://link.springer.com/article/10.1007/s11548-024-03116-z
  - name: Thesis
    url: https://www.research-collection.ethz.ch/handle/20.500.11850/708755
math: true
---

## Problem

Surgical simulators often score trainees with coarse aggregate metrics such as completion time, path length, or manually weighted errors. These scores do not identify where performance deteriorated, predict whether recovery is likely, or demonstrate a corrective action.

## Claim

Representing a simulator exercise as a sequential decision process allows policies, learned rewards, and value functions to provide complementary models of procedural performance rather than a single retrospective score.

## Method

FASTRL adapts three Fundamentals of Arthroscopic Surgery Training exercises—ImageCentring, Periscoping, and TraceLines—to reinforcement learning. Policies are trained with handcrafted objectives, while GAIL- and AIRL-based formulations learn from demonstrations.

For a learned reward $r_\psi$, the value function

$$
V_\phi(s_t)\approx
\mathbb E\!\left[
\sum_{k=0}^{T-t}\gamma^k r_\psi(s_{t+k},a_{t+k})
\mid s_t
\right]
$$

estimates expected remaining procedural quality. The reward supplies local feedback, the value function tracks how a trajectory is unfolding, and the policy can generate a possible continuation.

## Evidence

On Periscoping, learned reward and value scores reproduced the reference ordering: the virtual agent ranked above two experts, who ranked above three novices.

| Agent | Learned reward | Learned value |
|---|---:|---:|
| Virtual agent | 0.993 | 0.876 |
| Expert 1 | 0.732 | 0.728 |
| Expert 2 | 0.720 | 0.716 |
| Novice 1 | 0.617 | 0.627 |
| Novice 2 | 0.518 | 0.521 |
| Novice 3 | 0.374 | 0.339 |

On TraceLines, learned values separated expert, intermediate, and poor trajectories with approximate scores of $0.91$, $0.64$, and $0.33$.

In a simulated laparoscopic diagnostic tour, models trained from ten highly rated demonstrations were evaluated on one hundred procedures. Learned scores correlated strongly with path length (Spearman magnitudes of approximately $0.73$–$0.82$) but only weakly with the simulator's safety metric ($0.24$–$0.25$).

## Limitations

This is a simulation-based feasibility study, not a clinically validated assistance system. Only three FAST exercises were implemented; the models relied primarily on simulator state and kinematics; and the scores were not independently validated with standardized expert-assessment protocols. The weak safety correlation also shows that movement economy is not a proxy for complete surgical competence.

## Paper and project

[Fundamentals of Arthroscopic Surgery Training and beyond](https://link.springer.com/article/10.1007/s11548-024-03116-z), Ovinnikov et al., *International Journal of Computer Assisted Radiology and Surgery*, 2024. The [FASTRL project site](https://fastrl.ethz.ch/) contains the public benchmark material.
