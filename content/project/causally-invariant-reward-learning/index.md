---
title: Learning Rewards That Survive Distribution Shift
summary: Invariant reward learning uses variation across demonstrators to identify features that remain stable under dynamics and nuisance shifts.
status: Preprint
highlight: Improved reward transfer across five MuJoCo tasks under dynamics interventions.
date: 2024-09-12
tags:
  - Imitation Learning
  - Reward Learning
  - Causal Generalization
  - Distribution Shift
links:
  - name: Paper
    url: https://arxiv.org/abs/2409.08012
math: true
---

## Problem

Inverse reinforcement learning can recover a reward that explains demonstrations yet fails when optimized by a new policy. Pooling trajectories from several experts makes this worse: it discards which source produced each behavior and can turn an overrepresented style into an apparent part of the task.

Given expert datasets

$$
\mathcal D_1,\ldots,\mathcal D_E,
$$

we treat each source as a separate environment. Expert identity changes the observed state–action distribution, while the meaning of task success is assumed to remain fixed. Source-specific predictors are therefore evidence of a spurious reward feature rather than a stable task feature.

## Hypothesis

Reward features that remain predictive across demonstrators transfer better under dynamics shift when those demonstrators vary nuisance factors while preserving task semantics.

## Method

Let $\phi_\theta$ be a learned reward representation, $w$ a scalar predictor, and $\mathcal L_e$ the inverse-reinforcement-learning loss for source $e$. We regularize the representation with an invariant-risk penalty:

$$
\min_\theta
\sum_{e=1}^{E}
\left[
\mathcal L_e(\phi_\theta)
+
\lambda
\left\|
\nabla_w \mathcal L_e(w\circ\phi_\theta)\big|_{w=1}
\right\|_2^2
\right].
$$

The penalty tests whether the same predictor is locally optimal for every demonstration source. For maximum-entropy feature-matching IRL, this reduces to matching the learned feature expectations separately for each source:

$$
D_e=
\left\|
\mathbb E_{\xi\sim\mathcal D_e}[\phi_\theta(\xi)]
-
\mathbb E_{\xi\sim p_\theta}[\phi_\theta(\xi)]
\right\|_2^2.
$$

The same source-wise regularization extends to adversarial reward-learning objectives such as AIRL and GAIL.

## Evidence

In a controlled gridworld, conventional maximum-entropy IRL learned the path most common in an imbalanced dataset. The invariant formulation recovered the shared destination while retaining multiple valid paths.

We then learned rewards on five MuJoCo locomotion tasks and trained new policies after changing body mass, joint limits, actuator strength, and contact friction. Invariant regularization improved transfer across maximum-entropy IRL, AIRL, and GAIL variants, with the largest gains where the baseline reward had overfit the original dynamics.

<figure class="research-figure">
  <a href="/img/projects/ci-irl-dynamics-transfer.png" target="_blank">
    <img src="/img/projects/ci-irl-dynamics-transfer.png" alt="Five plots compare causal-invariance, unregularized, and Lipschitz-regularized reward learning as body-mass perturbation increases across MuJoCo tasks." loading="lazy" />
  </a>
  <figcaption>Ground-truth return as body-mass perturbation increases. CI improves transfer on three of five tasks without a performance penalty on the other two. Figure 4 from the paper; open for full resolution.</figcaption>
</figure>

For a body-mass perturbation of $\epsilon=0.2$, the AIRL+CI reward produced mean ground-truth returns of $4{,}163$ on Walker2d and $5{,}108$ on Humanoid after one million SAC steps. The corresponding unregularized AIRL rewards produced $-3$ and $4{,}452$; the Lipschitz-regularized rewards produced $3{,}388$ and $1{,}789$. Results are averaged over five training seeds and ten evaluation rollouts.

The experiment separates two questions that held-out reward prediction can conflate: whether a reward fits demonstrations, and whether optimizing that reward still produces the intended behavior after a shift.

## Failure modes

The causal interpretation depends on a structural assumption: sources vary nuisance factors while preserving the task. If experts genuinely optimize different tasks, enforcing invariance can remove meaningful reward information.

Regularization strength also matters. Too little leaves source-specific correlations intact; too much can suppress useful features whose relationship to behavior is not identical across sources. The method is therefore a practical inductive bias, not a guarantee of causal identification from arbitrary demonstrations.

## Paper

[Learning Causally Invariant Reward Functions from Diverse Demonstrations](https://arxiv.org/abs/2409.08012), Ovinnikov, Bykovets, and Buhmann, 2024.
