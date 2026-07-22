---
# Display name
title: Ivan Ovinnikov

# Name pronunciation (optional)
# <!--name_pronunciation: Chien Shiung Wu-->

# Full name (for SEO)
first_name: Ivan    
last_name: Ovinnikov

# Status emoji
status:
  <!--icon: ☕️-->

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: Applied Scientist · RL, Simulation & Physical AI

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: ANYbotics
    url: https://www.anybotics.com/
  - name: PhD, ETH Zürich
    url: https://ethz.ch/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:ivan.ovinnikov@gmail.com'
    label: E-mail Me
  - icon: brands/x
    url: https://x.com/iov9000
  - icon: brands/github
    url: https://github.com/iov9000
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/ivan-ovinnikov-0b227593/
  - icon: academicons/google-scholar
    url: https://scholar.google.ch/citations?user=m8UKFekAAAAJ&hl=en
#  - icon: brands/instagram
#    url: https://www.instagram.com/iov9000
#  - icon: academicons/orcid
#    url: https://orcid.org/

interests:
  - Reinforcement learning for robotics
  - Imitation learning and reward learning
  - Physical AI and sim-to-real locomotion
  - Scalable simulation and policy evaluation
  - Safety-critical evaluation and robustness
  - Generative modeling and optimal transport

education:
  - area: PhD Computer Science (ML/AI)
    institution: ETH Zürich Department of Computer Science
    date_start: 2019-02-01
    date_end: 2024-06-24
    summary: |
      Thesis on reinforcement learning from demonstrations in (surgical) digital twins. Supervised by Prof. Joachim Buhmann and Prof. Andreas Krause.
    button:
      text: 'Read Thesis'
      url: 'https://www.research-collection.ethz.ch/handle/20.500.11850/708755'

  - area: MSc Electrical Engineering (Intelligent Systems)
    institution: ETH Zürich Department of Electrical Engineering
    date_start: 2013-09-01
    date_end: 2015-09-01
    summary: |
      GPA: 5.45/6.0,

      Courses included:
      - Machine Learning 
      - Statistical Learning Theory
      - Probabilistic Artificial Intelligence

  - area: BSc Electrical Engineering
    institution: ETH Zürich Department of Electrical Engineering
    date_start: 2009-09-01
    date_end: 2012-09-01
    summary: |
      GPA: 5.1/6.0
      
      Courses included:
      - Control Theory
      - Analog Devices 
      - Quantum Electronics
