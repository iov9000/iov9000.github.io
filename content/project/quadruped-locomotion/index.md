---
title: Predictive Safety Curricula for Robust Legged Locomotion
summary: Predictive Safety Curricula (PSC) is an adaptive curriculum-learning method for reinforcement learning that reallocates training experience using predictions of future safety cost.
highlight: 63% lower shank-collision incidence on ANYmal-D hardware across three matched training seeds.
date: 2024-10-01
tags:
  - Reinforcement Learning
  - Curriculum Learning
  - Robotics
  - Sim-to-Real
  - Locomotion
  - Evaluation
links:
  - name: Paper
    url: https://arxiv.org/abs/2609.37070
  - name: PDF
    url: https://arxiv.org/pdf/2609.37070
  - name: Public ANYmal footage
    url: https://www.anybotics.com/robot-demo/
  - name: Technical overview
    url: https://www.anybotics.com/news/superior-robot-mobility-where-ai-meets-the-real-world/
---

PSC studies **the allocation of training experience under a fixed interaction budget**. In locomotion, this means selecting the terrain, commands, and randomized environmental conditions that generate subsequent policy rollouts. Predictions of future safety cost provide an allocation signal for addressing rare but consequential failures.

The method treats the training distribution as an adaptive component of reinforcement learning, with experience allocation changing alongside the policy.

## Main intuition

Consider two stair configurations with similar completion rates. On one, the robot walks cleanly; on the other, it occasionally strikes its lower leg against a step. The configurations have similar task performance but different contact outcomes. Additional practice with the second configuration exposes the policy to the geometry associated with these collisions.

This motivates **treating the allocation of training experience as a research variable**: which situations the robot encounters, how frequently they are sampled, and how their relevance changes during learning. PSC uses a learned safety model to concentrate experience on conditions associated with elevated predicted risk.

## Method

PSC learns a shared distributional safety critic from policy rollouts. The critic predicts the distribution of discounted future safety cost. In the rough-terrain experiments, this cost captures excessive torso tilt, configurations where the legs fold close to the base, and undesired thigh or shank contacts.

A single critic is shared across terrain contexts and randomized configurations. Safety observations from these settings jointly train a state-conditioned predictor, while temporal bootstrapping propagates observed costs to states preceding an unsafe interaction.

PSC computes an upper-tail risk statistic from the predicted distribution of discounted future safety cost. This statistic summarizes the high-cost portion of the distribution. Statewise risk predictions are averaged over each completed episode to produce a score that drives two allocation mechanisms:

1. **Context sampling:** Episode scores are aggregated by terrain-level and command context. PSC reallocates experience within the conditions admitted by the underlying capability curriculum.
2. **Event replay:** Previously encountered randomizations, such as friction or external perturbations, are stored with their episode scores and preferentially resampled in matching contexts. Replaying these settings generates fresh policy rollouts.

The sampling distribution combines risk-based priorities with uniform exploration, coverage, and time since a context was last visited. Policy learning uses the original task reward and PPO objective. The safety critic operates during training and is discarded for deployment. The [method section](https://arxiv.org/html/2609.37070v1#S2) gives the critic objective and allocation rules.

## Results

Controlled simulation experiments matched policy architecture, reward, and interaction and optimization budgets across curricula.

In the ANYmal-D benchmark, PSC achieved the highest mean success in each of six terrain and observation-noise conditions, evaluated over six training seeds. Under the clean-observation condition with terrain occupancy weighted toward harder levels (v2), failure decreased from **6.19% to 4.81%** relative to learning-progress sampling, a **22.3% relative reduction**.

<div class="psc-results">
  <section class="psc-result psc-result-primary" aria-labelledby="psc-controlled-hardware">
    <h3 id="psc-controlled-hardware">Controlled hardware evaluation</h3>
    <p class="psc-result-metric">29.0 → 10.7 crossings with shank collisions per 100 crossings</p>
    <p>On ANYmal-D, PSC reduced shank-collision incidence by <strong>63%</strong> relative to the learning-progress curriculum. Values are means across <strong>three matched training seeds, with 100 crossings per seed and method</strong>. Incidence was lower with PSC in all three seed pairs.</p>
  </section>
  <section class="psc-result" aria-labelledby="psc-production-validation">
    <h3 id="psc-production-validation">Production stair-climbing hardware evaluation</h3>
    <p class="psc-result-metric">33/50 → 0/50 trials with shank collisions</p>
    <p>Policies were evaluated over <strong>50 ascent–descent pairs per method</strong>. Shank collisions occurred in 33 baseline trials and zero PSC trials, at comparable observed mean traversal speeds.</p>
  </section>
</div>

PSC also improved mean success in the production stair-climbing training stack. The [experiments section](https://arxiv.org/html/2609.37070v1#S3) reports the evaluation protocols, per-condition results, and ablations.

## Relation to learning-progress curricula

Learning-progress curricula use changes in task performance to allocate experience. PSC uses predicted future safety cost. These signals capture different aspects of policy behavior: competence acquisition and anticipated safety outcomes.

PSC operates within the support defined by a capability curriculum. Terrain progression determines the available conditions, and predictive safety scores determine their relative sampling frequency. This separates the expansion of task difficulty from the allocation of experience within the current support.

## Discussion

The safety-cost definition and environment parameterization specify the outcomes and conditions that guide allocation. On ANYmal-D hardware, lower shank-collision incidence was accompanied by more foot scuffs than under learning-progress sampling. Foot scuffs were absent from the safety cost, illustrating how the choice of cost shapes the resulting contact behavior.

Ablations yielded higher mean success with predictive upper-tail priorities than with predictive mean or empirical tail priorities, with variation across training seeds. These results motivate further study of the relationship between safety-cost design, predictive estimation, and experience allocation. Extensions include modeling multiple safety outcomes and generating new training conditions from predicted policy weaknesses.

[Read the paper](https://arxiv.org/abs/2609.37070) · [Publication and citation](/publication/ovinnikov-2026-predictive-safety-curricula/)
