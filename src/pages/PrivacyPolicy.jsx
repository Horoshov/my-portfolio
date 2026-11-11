import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import PageHeader from '../components/PageHeader';
import { privacyPolicyData } from '../data/privacy';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = `${privacyPolicyData.title} — Horoshov`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="privacy-policy-page"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      style={{ paddingBottom: '100px' }}
    >
      <PageContainer>
        <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Link to="/" className="pd-back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 500, fontSize: '15px' }}>
            ← На главную
          </Link>
        </div>

        <PageHeader title={privacyPolicyData.title} subtitle={privacyPolicyData.subtitle} />

        <div style={{ fontSize: '14px', color: 'var(--gray-text)', marginBottom: '40px' }}>
          Дата последнего обновления: {privacyPolicyData.lastUpdated}
        </div>

        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {privacyPolicyData.sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <h2 style={{ fontSize: '20px', fontWeight: '600', letterSpacing: '-0.01em', color: 'var(--text-color)' }}>
                {section.title}
              </h2>
              <div 
                style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--gray-text)', wordBreak: 'break-word' }}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </motion.section>
          ))}
        </div>

        <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(122, 122, 122, 0.2)' }}>
          <Link to="/" className="pd-back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600, fontSize: '16px' }}>
            ← На главную
          </Link>
        </div>
      </PageContainer>
    </motion.div>
  );
};

export default PrivacyPolicy;
