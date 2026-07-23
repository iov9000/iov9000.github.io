---
title: RL-Based Quadruped Locomotion Systems
summary: Internal deployment work on RL locomotion controllers, sim-to-real training workflows, and safety-critical evaluation for industrial quadrupeds.
date: 2024-10-01
tags:
  - Reinforcement Learning
  - Robotics
  - Sim-to-Real
  - Locomotion
  - Evaluation
links:
  - name: Public ANYmal footage
    url: https://www.anybotics.com/robot-demo/
  - name: Technical overview
    url: https://www.anybotics.com/news/superior-robot-mobility-where-ai-meets-the-real-world/
---

**Artifact type:** Internal deployment work.

I develop reinforcement-learning-based locomotion controllers in Isaac Sim and Isaac Lab for quadruped robots deployed in industrial inspection. The public links above show the robot platform and the broader learning-based locomotion approach; the description below focuses on my engineering and evaluation scope without exposing product-specific implementation details.

## The systems problem

A locomotion policy is only one component of a deployment pipeline. The practical system has to connect:

1. **Objective design:** rewards and curricula that elicit useful motion without creating shortcuts or unsafe edge-case behavior.
2. **Parallel simulation:** GPU-accelerated environment generation and rollouts for fast policy iteration.
3. **Policy optimization:** reproducible training workflows with controlled comparisons across configurations.
4. **Robustness evaluation:** scenario suites that vary terrain, contacts, commands, disturbances, and model parameters.
5. **Sim-to-real iteration:** structured analysis of failures observed on hardware and targeted reproduction in simulation.

My work spans this loop rather than treating the final training run as the artifact.

## Evaluation before deployment

Average return is not a sufficient release criterion for a physical controller. A useful evaluation protocol separates nominal capability from robustness and exposes the tail of the failure distribution.

At a high level, I organize evaluation around:

- **capability slices:** terrain and command regimes that require qualitatively different behaviors;
- **controlled shifts:** variation in dynamics, sensing, contacts, latency, and external disturbances;
- **safety events:** explicit detection of falls, unstable contacts, limit violations, and other undesirable states;
- **regression testing:** fixed scenario sets and policy-to-policy comparisons that make changes attributable;
- **failure replay:** turning hardware observations into reproducible simulation cases where possible.

This structure supports both policy selection and curriculum design: evaluation identifies weak regions, and those regions become targeted training scenarios rather than disappearing inside an aggregate score.

## Scale and reproducibility

The workflow uses parallel GPU simulation and automated evaluation to compare policies across large scenario sets. Experiment definitions, checkpoints, metrics, and rollout outputs are treated as versioned artifacts so that a promising result can be reproduced and challenged before hardware testing.

Exact environment counts, compute configurations, product thresholds, and controller details are internal. The transferable engineering principle is public: scaling rollouts matters only when the experiment design preserves causal comparisons and the evaluation suite measures the failures that matter in deployment.

## What transfers beyond robotics

The same failure mode appears in post-training: a policy can improve against its training objective while degrading on the behavior the objective was meant to represent. Robotics makes the mismatch unusually visible because evaluation includes hard physical constraints. The resulting workflow—instrument optimization, probe distribution shift, and promote policies only against a multidimensional evaluation suite—is the part of this work that generalizes most directly.
