export const profile = {
  name: 'Ivan Ovinnikov',
  firstName: 'Ivan',
  lastName: 'Ovinnikov',
  role: 'Reinforcement Learning Engineer',
  headline: 'Reinforcement learning for reliable agents',
  subtitle:
    'I develop reinforcement-learning methods for robust behavior under imperfect objectives and distribution shift—from deployed robotics to foundation-model post-training.',
  credentials: 'Reinforcement Learning Engineer, ANYbotics · ETH Zürich PhD',
  company: 'ANYbotics',
  location: 'Zürich, Switzerland',
  email: 'mailto:ivan.ovinnikov@gmail.com',
  summary:
    'Research on reinforcement learning, robust policy learning, reward and imitation learning, distribution shift, robotics, and model post-training.',
  about: [
    'I study how supervision, objectives, and training distributions determine behavior after deployment. The work connects reward and imitation learning, failure-focused robot training, and diagnostics for RL post-training.',
  ],
  researchThemes: [
    {
      title: 'Robust reinforcement learning',
      description: 'Methods and evaluation for distribution shift, rare failures, curriculum design, sim-to-real transfer, and policies deployed on physical robots.',
    },
    {
      title: 'Learning from imperfect objectives',
      description: 'Reward and imitation-learning methods that address distribution matching, misspecification, and behavioral identifiability.',
    },
    {
      title: 'RL post-training and agent learning',
      description: 'Diagnostics for credit assignment, reward and verifier structure, optimization dynamics, and multimodal or embodied agents.',
    },
  ],
  socials: [
    { label: 'Email', icon: 'mail', url: 'mailto:ivan.ovinnikov@gmail.com' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/iov9000' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ivan-ovinnikov-0b227593/' },
    { label: 'Google Scholar', icon: 'scholar', url: 'https://scholar.google.ch/citations?user=m8UKFekAAAAJ&hl=en' },
  ],
  interests: [
    'Learning objectives',
    'Training distributions',
    'Policy optimization',
    'Reward learning under distribution shift',
    'Robot learning and sim-to-real',
    'Failure-oriented evaluation',
  ],
  education: [
    {
      degree: 'PhD Computer Science (ML/AI)',
      institution: 'ETH Zürich · Department of Computer Science',
      start: '2019-02-01',
      end: '2024-06-24',
      summary: 'Reinforcement learning from demonstrations in surgical digital twins.',
      url: 'https://www.research-collection.ethz.ch/handle/20.500.11850/708755',
    },
    {
      degree: 'MSc Electrical Engineering (Intelligent Systems)',
      institution: 'ETH Zürich · Department of Electrical Engineering',
      start: '2013-09-01',
      end: '2015-09-01',
      summary: 'Machine learning, statistical learning theory, and probabilistic AI.',
      url: null,
    },
    {
      degree: 'BSc Electrical Engineering',
      institution: 'ETH Zürich · Department of Electrical Engineering',
      start: '2009-09-01',
      end: '2012-09-01',
      summary: 'Control theory, embedded systems, and electrical engineering.',
      url: null,
    },
  ],
  work: [
    {
      position: 'ML Engineer, Reinforcement Learning',
      company: 'ANYbotics AG',
      url: 'https://www.anybotics.com/',
      start: '2024-10-01',
      end: null,
      points: [
        'Develop and evaluate RL locomotion controllers for quadrupeds deployed in industrial inspection.',
        'Run end-to-end experiments across GPU simulation, policy training, robustness evaluation, and sim-to-real iteration.',
        'Design safety curricula, scenario suites, and failure analyses targeting rare locomotion failures.',
        'Led and secured a EuroHPC grant enabling up to 50,000 H100 GPU-hours for large-scale RL robustness and scaling experiments.',
      ],
    },
    {
      position: 'Research Assistant',
      company: 'ETH Zürich · Institute of Machine Learning',
      url: null,
      start: '2019-02-01',
      end: '2024-07-31',
      points: [
        'Developed inverse and imitation-learning methods for skill assessment and robust reward learning.',
        'Built reinforcement-learning benchmarks and assistance policies in surgical digital twins.',
        'Studied causal invariance and Wasserstein objectives under environment shift.',
        'Supported teaching in advanced machine learning, learning theory, and game theory.',
      ],
    },
    {
      position: 'Research Assistant',
      company: 'Disney Research',
      url: null,
      start: '2016-11-01',
      end: '2018-12-31',
      points: [
        'Extended sequence-to-sequence models with structured variational inference.',
        'Investigated hyperbolic Wasserstein autoencoders for hierarchical representations.',
      ],
    },
    {
      position: 'Electrical Engineer',
      company: 'Quartzteq GmbH',
      url: null,
      start: '2010-05-01',
      end: '2015-12-31',
      points: ['Developed energy-harvesting wireless sensor networks for monitoring electrical machines.'],
    },
  ],
  skills: [
    {
      group: 'ML / RL',
      items: ['PyTorch and JAX', 'Reinforcement learning', 'Imitation and reward learning', 'Curriculum design'],
    },
    {
      group: 'Robotics',
      items: ['Isaac Sim / Isaac Lab', 'MuJoCo', 'ROS', 'Sim-to-real experimentation'],
    },
    {
      group: 'Experiment systems',
      items: ['GPU training', 'Distributed experimentation', 'Reproducible evaluation', 'Slurm / HPC workflows'],
    },
  ],
  languages: ['Russian — native', 'English — C2', 'German — C2', 'French — C1', 'Italian — B2'],
} as const;
