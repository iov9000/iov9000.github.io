---
title: Hyperbolic Wasserstein Autoencoders
summary: ArXiv preprint on generative modeling with Wasserstein autoencoders in hyperbolic latent spaces.
date: 2020-01-01
tags:
  - Generative Modeling
  - Optimal Transport
  - Hyperbolic Geometry
links:
  - name: Paper
    url: https://arxiv.org/abs/1901.01427
---

**Artifact type:** Preprint.

# Learning Hierarchies in Hyperbolic Latent Spaces

Most generative models assume that their latent variables live in ordinary Euclidean space. This is mathematically convenient, but it is not always a neutral choice: the geometry of the latent space determines which relationships a model can represent efficiently.

Many real datasets are approximately hierarchical. Concepts form taxonomies, graph nodes form branching communities, and visual categories may contain nested subcategories. A flat latent space can encode these structures, but often only by using additional dimensions or accepting substantial geometric distortion.

The **Poincaré Wasserstein Autoencoder** explores a different premise: when the data is hierarchical, the latent space should itself have a geometry adapted to hierarchies.

## Why hyperbolic geometry?

The model uses the (d)-dimensional Poincaré ball

[
\mathbb{B}^{d}
==============

\left{
z\in\mathbb{R}^{d}:\lVert z\rVert_2<1
\right}.
]

Although the ball is represented using ordinary coordinates, distances are measured using the hyperbolic metric:

[
d_{\mathbb H}(x,y)
==================

\operatorname{arcosh}
\left(
1+
2\frac{\lVert x-y\rVert_2^2}
{(1-\lVert x\rVert_2^2)(1-\lVert y\rVert_2^2)}
\right).
]

Here, (x,y\in\mathbb B^d), and (\lVert\cdot\rVert_2) denotes the Euclidean norm.

The crucial property is not simply that the space is curved. In hyperbolic space, the available volume grows exponentially with distance from the origin. This resembles the growth of a tree: the number of nodes typically increases exponentially with depth. Consequently, a low-dimensional hyperbolic space can embed branching structures with less distortion than an equivalently sized Euclidean space.

The radial coordinate also provides a natural hierarchy. Points near the origin can represent general or high-level concepts, while increasingly specific concepts are placed closer to the boundary.

## A generative model on the Poincaré ball

The work reformulates the Wasserstein autoencoder framework using a hyperbolic latent distribution. Both prior and approximate posterior samples lie on the Poincaré ball, rather than being treated as Euclidean Gaussian vectors.

The training objective can be written schematically as

[
\mathcal L(\theta,\phi)
=======================

\mathbb E_{x\sim p_{\mathrm{data}}}
\mathbb E_{z\sim q_\phi(z\mid x)}
\left[
c!\left(x,g_\theta(z)\right)
\right]
+
\beta,
\operatorname{MMD}*k
\left(
q*\phi(z),p(z)
\right).
]

Here:

- (q_\phi(z\mid x)) is the encoder distribution;
- (g_\theta(z)) is the decoder;
- (c(x,g_\theta(z))) is the reconstruction cost;
- (q_\phi(z)) is the aggregated posterior;
- (p(z)) is a hyperbolic prior;
- (\operatorname{MMD}_k) is the maximum mean discrepancy under a kernel (k);
- (\beta>0) controls latent-distribution regularization.

A geodesic Laplacian kernel,

[
k(x,y)=\exp!\left[-\lambda d_{\mathbb H}(x,y)\right],
]

allows the prior and aggregated posterior to be compared using the intrinsic manifold distance. Riemannian optimization, exponential maps and hyperbolic sampling procedures are then used to keep the relevant variables on the manifold.

## What did it show?

On a synthetic noisy-tree dataset, the two-dimensional hyperbolic model produced an average embedding distortion of (0.49), compared with (0.82) for the Euclidean variational autoencoder and (0.73) for t-SNE. This was the clearest result: when the assumed geometry matched the data-generating structure, the representation became substantially more compact.

On citation-network link prediction, the model improved over the Euclidean graph autoencoder on Cora and Citeseer while using a smaller latent dimension, but did not outperform all alternative geometries or win consistently across datasets.

The MNIST experiments were primarily diagnostic. They illustrated how latent samples spread toward the boundary of the Poincaré disk and also exposed practical difficulties involving dimensionality, prior–posterior matching and numerical stability.

The result is therefore best understood as a proof of principle rather than a universal argument for hyperbolic neural networks. Geometry is an inductive bias: it helps when it reflects the structure of the problem and can hurt when that assumption is wrong.

The broader lesson remains relevant beyond this particular architecture. Latent spaces are not empty containers. Their topology, curvature and metric determine which relationships the model treats as simple. Selecting these structures deliberately can be as important as changing the network itself.
