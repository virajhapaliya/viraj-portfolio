import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

      {/* Timeline items */}
      <div className="space-y-16">
        {/* Software Engineer */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-right md:pr-8"
            >
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-gray-600">Amenity · Aug 2020 - Present</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:pl-8"
            >
              <ul className="space-y-1 text-gray-700">
                <li>
                  • Led and participated in client research and development projects from proof of
                  concept to deployment, focusing on scalable and reliable solutions
                </li>
                <li>
                  • Participated in code development, testing, and deployed applications on AWS,
                  improving cloud server management
                </li>
                <li>
                  • Utilized Python with Django REST API for backend services, with expertise in
                  Docker and AWS
                </li>
                <li>
                  • Promoted to team lead, managing client communication and guiding project
                  planning
                </li>
                <li>
                  • Trained junior developers, fostering a proactive approach to problem-solving
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Trainee Engineer */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:text-right md:pr-8"
            >
              <ul className="space-y-1 text-gray-700">
                <li>• Initiated professional career with focus on C# foundational skills</li>
                <li>• Developed core competencies in Python for machine learning applications</li>
                <li>
                  • Completed monthly projects using machine learning techniques with AWS exposure
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:pl-8"
            >
              <h3 className="text-xl font-bold">Trainee Engineer</h3>
              <p className="text-gray-600">Silver Touch · Jan 2020 - Jul 2020</p>
            </motion.div>
          </div>
        </div>

        {/* Bachelor of Engineering */}
        {/* <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:text-right md:pr-8'
            >
              <h3 className='text-xl font-bold'>Bachelor of Engineering</h3>
              <p className='text-gray-600'>
                V.V.P. Engineering College · Aug 2016 - Apr 2020
              </p>
              <p className='text-gray-700'>Electronics & Communication</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:pl-8'
            >
            </motion.div>
          </div>
        </div> */}

        {/* Key Projects */}
        {/* <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:text-right md:pr-8'
            >
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:pl-8'
            >
              <h3 className='text-xl font-bold'>Key Projects</h3>
              <div className='mt-2 space-y-4'>
                <div>
                  <p className='font-medium'>AI Interviewer</p>
                  <p className='text-sm text-gray-700'>
                    Web app for scheduling AI interviews with candidates using
                    LLM models and langchain
                  </p>
                </div>
                <div>
                  <p className='font-medium'>Document Parser</p>
                  <p className='text-sm text-gray-700'>
                    RAG-based document parser for PDF, .doc, and .docx with 90%
                    accuracy
                  </p>
                </div>
                <div>
                  <p className='font-medium'>Conversation Chatbot</p>
                  <p className='text-sm text-gray-700'>
                    Document-based chatbot using vector databases and LLM with
                    history tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}

        {/* Skills & Technologies */}
        <div className="relative">
          {/* <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:text-right md:pr-8'
            >
              <h3 className='text-xl font-bold'>Skills & Technologies</h3>
              <div className='mt-2 flex flex-wrap gap-2 justify-end'>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  Python
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  React.js
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  Django
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  AWS
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  Docker
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  TensorFlow
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  Langchain
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  OpenCV
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  PyTorch
                </span>
                <span className='px-2 py-1 bg-gray-200 rounded-md text-sm'>
                  NLP
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:pl-8'
            >
            </motion.div>
          </div> */}
        </div>

        {/* Certifications */}
        {/* <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:text-right md:pr-8'
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='md:pl-8'
            >
              <h3 className='text-xl font-bold'>Certifications</h3>
              <ul className='mt-2 space-y-1 text-gray-700'>
                <li>• Machine Learning by Andrew NG: Coursera</li>
                <li>• Deep Learning Specialization: deeplearning.ai</li>
                <li>• Optimize TensorFlow models for deployment: TensorFlow</li>
              </ul>
            </motion.div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;
