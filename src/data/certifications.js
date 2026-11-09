// ============================================================
// VERIFIED CERTIFICATIONS CONFIGURATION
// Real credentials from official issuers (AWS & NPTEL)
// ============================================================

export const certifications = [
  {
    id: 'aws-solutions-architect',
    index: '01',
    visible: true,
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issuerCode: 'AWS',
    validity: 'Valid through Apr 2026',
    issueDate: 'Apr 2023 – Apr 2026',
    badge: '/certifications/aws-certified-solutions-architect-associate.png',
    certificatePdf:
      '/certifications/AWS Certified Solutions Architect - Associate certificate (1).pdf',
    verificationUrl: 'https://aws.amazon.com/verification',
    category: 'Cloud Architecture',
    description:
      'Validated comprehensive expertise in designing highly available, cost-efficient, fault-tolerant, and scalable distributed systems on Amazon Web Services.',
    skills: [
      'Cloud Architecture',
      'VPC Networking',
      'IAM Security',
      'EC2 & S3',
      'High Availability',
      'Fault Tolerance',
    ],
    featured: true,
    accent: '#FFD43B',
  },
  {
    id: 'aws-ml-engineer',
    index: '02',
    visible: true,
    title: 'AWS Certified Machine Learning Engineer – Associate',
    issuer: 'Amazon Web Services',
    issuerCode: 'AWS',
    validity: 'Verified Credential',
    issueDate: '2024',
    badge: '/certifications/aws-certified-machine-learning-engineer-associate.png',
    certificatePdf:
      '/certifications/AWS Certified Machine Learning Engineer - Associate certificate.pdf',
    verificationUrl: 'https://aws.amazon.com/verification',
    category: 'Machine Learning',
    description:
      'Certified proficiency in developing, scaling, and operationalizing machine learning models and end-to-end data pipelines using Amazon SageMaker and MLOps tooling.',
    skills: [
      'Amazon SageMaker',
      'ML Pipelines',
      'MLOps',
      'Feature Engineering',
      'Model Deployment',
      'Model Monitoring',
    ],
    featured: true,
    accent: '#D71935',
  },
  {
    id: 'aws-ai-practitioner',
    index: '03',
    visible: true,
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    issuerCode: 'AWS',
    validity: 'Verified Credential',
    issueDate: '2024',
    badge: '/certifications/aws-certified-ai-practitioner.png',
    certificatePdf:
      '/certifications/AWS Certified AI Practitioner certificate.pdf',
    verificationUrl: 'https://aws.amazon.com/verification',
    category: 'Artificial Intelligence',
    description:
      'Demonstrated foundational and practical knowledge of Generative AI, Amazon Bedrock, Large Language Model implementations, prompt engineering, and responsible AI governance.',
    skills: [
      'Generative AI',
      'Amazon Bedrock',
      'Foundation Models',
      'Prompt Engineering',
      'AI Ethics & Safety',
    ],
    featured: true,
    accent: '#FFD43B',
  },
  {
    id: 'nptel-distributed-computing',
    index: '04',
    visible: true,
    title: 'Distributed Systems & Computing',
    issuer: 'NPTEL (IIT Kharagpur)',
    issuerCode: 'IIT / NPTEL',
    validity: 'Verified Examination',
    issueDate: 'Completed with Honors',
    badge: '/certifications/nptel-distributed-computing.jpg',
    certificatePdf: '/certifications/nptel-distributed-computing.jpg',
    verificationUrl: '',
    category: 'Computer Science Core',
    description:
      'Formal academic coursework and proctored examination covering distributed algorithms, remote procedure calls (RPC), consensus protocols, and fault-tolerant system paradigms.',
    skills: [
      'Distributed Systems',
      'Concurrency',
      'Consensus Algorithms',
      'RPC Protocols',
      'Fault Tolerance',
    ],
    featured: false,
    accent: '#D71935',
  },
  {
    id: 'nptel-iot',
    index: '05',
    visible: true,
    title: 'Introduction to Internet of Things (IoT)',
    issuer: 'NPTEL (IIT)',
    issuerCode: 'IIT / NPTEL',
    validity: 'Verified Examination',
    issueDate: 'Completed with Honors',
    badge: '/certifications/nptel-introduction-to-iot.jpg',
    certificatePdf: '/certifications/nptel-introduction-to-iot.jpg',
    verificationUrl: '',
    category: 'Internet of Things',
    description:
      'Comprehensive curriculum on IoT hardware architectures, sensor networks, actuator control, network communication protocols (MQTT, CoAP), and cloud ingestion pipelines.',
    skills: [
      'IoT Architecture',
      'Sensors & Actuators',
      'MQTT & CoAP',
      'Cloud Ingestion',
      'Embedded Systems',
    ],
    featured: false,
    accent: '#A5A5A5',
  },
];

export const visibleCertifications = certifications.filter((c) => c.visible);
