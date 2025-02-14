export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafael Dias Zendron",
    "jobTitle": "Desenvolvedor Full Stack",
    "url": "https://rafaeldiaszendroncv-three-inky.vercel.app/",
    "image": "https://github.com/rafaumeu.png",
    "description": "Desenvolvedor Full Stack especializado em React, Node.js e TypeScript, com foco em arquitetura limpa e performance.",
    "knowsAbout": [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "JWT Authentication",
      "REST APIs",
      "Clean Architecture"
    ],
    "skills": [
      "Frontend Development",
      "Backend Architecture",
      "System Design",
      "API Development",
      "Database Management",
      "DevOps Practices"
    ],
    "sameAs": [
      "https://linkedin.com/in/rafael-dias-zendron-528290132",
      "https://github.com/rafaumeu"
    ],
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