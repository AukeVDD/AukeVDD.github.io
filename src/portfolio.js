import UgentRacingLogo from './img/UgentRacing_logo.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'AV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Auke Vandendriessche',
  role: 'Reliability Engineer',
  description:
    'As a Master of Science in Electrical Engineering with a focus on Automation, I bring a unique blend of technical expertise and practical experience to the field of Reliability Engineering. My background in electromechanical engineering, coupled with hands-on experience in various industrial settings, has honed my skills in maintenance 4.0, root cause analysis, and lean six sigma methodologies. I am passionate about continuous improvement and leveraging cutting-edge technologies to enhance operational efficiency.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/aukevdd/',
    github: 'https://github.com/AukeVDD',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PMSM In-Wheel Motor Design',
    description:
      'Designed a Permanent Magnet Synchronous Motor (PMSM) in-wheel motor for racing applications as part of my Master\'s thesis. This project involved advanced electrical engineering concepts and practical motorsport applications.',
    stack: ['Electrical Engineering', 'Motor Design', 'Racing Technology'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'UGent Racing: Electrical Autonomous Race Car',
    description:
      'Part of the Team Electrical High Voltage, responsible for the drivetrain of an electrical autonomous race car. This project combines cutting-edge autonomous technology with high-performance electric vehicle systems.',
    stack: ['Electrical Systems', 'Autonomous Vehicles', 'Drivetrain Engineering'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: UgentRacingLogo
  },
  {
    name: 'Univision Computer Vision Implementation',
    description:
      'Worked alongside a service engineer to implement computer vision applications during an internship at Mohawk Industries Inc. This project involved integrating advanced visual recognition systems into industrial processes.',
    stack: ['Computer Vision', 'Industrial Automation', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Maintenance 4.0',
  'Root Cause Analysis',
  'Lean Six Sigma',
  'Value Stream Mapping',
  'Electrical Engineering',
  'Automation',
  'Motor Design',
  'Computer Vision',
  'Industrial Automation',
  'Python',
  'Dutch (Native)',
  'English (Good)',
  'French (Good)',
  'German (Sufficient)',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'auke.vandendriessche@gmail.com',
}

export { header, about, projects, skills, contact }
