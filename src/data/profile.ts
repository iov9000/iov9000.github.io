export const profile = {
  name: 'Ivan Ovinnikov',
  firstName: 'Ivan',
  lastName: 'Ovinnikov',
  role: 'Machine Learning Researcher',
  eyebrow: 'Reinforcement Learning · Reward Learning · Adaptive Training',
  headline: 'Sequential decision-making under distribution shift.',
  subtitle:
    'Research on reinforcement learning, learning from demonstrations, and adaptive training distributions for robust, data-efficient decision-making.',
  company: 'ANYbotics',
  location: 'Zürich, Switzerland',
  email: 'mailto:ivan.ovinnikov@gmail.com',
  summary:
    'Research on reinforcement learning, learning from demonstrations, and adaptive training distributions for robust, data-efficient decision-making.',
  about: [
    'I am a machine learning researcher working on sequential decision-making under distribution shift. My research spans reinforcement learning, imitation and inverse reinforcement learning, reward learning, curriculum design, and risk-sensitive objectives.',
    'A central theme of my work is that learning performance depends not only on the objective and model architecture, but also on the distribution of experience used for training. In interactive systems, this distribution is shaped by the current policy, the environment, the curriculum, and the failures selected for further learning. I develop methods for controlling these training and visitation distributions to improve robustness, data efficiency, and rare-event performance.',
    'My work combines methodological research with evaluation in complex simulated and physical systems, including surgical digital twins and deployed quadruped locomotion.',
  ],
  researchAreas: [
    {
      title: 'Adaptive training distributions',
      description:
        'Curriculum, sampling, and replay methods that shape the learner’s experience using capability, uncertainty, learning progress, and failure risk.',
    },
    {
      title: 'Learning from demonstrations',
      description:
        'Imitation, inverse reinforcement learning, and reward inference for problems where desired behaviour is easier to demonstrate than to specify directly.',
    },
    {
      title: 'Robust and risk-sensitive learning',
      description:
        'Objectives and evaluation methods for distribution shift, reward misspecification, and low-probability but consequential failures.',
    },
    {
      title: 'Interactive model post-training',
      description:
        'Applying reinforcement learning, reward learning, and adaptive experience generation to multimodal models and interactive agents.',
    },
  ],
  socials: [
    { label: 'Email', icon: 'mail', url: 'mailto:ivan.ovinnikov@gmail.com' },
    { label: 'GitHub', icon: 'github', url: 'https://github.com/iov9000' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/ivan-ovinnikov-0b227593/' },
    { label: 'Google Scholar', icon: 'scholar', url: 'https://scholar.google.ch/citations?user=m8UKFekAAAAJ&hl=en' },
  ],
  interests: [
    'Adaptive training distributions',
    'Learning from demonstrations',
    'Robust and risk-sensitive learning',
    'Interactive model post-training',
    'Simulation and policy evaluation',
    'Physical AI and sim-to-real learning',
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
        'Develop RL locomotion controllers in Isaac Sim and Isaac Lab for industrial quadrupeds.',
        'Build GPU-accelerated training and evaluation workflows for fast sim-to-real iteration.',
        'Led and secured a EuroHPC grant for large-scale robustness and scaling experiments.',
        'Design safety curricula targeting rare locomotion failure modes.',
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
      group: 'Machine learning',
      items: ['Reinforcement learning', 'Adaptive training', 'Curriculum design', 'Reward learning', 'Imitation learning', 'Risk-sensitive objectives'],
    },
    {
      group: 'Robotics and simulation',
      items: ['Quadruped locomotion', 'Sim-to-real', 'Isaac Sim / Isaac Lab', 'MuJoCo', 'ROS', 'Digital twins'],
    },
    {
      group: 'Engineering',
      items: ['Python', 'PyTorch', 'JAX', 'TensorFlow', 'GPU training pipelines', 'C / C++ / C# / Java'],
    },
  ],
  languages: ['English', 'German', 'French', 'Russian', 'Italian', 'Spanish', 'Swedish', 'Chinese'],
} as const;
