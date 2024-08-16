module.exports = {
  '*.{js,jsx,ts,tsx}': ['pnpm eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'tsc --noEmit --pretty',
  '*.{json,yaml}': ['prettier --write'],
}
