const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/gifting_development",
      test: "postgres://postgres:postgres@localhost:5432/gifting_test",
      e2e: "postgres://postgres:postgres@localhost:5432/gifting_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