work:
  - position: ML Engineer, Reinforcement Learning
    company_name: ANYbotics AG
    company_url: 'https://www.anybotics.com/'
    company_logo: ''
    date_start: 2024-10-01
    date_end: ''
    summary: |2-
      - Developed RL locomotion controllers in IsaacSim/IsaacLab for quadrupeds deployed in industrial inspection.
      - Built and improved GPU-accelerated training and evaluation workflows for fast sim-to-real iteration.
      - Led and secured a EuroHPC grant enabling large-scale RL robustness and scaling experiments.
      - Designed safety curriculum learning techniques for rare failure modes.

  - position: Research Assistant
    company_name: ETH Zürich, ISE Group, Institute of Machine Learning
    company_url: ''
    company_logo: ''
    date_start: 2019-02-01
    date_end: 2024-07-31
    summary: |2-
      - Proposed and implemented inverse reinforcement learning methods for surgical trainee evaluation and skill assessment in simulation-based training.
      - Developed reward-learning methods for robust objectives from diverse demonstrations under dynamics and environment shift.
      - Studied reward generalization, imitation learning, and Wasserstein/distributional objectives for learning from demonstrations.
      - Published work on RL benchmarks, causally invariant reward learning, and imitation learning with sliced Wasserstein distances.
      - Supported teaching in Advanced Machine Learning, Statistical Learning Theory, and Algorithmic Game Theory.

  - position: Research Assistant
    company_name: Disney Research 
    company_url: ''
    company_logo: ''
    date_start: 2016-11-01
    date_end: 2018-12-31
    summary: |2-
      - Extended sequence-to-sequence NLP models with structured variational inference for latent structure and uncertainty modeling.
      - Investigated hyperbolic geometry for Wasserstein autoencoders to learn hierarchical representations for large-scale NLP.

  - position: Electrical Engineer 
    company_name: Quartzteq GmbH
    company_url: ''
    company_logo: ''
    date_start: 2010-05-01
    date_end: 2015-12-31
    summary: |
      Responsibilities include:
      - Development of an energy-harvesting wireless sensor network for health monitoring of large electrical machines

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Machine Learning
    items:
      - name: Reinforcement learning
        description: ''
        percent: 100
        icon: chart-bar
      - name: Imitation and reward learning
        description: ''
        percent: 100
        icon: chart-bar
      - name: Generative modeling and optimal transport
        description: ''
        percent: 90
        icon: chart-bar
      - name: Distribution shift and evaluation
        description: ''
        percent: 90
        icon: chart-bar
      - name: Curriculum design
        description: ''
        percent: 90
        icon: chart-bar
  - name: Robotics / Simulation
    items:
      - name: Quadruped locomotion
        description: ''
        percent: 100
        icon: cog-6-tooth
      - name: Sim-to-real training
        description: ''
        percent: 90
        icon: cog-6-tooth
      - name: Digital twins
        description: ''
        percent: 90
        icon: cube-transparent
      - name: IsaacSim / IsaacLab, MuJoCo, ROS, Unity ML-Agents
        description: ''
        percent: 80
        icon: circle-stack
  - name: Engineering
    items:
      - name: Python, PyTorch, JAX, TensorFlow
        description: ''
        percent: 95
        icon: code-bracket
      - name: GPU-accelerated training workflows
        description: ''
        percent: 85
        icon: circle-stack
      - name: Experiment tracking, orchestration, and evaluation pipelines
        description: ''
        percent: 90
        icon: circle-stack
      - name: C, C++, C#, Java
        description: ''
        percent: 70
        icon: code-bracket

languages:
  - name: English
    percent: 100
  - name: German
    percent: 100
  - name: French
    percent: 100
  - name: Russian
    percent: 100
  - name: Italian
    percent: 80
  - name: Spanish
    percent: 50
  - name: Swedish
    percent: 40
  - name: Chinese
    percent: 20

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: Neural Networks and Deep Learning
    url: https://www.coursera.org/learn/neural-networks-deep-learning
    date: '2023-11-25'
    awarder: Coursera
    icon: coursera
    summary: |
      I studied the foundational concept of neural networks and deep learning. By the end, I was familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.
  - title: Blockchain Fundamentals
    url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals
    date: '2023-07-01'
    awarder: edX
    icon: edx
    summary: |
      Learned:
      - Synthesize your own blockchain solutions
      - Gain an in-depth understanding of the specific mechanics of Bitcoin
      - Understand Bitcoin’s real-life applications and learn how to attack and destroy Bitcoin, Ethereum, smart contracts and Dapps, and alternatives to Bitcoin’s Proof-of-Work consensus algorithm
  - title: 'Object-Oriented Programming in R'
    url: https://www.datacamp.com/courses/object-oriented-programming-with-s3-and-r6-in-r
    certificate_url: https://www.datacamp.com
    date: '2023-01-21'
    awarder: datacamp
    icon: datacamp
    summary: |
      Object-oriented programming (OOP) lets you specify relationships between functions and the objects that they can act on, helping you manage complexity in your code. This is an intermediate level course, providing an introduction to OOP, using the S3 and R6 systems. S3 is a great day-to-day R programming tool that simplifies some of the functions that you write. R6 is especially useful for industry-specific analyses, working with web APIs, and building GUIs.
---

## About Me

Research-grade applied ML for embodied agents.

I am an applied scientist and ML researcher working on reinforcement learning, reward learning, and physical AI. My work connects academic research in inverse RL, imitation learning, and robust objectives with deployed robot locomotion, scalable simulation workflows, and safety-critical policy evaluation.

I completed my PhD at ETH Zürich on reinforcement learning from demonstrations in digital twin simulations and now work on RL locomotion systems for quadruped robots at ANYbotics.
