import CSolutionToolCard from '../../components/CSolutionCard';
import CSectionBadge from '../../components/CSectionBadge';

import TTLScreen from '../../../public/images/TTL.png';
import eventScreen from '../../../public/images/Event.png';
import functionScreen from '../../../public/images/Function.png';

const SolutionSection = () => {
  return (
    <section id="solution" className=" text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <CSectionBadge title="Core Tools" />

        <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
          Ryvit's Powerful Solutions
        </h2>
        <p className="text-muted-foreground mt-6">
          Empowering developers with tools that streamline data management,
          function interaction, and event monitoring.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        <CSolutionToolCard
          title="Smart Contract Data Key TTL Management"
          subtitle="Automate the lifecycle of your Soroban contract data."
          description="Our system automatically tracks, monitors, and renews all data keys associated with your smart contract. Once a contract is added to our platform, we scan all of its data keys, calculate their TTL expiration windows, and either manually or automatically extend them when they approach expiration. A powerful and user-friendly dashboard allows developers to monitor all key statuses and TTL operations in real-time."
          features={[
            'Automatic tracking and renewal of data keys',
            'Real-time dashboard for key status and operations',
            'Configurable manual or automatic extension',
            'Prevents application logic breakage due to expiry',
          ]}
          imageUrl={TTLScreen}
        />

        <CSolutionToolCard
          title="Smart Contract Interaction Engine"
          subtitle="Interact with any contract function, effortlessly."
          description="By parsing the contract interface (ABI), we automatically extract all available functions, along with their inputs and outputs. These functions are presented in a UI where developers can interact with them by entering simple string inputs, without worrying about encoding or data types. Our system converts those inputs into the correct Soroban types, sends the transaction, waits for confirmation, decodes the output, and displays it back to the user. Admin-gated functions are handled via wallet authentication. Additionally, for every contract function, we generate ready-to-use TypeScript/Node.js code snippets that developers can copy into their applications — complete with automatic data conversion using our SDK called Ryvit."
          features={[
            'Automatic ABI parsing and UI generation',
            'Simple string inputs, no manual encoding',
            'Automatic type conversion and transaction handling',
            'Wallet authentication for admin functions',
            'Ready-to-use TypeScript/Node.js code snippets with Ryvit SDK',
          ]}
          imageUrl={functionScreen}
          isReversed={true}
        />

        <CSolutionToolCard
          title="Event and Log Monitoring System"
          subtitle="Guaranteed, real-time delivery of contract events."
          description="Soroban contracts emit logs during execution, which must be parsed from the network manually via RPC or Horizon. This is cumbersome, unreliable, and rate-limited. Our system flips this model: instead of developers polling the network for logs, we deliver them directly. Developers simply select the events they want to watch. We guarantee log delivery, persistence (even if the developer's server is down), and reliability — using either HTTP endpoints or push via RabbitMQ. For convenience, we also provide an Express.js-based SDK that sets up a log receiver route on the developer’s server, complete with automatic verification of origin (via digital signature) to prevent spoofed requests."
          features={[
            'Direct delivery of contract logs and events',
            'Guaranteed log delivery and persistence',
            'Support for HTTP endpoints and RabbitMQ push',
            'Express.js SDK for easy integration',
            'Automatic origin verification via digital signature',
          ]}
          imageUrl={eventScreen}
        />
      </div>
    </section>
  );
};

export default SolutionSection;
