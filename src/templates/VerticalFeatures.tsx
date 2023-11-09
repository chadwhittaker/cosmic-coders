import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Software design & engineering simplified"
    description="Do you have an idea for a software product but don't know where to start? We can help with every step of the process from concept, to design, to engineering, and even maintenance."
  >
    <VerticalFeatureRow
      title="Website Applications"
      description="We can devliver robust and future proof website designs built on the most modern web frameworks with lightning fast response times. Our websites are easy to launch, update, and maintain."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="iOS & Android Apps"
      description="Have an idea for an app? We can quickly turn your idea into an app in the iOS or Android app store."
      image="/assets/images/feature3.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="SEO, Marketing, and Analytics"
      description="The job doesn't stop when your software is launched. Work with one of our marketing teams to fine tune your Seach Engine Optimization and get analytics on the performance of your software."
      image="/assets/images/feature2.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
