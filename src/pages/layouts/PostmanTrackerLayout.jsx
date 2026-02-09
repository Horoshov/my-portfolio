import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './PostmanTrackerLayout.module.css';
import PageContainer from "../../components/PageContainer"; 
import PageHeader from "../../components/PageHeader"; 

import screensImg from '../../assets/Screens.webp'; 
import mindMapSvg from '../../assets/MindMap.svg';

const workflowCards = [
  { id: 1, title: "Планирование", stat: "12%", text: "Планирование рабочего дня. На основе полученных из логистического центра данных PT формирует рабочий день сотрудника и высчитывает примерное время для решения зада сотрудника.", icon: "🤝" },
  { id: 2, title: "Приемка", stat: "3.8%", text: "Важный процесс сотрудник должен принять почту и материальные ценности для дальнейшей доставки. Используем встроенный в PT сканер. Сканер позволяет внести корреспонденцию и ее параметры в базу данных PT. PT формирует отчет и документ о приемке.", icon: "📦" },
  { id: 3, title: "Сортировка", stat: "12%", text: "Процесс зависит от конфигурации рабочего места ПО. Сотрудник раскладывает всю корреспонденцию по ячейкам. PT о корреспонденции дает инструкции следуя которым сотрудник сортирует всю корреспонденцию.", icon: "🗂️" },
  { id: 4, title: "Доставка", stat: "5.2%", text: "В первую очередь сотрудник почты должен доставить периодику счета и извещения. На основе данных приемки PT формирует электронные извещения и отправляет их адресатам. В зависимости от настройки вес сумки, приложение формирует маршрут порядок рейсов.", icon: "🏬" },
  { id: 5, title: "Комплектация", stat: "8.1%", text: "Сборка маршрутных листов и группировка посылок по зонам ответственности. PT анализирует объем отправлений и габариты груза, помогая сотруднику эффективно укомплектовать сумку или транспортное средство перед выходом на маршрут.", icon: "🎒" },
  { id: 6, title: "Маршрут", stat: "15%", text: "Построение оптимального пути с учетом пробок и приоритетности адресов через встроенные карты. PT динамически пересчитывает время прибытия к каждой точке, позволяя сократить время нахождения в пути и своевременно информировать клиентов.", icon: "🗺️" },
];

const PostmanTrackerLayout = ({ project }) => {
  const heroRef = useRef(null);
  const horizontalRef = useRef(null);
  const { scrollY } = useScroll();

  const yRange = useTransform(scrollY, [0, 800], [0, -120]);
  const scaleRange = useTransform(scrollY, [0, 800], [1, 1.21]);

  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const x = useTransform(scrollYProgress, [0, 1], ["-9%", "-127%"]);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) header.setAttribute('data-theme', 'dark');
        else header.removeAttribute('data-theme');
      },
      { threshold: 0.1, rootMargin: "-80px 0px 0px 0px" }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
      header.removeAttribute('data-theme');
    };
  }, []);

  return (
    <div className={styles.customPage}>
      
      {/* 1. HERO SECTION */}
      <PageContainer fullWidth noPadding noPaddingTop>
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroContent}>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.title}
            >
              {project.title}
            </motion.h1>
          </div>
          <motion.div style={{ y: yRange, scale: scaleRange }} className={styles.screensWrapper}>
            <img src={screensImg} alt="Screens" className={styles.mainImage} />
          </motion.div>
        </section>
      </PageContainer>

      {/* 2. INTRO SECTION (Subtitle + Grid 70/30) */}
      <PageContainer noPaddingTop>
        <section className={styles.introSection}>
          {/* Заголовок с Подзаголовком (Текст задания) */}
          <div className={styles.projectSectionHeader}>
            <PageHeader 
              title="Postman tracker" 
              subtitle="Разработка iOS-приложения"
            />
          </div>

          {/* Сетка: Погружение и Чек-лист */}
          <div className={styles.detailsGrid}>
            <div className={styles.immersionBlock}>
              <h3 className={styles.blockTitle}>Исследование</h3>
              <p className={styles.blockText}>
                Необходим трекер задач с календарём и личным помощником. Приложение включает в себя специальный инструментарий сотрудника почтовой службы. 
                Он планирует работу в течении дня, отправляет отчеты руководителю, помогает в решении служебных вопросов, имеет режим наставника для новых сотрудников. 
                Выводит успехи и достижения сотрудников.
              </p>
              {/* Второй абзац (дубль задания) */}
              <p className={styles.blockText}>
                Вы участвуете в разработке мобильного iOS-приложения для сотрудников частной почтовой службы. 
                Сотрудники разносят почту физически и помещают ее в почтовые ящики. 
                Как бы вы могли улучшить их пользовательский опыт? 
                Спроектируйте User Flow и отрисуйте экраны.
              </p>
            </div>

            <div className={styles.checklistBlock}>
              <h3 className={styles.blockTitle}>Чек-лист</h3>
              <ul className={styles.list}>
                <li>1. Трекер задач</li>
                <li>2. Календарь</li>
                <li>3. Личный помощник</li>
                <li>4. Программа обучения</li>
                <li>5. Инструменты</li>
              </ul>
            </div>
          </div>
        </section>
      </PageContainer>

      {/* 3. MINDMAP SECTION */}
      <PageContainer>
        <section className={styles.mindMapSection}>
          <div className={styles.projectSectionHeader}>
            <PageHeader title="Минимально необходимый функционал" />
          </div>
          <div className={styles.mindMapContainer}>
            <img src={mindMapSvg} alt="Mind Map" className={styles.mindMapImg} />
          </div>
        </section>
      </PageContainer>

      {/* 4. WORKFLOW SECTION */}
      <div ref={horizontalRef} className={styles.horizontalSectionWrapper}>
        <div className={styles.stickyContainer}>
          <PageContainer noPaddingTop>
            <div className={styles.projectSectionHeader}>
              <PageHeader 
                title="Процессы в workflow сотрудника" 
                subtitle="Интерфейс автоматически адаптируется под текущий этап логистического цикла курьера."
              />
            </div>
          </PageContainer>

          <div className={styles.scrollTrack}>
            <motion.div style={{ x }} className={styles.cardsRow}>
              {workflowCards.map((card) => (
                <div key={card.id} className={styles.workflowCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconCircle}>{card.icon}</div>
                    <div className={styles.statBadge}>{card.stat} <span>↑</span></div>
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDesc}>{card.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostmanTrackerLayout;