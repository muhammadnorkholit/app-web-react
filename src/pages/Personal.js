import React from 'react'
import Layout from '../elements/Layout'
import PersonalHeader from '../parts/PersonalHeader';

export default function Personal() {
  return (
    <Layout title="personal letter">
      <div className="container">
          <PersonalHeader/>
      </div>
    </Layout>
  );
}
