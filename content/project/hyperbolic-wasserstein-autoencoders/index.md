---
title: Hyperbolic Wasserstein Autoencoders
summary: Generative modeling with Wasserstein autoencoders in hyperbolic latent spaces.
status: Manuscript
date: 2019-01-05
tags:
  - Generative Modeling
  - Optimal Transport
  - Hyperbolic Geometry
links:
  - name: Paper
    url: https://arxiv.org/abs/1901.01427
math: true
---

## Problem

Euclidean latent spaces encode hierarchical data inefficiently: the number of nodes in a tree grows exponentially with depth, while Euclidean volume grows polynomially. Hyperbolic space has exponential volume growth and can therefore represent branching structure with lower distortion.

## Claim

A Wasserstein autoencoder whose prior, posterior, distance, and optimization respect the Poincaré-ball geometry should provide a useful inductive bias for hierarchical data.

## Method

The model replaces the Euclidean latent space with the Poincaré ball $\mathbb B^d$ and optimizes

$$
\mathcal L(\theta,\phi)
=
\mathbb E_{x\sim p_{\mathrm{data}}}
\mathbb E_{z\sim q_\phi(z\mid x)}
\left[c\!\left(x,g_\theta(z)\right)\right]
+
\beta\operatorname{MMD}_k\!\left(q_\phi(z),p(z)\right).
$$

Here $q_\phi$ is the encoder distribution, $g_\theta$ the decoder, $p$ a hyperbolic prior, and $\operatorname{MMD}_k$ an aggregated-posterior penalty. A geodesic Laplacian kernel

$$
k(x,y)=\exp[-\lambda d_{\mathbb H}(x,y)]
$$

compares samples using the intrinsic hyperbolic distance; exponential maps, manifold sampling, and Riemannian optimization keep the relevant variables on the geometry.

## Evidence

On a synthetic noisy-tree dataset, the two-dimensional hyperbolic model achieved average embedding distortion of $0.49$, compared with $0.82$ for a Euclidean variational autoencoder and $0.73$ for t-SNE.

On citation-network link prediction, it improved over the Euclidean graph autoencoder on Cora and Citeseer with a smaller latent dimension, but did not outperform every alternative geometry. MNIST experiments were diagnostic and exposed sensitivity to dimension, prior–posterior matching, and numerical stability.

## Limitations

Geometry is an inductive bias, not a universal improvement. Benefits depend on the data having hierarchical structure, while manifold optimization and boundary behavior introduce additional numerical difficulty. The results are best read as a proof of principle.

## Paper

[Poincaré Wasserstein Autoencoder](https://arxiv.org/abs/1901.01427), Ovinnikov, Bayesian Deep Learning Workshop at NeurIPS 2018; arXiv version published in 2019.
