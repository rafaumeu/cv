const RepositoryCard = ({ repository }: { repository: FormattedRepository }) => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <h3>{repository.name}</h3>
        {repository.stargazers_count > 0 && (
          <span className="text-sm text-gray-600">
            ⭐ {repository.stargazers_count}
          </span>
        )}
      </div>
      <p>{repository.description}</p>
      {/* resto do card */}
    </div>
  );
}; 