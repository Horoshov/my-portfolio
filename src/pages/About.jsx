import React from 'react';
import { motion } from 'framer-motion';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import StatList from '../components/StatList';
import alexProfile from '../assets/alex-profile.jpg';

const SKILL_ICONS = {
  "Figma": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip_figma)">
        <path fillRule="evenodd" clipRule="evenodd" d="M32 32.4998C32 28.9101 34.9102 26 38.5 26C42.0899 26 45 28.9101 45 32.4998C45 36.0895 42.0899 38.9996 38.5 38.9996C34.9102 38.9996 32 36.0895 32 32.4998Z" fill="#1ABCFE"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19 45.4998C19 41.9101 21.9102 39 25.5 39H32V45.4998C32 49.0895 29.0899 51.9996 25.5 51.9996C21.9102 51.9996 19 49.0895 19 45.4998Z" fill="#0ACF83"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M32 13V25.9996H38.5C42.0899 25.9996 45 23.0895 45 19.4998C45 15.9101 42.0899 13 38.5 13H32Z" fill="#FF7262"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19 19.4998C19 23.0895 21.9102 25.9996 25.5 25.9996H32V13H25.5C21.9102 13 19 15.9101 19 19.4998Z" fill="#F24E1E"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M19 32.4998C19 36.0895 21.9102 38.9996 25.5 38.9996H32V26H25.5C21.9102 26 19 28.9101 19 32.4998Z" fill="#A259FF"/>
      </g>
      <defs><clipPath id="clip_figma"><rect width="64" height="64" fill="white"/></clipPath></defs>
    </svg>
  ),
  "Framer": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19 38.332H32V51.0005L19 38.332Z" fill="#0055FF"/>
      <path d="M32 25.6562H19V38.3248H45L32 25.6562Z" fill="#00AAFF"/>
      <path d="M19 13L32 25.6685H45V13H19Z" fill="#88DDFF"/>
    </svg>
  ),
  "Webflow": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4441_6863)">
      <path d="M48 0H16C7.16344 0 0 7.16344 0 16V48C0 56.8366 7.16344 64 16 64H48C56.8366 64 64 56.8366 64 48V16C64 7.16344 56.8366 0 48 0Z" fill="black"/>
      <g clipPath="url(#clip1_4441_6863)">
      <path fillRule="evenodd" clipRule="evenodd" d="M52.5 20L40.3746 44H28.9856L34.06 34.0534H33.8323C29.6459 39.5558 23.3998 43.178 14.5 44V34.191C14.5 34.191 20.1934 33.8506 23.5404 30.2877H14.5V20.0002H24.6605V28.4615L24.8885 28.4605L29.0404 20.0002H36.7245V28.4078L36.9525 28.4075L41.2602 20H52.5Z" fill="white"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_4441_6863">
      <rect width="64" height="64" fill="white"/>
      </clipPath>
      <clipPath id="clip1_4441_6863">
      <rect width="39" height="24" fill="white" transform="translate(14 20)"/>
      </clipPath>
      </defs>
    </svg>
  ),
  "Cursor": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip_cursor)">
        <path d="M47.9229 22.0645L32.5918 13.2132C32.0995 12.9289 31.492 12.9289 30.9997 13.2132L15.6694 22.0645C15.2555 22.3035 15 22.7454 15 23.224V41.0728C15 41.5507 15.2555 41.9933 15.6694 42.2323L31.0005 51.0836C31.4928 51.3679 32.1002 51.3679 32.5925 51.0836L47.9236 42.2323C48.3375 41.9933 48.593 41.5514 48.593 41.0728V23.224C48.593 22.7461 48.3375 22.3035 47.9236 22.0645H47.9229ZM46.9599 23.9395L32.1599 49.5736C32.0599 49.7463 31.7958 49.6758 31.7958 49.4757V32.6907C31.7958 32.3553 31.6165 32.0451 31.3258 31.8767L16.79 23.4846C16.6173 23.3846 16.6878 23.1204 16.8879 23.1204H46.4877C46.9081 23.1204 47.1708 23.576 46.9606 23.9402H46.9599V23.9395Z" fill="white"/>
      </g>
      <defs><clipPath id="clip_cursor"><rect width="64" height="64" fill="white"/></clipPath></defs>
    </svg>
  ),
  "Jira": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip1_jira)">
        <path d="M47.1835 15.4991H29.125C29.125 17.6612 29.9839 19.7346 31.5126 21.2634C33.0414 22.7922 35.1149 23.651 37.2769 23.651H40.6035V26.8629C40.6064 31.361 44.252 35.0067 48.7501 35.0097V17.0657C48.7501 16.2008 48.0489 15.4991 47.1835 15.4991Z" fill="#2684FF"/>
        <path d="M38.2498 24.497H20.1914C20.1942 28.9951 23.8398 32.6408 28.338 32.6438H31.6646V35.8659C31.6703 40.364 35.3184 44.0072 39.8165 44.0072V26.0639C39.8165 25.1986 39.115 24.497 38.2498 24.497Z" fill="url(#paint0_jira)"/>
        <path d="M29.3085 33.4898H11.25C11.25 37.992 14.8999 41.6417 19.4019 41.6417H22.7389V44.8534C22.7418 49.3474 26.3811 52.9915 30.8752 53V35.0565C30.8752 34.1913 30.1737 33.4898 29.3085 33.4898Z" fill="url(#paint1_jira)"/>
      </g>
      <defs>
        <linearGradient id="paint0_jira" x1="4932.28" y1="33.4794" x2="2984.14" y2="2310.17" gradientUnits="userSpaceOnUse">
          <stop offset="0.18" stopColor="#0052CC"/><stop offset="1" stopColor="#2684FF"/>
        </linearGradient>
        <linearGradient id="paint1_jira" x1="5055.36" y1="58.8746" x2="2801.86" y2="2542.03" gradientUnits="userSpaceOnUse">
          <stop offset="0.18" stopColor="#0052CC"/><stop offset="1" stopColor="#2684FF"/>
        </linearGradient>
        <clipPath id="clip1_jira"><rect width="38" height="38" fill="white" transform="translate(11 15)"/></clipPath>
      </defs>
    </svg>
  ),
  "React": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <path d="M32.5015 36.0211C34.7632 36.0211 36.5967 34.2208 36.5967 32C36.5967 29.7792 34.7632 27.9788 32.5015 27.9788C30.2398 27.9788 28.4062 29.7792 28.4062 32C28.4062 34.2208 30.2398 36.0211 32.5015 36.0211Z" fill="#0DACF1"/>
      <path d="M32.4996 41.0476C43.8083 41.0476 52.9758 36.9969 52.9758 32C52.9758 27.0031 43.8083 22.9524 32.4996 22.9524C21.1909 22.9524 12.0234 27.0031 12.0234 32C12.0234 36.9969 21.1909 41.0476 32.4996 41.0476Z" stroke="#0DACF1"/>
      <path d="M24.5207 36.5238C30.175 46.1403 38.3314 51.9106 42.7386 49.4121C47.1457 46.9137 46.1346 37.0926 40.4803 27.4762C34.8259 17.8597 26.6695 12.0894 22.2624 14.5878C17.8553 17.0863 18.8663 26.9073 24.5207 36.5238Z" stroke="#0DACF1"/>
      <path d="M24.521 27.4762C18.8667 37.0926 17.8556 46.9137 22.2628 49.4121C26.6699 51.9106 34.8263 46.1402 40.4807 36.5238C46.135 26.9073 47.1461 17.0863 42.7389 14.5878C38.3318 12.0894 30.1754 17.8597 24.521 27.4762Z" stroke="#0DACF1"/>
    </svg>
  ),
  "Miro": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M41.3415 14H36.0731L40.4633 21.7136L30.8048 14H25.5367L30.3659 23.428L20.2683 14H15L20.2683 26.0008L15 50H20.2683L30.3659 24.2864L25.5367 50H30.8048L40.4633 22.572L36.0731 50H41.3415L51 19.9993L41.3415 14Z" fill="white"/>
    </svg>
  ),
  "Git": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <path d="M32 13.1974C21.5034 13.1974 13 21.7008 13 32.1974C13 40.604 18.4392 47.7066 25.9908 50.2232C26.9408 50.389 27.2966 49.8208 27.2966 49.3216C27.2966 48.869 27.2742 47.3732 27.2742 45.7824C22.5 46.6616 21.265 44.6182 20.885 43.5508C20.6708 43.0032 19.745 41.3174 18.9384 40.8666C18.2734 40.509 17.3216 39.6316 18.9142 39.6074C20.41 39.5832 21.4792 40.984 21.835 41.5558C23.545 44.4282 26.2758 43.6216 27.3692 43.1224C27.535 41.8874 28.0342 41.0566 28.58 40.5816C24.3516 40.1066 19.935 38.4674 19.935 31.199C19.935 29.1332 20.6708 27.4232 21.8834 26.0932C21.6916 25.6182 21.0266 23.6716 22.0734 21.0582C22.0734 21.0582 23.6642 20.5608 27.2966 23.0066C28.8434 22.5774 30.4415 22.3618 32.0466 22.3658C33.6634 22.3658 35.2784 22.5782 36.7966 23.0066C40.4308 20.5366 42.0216 21.0582 42.0216 21.0582C43.0666 23.6716 42.4034 25.6182 42.2134 26.0932C43.4242 27.4232 44.16 29.1108 44.16 31.199C44.16 38.4916 39.7192 40.1066 35.4908 40.5816C36.18 41.1758 36.7742 42.3158 36.7742 44.0966C36.7742 46.6374 36.75 48.6808 36.75 49.3216C36.75 49.8208 37.1058 50.4132 38.0558 50.2232C45.5608 47.7066 51 40.5816 51 32.1974C51 21.7008 42.4984 13.1974 32 13.1974Z" fill="white"/>
    </svg>
  ),
  "Maxon": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip_maxon)">
        <path d="M48 22.998L32.0014 14L16 22.998V40.9993L31.9986 50L47.9973 40.9993V22.998H48ZM46.6524 23.6514L32.0014 31.5867L17.3476 23.6541L32.0014 15.3908L46.6524 23.6541V23.6514ZM29.56 47.1345L21.3932 42.4715V31.5893L32.0041 37.3991L42.6149 31.5893V42.4715L36.2144 46.0717L32.0041 48.4439L29.5627 47.1345H29.56Z" fill="#D32328"/>
      </g>
      <defs><clipPath id="clip_maxon"><rect width="64" height="64" fill="white"/></clipPath></defs>
    </svg>
  ),
  "Adobe Photoshop": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip_ps)">
        <path d="M48 0H16C7.16344 0 0 7.16344 0 16V48C0 56.8366 7.16344 64 16 64H48C56.8366 64 64 56.8366 64 48V16C64 7.16344 56.8366 0 48 0Z" fill="#000B1D"/>
        <path d="M22.0976 16.6849C30.0492 16.6849 34.5271 20.6123 34.5271 27.1873C34.5271 34.8655 28.4589 37.9545 22.7671 37.9545H18.917V46.2506H11.1328V16.6849H22.0976ZM18.917 23.7013V30.9382H22.3487C24.7342 30.9382 26.4083 29.9233 26.4083 27.3638C26.4083 25.0251 24.9853 23.7013 22.5162 23.7013H18.917Z" fill="#31A8FF"/>
        <path d="M36.1165 44.7945L36.1585 37.9546C38.3765 39.4991 41.4734 40.4699 43.6078 40.4699C45.0725 40.4699 45.7422 40.0286 45.7422 39.2343C45.7422 38.3518 44.8215 37.9988 43.0637 37.425C39.6737 36.366 35.9492 34.9098 35.9492 30.2323C35.9492 25.4664 39.6738 22.8188 45.0725 22.8188C47.6254 22.8188 49.718 23.2159 51.5593 24.0544L51.5175 30.5853C50.0527 29.6585 47.1651 28.8202 45.2818 28.8202C43.9007 28.8202 43.3567 29.2615 43.3567 29.9233C43.3567 30.7176 44.0263 30.9383 46.0352 31.6002C49.9273 32.8358 53.1915 34.1597 53.1915 38.9695C53.1915 43.5588 49.6343 46.6478 44.0681 46.6478C41.1385 46.6478 38.3765 46.1183 36.1165 44.7945Z" fill="#31A8FF"/>
      </g>
      <defs><clipPath id="clip_ps"><rect width="64" height="64" fill="white"/></clipPath></defs>
    </svg>
  ),
  "Adobe Illustrator": (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="16" fill="#000"/>
      <g clipPath="url(#clip_ai)">
        <path d="M48 0H16C7.16344 0 0 7.16344 0 16V48C0 56.8366 7.16344 64 16 64H48C56.8366 64 64 56.8366 64 48V16C64 7.16344 56.8366 0 48 0Z" fill="#330000"/>
        <path d="M21.4445 16H31.3598L42.4799 47.0435H33.3984L31.8695 42.3175H20.2396L18.7107 47.0435H10L21.4445 16ZM29.4601 34.9504L26.0778 24.5254L22.6954 34.9504H29.4601Z" fill="#FF9A00"/>
        <path d="M44.6953 19.4787C44.6953 17.365 46.1722 16 48.4074 16C50.6026 16 51.9997 17.4091 51.9997 19.4787C51.9997 21.5923 50.6026 23.0454 48.4074 23.0454C46.0922 23.0454 44.6953 21.6363 44.6953 19.4787ZM44.8948 24.0581H51.8799V47.0435H44.8948V24.0581Z" fill="#FF9A00"/>
      </g>
      <defs><clipPath id="clip_ai"><rect width="64" height="64" fill="white"/></clipPath></defs>
    </svg>
  ),
};

