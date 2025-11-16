interface CodeBlockProps {
  code: string;
  language?: 'bash' | 'typescript';
}

const CodeBlock = ({ code, language = 'typescript' }: CodeBlockProps) => {
  const renderCode = () => {
    if (language === 'bash') {
      return (
        <div className="font-mono text-sm">
          <span className="text-green-400">npm</span>{' '}
          <span className="text-blue-300">install</span>{' '}
          <span className="text-white">ryvit</span>
        </div>
      );
    }

    // TypeScript code rendering
    const lines = code.split('\n');
    return (
      <div className="font-mono text-sm leading-relaxed">
        {lines.map((line, i) => {
          // Comment line
          if (line.trim().startsWith('//')) {
            return (
              <div key={i} className="text-gray-500">
                {line}
              </div>
            );
          }

          // Import statement
          if (line.includes('import')) {
            return (
              <div key={i}>
                <span className="text-purple-400">import</span>{' '}
                <span className="text-yellow-300">{'{'}</span>{' '}
                <span className="text-blue-300">setupRyvit</span>
                <span className="text-gray-400">,</span>{' '}
                <span className="text-blue-300">RyvitStr</span>{' '}
                <span className="text-yellow-300">{'}'}</span>{' '}
                <span className="text-purple-400">from</span>{' '}
                <span className="text-amber-400">'ryvit'</span>
                <span className="text-gray-400">;</span>
              </div>
            );
          }

          // setupRyvit call
          if (line.includes('setupRyvit')) {
            return (
              <div key={i}>
                <span className="text-yellow-300">setupRyvit</span>
                <span className="text-gray-400">(</span>
                <span className="text-blue-300">app</span>
                <span className="text-gray-400">,</span>{' '}
                <span className="text-yellow-300">{'{'}</span>
              </div>
            );
          }

          // Object properties
          if (line.includes('publicKey') || line.includes('handler')) {
            const indent = line.match(/^\s*/)?.[0] || '';
            if (line.includes('publicKey')) {
              return (
                <div key={i}>
                  {indent}
                  <span className="text-cyan-300">publicKey</span>
                  <span className="text-gray-400">:</span>{' '}
                  <span className="text-amber-400">"YOUR_KEY"</span>
                  <span className="text-gray-400">,</span>
                </div>
              );
            }
            if (line.includes('handler')) {
              return (
                <div key={i}>
                  {indent}
                  <span className="text-cyan-300">handler</span>
                  <span className="text-gray-400">:</span>{' '}
                  <span className="text-yellow-300">{'{}'}</span>
                </div>
              );
            }
          }

          // Closing brackets
          if (line.includes('});')) {
            return (
              <div key={i}>
                <span className="text-yellow-300">{'}'}</span>
                <span className="text-gray-400">);</span>
              </div>
            );
          }

          // RyvitStr examples
          if (line.includes('RyvitStr')) {
            const parts = line.split('=>');
            return (
              <div key={i}>
                <span className="text-blue-300">RyvitStr</span>
                <span className="text-gray-400">.</span>
                <span className="text-yellow-300">
                  {line.includes('u64Sc') ? 'u64Sc' : 'u64'}
                </span>
                <span className="text-gray-400">(</span>
                <span className="text-amber-400">
                  "{parts[0].match(/"([^"]+)"/)?.[1]}"
                </span>
                <span className="text-gray-400">)</span>
                {parts[1] && (
                  <>
                    {' '}
                    <span className="text-gray-500">=&gt;</span>{' '}
                    <span className="text-gray-300">{parts[1].trim()}</span>
                  </>
                )}
              </div>
            );
          }

          // Empty lines
          if (line.trim() === '') {
            return <div key={i}>&nbsp;</div>;
          }

          return (
            <div key={i} className="text-gray-300">
              {line}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-4 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl overflow-hidden w-full shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-gray-700/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-xs text-gray-400 font-medium">
            {language === 'bash' ? '$ terminal' : 'index.ts'}
          </span>
        </div>
      </div>
      <div className="p-5 overflow-x-auto">{renderCode()}</div>
    </div>
  );
};

export default CodeBlock;
