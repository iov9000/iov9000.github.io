---
title: Reinforcement Learning for Robust Legged Locomotion
summary: Training and robustness evaluation for locomotion policies under terrain, sensing, and dynamics shift, using identified failure modes to define targeted evaluation and curriculum scenarios.
status: Deployed research
highlight: Physical deployment, robustness evaluation and failure analysis, and large-scale GPU simulation.
date: 2024-10-01
period: 2024–present
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

## Problem

Locomotion policies deployed in industrial inspection face terrain, sensing, contact, and dynamics conditions that differ from training. Average simulated return can conceal rare failures that dominate real-world reliability.

My work at ANYbotics covers reinforcement-learning-based locomotion controllers in Isaac Sim and Isaac Lab, GPU-accelerated experimentation, robustness evaluation, and sim-to-real iteration for quadruped robots deployed in industrial inspection.

## Claim

Robustness evaluation can identify failure modes that inform targeted regression tests and curriculum scenarios.

## Method

The workflow connects:

1. **objective and curriculum design** for useful motion without unsafe shortcuts;
2. **parallel simulation** for large policy-training and evaluation batches;
3. **controlled policy comparisons** with reproducible experiment definitions;
4. **robustness evaluation and failure analysis** across terrain, commands, disturbances, contacts, sensing, and model parameters;
5. **sim-to-real iteration** that reproduces hardware observations in simulation where possible.

Fixed capability slices and safety-event definitions keep policy changes attributable. Replaying observed failures then turns them into regression cases or curriculum scenarios rather than allowing them to disappear inside aggregate return.

## Evidence

This is deployed professional research on a physical robot platform, not a public benchmark result. The experimentation stack supports controller selection and deployment through large scenario suites, policy-to-policy comparisons, and structured analysis of hardware failures.

I also led and secured a public EuroHPC grant allocation of up to 50,000 H100 GPU-hours for RL robustness and scaling experiments.

## Limitations

Product-specific controller details, environment counts, thresholds, and deployment results are confidential. The public links document the robot platform and ANYbotics' broader learning-based locomotion approach; they should not be read as attributing every demonstrated capability to my individual work.

## Public context

See [public ANYmal footage](https://www.anybotics.com/robot-demo/) and ANYbotics' [technical overview of learning-based mobility](https://www.anybotics.com/news/superior-robot-mobility-where-ai-meets-the-real-world/).
