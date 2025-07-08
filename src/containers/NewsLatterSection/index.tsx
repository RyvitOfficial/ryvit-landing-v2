import { ArrowRight } from 'lucide-react';

import { CInput } from '../../components/CInput';
import CWrapper from '../../components/CWrapper';
import { CButton } from '../../components/CButton';
import CContainer from '../../components/CContainer';
import { LampContainer } from '../../components/CLamp';

const NewsLatter = () => {
  return (
    <CWrapper className="flex flex-col items-center justify-center py-12 relative">
      <CContainer>
        <LampContainer>
          <div className="flex flex-col items-center justify-center relative w-full text-center">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
              From Code to Contract <br /> Faster Than Ever
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
              Ryvit accelerates your Soroban development journey — from data
              management to interaction and event delivery — all in one powerful
              platform.
            </p>
            <CButton variant="white" className="mt-6" asChild>
              <a href="#">
                Start Building Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CButton>
          </div>
        </LampContainer>
      </CContainer>

      <CContainer className="relative z-[999999]">
        <div className="flex items-center justify-center w-full -mt-40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <h4 className="text-xl md:text-2xl font-semibold">
                Stay in the Loop
              </h4>
              <p className="text-base text-muted-foreground">
                Get updates on new features, SDKs, tutorials, and major releases
                — right in your inbox.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
              <form
                action="#"
                className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
              >
                <CInput
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                />
                <CButton
                  type="submit"
                  size="sm"
                  variant="secondary"
                  className="w-full md:w-max"
                >
                  Subscribe
                </CButton>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our <a href="#">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default NewsLatter;
