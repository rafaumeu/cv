export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafael Dias Zendron",
    "jobTitle": "Desenvolvedor Full Stack & Arquiteto de Software",
    "url": "https://portfoliordz.netlify.app/",
    "image": "https://portfoliordz.netlify.app/api/og",
    "description": "Desenvolvedor Full Stack especializado em React, Node.js e TypeScript. Experiência em arquitetura de software, otimização de performance e desenvolvimento ágil.",
    "sameAs": [
      "https://linkedin.com/in/rafael-dias-zendron-528290132",
      "https://github.com/rafaumeu"
    ],
    "knowsAbout": [
      "React.js",
      "Node.js",
      "TypeScript",
      "Clean Architecture",
      "Domain-Driven Design",
      "REST APIs",
      "DevOps",
      "Desenvolvimento Ágil"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Desenvolvedor Full Stack Independente"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Rocketseat"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}; 