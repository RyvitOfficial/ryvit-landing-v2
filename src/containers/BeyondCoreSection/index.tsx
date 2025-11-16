import CWrapper from '../../components/CWrapper';
import CContainer from '../../components/CContainer';
import CSectionBadge from '../../components/CSectionBadge';

const BeyondCoreSection = () => {
  return (
    <CWrapper
      id="beyond"
      className="flex flex-col items-center justify-center py-12 relative"
    >
      <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-1"></div>
      <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-1"></div>
      <CContainer>
        <div className="max-w-6xl mx-auto text-center mb-16">
          <CSectionBadge title="Infrastructure & Reliability" />

          <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
            Built on Rock-Solid Foundation
          </h2>
          <p className="text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ryvit runs on dedicated Stellar nodes and RPCs, with its own private
            indexer that processes and stores all contract data and events in
            real-time. This ensures developers get a reliable, scalable
            experience without worrying about RPC limitations or event retrieval
            issues.
          </p>
        </div>
      </CContainer>
      <CContainer>
        <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Dedicated Stellar Node
              </h3>
              <p className="text-muted-foreground text-sm">
                Direct blockchain access with no rate limits or shared resource
                bottlenecks for maximum performance.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Private RPC Server</h3>
              <p className="text-muted-foreground text-sm">
                Fast, unrestricted queries to the blockchain ensuring instant
                responses for all operations.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Indexer</h3>
              <p className="text-muted-foreground text-sm">
                Continuously synced with the blockchain, capturing every data
                entry, event, and function call instantly.
              </p>
            </div>
          </div>
        </div>
      </CContainer>

      <CContainer>
        <div className="max-w-4xl mx-auto p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Complete Data Integrity
          </h3>
          <p className="text-md text-muted-foreground">
            The indexer is fully synchronized with TTL management of data
            entries, ensuring that all information is always valid, accessible,
            and up-to-date. Developers can confidently rely on Ryvit's services
            without worrying about missing data or retrieval issues.
          </p>
        </div>
      </CContainer>
    </CWrapper>
  );
};

export default BeyondCoreSection;
