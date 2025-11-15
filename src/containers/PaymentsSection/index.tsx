import CWrapper from '../../components/CWrapper';
import CContainer from '../../components/CContainer';
import SectionBadge from '../../components/CSectionBadge';

import { paymentMethod } from '../../constants';

const PaymentsSection = () => {
  return (
    <CWrapper id="payments" className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-1"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-1"></div>
      <CContainer>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <SectionBadge title="Beyond the Core" />

          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            More Tools for Your Ecosystem
          </h2>
          <p className="text-muted-foreground mt-6">
            In addition to our primary tools, we're actively developing a suite
            of smaller utilities and have a robust roadmap for the future.
          </p>
        </div>
      </CContainer>
      <CContainer>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
            {paymentMethod.map((paymentMethod) => (
              <div
                key={paymentMethod.title}
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center">
                  <paymentMethod.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">
                  {paymentMethod.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {paymentMethod.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CContainer>
      <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto text-center">
        Our roadmap includes testing frameworks, security utilities, and
        integration SDKs to further enhance your development experience.
      </p>
    </CWrapper>
  );
};

export default PaymentsSection;
