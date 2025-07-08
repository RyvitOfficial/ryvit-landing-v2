import CWrapper from '../../components/CWrapper';
import CContainer from '../../components/CContainer';
import SectionBadge from '../../components/CSectionBadge';

import { perks } from '../../constants';

const ProblemSection = () => {
  return (
    <CWrapper className="flex flex-col items-center justify-center py-12 relative">
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-1"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-1"></div>
      {/* how it works */}
      <CContainer>
        <div className="max-w-md mx-auto text-start md:text-center">
          <SectionBadge title="How Ryvit Works" />
          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Three Core Tools for Soroban Developers
          </h2>

          <p className="text-muted-foreground mt-6">
            Ryvit provides TTL management, contract interaction, and event
            monitoring — all in one platform.
          </p>
        </div>
      </CContainer>
      <CContainer>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 first:border-l-2 lg:first:border-none first:border-gray-900">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4"
              >
                <div className="flex items-center justify-center">
                  <perk.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium mt-4">{perk.title}</h3>
                <p className="text-muted-foreground mt-2 text-start lg:text-start">
                  {perk.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default ProblemSection;