const About = () => {
  const aboutStats = [
    { value: '10', label: 'of Experience', title: 'Years' },
    { value: '80+', label: 'Completed Successfully', title: 'Projects' },
    { value: '95', label: 'Customer Satisfaction', title: 'Percent' }
  ];

  const skills = [
    { name: 'Figma', level: '95%', desc: 'Expert in collaborative interface design, creating seamless UI systems and efficient workflows.' },
    { name: 'Framer', level: '55%', desc: 'Skilled in building dynamic, high-quality websites using Framer\'s powerful no-code capabilities.' },
    { name: 'Webflow', level: '65%', desc: 'Professional low-code platform that enables designers to build high-end, responsive websites visually while generating clean, production-ready code.' },
    { name: 'React', level: '20%', desc: 'Building modern web applications with a focus on component-based architecture and performance.' },
    { name: 'Cursor', level: '25%', desc: 'Leveraging AI-powered tools to accelerate development and write cleaner, more efficient code.' },
    { name: 'Jira', level: '75%', desc: 'Proficient in Agile project management, task tracking, and cross-functional team collaboration.' },
    { name: 'Miro', level: '70%', desc: 'Expert in visual collaboration and strategic mindmapping for product design.' },
    { name: 'Git', level: '60%', desc: 'Proficient in version control and team collaboration workflows.' },
    { name: 'Maxon', level: '65%', desc: 'Expertise in Cinema 4D for 3D modeling, lighting, and creating complex motion graphics.' },
    { name: 'Adobe Photoshop', level: '90%', desc: 'Advanced photo manipulation and visual asset creation for digital products.' },
    { name: 'Adobe Illustrator', level: '85%', desc: 'Creating scalable vector illustrations and brand identity systems.' }
  ];

  const experiences = [
    {
      company: 'Vision Grid Studio',
      position: 'Developer & Designer',
      period: '2024-2025',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L8 16V32L24 40L40 32V16L24 8Z" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M24 24L8 16M24 24L40 16M24 24V40" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      company: 'BrightCore Creative',
      position: 'UI/UX Designer',
      period: '2022-2023',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="12" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M24 12V24L32 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      company: 'Nova Craft Agency',
      position: 'Visual Designer',
      period: '2020-2021',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="24" height="24" rx="4" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="24" cy="24" r="6" fill="white"/>
        </svg>
      )
    },
    {
      company: 'Mirano Creative Studio',
      position: 'Creative Director',
      period: '2017-2020',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L32 20H16L24 8Z" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M16 28L24 40L32 28L16 28Z" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      company: 'Vision Grid Studio',
      position: 'Vision Grid Studio',
      period: '2014-2016',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 24H36M24 12V36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      )
    }
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer>
        <PageHeader title="About Me" />
        
        <section className="about-intro-section">
          <div className="about-intro-grid">
            <div className="about-image-wrapper">
              <img src={alexProfile} alt="Alex Horoshov" className="about-main-image" />
            </div>
            <div className="about-text-content">
              <span className="about-date-label">[SINCE 2013]</span>
              <div className="about-description">
                <p className="description-lead">
                Привет, я Алексей.<br />
                Проектирую интерфейсы с фокусом на результат, переводя идеи в цифровые продукты сочетающие технологии и осмысленный пользовательский опыт. <br />
                10 лет в индустрии (FinTech, PropTech, BI, Retail, e-Commerce, CPQ). Исследую, упрощаю сценарии и строю дизайн-системы, которые работают.
                </p>
                <p className="description-body">
                
                </p>
                <p className="description-body">
                <b>Product:</b> Решаем задачи бизнеса от MVP до масштабирования, опираясь на метрики и Data.
                </p>
                <p className="description-body">
                <b>Tech:</b> Учитываю технические ограничения и возможности команды и стека.
                </p>
                <p className="description-body">
                <b>UI/UX:</b> Создаю системные, технически реализуемые дизайн-решения.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section">
          <div className="about-intro-grid"> 
            <PageHeader 
              title="Hard Skills" 
              subtitle="Expertise shaped through experience, precision, and thoughtful design." 
            />
            
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon-box">
                     {SKILL_ICONS[skill.name] || <span>{skill.name[0]}</span>}
                  </div>
                  
                  <div className="skill-info">
                    <div className="skill-head">
                      <h3>{skill.name}</h3>
                      <p>{skill.desc}</p>
                    </div>
                    
                    <div className="skill-progress-wrapper">
                      <div className="skill-progress-bar">
                        <div className="skill-progress-fill" style={{ width: skill.level }}></div>
                        <div className="skill-progress-pin" style={{ left: skill.level }}>
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="career-journey-section">
          <div className="about-intro-grid">
            <PageHeader 
              title="Career Journey" 
              subtitle="A progression of experiences, growth, and milestones that have shaped my path as a creative professional." 
            />
            
            <div className="career-grid">
              {experiences.map((exp, index) => (
                <div key={index} className="career-card">
                  <div className="career-icon">
                    {exp.icon}
                  </div>
                  
                  <div className="career-content">
                    <h3 className="career-company">{exp.company}</h3>
                    <h2 className="career-position">{exp.position}</h2>
                    <p className="career-period">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <StatList stats={aboutStats} />
        </section>
      </PageContainer>
    </motion.div>
  );
};

export default About;