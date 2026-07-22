---
title: Causally Invariant Reward Learning
summary: ArXiv preprint on reward learning from diverse demonstrations that remain stable under environment shifts.
date: 2024-09-01
tags:
  - Imitation Learning
  - Reward Learning
  - Causal Generalization
  - Distribution Shift
links:
  - name: Paper
    url: https://arxiv.org/abs/2409.08012
---

**Artifact type:** Preprint.

# Learning Reward Functions That Survive Distribution Shift

Inverse reinforcement learning aims to recover the objective behind expert behaviour, rather than merely copying the demonstrated actions.

In principle, this should produce reward functions that remain useful beyond the original demonstrations: under new initial states, changed dynamics, or different policy classes. In practice, learned rewards often capture accidental correlations in the demonstration data. A policy trained against such a reward may reproduce the observed trajectories but fail when the environment changes.

In [Learning Causally Invariant Reward Functions from Diverse Demonstronstrations](https://arxiv.org/abs/2409.08012), we study how diversity across expert demonstrations can be used to distinguish the shared task objective from source-specific behavioural preferences.

## The problem with pooling demonstrations

Consider a Markov decision process

[
\mathcal M=(\mathcal S,\mathcal A,P,\mu_0,r,\gamma),
]

where (\mathcal S) and (\mathcal A) are the state and action spaces, (P) is the transition model, (\mu_0) is the initial-state distribution, (r) is the unknown reward, and (\gamma) is the discount factor.

Suppose demonstrations are collected from several experts:

[
\mathcal D_1,\ldots,\mathcal D_E.
]

The experts may solve the same task while differing in style, preferences, or operating conditions. One expert may pass an obstacle on the left, another on the right. One may move conservatively, while another takes a faster trajectory.

Standard inverse reinforcement learning commonly pools these datasets:

[
\mathcal D=\bigcup_{e=1}^{E}\mathcal D_e.
]

This discards information about where each trajectory came from. If one strategy is overrepresented, the learned reward may incorrectly treat it as part of the task itself.

The model can therefore assign high reward to a behaviour that is merely correlated with successful demonstrations. Once the dynamics change, a newly trained policy may exploit this correlation rather than solving the intended task.

## Expert diversity as an intervention

Our central idea is to treat each demonstration source as a separate environment.

Expert identity changes the distribution of observed states and actions, but it should not change the underlying meaning of task success. In causal terms, the expert sources provide interventions on the trajectory-generating process.

Let (O_t) indicate whether a state–action pair is optimal. We seek a representation for which

[
P(O_t=1\mid s_t,a_t)
]

remains stable across expert environments.

A reward feature that predicts optimality for only one expert is likely to encode a source-specific correlation. A feature that remains predictive across several independently varying experts is more likely to reflect the shared task.

## Enforcing invariant reward learning

We introduce an invariance penalty inspired by invariant risk minimization.

Let (\phi_\theta) denote a learned reward representation, (w) a scalar predictor, and (\mathcal L_e) the inverse-reinforcement-learning loss for expert environment (e). The objective takes the schematic form

[
\min_\theta
\sum_{e=1}^{E}
\left[
\mathcal L_e(\phi_\theta)
+
\lambda
\left|
\nabla_w
\mathcal L_e(w\circ\phi_\theta)
\big|_{w=1}
\right|_2^2
\right],
]

where (\lambda\geq 0) controls the strength of the invariance constraint.

The gradient penalty asks whether the same predictor is locally optimal for every expert source. If different sources require different predictors, the representation likely contains source-dependent information.

For maximum-entropy feature-matching IRL, the penalty reduces to a particularly intuitive condition:

[
D_e
===

\left|
\mathbb E_{\xi\sim\mathcal D_e}
[\phi_\theta(\xi)]
------------------

\mathbb E_{\xi\sim p_\theta}
[\phi_\theta(\xi)]
\right|_2^2.
]

Here, (\xi) denotes a trajectory and (p_\theta) is the trajectory distribution induced by the current reward. Rather than matching feature expectations only after pooling all demonstrations, the method requires them to be matched separately for each expert source.

The same principle can be incorporated into adversarial methods such as AIRL and GAIL by evaluating the discriminator or reward-classification loss independently across demonstration environments.

## What did we observe?

In a controlled gridworld, imbalanced demonstrations caused conventional maximum-entropy IRL to prefer the most frequently observed path. The invariant formulation instead recovered a reward that represented the experts’ shared destination while preserving multiple valid ways of reaching it.

We then evaluated the method on five MuJoCo locomotion tasks. Rewards were learned from diverse demonstrations and subsequently used to train new policies under changes to:

* body mass;
* joint limits;
* actuator strength;
* contact friction.

Invariant regularization improved transfer across maximum-entropy IRL, AIRL, and GAIL variants, with the largest gains appearing in environments where the baseline reward strongly overfit to the original dynamics.

The important distinction is between fitting expert trajectories and recovering an objective that remains useful for optimization. A reward can score the demonstrations correctly while still producing poor behaviour when optimized under a shifted environment.

## What the result does—and does not—establish

The method does not guarantee causal identification from arbitrary demonstrations.

Its validity depends on a structural assumption: expert sources vary nuisance factors while preserving the underlying task semantics. If different experts genuinely optimize different tasks, enforcing invariance may remove meaningful reward information.

The regularization strength also matters. Too little invariance leaves source-specific correlations intact; too much can suppress predictive features that are stable but not perfectly identical across environments.

The result is therefore best understood as a practical principle for reward learning:

> Do not pool away the structure in diverse demonstrations. Use variation across sources to identify which behavioural features remain stable.

Expert diversity is not merely additional data. It provides evidence about which correlations belong to the task and which belong to the demonstrator.

By preserving that information during reward learning, we can recover objectives that are less faithful to any single trajectory—and more faithful to the intent shared across them.
