import { useIntl } from 'react-intl';

export const OgImage = () => {
  const intl = useIntl();
  
  return (
    <div className="w-[1200px] h-[630px] flex flex-col items-center justify-center bg-card p-8">
      <div className="flex items-center gap-8">
        <img 
          src="https://github.com/rafaumeu.png" 
          alt="Rafael Dias Zendron"
          className="w-32 h-32 rounded-full"
        />
        <div>
          <h1 className="text-4xl font-bold text-text mb-4">
            Rafael Dias Zendron
          </h1>
          <h2 className="text-2xl text-primary">
            {intl.formatMessage({ id: 'header.role' })}
          </h2>
        </div>
      </div>
      
      <div className="mt-8 flex gap-4">
        {['React.js', 'Node.js', 'TypeScript', 'Clean Architecture'].map((tech) => (
          <span key={tech} className="px-4 py-2 bg-primary/10 rounded-full text-primary">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}; 