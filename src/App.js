import SkillsRadar from './components/SkillsRadar';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import SimpleChatDemo from './components/SimpleChatDemo';

function App() {
  // const projects = [
  //   {
  //     title: "AI Interviewer",
  //     description:
  //       "Web app for scheduling AI interviews with candidates using LLM models and langchain.",
  //     technologies: ["Python", "Django", "React", "WebSocket", "Langchain"],
  //     image: "/images/ai-interviewer.jpg", // Add placeholder images
  //   },
  //   // Add more projects from your resume
  // ];
  const projects = [
    {
      title: 'AI Interviewer',
      description:
        'Web app for scheduling AI interviews with candidates using different LLM models and a backend AI flow using langchain.',
      technologies: [
        'Python',
        'Django',
        'React.js',
        'WebSocket',
        'WebRTC',
        'Langchain',
        'PostgreSQL',
      ],
      image: '/images/ai-interviewer.jpg',
    },
    {
      title: 'Document Parser',
      description:
        'RAG-based document parser that processes PDF, .doc, and .docx files to return structured JSON with 90% accuracy.',
      technologies: ['Python', 'PyPDF2', 'Langchain', 'Streamlit', 'RAG'],
      image: '/images/document-parser.jpg',
    },
    {
      title: 'Conversation Chatbot',
      description:
        'Document-based chatbot that retrieves relevant information using vector databases, maintains user history, and provides appropriate LLM responses.',
      technologies: ['Python', 'LLM API', 'RAG flow', 'Langchain', 'Langsmith', 'ChromaDB'],
      image: '/images/conversation-chatbot.jpg',
    },
    {
      title: '3D Skeleton Activity Recognition',
      description:
        'R&D project implementing autoencoder-based neural networks for 3D skeleton activity recognition with PCA and t-SNE for feature visualization.',
      technologies: [
        'OpenCV',
        'NumPy',
        'Pandas',
        'Matplotlib',
        'Autoencoder',
        'PCA',
        't-SNE',
        'TensorFlow',
        'Keras',
        'Custom CNN',
      ],
      image: '/images/3d-skeleton.jpg',
    },
    {
      title: 'Roof Fault Detection',
      description:
        'Django-based RESTful API for drone image analysis that utilizes AWS services to train AI models for roof damage detection and generates custom reports.',
      technologies: [
        'Django REST API',
        'Django Template',
        'OpenCV',
        'Custom PDF',
        'YOLO',
        'AWS EC2',
        'AWS S3',
        'AWS Rekognition',
        'PostgreSQL',
        'AWS RDS',
      ],
      image: '/images/roof-fault.jpg',
    },
    {
      title: 'Custom Person Detection & Tracking',
      description:
        'Person detection models using various camera angles with tracking algorithms for identification and counting. Generated heatmaps and optimized for Intel systems and edge devices.',
      technologies: [
        'DeepStream SDK',
        'YOLOv4',
        'GStreamer',
        'Jetson Nano',
        'Jetson Xavier',
        'OpenVINO',
        'TensorFlow',
      ],
      image: '/images/person-detection.jpg',
    },
    {
      title: 'ANPR Detection',
      description:
        'Engineered and trained a model to detect and recognize text on car number plates with a Streamlit demo and API for retrieval of plate data.',
      technologies: [
        'OpenCV',
        'YOLO',
        'Streamlit',
        'Flask',
        'OCR',
        'API',
        'REST Framework',
        'Django',
      ],
      image: '/images/anpr.jpg',
    },
    {
      title: 'Nurse Calling System',
      description:
        "GUI for a nurse calling system's hub monitor displaying wireless switch alerts with room and bed identifiers, programmed in Embedded C for Linux ARM deployment.",
      technologies: ['Embedded C', 'PyQt5', 'Qt', 'PyInstaller', 'Linux'],
      image: '/images/nurse-calling.jpg',
    },
    {
      title: 'Pose Estimation Annotation Tool',
      description:
        'PyQt5 application with pose estimation model for frame-by-frame image and video annotation, featuring server upload and local export capabilities.',
      technologies: ['PyQt5', 'PyQt5 Designer', 'PyInstaller', 'MediaPipe', 'Pose Estimation'],
      image: '/images/pose-estimation.jpg',
    },
    {
      title: 'Cyber Security Web App',
      description:
        'Cybersecurity website built with Django REST framework and PostgreSQL, integrating multiple tools and deployed via CI/CD pipeline.',
      technologies: [
        'Django REST',
        'React.js',
        'Docker',
        'Jenkins',
        'PostgreSQL',
        'Cron Job',
        'AWS RDS',
        'AWS EC2',
        'Bitbucket',
      ],
      image: '/images/cyber-security.jpg',
    },
    {
      title: 'Amenity R&D',
      description:
        'Various R&D projects including 3D reconstruction, drone camera control, depth imaging, object detection, and embedded programming for various hardware.',
      technologies: [
        'OpenCV',
        'Librealsense',
        'Open3D',
        'ZED SDK',
        'OpenGL',
        'YOLO',
        'Tello SDK',
        'TensorFlow Object Detection API',
        'Raspberry Pi',
        'Banana Pi',
        'ESP32',
        'ESP8266',
        'ESP01',
      ],
      image: '/images/amenity-rd.jpg',
    },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Viraj Hapaliya</h1>
          <p className="text-xl mt-4">
            Full Stack AI Engineer specializing in Machine Learning, Deep Learning, and Full Stack
            Development
          </p>
          <a
            href="mailto:virajhapaliya25@gmail.com"
            className="mt-6 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Skills Section */}
      {/* <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Skills & Expertise
          </h2>
          <div className='max-w-md mx-auto'>
            <SkillsRadar />
          </div>
        </div>
      </section> */}

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <Timeline />
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Interactive Demo</h2>
          <div className="max-w-md mx-auto">
            <SimpleChatDemo />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Lets Work Together</h2>
          <p className="mb-6">Looking for an experienced ML engineer for your project?</p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:virajhapaliya25@gmail.com"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/virajhapaliya/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
