import CSolutionToolCard from '../../components/CSolutionCard';
import CSectionBadge from '../../components/CSectionBadge';

import TTLScreen from '../../../public/images/ttl.png';
import eventScreen from '../../../public/images/event.png';
import functionScreen from '../../../public/images/function.png';

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
          title="Smart Contract Data TTL Management"
          subtitle="Track, extend, and restore your contract’s data automatically."
          description="Ryvit keeps an eye on all persistent data entries in your contracts, monitoring their TTLs to prevent unexpected expirations. Projects can cover the storage and extension fees so users never have to pay. When your internal balance is funded and Auto-Renew is on, Ryvit automatically handles the cost and performs all extensions and restorations for you. Large batches are split into multiple transactions to stay within protocol limits."
          features={[
            'Automatically enabled for all contracts — no setup required',
            'Projects cover storage costs — users pay nothing',
            'Full TTL monitoring with remaining time visibility',
            'Manual or fully automated extend/restore (Auto-Renew)',
            'Automatic cost deduction when internal balance is funded',
            'Smart batching (40 extend / 20 restore per transaction)',
            'Email reports for successful or failed operations',
          ]}
          imageUrl={TTLScreen}
        />

        <CSolutionToolCard
          title="Smart Contract Interaction Engine"
          subtitle="Call any contract function with a clean, guided UI."
          description="Ryvit automatically detects all functions of your contract, reads their input and output types, and generates a clean interface for calling them. Developers simply fill in the fields — Ryvit converts values into proper Soroban types, builds and submits the transaction, waits for confirmation, and displays both decoded and raw outputs. For every function Ryvit also generates a ready-to-use TypeScript/Node.js snippet and can produce a complete auto-generated TypeScript project containing all contract methods."
          features={[
            'Automatic detection of all contract functions (ABI parsing)',
            'Simple input fields — no manual type encoding',
            'Automatic type conversion, transaction building, and submission',
            'Decoded + raw outputs for every function call',
            'Ready-to-use TypeScript/Node.js snippets for each function',
            'Optional full auto-generated TypeScript project containing all methods',
            'Powered by the Ryvit SDK for type encoding/decoding, transaction handling, result parsing, and event setup',
          ]}
          imageUrl={functionScreen}
          isReversed={true}
        />

        <CSolutionToolCard
          title="Event and Log Monitoring System"
          subtitle="Reliable, real-time delivery of your Soroban contract events."
          description="Ryvit continuously listens to the events emitted by your Soroban contract and delivers the ones you choose directly to your backend — without any need for polling or managing RPC infrastructure. Events are pushed instantly through HTTP or RabbitMQ with guaranteed delivery, and if your server goes offline, they are safely queued and delivered once it's back. Every event is digitally signed so you can verify its authenticity, and each one is provided in both raw form and fully decoded data for easier integration. The Ryvit SDK also includes a ready-made Express.js setup that creates a secure, verified event receiver route in just a few lines of code."
          features={[
            'Real-time push delivery of Soroban contract events (HTTP or RabbitMQ)',
            'Guaranteed delivery with automatic persistence during downtime',
            'Digital signature + public key verification for trusted event sources',
            'Express.js-ready event receiver included in the Ryvit SDK',
            'Events delivered in both raw RPC format and decoded values',
            'Dashboard visibility for event activity and delivery status',
          ]}
          imageUrl={eventScreen}
        />
      </div>
    </section>
  );
};

export default SolutionSection;
