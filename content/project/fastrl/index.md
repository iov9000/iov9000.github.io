---
title: "FASTRL: Reinforcement Learning in Surgical Digital Twins"
summary: Peer-reviewed work on reinforcement-learning benchmarks and assistance policies in surgical digital-twin environments.
date: 2024-04-29
tags:
  - Reinforcement Learning
  - Inverse Reinforcement Learning
  - Digital Twins
  - Surgical Robotics
  - Simulation
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

**Artifact type:** Peer-reviewed publication and benchmark.

Surgical simulators allow trainees to practise procedures without consuming operating-room time or exposing patients to risk. Their assessment systems, however, often reduce performance to coarse metrics such as completion time, instrument path length, or manually designed error penalties.

These metrics are useful but incomplete. A short trajectory is not necessarily controlled, safe, or technically correct. A single score also provides little information about **where performance deteriorated** or **how the trainee should recover**.

In [Fundamentals of Arthroscopic Surgery Training and Beyond](https://link.springer.com/article/10.1007/s11548-024-03116-z), we introduce **FASTRL**, a reinforcement-learning framework for studying virtual agents and learned performance models in simulated surgical training.

The central idea is to represent a surgical exercise as a sequential decision-making problem. This provides three complementary tools:

1. a policy that can demonstrate task execution;
2. a reward function that scores local behaviour;
3. a value function that estimates the expected quality of the remaining procedure.

## Surgical training as a decision process

We model interaction with the simulator as a Markov decision process

$$
\mathcal M
=
(\mathcal S,\mathcal A,T,\mu_0,R),
$$

where:

- $\mathcal S$ is the simulator state space;
- $\mathcal A$ contains the available instrument controls;
- $T(s'\mid s,a)$ describes the simulator dynamics;
- $\mu_0$ is the initial-state distribution;
- $R(s,a)$ evaluates the quality of an action in a given state.

A policy

$$
\pi(a\mid s)
$$

maps the current simulator state to a distribution over instrument commands.

The benchmark adapts three exercises from the Fundamentals of Arthroscopic Surgery Training programme:

- **ImageCentring**, which trains arthroscope alignment and monocular depth estimation;
- **Periscoping**, which trains the use of angled optics;
- **TraceLines**, which trains steady and controlled instrument motion.

The simulator state represents quantities such as instrument pose, target pose, motion, and relative alignment. Policies can be trained using either continuous acceleration commands or a lower-dimensional discrete control interface.

## Handcrafted and learned performance objectives

FASTRL supports two ways of defining procedural quality.

### Forward reinforcement learning

In the first setting, the reward is specified manually:

$$
r_{\mathrm{heur}}(s)
=
w^\top\phi(s),
$$

where $\phi(s)\in\mathbb R^d$ is a vector of task features and $w\in\mathbb R^d$ contains their weights.

The features can encode properties such as image centring, target alignment, motion smoothness, or task completion. A policy is trained to maximize expected discounted return:

$$
J(\pi)
=
\mathbb E_{\tau\sim\pi}
\left[
\sum_{t=0}^{T}
\gamma^t r_{\mathrm{heur}}(s_t)
\right],
$$

where $\tau$ is a trajectory and $\gamma\in(0,1)$ is the discount factor.

This approach is interpretable, but it requires the relevant dimensions of skill to be specified in advance. Designing such a reward becomes increasingly difficult as the procedure grows more complex.

### Inverse reinforcement learning

The second setting learns a reward from demonstrations:

$$
r_\psi(s,a),
$$

where $\psi$ denotes the reward-model parameters.

Given expert trajectories

$$
\mathcal D_E
=
\{\tau_1,\ldots,\tau_K\},
$$

adversarial imitation-learning methods compare transitions produced by the learning policy with transitions from the expert dataset.

The study evaluates formulations based on GAIL and AIRL. These methods jointly train a policy and a discriminator-like model. In AIRL, the learned model can also be interpreted as an explicit reward function for evaluating previously unseen trajectories.

## From one score to sequential feedback

The learned components support different forms of feedback.

The reward

$$
r_\psi(s_t,a_t)
$$

provides a local assessment of the trainee’s current action.

The value function

$$
V_\phi(s_t)
\approx
\mathbb E
\left[
\sum_{k=0}^{T-t}
\gamma^k r_\psi(s_{t+k},a_{t+k})
\mid s_t
\right]
$$

estimates the expected quality of the procedure from the current state onward.

Finally, the policy

$$
\pi(a\mid s_t)
$$

can generate a possible continuation from the trainee’s current state.

Together, these quantities could support an assistant that identifies problematic trajectory segments, estimates whether the procedure is likely to succeed, and demonstrates corrective actions.

The work establishes this as a simulation-based feasibility study—not as a clinically validated assistance system.

## Evaluating human trajectories

The learned reward and value functions were applied to recordings from users with different levels of experience.

On the **Periscoping** exercise, both learned scores reproduced the ordering obtained from the simulator’s handcrafted metrics. Two expert users were ranked above three novices, while the trained virtual agent received the highest score.

| Agent | Learned reward | Learned value |
|---|---:|---:|
| Virtual agent | 0.993 | 0.876 |
| Expert 1 | 0.732 | 0.728 |
| Expert 2 | 0.720 | 0.716 |
| Novice 1 | 0.617 | 0.627 |
| Novice 2 | 0.518 | 0.521 |
| Novice 3 | 0.374 | 0.339 |

Applying the value function at every point in a trajectory also produced a spatial performance map. Expert trajectories remained in consistently higher-value regions, while novice trajectories showed larger deviations from the virtual-agent reference.

On **TraceLines**, the learned value similarly separated trajectories labelled as expert, intermediate, and poor, with approximate scores of $0.91$, $0.64$, and $0.33$.

## Moving toward realistic procedures

The framework was additionally evaluated on a simulated laparoscopic diagnostic tour. Participants had to visualize anatomical landmarks around the liver and falciform ligament using a virtual endoscope.

Reward and value models were trained from ten highly rated demonstrations and evaluated on one hundred recorded procedures. Their predictions were compared with two conventional measures:

$$
d_{\mathrm{path}},
$$

the total distance travelled by the endoscope, and

$$
d_{\mathrm{safety}},
$$

a metric based on proximity to anatomical structures.

The learned scores correlated strongly with path length, with reported Spearman correlation magnitudes between approximately $0.73$ and $0.82$. Correlations with the safety metric were substantially weaker, around $0.24$ to $0.25$.

This distinction is important. The learned models captured a significant component of movement economy, but the experiment does not establish that they measure complete surgical competence or clinically meaningful safety.

## What the study establishes

FASTRL demonstrates that simulated surgical training can be formulated as a reinforcement-learning problem in which virtual agents, reward models, and value functions share a common representation of procedural performance.

The contribution is not autonomous surgery. It is a framework for moving beyond a single retrospective score:

> Evaluate each stage of a procedure, predict how the remaining trajectory may unfold, and provide a model-generated example of improved behaviour.

The current evidence remains preliminary. Only three FAST exercises were implemented, the models relied primarily on simulator-state and kinematic data, and the learned scores were not independently validated using standardized expert-assessment protocols.

External clinical validation and richer visual or multimodal representations are therefore necessary before such models can support real training decisions.

Within those limits, the work provides a concrete bridge between reinforcement learning and simulation-based surgical education: virtual agents become not only task solvers, but models of **how procedural skill develops over time**.
