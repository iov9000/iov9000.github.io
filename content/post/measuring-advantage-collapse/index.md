---
title: Tracing advantage collapse in RL post-training
summary: A measurement plan for locating where useful variation disappears between reward, advantage estimation, and policy updates.
date: 2026-07-23
authors:
  - Ivan Ovinnikov
tags:
  - Post-Training
  - Reinforcement Learning
  - VLA Models
  - Evaluation
math: true
draft: false
---

When reinforcement learning stalls, “the advantages collapsed” is a useful observation but an incomplete diagnosis. A small or nearly constant advantage can originate in the task signal, the sampling distribution, the baseline, normalization, or the policy update itself. Those cases can look similar on a headline learning curve and require different fixes.

The VIQ / SimpleVLA-RL instrumentation follows a simple principle:

> Follow the learning signal from evaluated behavior to optimizer step, and preserve enough structure to identify where it disappeared.

This note defines the measurements required before drawing conclusions. It is ongoing research, not a report of benchmark results.

## Start from the gradient-bearing quantity

For a sampled trajectory or action sequence $\tau$, a policy-gradient update has the schematic form

$$
\nabla_\theta J(\theta)
\approx
\mathbb E_{\tau\sim\pi_\theta}
\left[
\hat A(\tau)\,
\nabla_\theta \log \pi_\theta(\tau)
\right].
$$

A non-zero reward is therefore not enough. The update needs advantage variation that is aligned with behavioral quality and paired with policy log-probabilities that can still move.

I separate the path into four stages:

1. **Behavior and reward:** did the sampled rollouts produce meaningfully different outcomes?
2. **Credit assignment:** did the estimator preserve that difference in $\hat A$?
3. **Batch transformation:** what did centering, scaling, clipping, masking, or grouping do to the signal?
4. **Policy update:** did the surviving signal produce a measurable and behaviorally useful parameter update?

Logging only the final mean advantage erases most of this information.

## Measurements at each stage

### Reward variation

For each batch and task slice, log reward mean, variance, quantiles, unique-value count, and pairwise spread. Preserve task, prompt, environment, trajectory-length, and success-label groupings where available.

A global reward variance can look healthy while every within-task comparison is tied. If the estimator uses group-relative comparisons, the within-group distribution is the relevant one:

$$
\operatorname{Var}(R \mid g),
$$

where $g$ denotes the comparison group. The fraction of zero-variance groups is often more diagnostic than the variance pooled across unrelated tasks.

### Advantage provenance

Log raw return, baseline prediction, unnormalized advantage, normalized advantage, and post-clipping advantage separately. For every transformation, measure:

- the fraction of exactly zero and near-zero values;
- standard deviation and robust spread;
- positive/negative sign balance;
- rank correlation with the original reward;
- the fraction changed by clipping or masking;
- per-token or per-action allocation of a trajectory-level signal.

This makes it possible to distinguish “the reward had no contrast” from “the pipeline removed the contrast.”

### Baseline behavior

For a learned value function, evaluate explained variance and calibration by task slice and training age. A baseline can fail in two opposite ways: it may explain almost none of the return, or it may fit batch-specific variation so aggressively that little stable residual remains for the policy.

The useful question is not whether the value loss is small in isolation. It is whether the residual

$$
\hat A = \hat R - V_\phi
$$

retains information that predicts which sampled behavior should become more likely.

### Update effectiveness

Even a well-formed advantage does not guarantee a meaningful update. I therefore pair signal statistics with:

- policy KL before and after the update;
- entropy and action-distribution concentration;
- gradient norm before and after clipping;
- optimizer step norm relative to parameter norm;
- clipping fraction for ratio-based objectives;
- correlation between advantage magnitude and per-sample gradient contribution.

The important separation is between a small intended update and an update that is numerically suppressed.

## Connect training telemetry to behavior

Optimizer metrics are only proxies. The evaluation suite needs fixed behavioral slices that can answer whether an update improves task completion, precision, safety, and generalization to held-out conditions.

For VLA policies, aggregate success can hide mode-specific regressions. Break evaluation down by instruction family, visual variation, action horizon, initial-state difficulty, and failure category. A mitigation is convincing only if it restores a useful learning signal and improves held-out behavior without merely increasing policy movement.

## Use interventions to identify the cause

Once the telemetry separates the regimes, interventions can be tested as hypotheses:

- If reward groups are tied, change sampling, grouping, or reward resolution.
- If normalization amplifies numerical noise, make the transformation conditional on robust spread.
- If the baseline removes unstable batch-local variation, change its training target or update schedule.
- If the policy is unable to move, inspect clipping, KL control, optimizer scale, and action likelihoods.
- If metrics move but behavior does not, revisit reward alignment and evaluation coverage.

Evaluate each intervention against the same fixed slices at matched rollout and update budgets. “Advantages became larger” is not itself a success criterion.

## Completion criteria

The investigation is complete only when it can:

1. reproduce a collapse regime in a small, inspectable setting;
2. locate the stage at which useful variation is lost;
3. test a mitigation while checking both update mechanics and held-out behavior.

The output is not a dashboard of unstructured scalars. It is a causal trace of the training signal, organized around falsifiable hypotheses. At present, this note defines the measurement contract rather than a completed empirical result.
