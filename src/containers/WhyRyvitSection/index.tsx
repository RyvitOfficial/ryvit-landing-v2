import { whyRyvit } from '../../constants';

import CWrapper from '../../components/CWrapper';
import CContainer from '../../components/CContainer';
import CSectionBadge from '../../components/CSectionBadge';

import Icons from '../../assets/icons';

const WhyRyvitSection = () => {
  return (
    <CWrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
      <CContainer>
        <div className="max-w-md mx-auto text-start md:text-center">
          <CSectionBadge title="Why Choose Ryvit?" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Ryvit provides an unparalleled advantage for building decentralized
            applications in the Soroban ecosystem.
          </h2>
        </div>
      </CContainer>
      <CContainer>
        <div className="flex items-center justify-center mx-auto mt-8">
          <Icons.feature className="w-auto h-80" />
        </div>
      </CContainer>
      <CContainer>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8">
            {whyRyvit.map((whyRyvit) => (
              <div
                key={whyRyvit.title}
                className="flex flex-col items-start lg:items-start px-0 md:px-0"
              >
                <div className="flex items-center justify-center">
                  <whyRyvit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">{whyRyvit.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {whyRyvit.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default WhyRyvitSection;
