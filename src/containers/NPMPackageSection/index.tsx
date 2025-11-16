import CWrapper from '../../components/CWrapper';
import CContainer from '../../components/CContainer';
import CSectionBadge from '../../components/CSectionBadge';
import CodeBlock from '../../components/CodeBlock';

const NPMPackageSection = () => {
  return (
    <CWrapper
      id="npm-package"
      className="flex flex-col items-center justify-center py-12 relative"
    >
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-1"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-1"></div>

      <CContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <CSectionBadge title="NPM Package" />

          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Integrate Ryvit in Minutes
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Install our SDK and start receiving events, converting types, and
            calling contract functions with minimal setup.
          </p>
        </div>
      </CContainer>

      <CContainer>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Installation</h3>
              <CodeBlock code="npm install ryvit" language="bash" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Setup Event Handler
              </h3>
              <CodeBlock
                code={`import { setupRyvit, RyvitStr } from 'ryvit';

setupRyvit(app, {
  publicKey: "YOUR_KEY",
  handler: {}
});

// Type Conversion Helpers
RyvitStr.u64("32394456") // => 32394456n
RyvitStr.u64Sc("32394456") // => scvU64({_value: 32394456n})`}
                language="typescript"
              />
            </div>
          </div>

          <div className="rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              What's Included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">
                      Automatic Type Decoding
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Seamless conversion between Node.js and Rust types
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">
                      Transaction Management
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ready-to-use tools for building and sending transactions
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">
                      Event Delivery Setup
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Configure HTTP or RabbitMQ endpoints in one line
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-start gap-3">
                  <div>
                    <h4 className="font-medium text-white mb-1">
                      Contract Function Helpers
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Invoke contract functions directly from your code
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-center text-muted-foreground">
                This package complements Ryvit's core services, making them
                faster and more convenient to use—without replacing them.
              </p>
            </div>
          </div>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default NPMPackageSection;
