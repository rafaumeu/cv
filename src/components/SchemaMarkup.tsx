export const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafael Dias Zendron",
    "jobTitle": "Desenvolvedor Full Stack",
    "url": "https://portfoliordz.netlify.app/",
    "sameAs": [
      "https://linkedin.com/in/rafael-dias-zendron-528290132",
      "https://github.com/rafaumeu"
    ],
    "knowsAbout": [
      "React",
      "Node.js",
      "TypeScript",
      "Clean Architecture"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}; 