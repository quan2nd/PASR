import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Đây là gì',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Đây là một phương pháp trading trong forex và những thị trường tương tự. Tôi đã vô tình đọc được phương pháp này trên diễn đàn forexfactory và tôi thấy nó phù hợp với phong cách trading của tôi, nên tôi sẽ dịch lại sang tiếng Việt các kiến thức và những chia sẻ của tác giả về phương pháp này cũng như những kiến thức liên quan đến trading forex
      </>
    ),
  },
  {
    title: 'Lịch sử',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Phương pháp này đã được tác giả chia sẻ trên diễn đàn forexfactory từ 27/2/2009 với tên là <strong>Strat's PASR Long Term, Stress Free Trading</strong>

      </>
    ),
  },
  {
    title: 'Nhiệm vụ',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Nhiệm vụ của tôi là <strong>TRADERS HELPING TRADERS</strong>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
