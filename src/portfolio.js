import UGentRacingLogo from './img/UgentRacing_logo.png'
import MohawkLogo from './img/Mohawk_logo.jpg'
import UGentLogo from './img/UGent_logo.png'
import UGentRacingTeam from './img/UGentRacing_Teamfoto.jpg'
import UGentRacingArtemis from './img/UGentRacingArtemis.jpg'
import UnilinLogo from './img/UnilinCorporate_Logo_Favicon.png'
import UGentMotor from './img/FullMotorSetup.png'
import UGentMotor2 from './img/MotorFlux.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aukevdd.github.io/#top',
  title: 'AV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Auke Vandendriessche',
  role: 'Reliability Engineer',
  description:
    'As a Master of Science in Electrical Engineering with a focus on Automation, I bring a unique blend of technical expertise and practical experience to the field of Reliability Engineering. My background in electromechanical engineering, coupled with hands-on experience in various industrial settings, has honed my skills in maintenance 4.0, root cause analysis, and lean six sigma methodologies. I am passionate about continuous improvement and leveraging cutting-edge technologies to enhance operational efficiency.',
  resume: 'https://drive.google.com/file/d/16HOAHrSAxqe4kgG_QHLSJu0CzCiE4KuO/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aukevdd/',
    github: 'https://github.com/AukeVDD',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Unilin: Reliability Engineering',
    description:
      'Worked on a project to improve the reliability of a conveyor belt system at Unilin. This project involved analyzing the root causes of failures and implementing solutions to prevent them from happening again.',
    details: 'Worked on a project to improve the reliability of a conveyor belt system at Unilin. This project involved analyzing the root causes of failures and implementing solutions to prevent them from happening again.',
    stack: ['Reliability Engineering', 'Root Cause Analysis', 'Lean Six Sigma'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    logo: UnilinLogo,
    images: [UnilinLogo],
    id: '#unilin'
  },
  {
    name: 'PMSM In-Wheel Motor Design',
    description:
      'Designed a Permanent Magnet Synchronous Motor (PMSM) in-wheel motor for racing applications as part of my Master\'s thesis. This project involved advanced electrical engineering concepts and practical motorsport applications.',
    details: 'Designed a Permanent Magnet Synchronous Motor (PMSM) in-wheel motor for racing applications as part of my Master\'s thesis. This project involved advanced electrical engineering concepts and practical motorsport applications.',
    stack: ['Electrical Engineering', 'Motor Design', 'Racing Technology'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    logo: UGentLogo,
    images: [UGentLogo, UGentMotor, UGentMotor2], // Add an array of image paths
    id: '#masterthesis'
  },
  {
    name: 'UGent Racing: Electrical Autonomous Race Car',
    description:
      'Part of the Team Electrical High Voltage, responsible for the drivetrain of an electrical autonomous race car. This project combines cutting-edge autonomous technology with high-performance electric vehicle systems.',
    details: 'Part of the Team Electrical High Voltage, responsible for the drivetrain of an electrical autonomous race car. This project combines cutting-edge autonomous technology with high-performance electric vehicle systems.',
    stack: ['Electrical Systems', 'Autonomous Vehicles', 'Drivetrain Engineering'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    logo: UGentRacingLogo,
    images: [UGentRacingLogo, UGentRacingTeam, UGentRacingArtemis], // Add an array of image paths
    id: '#ugentracing'
  },
  {
    name: 'Univision Computer Vision Implementation',
    description:
      'Worked alongside a service engineer to implement computer vision applications during an internship at Mohawk Industries Inc. This project involved integrating advanced visual recognition systems into industrial processes.',
    details: 'Worked alongside a service engineer to implement computer vision applications during an internship at Mohawk Industries Inc. This project involved integrating advanced visual recognition systems into industrial processes.',
    stack: ['Computer Vision', 'Industrial Automation', 'Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    logo: MohawkLogo,
    images: [MohawkLogo],
    id: '#univision'
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
